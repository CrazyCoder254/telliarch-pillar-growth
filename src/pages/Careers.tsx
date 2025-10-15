import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const [positions, setPositions] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ 
        title: "Error loading jobs", 
        description: error.message, 
        variant: "destructive" 
      });
    } else {
      setPositions(data || []);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Be part of a dynamic team dedicated to empowering businesses and driving excellence. 
              We're looking for passionate professionals who share our values of integrity, innovation, and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-6">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Briefcase,
                  title: "Professional Growth",
                  description: "Continuous learning and development opportunities"
                },
                {
                  icon: Clock,
                  title: "Work-Life Balance",
                  description: "Flexible work arrangements and supportive culture"
                },
                {
                  icon: MapPin,
                  title: "Impactful Work",
                  description: "Make a real difference in businesses' success"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Card className="shadow-elegant border-none bg-card/80 backdrop-blur-sm h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                >
                  <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 text-primary">{position.title}</h3>
                          <div className="flex flex-wrap gap-4 mb-4">
                            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                              <Briefcase size={16} className="text-secondary" />
                              {position.type}
                            </span>
                            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin size={16} className="text-secondary" />
                              {position.location}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{position.description}</p>
                        </div>
                        <Button variant="default" size="lg" className="gradient-accent text-white border-none hover:opacity-90">
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="max-w-3xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="shadow-elegant border-none gradient-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Don't See Your Role?</h3>
                <p className="text-white/90 mb-6">
                  We're always looking for talented individuals. Send us your CV and let us know how you can contribute to our mission.
                </p>
                <Button variant="secondary" size="lg">
                  Send Your CV
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
