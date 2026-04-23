import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Partner {
  id: string;
  name: string;
  logo_url: string;
  website_url: string | null;
}

const Partners = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("partners")
        .select("id, name, logo_url, website_url")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      setPartners(data || []);
      setLoading(false);
    };
    load();
  }, []);

  if (loading || partners.length === 0) return null;

  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Our Partners</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">We have partnered with</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {partners.map((p) => {
            const inner = (
              <img
                src={p.logo_url}
                alt={p.name}
                loading="lazy"
                className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-smooth"
              />
            );
            return p.website_url ? (
              <a key={p.id} href={p.website_url} target="_blank" rel="noopener noreferrer" aria-label={p.name}>
                {inner}
              </a>
            ) : (
              <div key={p.id}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
