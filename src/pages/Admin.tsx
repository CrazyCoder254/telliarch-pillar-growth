import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAdmin } from "@/hooks/useAdmin";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Image, Users, BarChart3, Loader2 } from "lucide-react";
import { jobSchema, galleryImageSchema, validateImageFile } from "@/lib/validations";
import { z } from "zod";

const Admin = () => {
  const navigate = useNavigate();
  const { isAdmin, loading } = useAdmin();
  const { toast } = useToast();
  const [jobs, setJobs] = useState<any[]>([]);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState({ totalUsers: 0, totalJobs: 0, totalImages: 0 });

  // Job form state
  const [jobForm, setJobForm] = useState({
    title: "",
    type: "",
    location: "",
    description: ""
  });

  // Gallery form state
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    description: "",
    file: null as File | null
  });

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/admin/auth");
    }
  }, [isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchJobs();
      fetchGalleryImages();
      fetchUsers();
      fetchAnalytics();
    }
  }, [isAdmin]);

  const fetchJobs = async () => {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: "Error fetching jobs", description: error.message, variant: "destructive" });
    } else {
      setJobs(data || []);
    }
  };

  const fetchGalleryImages = async () => {
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: "Error fetching gallery images", description: error.message, variant: "destructive" });
    } else {
      setGalleryImages(data || []);
    }
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: "Error fetching users", description: error.message, variant: "destructive" });
    } else {
      setUsers(data || []);
    }
  };

  const fetchAnalytics = async () => {
    const [usersCount, jobsCount, imagesCount] = await Promise.all([
      supabase.from('profiles').select('*', { count: 'exact', head: true }),
      supabase.from('jobs').select('*', { count: 'exact', head: true }),
      supabase.from('gallery_images').select('*', { count: 'exact', head: true })
    ]);

    setAnalytics({
      totalUsers: usersCount.count || 0,
      totalJobs: jobsCount.count || 0,
      totalImages: imagesCount.count || 0
    });
  };

  const handleCreateJob = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      jobSchema.parse(jobForm);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({ 
          title: "Validation Error", 
          description: error.errors[0].message, 
          variant: "destructive" 
        });
        return;
      }
    }
    
    const { data: { user } } = await supabase.auth.getUser();
    
    const { error } = await supabase
      .from('jobs')
      .insert([{
        ...jobForm,
        created_by: user?.id
      }]);

    if (error) {
      toast({ title: "Error creating job", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Job created successfully" });
      setJobForm({ title: "", type: "", location: "", description: "" });
      fetchJobs();
      fetchAnalytics();
    }
  };

  const handleDeleteJob = async (id: string) => {
    const { error } = await supabase
      .from('jobs')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: "Error deleting job", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Job deleted successfully" });
      fetchJobs();
      fetchAnalytics();
    }
  };

  const handleUploadImage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!galleryForm.file) {
      toast({ title: "Error", description: "Please select an image", variant: "destructive" });
      return;
    }

    // Validate file
    const fileValidation = validateImageFile(galleryForm.file);
    if (!fileValidation.valid) {
      toast({ title: "Invalid File", description: fileValidation.error, variant: "destructive" });
      return;
    }

    // Validate form data
    try {
      galleryImageSchema.parse({
        title: galleryForm.title,
        description: galleryForm.description || undefined,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({ 
          title: "Validation Error", 
          description: error.errors[0].message, 
          variant: "destructive" 
        });
        return;
      }
    }

    const { data: { user } } = await supabase.auth.getUser();
    const fileExt = galleryForm.file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    const filePath = `${fileName}`;

    // Upload image to storage
    const { error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(filePath, galleryForm.file);

    if (uploadError) {
      toast({ title: "Error uploading image", description: uploadError.message, variant: "destructive" });
      return;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('gallery')
      .getPublicUrl(filePath);

    // Insert record in database
    const { error: dbError } = await supabase
      .from('gallery_images')
      .insert([{
        title: galleryForm.title,
        description: galleryForm.description,
        image_url: publicUrl,
        uploaded_by: user?.id
      }]);

    if (dbError) {
      toast({ title: "Error saving image", description: dbError.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Image uploaded successfully" });
      setGalleryForm({ title: "", description: "", file: null });
      fetchGalleryImages();
      fetchAnalytics();
    }
  };

  const handleDeleteImage = async (id: string, imageUrl: string) => {
    // Extract file path from URL
    const urlParts = imageUrl.split('/');
    const filePath = urlParts[urlParts.length - 1];

    // Delete from storage
    const { error: storageError } = await supabase.storage
      .from('gallery')
      .remove([filePath]);

    if (storageError) {
      toast({ title: "Error deleting image file", description: storageError.message, variant: "destructive" });
    }

    // Delete from database
    const { error: dbError } = await supabase
      .from('gallery_images')
      .delete()
      .eq('id', id);

    if (dbError) {
      toast({ title: "Error deleting image record", description: dbError.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Image deleted successfully" });
      fetchGalleryImages();
      fetchAnalytics();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Admin Dashboard</h1>
          <p className="text-xl text-white/90">Manage your site content and view analytics</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="analytics" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="analytics">
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="jobs">
                <Briefcase className="mr-2 h-4 w-4" />
                Jobs
              </TabsTrigger>
              <TabsTrigger value="gallery">
                <Image className="mr-2 h-4 w-4" />
                Gallery
              </TabsTrigger>
              <TabsTrigger value="users">
                <Users className="mr-2 h-4 w-4" />
                Users
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Total Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">{analytics.totalUsers}</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Total Jobs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">{analytics.totalJobs}</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Image className="h-5 w-5 text-primary" />
                      Gallery Images
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">{analytics.totalImages}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="jobs">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                  <CardHeader>
                    <CardTitle>Create New Job</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCreateJob} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Job Title</Label>
                        <Input
                          id="title"
                          value={jobForm.title}
                          onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">Job Type</Label>
                        <Input
                          id="type"
                          value={jobForm.type}
                          onChange={(e) => setJobForm({ ...jobForm, type: e.target.value })}
                          placeholder="e.g., Full-time, Part-time"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={jobForm.location}
                          onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={jobForm.description}
                          onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                          rows={4}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">Create Job</Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Existing Jobs</h3>
                  {jobs.map((job) => (
                    <Card key={job.id} className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-2">{job.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{job.type} - {job.location}</p>
                        <p className="text-sm mb-4">{job.description}</p>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteJob(job.id)}
                        >
                          Delete
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                  <CardHeader>
                    <CardTitle>Upload New Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUploadImage} className="space-y-4">
                      <div>
                        <Label htmlFor="image-title">Title</Label>
                        <Input
                          id="image-title"
                          value={galleryForm.title}
                          onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="image-description">Description</Label>
                        <Textarea
                          id="image-description"
                          value={galleryForm.description}
                          onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="image-file">Image File</Label>
                        <Input
                          id="image-file"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setGalleryForm({ ...galleryForm, file: e.target.files?.[0] || null })}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">Upload Image</Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Gallery Images</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {galleryImages.map((image) => (
                      <Card key={image.id} className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                        <CardContent className="p-4">
                          <img
                            src={image.image_url}
                            alt={image.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <h4 className="text-lg font-bold mb-2">{image.title}</h4>
                          {image.description && (
                            <p className="text-sm text-muted-foreground mb-4">{image.description}</p>
                          )}
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteImage(image.id, image.image_url)}
                          >
                            Delete
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                <CardHeader>
                  <CardTitle>Registered Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div>
                          <p className="font-semibold">{user.full_name || "No name"}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-xs text-muted-foreground">
                            Joined: {new Date(user.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
