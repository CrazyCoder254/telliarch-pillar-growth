import { motion } from "framer-motion";
import { Stethoscope, Compass, GraduationCap } from "lucide-react";

const pillars = [
  { icon: Stethoscope, title: "Therapy", desc: "Evidence-based healing and recovery." },
  { icon: Compass, title: "Coaching", desc: "Growth, clarity and direction." },
  { icon: GraduationCap, title: "Training", desc: "Skills and capacity building." },
];

const OurApproach = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Our Approach</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-5">
          <span className="text-foreground">Holistic and </span>
          <span className="text-gold-gradient">practical care</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We don't just solve problems—we build long-term capacity for growth by integrating therapy, coaching and training.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 perspective-1000">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ rotateY: 8, rotateX: -6, y: -8, scale: 1.03 }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-card border border-secondary/30 rounded-2xl p-8 text-center shadow-elegant hover:shadow-glow transition-smooth"
          >
            <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-5 ring-2 ring-secondary/40">
              <p.icon className="text-secondary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gold-gradient">{p.title}</h3>
            <p className="text-card-foreground/80 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OurApproach;
