import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a helpful AI assistant for TELLIARCH LIMITED, a premier business consultancy firm based in Kenya. Your role is to help visitors learn about the company and its services.

Company Information:
- Name: TELLIARCH LIMITED
- Location: Kenya (Registered Office: P.O. Box 1234-00100, Nairobi, Kenya)
- Tagline: "Empowering Businesses Through Expert Consultancy"

Services Offered:
1. Business Registration - Complete company registration services including name reservation, documentation, and CR12 filing
2. Tax Compliance - Expert tax planning, filing, and compliance management with KRA
3. Permits & Licenses - Assistance with trade licenses, health permits, fire certificates, and operational permits
4. HR Solutions - Recruitment, payroll management, and HR consulting services
5. Audit Support - Financial audit preparation and compliance audit assistance
6. Company Secretarial - Board meeting management, AGM coordination, and statutory filings

Core Values:
- Excellence: Committed to delivering exceptional service quality
- Integrity: Operating with transparency and ethical standards
- Innovation: Using modern solutions for business challenges
- Client-Focused: Prioritizing client needs and success
- Professionalism: Maintaining highest standards in all interactions

Key Statistics:
- 500+ Businesses Served
- 6 Core Services
- 98% Client Satisfaction

Your communication style should be:
- Professional yet friendly
- Clear and concise
- Knowledgeable about Kenyan business regulations
- Helpful in guiding users to the right services
- Encouraging users to contact the company for personalized assistance

If asked about pricing or specific legal advice, recommend contacting the company directly for personalized consultation.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat assistant error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
