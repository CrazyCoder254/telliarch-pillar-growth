import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import wellness1 from "@/assets/wellness-1.jpg";
import wellness2 from "@/assets/wellness-2.jpg";
import wellness3 from "@/assets/wellness-3.jpg";
import wellness4 from "@/assets/wellness-4.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroBackgrounds = [wellness1, wellness2, wellness3, wellness4];

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
      {/* Mental wellness slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentBgIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackgrounds[currentBgIndex]})` }}
          aria-hidden
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-[#2E241C]/85 via-[#443932]/70 to-[#735E4E]/60" aria-hidden />

      {/* Slideshow indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroBackgrounds.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentBgIndex(i)}
            aria-label={`Show wellness image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === currentBgIndex ? "w-8 bg-secondary" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>



      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl"
          >
            <span className="text-white">Integrated </span>
            <span className="text-warm-bright">Mental Health & Growth Solutions</span>
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
