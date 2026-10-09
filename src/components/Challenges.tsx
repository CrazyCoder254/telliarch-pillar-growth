import { motion } from "framer-motion";
import {
  Wine,
  HeartCrack,
  LifeBuoy,
  CloudRain,
  HeartHandshake,
  Baby,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const challenges = [
  {
    slug: "addiction-substance-abuse",
    icon: Wine,
    title: "Addiction & Substance Abuse",
    struggle: "When alcohol or substances start to control your choices, relationships and future.",
    hope: "Recovery is possible — and it starts with one honest conversation.",
  },
  {
    slug: "marital-family-conflicts",
    icon: HeartCrack,
    title: "Navigating Family Challenges and Life Transitions",
    struggle: "Family changes, conflict, and life transitions can affect everyone differently.",
    hope: "Every family has a story. Every transition deserves understanding.",
  },
  {
    slug: "suicidal-thoughts-self-harm",
    icon: LifeBuoy,
    title: "Suicide & Suicide Prevention",
    struggle: "Feeling like the pain will never end, or that the world is better without you.",
    hope: "Your life matters. There is help, and there is hope — right now.",
  },
  {
    slug: "anxiety-depression",
    icon: CloudRain,
    title: "Common Mental Health Conditions",
    struggle: "Mental health can shape how we think, feel, cope, and relate to others. Changes are worth understanding and discussing.",
    hope: "Understanding yourself. Recognising change. Seeking support.",
  },
  {
    slug: "grief-loss",
    icon: HeartHandshake,
    title: "Grief & Loss",
    struggle: "Losing someone or something dear, and feeling like no one truly understands.",
    hope: "Healing does not mean forgetting. You can learn to live with what has changed.",
  },
  {
    slug: "child-teen-struggles",
    icon: Baby,
    title: "Children and Teenagers: Understanding Developmental Challenges",
    struggle: "Growing up brings new emotional, social, and developmental needs for children and families to navigate.",
    hope: "Every stage of growing up brings new needs, questions, and possibilities.",
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
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-smooth border border-secondary/30 flex flex-col"
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
              <Button asChild variant="link" className="mt-4 h-auto justify-start p-0 text-warm-solid">
                <Link to={`/challenges/${c.slug}`}>
                  Read more <ArrowRight size={16} />
                </Link>
              </Button>
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
