import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const scrollToSection = (id: string) => {
    // Navigate to home page first if not already there
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center flex-1 max-w-xs">
            <img src={logo} alt="Telliarch Limited Logo" className="h-20 md:h-24 lg:h-28 w-full object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-secondary transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-secondary transition-smooth font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className="text-foreground/80 hover:text-secondary transition-smooth font-medium"
            >
              Values
            </button>
            <Link to="/careers" className="text-foreground/80 hover:text-secondary transition-smooth font-medium">
              Careers
            </Link>
            <Link to="/gallery" className="text-foreground/80 hover:text-secondary transition-smooth font-medium">
              Gallery
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-secondary transition-smooth font-medium"
            >
              Contact
            </button>
            <ThemeToggle />
            {user ? (
              <Button onClick={handleSignOut} variant="outline" size="sm">
                Sign Out
              </Button>
            ) : (
              <Link to="/auth">
                <Button variant="hero" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top bg-background/95 backdrop-blur-lg rounded-lg p-4 shadow-elegant">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-secondary hover:text-secondary/80 transition-smooth py-2 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-secondary hover:text-secondary/80 transition-smooth py-2 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className="block w-full text-left text-secondary hover:text-secondary/80 transition-smooth py-2 font-medium"
            >
              Values
            </button>
            <Link to="/careers" className="block w-full text-left text-secondary hover:text-secondary/80 transition-smooth py-2 font-medium">
              Careers
            </Link>
            <Link to="/gallery" className="block w-full text-left text-secondary hover:text-secondary/80 transition-smooth py-2 font-medium">
              Gallery
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-secondary hover:text-secondary/80 transition-smooth py-2 font-medium"
            >
              Contact
            </button>
            <div className="flex items-center gap-2 py-2">
              <span className="text-secondary font-medium">Theme:</span>
              <ThemeToggle />
            </div>
            {user ? (
              <Button onClick={handleSignOut} variant="outline" size="sm" className="w-full">
                Sign Out
              </Button>
            ) : (
              <Link to="/auth" className="block">
                <Button variant="hero" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
