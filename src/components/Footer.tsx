import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg mb-2">TELLIARCH LIMITED</p>
            <p className="text-sm text-primary-foreground/80">
              Empowering Businesses to Achieve Excellence
            </p>
          </div>
          
          <div className="text-center">
            <p className="font-semibold text-lg mb-4">Follow Us</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://wa.me/254XXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/90 transition-smooth flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="text-secondary-foreground" size={20} />
              </a>
              <a 
                href="https://instagram.com/telliarch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/90 transition-smooth flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="text-secondary-foreground" size={20} />
              </a>
              <a 
                href="https://facebook.com/telliarch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/90 transition-smooth flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="text-secondary-foreground" size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/telliarch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/90 transition-smooth flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-secondary-foreground" size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} TELLIARCH LIMITED. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60 mt-1">
              Developed by <span className="font-semibold text-secondary">KenTech Softwares</span> in 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
