import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { ThemeToggle } from "./ThemeToggle";
import TopBar from "./TopBar";
const logoUrl = "/telliarch-logo.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const linkClass = "text-white/90 hover:text-secondary transition-smooth font-medium";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth bg-[#2E241C] backdrop-blur-md border-b border-[#9E8E83]/30 ${
        isScrolled ? "shadow-elegant" : ""
      }`}
    >
      <TopBar />
      <div className="container mx-auto px-4 py-1.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 bg-[#F8F6F4] rounded-xl px-3 py-1.5 shadow-lg ring-2 ring-secondary/60 hover:ring-secondary transition-all hover:scale-105">
            <img src={logoUrl} alt="Telliarch Mental Wellness Network Logo" className="h-14 md:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 text-sm">
            <Link to="/about" className={linkClass}>About</Link>
            <button onClick={() => scrollToSection("services")} className={linkClass}>Services</button>
            <button onClick={() => scrollToSection("values")} className={linkClass}>Values</button>
            <Link to="/careers" className={linkClass}>Careers</Link>
            <div className="relative group">
              <button className={`${linkClass} inline-flex items-center gap-1`}>
                Resources
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"/></svg>
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-[#2E241C] border border-[#9E8E83]/40 rounded-lg shadow-elegant py-2 min-w-[160px]">
                  <Link to="/resources/news" className="block px-4 py-2 text-white/90 hover:text-secondary hover:bg-white/5 transition-smooth">News</Link>
                  <Link to="/resources/blog" className="block px-4 py-2 text-white/90 hover:text-secondary hover:bg-white/5 transition-smooth">Blogs</Link>
                </div>
              </div>
            </div>
            <Link to="/gallery" className={linkClass}>Gallery</Link>
            <button onClick={() => scrollToSection("contact")} className={linkClass}>Contact</button>
            <ThemeToggle />
            {user ? (
              <Button onClick={handleSignOut} variant="outline" size="sm">Sign Out</Button>
            ) : (
              <Link to="/auth"><Button variant="hero" size="sm">Sign In</Button></Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-3 animate-in slide-in-from-top bg-[#2E241C] rounded-lg p-4 shadow-elegant border border-[#9E8E83]/30">
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left py-2 ${linkClass}`}>About</Link>
            <button onClick={() => scrollToSection("services")} className={`block w-full text-left py-2 ${linkClass}`}>Services</button>
            <button onClick={() => scrollToSection("values")} className={`block w-full text-left py-2 ${linkClass}`}>Values</button>
            <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left py-2 ${linkClass}`}>Careers</Link>
            <Link to="/resources/news" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left py-2 ${linkClass}`}>Resources — News</Link>
            <Link to="/resources/blog" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left py-2 ${linkClass}`}>Resources — Blogs</Link>
            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left py-2 ${linkClass}`}>Gallery</Link>
            <button onClick={() => scrollToSection("contact")} className={`block w-full text-left py-2 ${linkClass}`}>Contact</button>
            <div className="flex items-center gap-2 py-2">
              <span className="text-white/90 font-medium">Theme:</span>
              <ThemeToggle />
            </div>
            {user ? (
              <Button onClick={handleSignOut} variant="outline" size="sm" className="w-full">Sign Out</Button>
            ) : (
              <Link to="/auth" className="block">
                <Button variant="hero" size="sm" className="w-full">Sign In</Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
