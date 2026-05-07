import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Bell, ArrowRight } from "lucide-react";
import servicesBackground from "@/assets/services-bg.jpg";
import ServiceSubscribeDialog from "./ServiceSubscribeDialog";
import { services } from "@/data/services";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
            Tailored services across mental health, personal growth, family, education, corporate wellbeing and specialized therapy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ rotateY: 8, rotateX: -6, y: -10, scale: 1.03 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="shadow-2xl hover:shadow-secondary/40 transition-all duration-500 border-none bg-white/10 backdrop-blur-md group h-full border border-white/20 flex flex-col">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-lg ring-2 ring-secondary/40"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-secondary" size={28} />
                    </motion.div>
                    <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <p className="text-white/85 mb-5 flex-1">{service.shortDescription}</p>
                    <div className="flex flex-col gap-2">
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
                  </CardContent>
                </Card>
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
