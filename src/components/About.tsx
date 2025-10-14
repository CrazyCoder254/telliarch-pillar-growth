import { Card, CardContent } from "./ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-primary">About TELLIARCH LIMITED</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            TELLIARCH LIMITED is a premier business consultancy firm dedicated to providing 
            comprehensive support to businesses in achieving their strategic objectives. 
            Inspired by architectural principles where an arch provides structural support, 
            we serve as the pillar of strength for your business growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none bg-card/80 backdrop-blur-sm group animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="mb-4 text-xl text-primary font-bold">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To partner with organizations to optimize their human resource, financial strategies 
                and marketing efforts through tailored consultancy services fostering growth and 
                enabling businesses to unleash their full potential.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none bg-card/80 backdrop-blur-sm group animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="mb-4 text-xl text-primary font-bold">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the trusted partner for businesses of all sizes worldwide, delivering expert 
                consultancy solutions that drive sustainable growth, operational excellence and 
                competitive advantage for our clients.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-smooth border-none bg-card/80 backdrop-blur-sm group animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="mb-4 text-xl text-primary font-bold">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Born from diverse inspirations and professional expertise in HR, finance, psychology, 
                and strategic management, we've helped numerous startups achieve desired brand 
                positioning and recognition.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-elegant border-none bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
      </div>
    </section>
  );
};

export default About;
