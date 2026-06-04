import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground1 from "@/assets/hero-bg.jpg";
import heroBackground2 from "@/assets/hero-bg-2.jpg";
import heroBackground3 from "@/assets/hero-bg-3.jpg";
import heroBackground4 from "@/assets/hero-bg-4.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const heroBackgrounds = [heroBackground1, heroBackground2, heroBackground3, heroBackground4];

const Hero = () => {
  const { count: businessesCount, ref: businessesRef } = useCountUp(100, 2000);
  const { count: servicesCount, ref: servicesRef } = useCountUp(5, 1500);
  const { count: satisfactionCount, ref: satisfactionRef } = useCountUp(98, 2500);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">


      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl"
          >
            <span className="text-white">Integrated </span>
            <span className="text-gold-gradient">Mental Health & Growth Solutions</span>
            <span className="text-white"> for Individuals, Families & Organizations</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed"
          >
            We empower people and institutions to thrive through mental wellness, personal development, and sustainable growth strategies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 shadow-2xl hover:shadow-secondary/50"
            >
              Book a Session
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 ref={businessesRef} className="text-4xl font-bold text-secondary drop-shadow-lg">
                {businessesCount}+
              </h3>
              <p className="text-white/80 mt-2">Businesses Served</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 ref={servicesRef} className="text-4xl font-bold text-secondary drop-shadow-lg">
                {servicesCount}
              </h3>
              <p className="text-white/80 mt-2">Core Services</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 ref={satisfactionRef} className="text-4xl font-bold text-secondary drop-shadow-lg">
                {satisfactionCount}%
              </h3>
              <p className="text-white/80 mt-2">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
