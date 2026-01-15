import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SendNewsletterRequest {
  subject: string;
  content: string;
  serviceFilter?: string; // Filter by specific service, or null for all
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    
    // Verify user is admin
    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });
    
    const { data: { user }, error: userError } = await userClient.auth.getUser();
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check if user is admin
    const serviceClient = createClient(supabaseUrl, supabaseServiceKey);
    const { data: adminRole } = await serviceClient
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!adminRole) {
      return new Response(
        JSON.stringify({ error: "Admin access required" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { subject, content, serviceFilter }: SendNewsletterRequest = await req.json();

    if (!subject || !content) {
      return new Response(
        JSON.stringify({ error: "Subject and content are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get subscribers based on filter
    let subscribers: { email: string }[] = [];

    if (serviceFilter) {
      // Get service-specific subscribers
      const { data: serviceSubscribers } = await serviceClient
        .from("service_subscriptions")
        .select("email")
        .eq("service_name", serviceFilter)
        .eq("is_active", true);
      subscribers = serviceSubscribers || [];
    } else {
      // Get all newsletter subscribers
      const { data: allSubscribers } = await serviceClient
        .from("newsletter_subscribers")
        .select("email")
        .eq("is_active", true);
      subscribers = allSubscribers || [];
    }

    if (subscribers.length === 0) {
      return new Response(
        JSON.stringify({ error: "No subscribers found" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send emails in batches (Resend supports up to 100 recipients per call)
    const batchSize = 50;
    let successCount = 0;
    let errorCount = 0;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a5f, #2d5a87); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          .cta { display: inline-block; background: #c9a227; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">TELLIARCH Newsletter</h1>
            ${serviceFilter ? `<p style="margin: 10px 0 0 0; opacity: 0.9;">${serviceFilter}</p>` : ''}
          </div>
          <div class="content">
            ${content.split('\n').map(p => `<p>${p}</p>`).join('')}
            <p style="text-align: center;">
              <a href="https://telliarch-pillar-growth.lovable.app" class="cta">Visit Our Website</a>
            </p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} TELLIARCH LIMITED. All rights reserved.</p>
            <p>Nairobi, Kenya | info@telliarch.co.ke</p>
          </div>
        </div>
      </body>
      </html>
    `;

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);
      
      for (const subscriber of batch) {
        try {
          const emailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: "TELLIARCH LIMITED <info@telliarch.co.ke>",
              to: [subscriber.email],
              subject: subject,
              html: emailHtml,
            }),
          });

          if (emailResponse.ok) {
            successCount++;
          } else {
            errorCount++;
            console.error("Failed to send to:", subscriber.email);
          }
        } catch (e) {
          errorCount++;
          console.error("Error sending to:", subscriber.email, e);
        }
      }
    }

    // Log sent newsletter
    await serviceClient.from("sent_newsletters").insert({
      subject,
      content,
      service_filter: serviceFilter || null,
      sent_by: user.id,
      recipient_count: successCount
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Newsletter sent to ${successCount} subscribers${errorCount > 0 ? `, ${errorCount} failed` : ''}` 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error in send-newsletter function:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send newsletter";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
