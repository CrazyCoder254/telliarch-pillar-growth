import { motion } from "framer-motion";
import { ArrowRight, Building2, HeartHandshake } from "lucide-react";
import { Button } from "./ui/button";

const programs = [
  {
    icon: Building2,
    title: "Employee Assistance Program",
    description:
      "Telliarch partners with companies to provide professional consultancy and counselling services for their employees. Delivered by qualified consultants and counsellors.",
    cta: "Learn More",
  },
  {
    icon: HeartHandshake,
    title: "Community Outreach Programs",
    description:
      "We bring our consultancy and wellness expertise closer to underserved communities through targeted outreach, workshops and partnerships.",
    cta: "Learn More",
  },
];

const Programs = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Explore Our Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold"><span className="text-foreground">Programs Built for </span><span className="text-gold-gradient">Impact</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-1000">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ rotateY: 8, rotateX: -5, y: -8, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth border border-secondary/30 group"
            >
              <div className="h-40 gradient-hero relative flex items-center justify-center">
                <p.icon className="text-secondary" size={64} strokeWidth={1.2} />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-smooth" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gold-gradient">{p.title}</h3>
                <p className="text-sm text-card-foreground/80 leading-relaxed mb-4">{p.description}</p>
                <Button onClick={scrollToContact} variant="ghost" size="sm" className="text-secondary hover:text-secondary hover:bg-secondary/10 px-0">
                  {p.cta} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
