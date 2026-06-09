import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const PartnerCTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary via-accent to-primary overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center bg-background/10 backdrop-blur-md border border-background/20 rounded-2xl p-10 md:p-14 shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to partner with <span className="text-warm-bright">TELLIARCH</span>?
          </h3>
          <p className="text-primary-foreground/85 text-lg mb-8">
            Let's start a conversation about how we can support your growth journey.
          </p>
          <Button
            onClick={scrollToContact}
            variant="hero"
            size="lg"
            className="text-lg px-10 py-6 shadow-2xl hover:shadow-secondary/50"
          >
            Contact Us
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerCTA;
