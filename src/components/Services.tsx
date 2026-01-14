import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, DollarSign, Target, TrendingUp, Heart, Compass } from "lucide-react";
import { motion } from "framer-motion";
import servicesBackground from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Users,
    title: "Human Resource Management",
    description: "Comprehensive HR solutions including recruitment, training, performance management, and employee relations.",
    details: [
      "Recruitment and Staffing",
      "Training and Development",
      "Employee Relations Management",
      "Compensation and Benefits",
      "Legal Compliance and Risk Management",
      "Performance Management Systems"
    ]
  },
  {
    icon: DollarSign,
    title: "Financial Management & Accounting",
    description: "Expert financial consulting to optimize your business's financial health and reporting.",
    details: [
      "Financial Accounting",
      "Managerial Accounting",
      "Tax Accounting",
      "Financial Planning",
      "Financial Analysis and Control",
      "Investment Decisions"
    ]
  },
  {
    icon: Target,
    title: "Strategic Management",
    description: "Develop and implement strategic plans to achieve your organizational goals.",
    details: [
      "Strategic Analysis and Reporting",
      "Vision and Mission Development",
      "Long-term Strategic Planning",
      "Organizational Structure Design",
      "SWOT Analysis",
      "Implementation and Evaluation"
    ]
  },
  {
    icon: TrendingUp,
    title: "Brand Management & Marketing",
    description: "Build strong brands and effective marketing strategies for market leadership.",
    details: [
      "Brand Strategy Development",
      "Market Research",
      "Marketing Campaign Management",
      "Advertising and Promotion",
      "Public Relations",
      "Product Design and Positioning"
    ]
  },
  {
    icon: Heart,
    title: "Mental Health & Wellness Solutions",
    description: "Comprehensive mental wellness programs for individuals and organizations to enhance productivity and well-being.",
    details: [
      "Guidance and Counseling",
      "Individual Therapy Sessions",
      "Corporate Wellness Programs",
      "Stress Management",
      "Work-Life Balance Consultation",
      "Emotional Intelligence Development"
    ]
  },
  {
    icon: Compass,
    title: "Mentorship & Coaching",
    description: "Personalized mentorship and coaching programs designed for individuals and institutions to unlock potential.",
    details: [
      "One-on-One Mentorship",
      "Leadership Coaching",
      "Career Development Guidance",
      "Institutional Training Programs",
      "Executive Coaching",
      "Personal Growth Workshops"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Image with Enhanced Visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/90 via-primary/85 to-primary/90" />
      
      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold drop-shadow-lg">Our Services</h2>
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
          <p className="text-lg text-white/90">
            Comprehensive consultancy solutions tailored to your business needs, 
            delivered by experienced professionals across multiple disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="shadow-2xl hover:shadow-secondary/30 transition-all duration-500 border-none bg-white/10 backdrop-blur-md group h-full border border-white/20">
                <CardHeader>
                  <motion.div 
                    className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="text-white" size={28} />
                  </motion.div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start text-sm text-white/70"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="text-secondary mr-2 font-bold">•</span>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
