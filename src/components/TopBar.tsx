import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden md:block bg-primary text-primary-foreground text-xs">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="opacity-80">Have any questions? Feel free to contact us:</span>
          <a href="tel:+254720599457" className="flex items-center gap-1.5 hover:text-secondary transition-smooth">
            <Phone size={12} />
            +254 720 599457
          </a>
          <a href="mailto:info@telliarch.co.ke" className="flex items-center gap-1.5 hover:text-secondary transition-smooth">
            <Mail size={12} />
            info@telliarch.co.ke
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://facebook.com/telliarch" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-secondary transition-smooth">
            <Facebook size={14} />
          </a>
          <a href="https://www.instagram.com/telliarchltd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-secondary transition-smooth">
            <Instagram size={14} />
          </a>
          <a href="https://www.linkedin.com/in/telliarch-ltd-54b050397/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-secondary transition-smooth">
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
