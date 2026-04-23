import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  author: string | null;
  published_at: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, cover_image_url, author, published_at, created_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false, nullsFirst: false })
        .limit(3);
      setPosts(data || []);
      setLoading(false);
    };
    load();
  }, []);

  if (loading || posts.length === 0) return null;

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">From Our Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read our latest articles, expert opinions and case studies on business growth, leadership and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-background rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth border border-border/50 group flex flex-col"
            >
              {post.cover_image_url ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.cover_image_url}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                  />
                </div>
              ) : (
                <div className="h-48 gradient-accent" />
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={12} />
                  {format(new Date(post.published_at || post.created_at), "MMM d, yyyy")}
                  {post.author && <span>· {post.author}</span>}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-secondary transition-smooth">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center text-sm font-semibold text-secondary mt-auto">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
