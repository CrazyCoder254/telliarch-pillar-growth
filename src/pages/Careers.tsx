import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Clock, MapPin } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Human Resource Consultant",
      type: "Full-time",
      location: "Sagana, Kenya",
      description: "Join our team to help businesses optimize their human resource strategies and foster organizational growth."
    },
    {
      title: "Financial Management Consultant",
      type: "Full-time",
      location: "Sagana, Kenya",
      description: "Work with diverse clients to provide expert financial management and accounting consultancy services."
    },
    {
      title: "Strategic Management Consultant",
      type: "Full-time",
      location: "Sagana, Kenya",
      description: "Help organizations develop and implement strategic plans to achieve their long-term goals."
    },
    {
      title: "Marketing & Brand Consultant",
      type: "Full-time",
      location: "Sagana, Kenya",
      description: "Drive brand positioning and marketing strategies for businesses across various industries."
    }
  ];

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
              <Card className="shadow-elegant border-none bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
                  <p className="text-muted-foreground">Continuous learning and development opportunities</p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-none bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Work-Life Balance</h3>
                  <p className="text-muted-foreground">Flexible work arrangements and supportive culture</p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-none bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Impactful Work</h3>
                  <p className="text-muted-foreground">Make a real difference in businesses' success</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth border-none bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
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
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
