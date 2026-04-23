import { Droplet, MessageCircle, Smile, Activity, Moon, Ban, Users, Sparkles, HandHeart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const tips = [
  { icon: Droplet, title: "Hydrate", text: "Drink a glass of water in the morning" },
  { icon: MessageCircle, title: "Connect", text: "Call someone who makes you laugh" },
  { icon: Smile, title: "Reflect", text: "Think about your good qualities" },
  { icon: Activity, title: "Move", text: "Walk 20 minutes, 3 times a week" },
  { icon: Moon, title: "Rest", text: "Sleep 7–9 hours in a dark room" },
  { icon: Ban, title: "Limit Alcohol", text: "Keeps your blood sugar stable" },
  { icon: Users, title: "Socialize", text: "Make meaningful social connections" },
  { icon: Sparkles, title: "Hobbies", text: "Find new activities you enjoy" },
  { icon: HandHeart, title: "Be Kind", text: "Do someone a small favour" },
];

const Tips = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Wellness Tips</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Mental Wellness Reminders</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background rounded-xl p-4 text-center shadow-sm hover:shadow-elegant transition-smooth border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-3">
                <tip.icon className="text-secondary" size={20} />
              </div>
              <h4 className="text-sm font-bold mb-1 text-foreground">{tip.title}</h4>
              <p className="text-xs text-muted-foreground leading-snug">{tip.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-base text-foreground mb-4 font-medium">
            Start the journey to better business and personal wellbeing today.
          </p>
          <Button onClick={scrollToContact} variant="hero" size="lg">
            Book a Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tips;
