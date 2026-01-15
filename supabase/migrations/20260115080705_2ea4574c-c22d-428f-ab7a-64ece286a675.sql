-- Create service_subscriptions table for users to subscribe to specific services
CREATE TABLE public.service_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  service_name TEXT NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(email, service_name)
);

-- Enable RLS
ALTER TABLE public.service_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their subscription
CREATE POLICY "Anyone can subscribe to services"
ON public.service_subscriptions
FOR INSERT
WITH CHECK (true);

-- Allow service role to read all subscriptions (for admin/edge functions)
CREATE POLICY "Service role can read all subscriptions"
ON public.service_subscriptions
FOR SELECT
USING (true);

-- Create index for efficient queries
CREATE INDEX idx_service_subscriptions_email ON public.service_subscriptions(email);
CREATE INDEX idx_service_subscriptions_service ON public.service_subscriptions(service_name);

-- Create sent_newsletters table to track sent newsletters
CREATE TABLE public.sent_newsletters (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  subject TEXT NOT NULL,
  content TEXT NOT NULL,
  service_filter TEXT, -- NULL means sent to all subscribers
  sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  sent_by UUID REFERENCES auth.users(id),
  recipient_count INTEGER NOT NULL DEFAULT 0
);

-- Enable RLS
ALTER TABLE public.sent_newsletters ENABLE ROW LEVEL SECURITY;

-- Allow admins to manage sent newsletters
CREATE POLICY "Admins can manage sent newsletters"
ON public.sent_newsletters
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role = 'admin'
  )
);