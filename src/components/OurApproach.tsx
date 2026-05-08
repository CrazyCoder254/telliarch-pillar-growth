import { motion } from "framer-motion";
import { Stethoscope, Compass, GraduationCap } from "lucide-react";
import aboutBackground from "@/assets/about-bg.jpg";

const pillars = [
  { icon: Stethoscope, title: "Therapy", desc: "Evidence-based healing and recovery." },
  { icon: Compass, title: "Coaching", desc: "Growth, clarity and direction." },
  { icon: GraduationCap, title: "Training", desc: "Skills and capacity building." },
];

const OurApproach = () => (
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
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Our Approach</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          <span className="text-white">Holistic and </span>
          <span className="text-gold-gradient">practical care</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6 rounded-full" />
        <p className="text-lg text-white/90 leading-relaxed">
          We don't just solve problems—we build long-term capacity for growth by integrating therapy, coaching and training.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 perspective-1000">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ rotateY: 8, rotateX: -6, y: -8, scale: 1.03 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow-2xl hover:shadow-secondary/40 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-5 ring-2 ring-secondary/50 shadow-lg">
                <p.icon className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{p.title}</h3>
              <p className="text-white/85 leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OurApproach;
