import { Card, CardContent } from "./ui/card";
import { Shield, Lightbulb, Star, Users, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We demonstrate high levels of honesty, accountability and courage in all our engagements."
  },
  {
    icon: Users,
    title: "Diversity",
    description: "We value multidimensional thinking and ideas in business growth and continuity."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We advocate and support creativity and innovation for betterment and improvement of processes and services."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We value quality of service and perfection, pursuing consistency and delivery of high standards."
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "We are committed to adhere to the governing professional code of conduct and ethics in service delivery."
  }
];

const Values = () => {
  return (
    <section id="values" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-primary">Our Core Values</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground">
            The principles that guide our work and define our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="shadow-elegant hover:shadow-glow transition-smooth border-none text-center bg-card group"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
