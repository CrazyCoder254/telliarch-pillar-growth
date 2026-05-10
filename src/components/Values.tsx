import { Card, CardContent } from "./ui/card";
import { Shield, Lightbulb, Star, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import valuesBackground from "@/assets/values-bg.jpg";
import FlipCard from "./FlipCard";

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
          <h2 className="mb-6 text-4xl md:text-5xl font-bold drop-shadow-lg"><span className="text-white">Our Core </span><span className="text-gold-gradient">Values</span></h2>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
            >
              <FlipCard
                height="h-[260px]"
                front={
                  <Card className="shadow-2xl h-full border-none bg-white/10 backdrop-blur-md border border-white/20">
                    <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center mb-6 shadow-lg ring-2 ring-secondary/50">
                        <value.icon className="text-secondary" size={36} />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">{value.title}</h3>
                      <p className="text-white/60 text-xs italic mt-3">Hover to learn more</p>
                    </CardContent>
                  </Card>
                }
                back={
                  <Card className="shadow-2xl h-full border-none bg-gradient-to-br from-primary via-accent to-primary border border-secondary/40">
                    <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                      <h3 className="text-lg font-bold text-secondary mb-3">{value.title}</h3>
                      <p className="text-white/90 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
