import { Card, CardContent } from "./ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-primary">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground">
            Ready to transform your business? Contact us today to discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-bold mb-3 text-primary text-xl">Location</h3>
              <p className="text-muted-foreground">
                P.O BOX 395-10230<br />
                SAGANA, KENYA
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-bold mb-3 text-primary text-xl">Email</h3>
              <p className="text-muted-foreground">
                info@telliarch.co.ke<br />
                contact@telliarch.co.ke
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="font-bold mb-3 text-primary text-xl">Phone</h3>
              <p className="text-muted-foreground">
                +254 XXX XXX XXX<br />
                Available Mon-Fri, 8am-6pm
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <h3 className="font-bold mb-4 text-primary text-xl">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://wa.me/254XXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center mx-auto hover:scale-110 transition-smooth"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/telliarch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center mx-auto hover:scale-110 transition-smooth"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://facebook.com/telliarch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center mx-auto hover:scale-110 transition-smooth"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://linkedin.com/company/telliarch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center mx-auto hover:scale-110 transition-smooth"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
