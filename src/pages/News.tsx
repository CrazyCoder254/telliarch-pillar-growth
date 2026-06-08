import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsItems = [
  {
    tag: "Awareness",
    date: "June 2026",
    title: "June — Men's Mental Health Awareness Month",
    body:
      "This June, Telliarch joins the global movement to break the silence around men's mental health. Men are statistically less likely to seek help when struggling — yet just as deserving of compassion, listening and support. Throughout the month we are sharing reflections, free check-in resources and confidential counselling slots for men of every age. If you or someone you love is going through a hard season, reach out — you are not alone.",
  },
  {
    tag: "Community",
    date: "Ongoing",
    title: "Free Wellness Check-Ins Every Friday",
    body:
      "Every Friday afternoon, our counsellors offer free 20-minute wellness check-ins for individuals and families. Book a slot through the Contact section — confidential and judgment-free.",
  },
  {
    tag: "Workplace",
    date: "2026",
    title: "Corporate Wellbeing Workshops",
    body:
      "We are rolling out our Workplace Wellbeing Series for HR teams and leaders — focused on burnout prevention, psychological safety and sustainable performance.",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 mb-12">
          <Link to="/" className="inline-flex items-center text-secondary hover:text-primary transition-smooth mb-6">
            <ArrowLeft className="mr-2" size={18} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Latest News</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Updates, awareness campaigns and announcements from the Telliarch Mental Wellness Network.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((n, i) => (
              <motion.article
                key={n.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50 hover:shadow-glow transition-smooth"
              >
                <div className="flex items-center gap-2 text-xs mb-3">
                  <span className="px-2 py-1 rounded-full bg-secondary/20 text-secondary font-semibold">{n.tag}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.body}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
