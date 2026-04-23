import { MapPin, Clock, CalendarCheck } from "lucide-react";

const InfoStrip = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-secondary-foreground/20">
          <div className="flex items-center gap-3 p-4">
            <div className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide">Our Location</p>
              <p className="text-sm opacity-90">Sagana, Kenya · P.O Box 395-10230</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4">
            <div className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide">Open Hours</p>
              <p className="text-sm opacity-90">Mon — Fri: 8 am — 6 pm · Sat: 9 am — 1 pm</p>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="flex items-center gap-3 p-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth text-left"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
              <CalendarCheck size={18} className="text-secondary" />
            </div>
            <div>
              <p className="text-sm font-bold">Book a Consultation</p>
              <p className="text-xs opacity-80">Talk to a consultant today</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoStrip;
