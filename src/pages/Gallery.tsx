import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Gallery = () => {
  const galleryImages = [
    {
      title: "Strategic Planning Workshop",
      description: "Guiding businesses through comprehensive strategic planning sessions",
      category: "Workshops"
    },
    {
      title: "Team Building Activities",
      description: "Facilitating cohesive team development and collaboration",
      category: "Events"
    },
    {
      title: "Financial Consultancy",
      description: "Delivering expert financial management solutions",
      category: "Consulting"
    },
    {
      title: "HR Training Sessions",
      description: "Empowering organizations through human resource development",
      category: "Training"
    },
    {
      title: "Brand Development",
      description: "Creating impactful brand identities for our clients",
      category: "Marketing"
    },
    {
      title: "Client Success Stories",
      description: "Celebrating achievements and milestones with our partners",
      category: "Success"
    },
    {
      title: "Mental Wellness Programs",
      description: "Supporting employee well-being and mental health",
      category: "Wellness"
    },
    {
      title: "Business Strategy Meetings",
      description: "Collaborative sessions driving organizational excellence",
      category: "Strategy"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Our Gallery</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore moments from our journey of empowering businesses and fostering excellence. 
              From strategic workshops to team building events, see how we partner with organizations to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8 }}
              >
                <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none overflow-hidden group bg-card/80 backdrop-blur-sm h-full">
                  <div className="relative h-64 bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-smooth" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  </div>
                </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="max-w-3xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="shadow-elegant border-none gradient-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Want to Be Featured?</h3>
                <p className="text-white/90 mb-0">
                  Partner with us and be part of our success story. Let's create impactful moments together.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
