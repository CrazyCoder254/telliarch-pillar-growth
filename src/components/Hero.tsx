import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const { count: businessesCount, ref: businessesRef } = useCountUp(100, 2000);
  const { count: servicesCount, ref: servicesRef } = useCountUp(5, 1500);
  const { count: satisfactionCount, ref: satisfactionRef } = useCountUp(98, 2500);
  const [showWelcome, setShowWelcome] = useState(true);

  const welcomeText = "Welcome to Telliarch Limited";

  useEffect(() => {
    // Fade away after letter animation completes
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, welcomeText.length * 50 + 2000); // letter delay * length + extra time

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/80" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl md:text-3xl font-semibold mb-4 text-secondary"
              >
                {welcomeText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: index * 0.05 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Empowering Businesses to Achieve Excellence
          </motion.h1>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Strategic consultancy solutions in Human Resource, Finance, Marketing, 
            and Business Development to drive sustainable growth and competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button
              onClick={() => scrollToSection("services")}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6"
            >
              Explore Our Services
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Get In Touch
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 ref={businessesRef} className="text-4xl font-bold text-secondary">
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
            >
              <h3 ref={servicesRef} className="text-4xl font-bold text-secondary">
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
            >
              <h3 ref={satisfactionRef} className="text-4xl font-bold text-secondary">
                {satisfactionCount}%
              </h3>
              <p className="text-white/80 mt-2">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
