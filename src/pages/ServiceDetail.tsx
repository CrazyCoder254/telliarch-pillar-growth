import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Bell, Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import ServiceSubscribeDialog from "@/components/ServiceSubscribeDialog";
import servicesBackground from "@/assets/services-bg.jpg";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [subscribeOpen, setSubscribeOpen] = useState(false);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${servicesBackground})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/95" />
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-secondary mb-6 transition-smooth">
            <ArrowLeft className="mr-2" size={18} /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="w-20 h-20 rounded-2xl gradient-accent flex items-center justify-center mb-6 ring-2 ring-secondary/50 shadow-2xl">
              <Icon className="text-secondary" size={36} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 drop-shadow-2xl">
              <span className="text-gold-gradient">{service.title}</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl">{service.shortDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setSubscribeOpen(true)} variant="hero" size="lg">
                <Bell className="mr-2 h-4 w-4" /> Subscribe to Updates
              </Button>
              <Link to="/#contact">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                  Book a Session
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Overview</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{service.tagline}</h2>
          <div className="space-y-5">
            {service.overview.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="bg-muted/30">
        {service.sections.map((section, sIdx) => (
          <section key={sIdx} className={`py-20 ${sIdx % 2 === 1 ? "bg-background" : ""}`}>
            <div className="container mx-auto px-4 max-w-5xl">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-gold-gradient">{section.heading}</span>
              </motion.h3>
              {section.intro && <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{section.intro}</p>}

              {section.whoFor && (
                <div className="mb-8 p-6 rounded-xl bg-card border border-secondary/20">
                  <p className="font-semibold text-foreground mb-3">Who it's for:</p>
                  <ul className="space-y-2">
                    {section.whoFor.map((w, i) => (
                      <li key={i} className="flex items-start text-card-foreground/80">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.whatYouGain && (
                <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/30">
                  <p className="font-semibold text-foreground mb-3">What you gain:</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {section.whatYouGain.map((w, i) => (
                      <li key={i} className="flex items-start text-card-foreground/90">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.services && (
                <div className="grid md:grid-cols-2 gap-5 perspective-1000">
                  {section.services.map((sub, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ rotateY: 6, rotateX: -4, y: -6, scale: 1.02 }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="bg-card border border-secondary/20 rounded-xl p-6 shadow-elegant hover:shadow-glow transition-smooth"
                    >
                      <h4 className="font-bold text-lg mb-2 text-gold-gradient">{sub.title}</h4>
                      <p className="text-card-foreground/80 leading-relaxed mb-2">{sub.description}</p>
                      {sub.example && (
                        <p className="text-sm text-muted-foreground italic border-l-2 border-secondary/40 pl-3 mt-3">
                          Example: {sub.example}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Outcome */}
      {service.outcome && (
        <section className="py-16 bg-gradient-to-br from-primary to-accent">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Outcome</p>
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">{service.outcome}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-5">
            <span className="text-foreground">You don't have to walk this </span>
            <span className="text-gold-gradient">journey alone.</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            We'd be honoured to support you with care, professionalism and respect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => setSubscribeOpen(true)} variant="hero" size="lg">
              <Bell className="mr-2 h-4 w-4" /> Subscribe to Updates
            </Button>
            <Link to="/#contact">
              <Button variant="outline" size="lg">Contact Us <ArrowRight className="ml-2" size={18} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-foreground">Explore Other </span><span className="text-gold-gradient">Services</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => {
              const SI = s.icon;
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group">
                  <div className="bg-card border border-secondary/20 rounded-xl p-5 h-full hover:shadow-glow transition-smooth">
                    <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-3 ring-1 ring-secondary/40">
                      <SI className="text-secondary" size={20} />
                    </div>
                    <p className="font-semibold text-card-foreground group-hover:text-secondary transition-smooth">{s.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />

      <ServiceSubscribeDialog
        open={subscribeOpen}
        onOpenChange={setSubscribeOpen}
        serviceName={service.title}
      />
    </div>
  );
};

export default ServiceDetail;
