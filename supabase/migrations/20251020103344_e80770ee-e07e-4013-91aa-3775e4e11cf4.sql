-- Create a function to allow self-assignment of admin role during signup
-- WARNING: This is a security vulnerability - anyone can become admin
CREATE OR REPLACE FUNCTION public.assign_admin_role_to_self()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if user already has admin role
  IF NOT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ) THEN
    -- Assign admin role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (auth.uid(), 'admin');
  END IF;
END;
$$;