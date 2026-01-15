import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ServiceSubscribeRequest {
  email: string;
  serviceName: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, serviceName }: ServiceSubscribeRequest = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!serviceName) {
      return new Response(
        JSON.stringify({ error: "Service name is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if subscription already exists
    const { data: existing } = await supabase
      .from("service_subscriptions")
      .select("id, is_active")
      .eq("email", email.toLowerCase())
      .eq("service_name", serviceName)
      .single();

    if (existing) {
      if (existing.is_active) {
        return new Response(
          JSON.stringify({ success: true, message: "You are already subscribed to this service!" }),
          { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      } else {
        // Reactivate subscription
        await supabase
          .from("service_subscriptions")
          .update({ is_active: true, unsubscribed_at: null })
          .eq("id", existing.id);
      }
    } else {
      // Insert new subscription
      const { error: insertError } = await supabase
        .from("service_subscriptions")
        .insert({ email: email.toLowerCase(), service_name: serviceName });

      if (insertError) {
        console.error("Error inserting subscription:", insertError);
        throw new Error("Failed to subscribe");
      }
    }

    // Send confirmation email
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
          .service-tag { display: inline-block; background: #c9a227; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold; }
          .cta { display: inline-block; background: #c9a227; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">Subscription Confirmed!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">TELLIARCH Service Updates</p>
          </div>
          <div class="content">
            <p>Dear Subscriber,</p>
            <p>Thank you for subscribing to updates about:</p>
            <p style="text-align: center;"><span class="service-tag">${serviceName}</span></p>
            <p>You'll receive the latest news, insights, and updates related to this service directly in your inbox.</p>
            <p style="text-align: center;">
              <a href="https://telliarch-pillar-growth.lovable.app/#services" class="cta">View Our Services</a>
            </p>
            <p>Best regards,<br><strong>The TELLIARCH Team</strong></p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} TELLIARCH LIMITED. All rights reserved.</p>
            <p>Nairobi, Kenya | info@telliarch.co.ke</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "TELLIARCH LIMITED <info@telliarch.co.ke>",
        to: [email],
        subject: `Subscribed to ${serviceName} Updates - TELLIARCH`,
        html: emailHtml,
      }),
    });

    return new Response(
      JSON.stringify({ success: true, message: `Successfully subscribed to ${serviceName} updates!` }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error in service-subscribe function:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to subscribe";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
