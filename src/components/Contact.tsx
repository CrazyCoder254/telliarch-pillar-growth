import { Card, CardContent } from "./ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business? Contact us today to discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group">
            <CardContent className="p-8">
              <div className="w-14 h-14 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-muted-foreground">
                P.O BOX 395-10230<br />
                SAGANA, KENYA
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group">
            <CardContent className="p-8">
              <div className="w-14 h-14 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">
                info@telliarch.co.ke<br />
                contact@telliarch.co.ke
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group">
            <CardContent className="p-8">
              <div className="w-14 h-14 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">
                +254 XXX XXX XXX<br />
                Available Mon-Fri, 8am-6pm
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
