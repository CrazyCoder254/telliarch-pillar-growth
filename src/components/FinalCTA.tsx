import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to begin your <span className="text-gold-gradient">growth journey?</span>
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book a consultation or partner with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollTo("contact")} variant="hero" size="lg" className="text-lg px-8 py-6">
              Book a Session <ArrowRight className="ml-2" />
            </Button>
            <Button onClick={() => scrollTo("services")} variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
              Explore Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
