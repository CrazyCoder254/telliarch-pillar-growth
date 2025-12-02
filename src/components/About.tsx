import { Card, CardContent } from "./ui/card";
import { Target, Eye, Award } from "lucide-react";
import { motion } from "framer-motion";
import aboutBackground from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Image with Enhanced Visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/90" />
      
      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold drop-shadow-lg">About TELLIARCH LIMITED</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-secondary via-white to-secondary mx-auto mb-6 rounded-full"
            animate={{ 
              width: ["96px", "144px", "96px"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <p className="text-lg text-white/90 leading-relaxed">
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
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="shadow-2xl hover:shadow-secondary/30 transition-all duration-500 border-none bg-white/10 backdrop-blur-md group h-full border border-white/20">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="text-white" size={36} />
                  </motion.div>
                  <h3 className="mb-4 text-2xl text-white font-bold">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">
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
          <Card className="shadow-2xl border-none bg-white/10 backdrop-blur-md border border-white/20">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl text-center text-white font-bold">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-semibold text-secondary mb-2 text-lg">Registered Office</p>
                  <p className="text-white/80">
                    P.O BOX 395-10230<br />
                    SAGANA, KENYA
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-semibold text-secondary mb-2 text-lg">Our Expertise</p>
                  <p className="text-white/80">
                    Strategic Management, Human Resources, Finance & Accounting, 
                    Marketing, Psychology & Counselling
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
