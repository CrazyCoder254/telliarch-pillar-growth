import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom duration-700">
            Empowering Businesses to Achieve Excellence
          </h1>
          
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
            <div className="text-center">
              <h3 className="text-4xl font-bold text-secondary">100+</h3>
              <p className="text-white/80 mt-2">Businesses Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-secondary">5</h3>
              <p className="text-white/80 mt-2">Core Services</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-secondary">98%</h3>
              <p className="text-white/80 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
