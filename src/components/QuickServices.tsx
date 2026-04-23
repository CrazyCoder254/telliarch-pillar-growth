import { Briefcase, Building2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Briefcase,
    title: "Business Consultancy",
    description: "Strategic guidance to help your organization scale, restructure and outperform competitors.",
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    description: "Mental health, counselling and wellness programs tailored for teams and institutions.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Training",
    description: "Coaching and skills transfer programs that grow leaders and high-performing professionals.",
  },
];

const QuickServices = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ rotateY: 10, rotateX: -6, y: -8, scale: 1.03 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group bg-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-smooth border border-secondary/30"
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth ring-2 ring-secondary/40">
                <item.icon className="text-secondary" size={26} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gold-gradient">{item.title}</h3>
              <p className="text-sm text-card-foreground/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
