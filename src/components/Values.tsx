import { Card, CardContent } from "./ui/card";
import { Shield, Lightbulb, Star, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import valuesBackground from "@/assets/values-bg.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We demonstrate high levels of honesty, accountability and courage in all our engagements."
  },
  {
    icon: Users,
    title: "Diversity",
    description: "We value multidimensional thinking and ideas in business growth and continuity."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We advocate and support creativity and innovation for betterment and improvement of processes and services."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We value quality of service and perfection, pursuing consistency and delivery of high standards."
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "We are committed to adhere to the governing professional code of conduct and ethics in service delivery."
  }
];

const Values = () => {
  return (
    <section id="values" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${valuesBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-primary">Our Core Values</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto mb-6 rounded-full"
            animate={{ 
              width: ["96px", "144px", "96px"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <p className="text-lg text-muted-foreground">
            The principles that guide our work and define our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
              className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center bg-card/80 backdrop-blur-sm group h-full"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
