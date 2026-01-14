import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscribeRequest = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if email already exists
    const { data: existingSubscriber } = await supabase
      .from("newsletter_subscribers")
      .select("id, is_active")
      .eq("email", email.toLowerCase())
      .single();

    if (existingSubscriber) {
      if (existingSubscriber.is_active) {
        return new Response(
          JSON.stringify({ success: true, message: "You are already subscribed!" }),
          {
            status: 200,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      } else {
        // Reactivate subscription
        await supabase
          .from("newsletter_subscribers")
          .update({ is_active: true, unsubscribed_at: null })
          .eq("id", existingSubscriber.id);
      }
    } else {
      // Insert new subscriber
      const { error: insertError } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: email.toLowerCase() });

      if (insertError) {
        console.error("Error inserting subscriber:", insertError);
        throw new Error("Failed to subscribe");
      }
    }

    // Send welcome email using Resend API directly
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
            <h1 style="margin: 0;">Welcome to TELLIARCH!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Empowering Businesses to Achieve Excellence</p>
          </div>
          <div class="content">
            <p>Dear Subscriber,</p>
            <p>Thank you for subscribing to the TELLIARCH newsletter! We're excited to have you join our community.</p>
            <p>You'll receive regular updates on:</p>
            <ul>
              <li>Business strategy insights</li>
              <li>HR management best practices</li>
              <li>Financial planning tips</li>
              <li>Mental health & wellness resources</li>
              <li>Leadership and mentorship guidance</li>
            </ul>
            <p>Stay tuned for valuable content designed to help you and your organization thrive.</p>
            <p style="text-align: center;">
              <a href="https://telliarch-pillar-growth.lovable.app" class="cta">Visit Our Website</a>
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

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "TELLIARCH LIMITED <info@telliarch.co.ke>",
        to: [email],
        subject: "Welcome to TELLIARCH Newsletter!",
        html: emailHtml,
      }),
    });

    const emailResult = await emailResponse.json();
    console.log("Email send result:", emailResult);

    if (!emailResponse.ok) {
      console.error("Failed to send email:", emailResult);
      // Still return success since subscription was saved
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Successfully subscribed to the newsletter!" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    console.error("Error in newsletter-subscribe function:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to subscribe";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);