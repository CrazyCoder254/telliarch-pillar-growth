const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">TELLIARCH LIMITED</p>
            <p className="text-sm text-primary-foreground/80 mt-1">
              Empowering Businesses to Achieve Excellence
            </p>
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
