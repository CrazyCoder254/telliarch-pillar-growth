
CREATE TABLE public.community_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.community_posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.community_posts TO authenticated;
GRANT ALL ON public.community_posts TO service_role;

ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published community posts"
  ON public.community_posts FOR SELECT
  USING (is_published = true OR auth.uid() = user_id OR has_role(auth.uid(), 'admin'));

CREATE POLICY "Authenticated users can create their own posts"
  ON public.community_posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authors can update their own posts"
  ON public.community_posts FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id OR has_role(auth.uid(), 'admin'))
  WITH CHECK (auth.uid() = user_id OR has_role(auth.uid(), 'admin'));

CREATE POLICY "Authors and admins can delete posts"
  ON public.community_posts FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id OR has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_community_posts_updated_at
  BEFORE UPDATE ON public.community_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
