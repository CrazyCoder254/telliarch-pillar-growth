import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Bell, ArrowRight, RotateCw } from "lucide-react";
import servicesBackground from "@/assets/services-bg.jpg";
import ServiceSubscribeDialog from "./ServiceSubscribeDialog";
import { services } from "@/data/services";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggle = (slug: string) =>
    setFlipped((p) => ({ ...p, [slug]: !p[slug] }));

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${servicesBackground})` }} />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/90 via-primary/85 to-primary/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">What We Do</p>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold drop-shadow-lg"><span className="text-gold-gradient">Our Services</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-white/90">
            Hover or tap a card to reveal more, then read the full service details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFlipped = !!flipped[service.slug];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative h-[420px] perspective-1000"
              >
                <motion.div
                  className="relative w-full h-full preserve-3d cursor-pointer"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  onHoverStart={() => setFlipped((p) => ({ ...p, [service.slug]: true }))}
                  onHoverEnd={() => setFlipped((p) => ({ ...p, [service.slug]: false }))}
                  onClick={() => toggle(service.slug)}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden rounded-xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg ring-2 ring-secondary/40">
                      <Icon className="text-secondary" size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                    <p className="text-white/85 flex-1">{service.shortDescription}</p>
                    <p className="mt-4 text-xs uppercase tracking-widest text-white/60 flex items-center gap-2">
                      <RotateCw size={14} /> Hover or tap to flip
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl shadow-2xl bg-gradient-to-br from-primary via-accent to-primary border border-secondary/40 p-8 flex flex-col text-center">
                    <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                    <p className="text-white/90 text-sm italic mb-4">{service.tagline}</p>
                    <p className="text-white/80 text-sm flex-1 overflow-hidden line-clamp-6">
                      {service.overview[0]}
                    </p>
                    <div className="flex flex-col gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
                      <Link to={`/services/${service.slug}`}>
                        <Button variant="hero" size="sm" className="w-full">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20"
                        onClick={() => setSelectedService(service.title)}
                      >
                        <Bell className="mr-2 h-4 w-4" /> Subscribe to Updates
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ServiceSubscribeDialog
        open={!!selectedService}
        onOpenChange={(open) => !open && setSelectedService(null)}
        serviceName={selectedService || ""}
      />
    </section>
  );
};

export default Services;
