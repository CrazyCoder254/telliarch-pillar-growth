import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, PenLine, Loader2, Trash2 } from "lucide-react";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import type { User } from "@supabase/supabase-js";

interface CommunityPost {
  id: string;
  user_id: string;
  author_name: string | null;
  title: string;
  content: string;
  created_at: string;
}

const newsItems = [
  {
    tag: "Awareness",
    date: "June 2026",
    title: "June — Men's Mental Health Awareness Month",
    body:
      "This June, Telliarch joins the global movement to break the silence around men's mental health. Men are statistically less likely to seek help when struggling — yet just as deserving of compassion, listening and support. Throughout the month we are sharing reflections, free check-in resources and confidential counselling slots for men of every age. If you or someone you love is going through a hard season, reach out — you are not alone.",
  },
  {
    tag: "Community",
    date: "Ongoing",
    title: "Free Wellness Check-Ins Every Friday",
    body:
      "Every Friday afternoon, our counsellors offer free 20-minute wellness check-ins for individuals and families. Book a slot through the Contact section — confidential and judgment-free.",
  },
  {
    tag: "Workplace",
    date: "2026",
    title: "Corporate Wellbeing Workshops",
    body:
      "We are rolling out our Workplace Wellbeing Series for HR teams and leaders — focused on burnout prevention, psychological safety and sustainable performance.",
  },
];

const Resources = () => {
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ title: "", content: "", author_name: "" });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setUser(s?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("community_posts")
      .select("id, user_id, author_name, title, content, created_at")
      .eq("is_published", true)
      .order("created_at", { ascending: false });
    setPosts(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (!form.title.trim() || !form.content.trim()) {
      toast({ title: "Title and content are required", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("community_posts").insert([{
      user_id: user.id,
      title: form.title.trim(),
      content: form.content.trim(),
      author_name: form.author_name.trim() || user.email?.split("@")[0] || "Anonymous",
      is_published: true,
    }]);
    setSubmitting(false);
    if (error) {
      toast({ title: "Could not publish", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Published", description: "Your post is now visible to everyone." });
      setForm({ title: "", content: "", author_name: "" });
      fetchPosts();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("community_posts").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: "Post deleted" }); fetchPosts(); }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">News & Community Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The latest from Telliarch and stories from our community. Sign in to share your own reflections on mental wellness and growth.
            </p>
          </motion.div>
        </section>

        {/* News */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((n, i) => (
              <motion.article
                key={n.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50 hover:shadow-glow transition-smooth"
              >
                <div className="flex items-center gap-2 text-xs mb-3">
                  <span className="px-2 py-1 rounded-full bg-secondary/20 text-secondary font-semibold">{n.tag}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Community Blog */}
        <section className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Community Blog</h2>
            {!user && (
              <Link to="/auth">
                <Button variant="hero" size="sm"><PenLine className="mr-2 h-4 w-4" /> Sign in to write</Button>
              </Link>
            )}
          </div>

          {user && (
            <Card className="mb-10 shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><PenLine className="h-5 w-5 text-secondary" /> Write a post</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <Label htmlFor="author">Display name (optional)</Label>
                    <Input id="author" value={form.author_name} onChange={(e) => setForm({ ...form, author_name: e.target.value })} placeholder="How should we credit you?" />
                  </div>
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="content">Your story</Label>
                    <Textarea id="content" rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required />
                  </div>
                  <Button type="submit" disabled={submitting} variant="hero">
                    {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Publish
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {loading ? (
            <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-secondary" /></div>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No community posts yet. Be the first to share.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                    {user?.id === p.user_id && (
                      <button onClick={() => handleDelete(p.id)} className="text-destructive/70 hover:text-destructive" aria-label="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    {format(new Date(p.created_at), "MMM d, yyyy")}
                    {p.author_name && <span>· by {p.author_name}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">{p.content}</p>
                </motion.article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
