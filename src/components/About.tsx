import { Card, CardContent } from "./ui/card";
import { Target, Eye, Award } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-primary">About TELLIARCH LIMITED</h2>
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
          <p className="text-lg text-muted-foreground leading-relaxed">
            TELLIARCH LIMITED is a premier business consultancy firm dedicated to providing 
            comprehensive support to businesses in achieving their strategic objectives. 
            Inspired by architectural principles where an arch provides structural support, 
            we serve as the pillar of strength for your business growth and success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Mission",
              description: "To partner with organizations to optimize their human resource, financial strategies and marketing efforts through tailored consultancy services fostering growth and enabling businesses to unleash their full potential."
            },
            {
              icon: Eye,
              title: "Vision",
              description: "To be the trusted partner for businesses of all sizes worldwide, delivering expert consultancy solutions that drive sustainable growth, operational excellence and competitive advantage for our clients."
            },
            {
              icon: Award,
              title: "Our Story",
              description: "Born from diverse inspirations and professional expertise in HR, finance, psychology, and strategic management, we've helped numerous startups achieve desired brand positioning and recognition."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none bg-card/80 backdrop-blur-sm group h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="mb-4 text-xl text-primary font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="shadow-elegant border-none bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl text-center">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-primary mb-2">Registered Office</p>
                  <p className="text-muted-foreground">
                    P.O BOX 395-10230<br />
                    SAGANA, KENYA
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Our Expertise</p>
                  <p className="text-muted-foreground">
                    Strategic Management, Human Resources, Finance & Accounting, 
                    Marketing, Psychology & Counselling
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
