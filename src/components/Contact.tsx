import { Card, CardContent } from "./ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import contactBackground from "@/assets/contact-bg.jpg";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${contactBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-primary">Get In Touch</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto mb-6 rounded-full"
            animate={{ 
              width: ["96px", "144px", "96px"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <p className="text-lg text-muted-foreground">
            Ready to transform your business? Contact us today to discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "Location",
              content: ["P.O BOX 395-10230", "SAGANA, KENYA"]
            },
            {
              icon: Mail,
              title: "Email",
              content: ["info@telliarch.co.ke"],
              link: "mailto:info@telliarch.co.ke"
            },
            {
              icon: Phone,
              title: "Phone",
              content: ["+254 720 599457", "Available Mon-Fri, 8am-6pm"],
              link: "tel:+254720599457"
            }
          ].map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              {info.link ? (
                <a href={info.link} className="block">
                  <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group bg-card/80 backdrop-blur-sm h-full cursor-pointer">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                        <info.icon className="text-white" size={28} />
                      </div>
                      <h3 className="font-bold mb-3 text-primary text-xl">{info.title}</h3>
                      <p className="text-muted-foreground">
                        {info.content[0]}<br />
                        {info.content[1]}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group bg-card/80 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                      <info.icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold mb-3 text-primary text-xl">{info.title}</h3>
                    <p className="text-muted-foreground">
                      {info.content[0]}<br />
                      {info.content[1]}
                    </p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center group bg-card/80 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <h3 className="font-bold mb-4 text-primary text-xl">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://wa.me/254720599457" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center mx-auto hover:scale-110 transition-smooth"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/telliarchltd/" 
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
                    href="https://www.linkedin.com/in/telliarch-ltd-54b050397/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center mx-auto hover:scale-110 transition-smooth"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
