import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Brain, title: "Mental Health & Emotional Wellness", desc: "Evidence-based therapy and counselling that restores stability and clarity." },
  { icon: Sparkles, title: "Personal & Professional Development", desc: "Coaching that grows confidence, capacity and direction." },
  { icon: TrendingUp, title: "Sustainable Growth Strategies", desc: "Long-term frameworks that help people and organizations thrive." },
];

const WhoWeAre = () => (
  <section id="who-we-are" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Who We Are</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-foreground">A growth-centered </span>
          <span className="text-gold-gradient">mental health & development practice</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We help individuals, families and organizations build resilient, healthy and purpose-driven lives. True growth begins from within—and extends into families, workplaces and communities.
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
            className="bg-card border border-secondary/30 rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth"
          >
            <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5 ring-2 ring-secondary/40">
              <p.icon className="text-secondary" size={26} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gold-gradient">{p.title}</h3>
            <p className="text-card-foreground/80 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAre;
