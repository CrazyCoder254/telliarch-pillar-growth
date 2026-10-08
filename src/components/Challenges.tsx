import { motion } from "framer-motion";
import {
  Wine,
  HeartCrack,
  LifeBuoy,
  CloudRain,
  HeartHandshake,
  Flame,
  Baby,
  UserX,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

const challenges = [
  {
    icon: Wine,
    title: "Addiction & Substance Abuse",
    struggle: "When alcohol or substances start to control your choices, relationships and future.",
    hope: "Recovery is possible — and it starts with one honest conversation.",
  },
  {
    icon: HeartCrack,
    title: "Marital & Family Conflicts",
    struggle: "Constant arguments, silence, or distance where love and connection used to be.",
    hope: "Families can heal, reconnect and rebuild trust again.",
  },
  {
    icon: LifeBuoy,
    title: "Suicidal Thoughts & Self-Harm",
    struggle: "Feeling like the pain will never end, or that the world is better without you.",
    hope: "Your life matters. There is help, and there is hope — right now.",
  },
  {
    icon: CloudRain,
    title: "Anxiety & Depression",
    struggle: "The heaviness that makes ordinary days feel impossible and joy feel far away.",
    hope: "You can regain calm, clarity and control of your life again.",
  },
  {
    icon: Flame,
    title: "Stress & Burnout",
    struggle: "Work, school or responsibilities pushing you past your limits every single day.",
    hope: "Sustainable balance is not a luxury — it's something you can learn.",
  },
  {
    icon: HeartHandshake,
    title: "Grief & Loss",
    struggle: "Losing someone or something dear, and feeling like no one truly understands.",
    hope: "You don't have to walk the journey of loss alone.",
  },
  {
    icon: Baby,
    title: "Child & Teen Struggles",
    struggle: "Your child is withdrawn, rebellious, anxious — and you don't know how to reach them.",
    hope: "With the right support, young people can thrive again.",
  },
  {
    icon: UserX,
    title: "Loneliness & Isolation",
    struggle: "Being surrounded by people, yet feeling completely unseen and unheard.",
    hope: "Meaningful connection is possible — and it can begin today.",
  },
];

const Challenges = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="challenges" className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-warm-solid font-semibold mb-3">
            Sound Familiar?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">You Are </span>
            <span className="text-warm-solid">Not Alone</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Many people are quietly facing challenges like these. Whatever you're carrying today,
            it can be talked about — and it can get better. Find your story below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-smooth border border-secondary/30 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 ring-2 ring-secondary/40 group-hover:scale-110 transition-smooth">
                <c.icon className="text-secondary" size={24} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-grow">
                {c.struggle}
              </p>
              <p className="text-sm font-semibold text-warm-solid leading-snug border-t border-border/60 pt-3">
                {c.hope}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mt-14 bg-card/80 backdrop-blur-sm border border-secondary/40 rounded-2xl p-8 md:p-10 shadow-elegant"
        >
          <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Whatever you saw above — <span className="text-warm-solid">there is a way forward.</span>
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Reaching out is not weakness; it is the bravest first step. Our doors — and our hearts — are open 24/7.
          </p>
          <Button onClick={scrollToContact} variant="hero" size="lg" className="text-lg px-8 py-6">
            Start the Conversation
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenges;
