import { motion } from "framer-motion";
import { User, Users, School, Hospital, Building2 } from "lucide-react";
import aboutBackground from "@/assets/about-bg.jpg";

const groups = [
  { icon: User, label: "Individuals" },
  { icon: Users, label: "Families" },
  { icon: School, label: "Schools & Educational Institutions" },
  { icon: Hospital, label: "Hospitals & Healthcare Providers" },
  { icon: Building2, label: "Corporates & Organizations" },
];

const WhoWeServe = () => (
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
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Who We Serve</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          <span className="text-white">Care & growth for </span>
          <span className="text-gold-gradient">every season of life</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 perspective-1000">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ rotateY: 8, rotateX: -6, y: -8, scale: 1.04 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-2xl hover:shadow-secondary/40 transition-all duration-500">
              <div className="w-16 h-16 mx-auto rounded-full gradient-accent flex items-center justify-center mb-4 ring-2 ring-secondary/50 shadow-lg">
                <g.icon className="text-secondary" size={26} />
              </div>
              <p className="font-semibold text-secondary text-sm">{g.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeServe;
