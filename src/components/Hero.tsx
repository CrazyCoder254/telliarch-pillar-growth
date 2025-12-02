import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground1 from "@/assets/hero-bg.jpg";
import heroBackground2 from "@/assets/hero-bg-2.jpg";
import heroBackground3 from "@/assets/hero-bg-3.jpg";
import heroBackground4 from "@/assets/hero-bg-4.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const heroBackgrounds = [heroBackground1, heroBackground2, heroBackground3, heroBackground4];

const Hero = () => {
  const { count: businessesCount, ref: businessesRef } = useCountUp(100, 2000);
  const { count: servicesCount, ref: servicesRef } = useCountUp(5, 1500);
  const { count: satisfactionCount, ref: satisfactionRef } = useCountUp(98, 2500);
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const welcomeText = "Welcome to Telliarch Limited";

  useEffect(() => {
    // Rotate background images every 5 seconds
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);

    return () => clearInterval(bgInterval);
  }, []);

  useEffect(() => {
    // Trigger confetti celebration
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    // Fade away after letter animation completes
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, welcomeText.length * 50 + 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating Background Images */}
      {heroBackgrounds.map((bg, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentBgIndex === index ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-accent/85" />
      
      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Background Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroBackgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBgIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentBgIndex === index 
                ? 'w-8 bg-white' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl md:text-4xl font-bold mb-4"
              >
                {welcomeText.split("").map((char, index) => {
                  const colors = [
                    "text-red-400",
                    "text-yellow-400",
                    "text-green-400",
                    "text-blue-400",
                    "text-purple-400",
                    "text-pink-400",
                    "text-orange-400"
                  ];
                  const colorClass = colors[index % colors.length];
                  
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: index * 0.05 }}
                      className={colorClass}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-2xl"
          >
            Empowering Businesses to Achieve Excellence
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed"
          >
            Strategic consultancy solutions in Human Resource, Finance, Marketing, 
            and Business Development to drive sustainable growth and competitive advantage.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("services")}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 shadow-2xl hover:shadow-secondary/50"
            >
              Explore Our Services
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              Get In Touch
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
