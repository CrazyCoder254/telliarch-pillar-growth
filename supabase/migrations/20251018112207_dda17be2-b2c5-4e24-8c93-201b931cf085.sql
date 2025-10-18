-- Fix 1: Restrict profiles table access to own profile only
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

CREATE POLICY "Users can view own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Fix 2: Add RLS policies for gallery storage bucket
-- Only admins can upload to gallery
CREATE POLICY "Admins can upload to gallery"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'gallery' AND
    public.has_role(auth.uid(), 'admin'::app_role)
  );

-- Only admins can delete from gallery
CREATE POLICY "Admins can delete from gallery"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'gallery' AND
    public.has_role(auth.uid(), 'admin'::app_role)
  );

-- Anyone can view gallery images (read-only for public)
CREATE POLICY "Public can view gallery images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'gallery');