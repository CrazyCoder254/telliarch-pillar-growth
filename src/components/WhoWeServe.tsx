import { motion } from "framer-motion";
import { User, Users, School, Hospital, Building2 } from "lucide-react";

const groups = [
  { icon: User, label: "Individuals" },
  { icon: Users, label: "Families" },
  { icon: School, label: "Schools & Educational Institutions" },
  { icon: Hospital, label: "Hospitals & Healthcare Providers" },
  { icon: Building2, label: "Corporates & Organizations" },
];

const WhoWeServe = () => (
  <section className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Who We Serve</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-foreground">Care & growth for </span>
          <span className="text-gold-gradient">every season of life</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="bg-card rounded-2xl p-6 text-center border border-secondary/20 shadow-elegant hover:shadow-glow transition-smooth"
          >
            <div className="w-14 h-14 mx-auto rounded-full gradient-primary flex items-center justify-center mb-3 ring-2 ring-secondary/40">
              <g.icon className="text-secondary" size={24} />
            </div>
            <p className="font-semibold text-card-foreground text-sm">{g.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeServe;
