import Navbar from "@/components/Navbar";
import InfoStrip from "@/components/InfoStrip";
import Hero from "@/components/Hero";
import QuickServices from "@/components/QuickServices";
import About from "@/components/About";
import Services from "@/components/Services";
import Tips from "@/components/Tips";
import Programs from "@/components/Programs";
import Values from "@/components/Values";
import Blog from "@/components/Blog";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import CallBack from "@/components/CallBack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InfoStrip />
      <QuickServices />
      <About />
      <Services />
      <Tips />
      <Programs />
      <Values />
      <Blog />
      <Partners />
      <Newsletter />
      <CallBack />
      <Contact />
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
