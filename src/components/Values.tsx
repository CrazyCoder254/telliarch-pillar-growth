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
    <section id="values" className="relative py-24 overflow-hidden">
      {/* Background Image with Enhanced Visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${valuesBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/90 via-accent/85 to-primary/90" />
      
      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-72 h-72 bg-secondary/15 rounded-full blur-3xl"
          animate={{ 
            y: [0, 50, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold drop-shadow-lg">Our Core Values</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6 rounded-full"
            animate={{ 
              width: ["96px", "144px", "96px"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <p className="text-lg text-white/90">
            The principles that guide our work and define our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -15, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="shadow-2xl hover:shadow-secondary/30 transition-all duration-500 border-none text-center bg-white/10 backdrop-blur-md group h-full border border-white/20">
                <CardContent className="p-8">
                  <motion.div 
                    className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="text-white" size={36} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
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
