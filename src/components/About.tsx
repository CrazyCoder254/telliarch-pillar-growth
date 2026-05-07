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
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">About Us</p>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold drop-shadow-lg"><span className="text-white">Mental health is the </span><span className="text-gold-gradient">foundation of all growth</span></h2>
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
            Many individuals and organizations struggle not because of a lack of potential—but because emotional, psychological and relational challenges go unaddressed. We exist to bridge that gap by integrating mental wellness with personal and organizational development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 perspective-1000">
          {[
            {
              icon: Target,
              title: "Mission",
              description: "To empower individuals, families and institutions to achieve sustainable growth through mental health support, personal development and transformative programs."
            },
            {
              icon: Eye,
              title: "Vision",
              description: "To create healthier individuals, stronger families and thriving organizations grounded in emotional wellbeing and conscious growth."
            },
            {
              icon: Award,
              title: "Our Story",
              description: "Our work is rooted in a simple truth: mental health is the foundation of all growth. We integrate therapy, coaching and training to help people not just cope—but truly grow."
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
              whileHover={{ rotateY: 10, rotateX: -8, y: -10, scale: 1.03 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="shadow-2xl hover:shadow-secondary/40 transition-all duration-500 border-none bg-white/10 backdrop-blur-md group h-full border border-white/20">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ring-2 ring-secondary/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="text-secondary" size={36} />
                  </motion.div>
                  <h3 className="mb-4 text-2xl text-secondary font-bold">{item.title}</h3>
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
