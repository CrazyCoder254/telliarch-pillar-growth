import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  inquiry: z.string().min(1, "Please choose an inquiry type"),
});

const CallBack = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", inquiry: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Please check the form",
        description: parsed.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    // Open WhatsApp with prefilled message — simple, no extra backend needed
    const message = encodeURIComponent(
      `Hello Telliarch, I'd like a call back.\n\nName: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nEmail: ${parsed.data.email}\nInquiry: ${parsed.data.inquiry}`
    );
    window.open(`https://wa.me/254720599457?text=${message}`, "_blank");

    toast({
      title: "Request sent",
      description: "We'll be in touch shortly. WhatsApp has opened with your details.",
    });
    setForm({ name: "", phone: "", email: "", inquiry: "" });
    setSubmitting(false);
  };

  return (
    <section className="relative py-20 overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-primary/40" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-background/95 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-elegant border border-white/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Request a Call Back</h2>
            <p className="text-muted-foreground">
              Leave your details and a member of our team will reach out shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              required
            />
            <Input
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
              required
            />
            <Input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="md:col-span-2"
              required
            />
            <Select
              value={form.inquiry}
              onValueChange={(v) => setForm({ ...form, inquiry: v })}
            >
              <SelectTrigger className="md:col-span-2">
                <SelectValue placeholder="Type of inquiry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Consultation">Consultation</SelectItem>
                <SelectItem value="Therapy Session">Therapy Session</SelectItem>
                <SelectItem value="Mentorship">Mentorship</SelectItem>
                <SelectItem value="Corporate Training">Corporate Training</SelectItem>
                <SelectItem value="General Inquiry">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="md:col-span-2 mt-2"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Call Me Back"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CallBack;
