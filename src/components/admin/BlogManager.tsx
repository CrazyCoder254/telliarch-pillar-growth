import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Loader2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  author: string | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
}

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").slice(0, 80);

const BlogManager = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image_url: "",
    author: "",
    is_published: true,
  });

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Error loading posts", description: error.message, variant: "destructive" });
    } else {
      setPosts(data || []);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const reset = () => {
    setEditingId(null);
    setForm({ title: "", slug: "", excerpt: "", content: "", cover_image_url: "", author: "", is_published: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      toast({ title: "Title and content are required", variant: "destructive" });
      return;
    }
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    const slug = form.slug.trim() || slugify(form.title);
    const payload = {
      title: form.title.trim(),
      slug,
      excerpt: form.excerpt.trim() || null,
      content: form.content,
      cover_image_url: form.cover_image_url.trim() || null,
      author: form.author.trim() || null,
      is_published: form.is_published,
      published_at: form.is_published ? new Date().toISOString() : null,
      created_by: user?.id,
    };

    const { error } = editingId
      ? await supabase.from("blog_posts").update(payload).eq("id", editingId)
      : await supabase.from("blog_posts").insert([payload]);

    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: editingId ? "Post updated" : "Post created" });
      reset();
      fetchPosts();
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content: post.content,
      cover_image_url: post.cover_image_url || "",
      author: post.author || "",
      is_published: post.is_published,
    });
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Error deleting", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Post deleted" });
      fetchPosts();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
        <CardHeader>
          <CardTitle className="text-base">{editingId ? "Edit Post" : "New Blog Post"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <Label htmlFor="b-title" className="text-xs">Title</Label>
              <Input id="b-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="b-slug" className="text-xs">Slug (optional)</Label>
              <Input id="b-slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="auto-generated" />
            </div>
            <div>
              <Label htmlFor="b-author" className="text-xs">Author</Label>
              <Input id="b-author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="b-cover" className="text-xs">Cover Image URL</Label>
              <Input id="b-cover" value={form.cover_image_url} onChange={(e) => setForm({ ...form, cover_image_url: e.target.value })} placeholder="https://..." />
            </div>
            <div>
              <Label htmlFor="b-excerpt" className="text-xs">Excerpt</Label>
              <Textarea id="b-excerpt" rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="b-content" className="text-xs">Content</Label>
              <Textarea id="b-content" rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required />
            </div>
            <div className="flex items-center gap-2">
              <Switch id="b-pub" checked={form.is_published} onCheckedChange={(v) => setForm({ ...form, is_published: v })} />
              <Label htmlFor="b-pub" className="text-xs">Published</Label>
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={loading} className="flex-1" size="sm">
                {loading && <Loader2 className="mr-1 h-3 w-3 animate-spin" />}
                {editingId ? "Update" : "Create"}
              </Button>
              {editingId && (
                <Button type="button" variant="outline" size="sm" onClick={reset}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="text-base font-bold">Existing Posts ({posts.length})</h3>
        {posts.map((post) => (
          <Card key={post.id} className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold truncate">{post.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {post.is_published ? "Published" : "Draft"} · /{post.slug}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => handleEdit(post)}>
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive" onClick={() => handleDelete(post.id)}>
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {posts.length === 0 && (
          <p className="text-xs text-muted-foreground">No posts yet. Create your first one.</p>
        )}
      </div>
    </div>
  );
};

export default BlogManager;
