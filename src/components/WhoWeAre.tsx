import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp } from "lucide-react";
import aboutBackground from "@/assets/about-bg.jpg";
import FlipCard from "./FlipCard";

const pillars = [
  { icon: Brain, title: "Mental Health & Emotional Wellness", desc: "Evidence-based therapy and counselling that restores stability and clarity." },
  { icon: Sparkles, title: "Personal & Professional Development", desc: "Coaching that grows confidence, capacity and direction." },
  { icon: TrendingUp, title: "Sustainable Growth Strategies", desc: "Long-term frameworks that help people and organizations thrive." },
];

const WhoWeAre = () => (
  <section id="who-we-are" className="relative py-24 overflow-hidden">
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
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Who We Are</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          <span className="text-white">A growth-centered </span>
          <span className="text-gold-gradient">mental health & development practice</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6 rounded-full" />
        <p className="text-lg text-white/90 leading-relaxed">
          We help individuals, families and organizations build resilient, healthy and purpose-driven lives. True growth begins from within—and extends into families, workplaces and communities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <FlipCard
              height="h-[280px]"
              front={
                <div className="w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-5 ring-2 ring-secondary/50 shadow-lg">
                    <p.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">{p.title}</h3>
                  <p className="text-white/60 text-xs italic mt-3">Hover to learn more</p>
                </div>
              }
              back={
                <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-primary border border-secondary/40 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-bold text-secondary mb-3">{p.title}</h3>
                  <p className="text-white/90 leading-relaxed">{p.desc}</p>
                </div>
              }
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAre;
