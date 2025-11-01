import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, DollarSign, Target, TrendingUp, Heart } from "lucide-react";
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
    title: "Guidance & Counselling",
    description: "Mental wellness solutions for individuals and organizations to enhance productivity.",
    details: [
      "Individual Counseling",
      "Corporate Wellness Programs",
      "Stress Management",
      "Work-Life Balance Consultation",
      "Team Building Support",
      "Emotional Intelligence Development"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-primary">Our Services</h2>
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
            Comprehensive consultancy solutions tailored to your business needs, 
            delivered by experienced professionals across multiple disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
            >
              <Card
              className="shadow-elegant hover:shadow-glow transition-smooth border-none bg-card/80 backdrop-blur-sm group h-full"
            >
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-secondary mr-2 font-bold">•</span>
                      {detail}
                    </li>
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
