import { motion } from "framer-motion";
import { ArrowRight, Building2, HeartHandshake } from "lucide-react";
import { Button } from "./ui/button";
import aboutBackground from "@/assets/about-bg.jpg";

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
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${aboutBackground})` }} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Explore Our Programs</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            <span className="text-white">Programs Built for </span>
            <span className="text-gold-gradient">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6 rounded-full" />
        </motion.div>

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
            >
              <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-secondary/40 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-5 ring-2 ring-secondary/50 shadow-lg">
                  <p.icon className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{p.title}</h3>
                <p className="text-white/85 leading-relaxed mb-5">{p.description}</p>
                <Button onClick={scrollToContact} variant="hero" size="sm">
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
