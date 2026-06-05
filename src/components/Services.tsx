import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Bell, ArrowRight } from "lucide-react";
import ServiceSubscribeDialog from "./ServiceSubscribeDialog";
import FlipCard from "./FlipCard";
import { services } from "@/data/services";
import svcIndividual from "@/assets/svc-individual.jpg";
import svcFamily from "@/assets/svc-family.jpg";
import svcEducation from "@/assets/svc-education.jpg";
import svcCorporate from "@/assets/svc-corporate.jpg";
import svcGroup from "@/assets/svc-group.jpg";
import svcSpecialized from "@/assets/svc-specialized.jpg";
import svcTraining from "@/assets/svc-training.jpg";
import svcSustainability from "@/assets/svc-sustainability.jpg";

const serviceImages: Record<string, string> = {
  "individual-therapy": svcIndividual,
  "family-integration": svcFamily,
  "education-institutions": svcEducation,
  "corporate-wellbeing": svcCorporate,
  "group-therapy": svcGroup,
  "specialized-therapy": svcSpecialized,
  "training-workshops": svcTraining,
  "sustainability-wellbeing": svcSustainability,
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 overflow-hidden gradient-hero">


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">What We Do</p>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold drop-shadow-lg text-white">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-white/90">
            Hover any card to reveal more, then read the full service details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <FlipCard
                  height="h-[380px]"
                  respectReducedMotion={false}
                  front={
                    <div
                      className="relative w-full h-full rounded-xl shadow-2xl overflow-hidden border border-white/20 bg-cover bg-center"
                      style={{ backgroundImage: `url(${serviceImages[service.slug]})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E241C]/95 via-[#443932]/70 to-[#735E4E]/30" />
                      <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-end text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-4 ring-2 ring-secondary/50 shadow-lg">
                          <Icon className="text-secondary" size={30} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{service.title}</h3>
                        <p className="text-white/85 text-sm italic">Hover to learn more</p>
                      </div>
                    </div>
                  }
                  back={
                    <div className="w-full h-full rounded-xl shadow-2xl bg-gradient-to-br from-primary via-accent to-primary border border-secondary/40 p-6 flex flex-col text-center">
                      <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                      <p className="text-white/85 text-sm italic mb-3">{service.tagline}</p>
                      <p className="text-white/80 text-sm flex-1 overflow-hidden line-clamp-6">
                        {service.shortDescription}
                      </p>
                      <div className="flex flex-col gap-2 mt-4">
                        <Link to={`/services/${service.slug}`} onClick={(e) => e.stopPropagation()}>
                          <Button variant="hero" size="sm" className="w-full">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedService(service.title);
                          }}
                        >
                          <Bell className="mr-2 h-4 w-4" /> Subscribe
                        </Button>
                      </div>
                    </div>
                  }
                />
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
