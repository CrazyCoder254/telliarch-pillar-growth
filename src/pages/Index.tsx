import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoStrip from "@/components/InfoStrip";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import WhoWeServe from "@/components/WhoWeServe";
import OurApproach from "@/components/OurApproach";
import Programs from "@/components/Programs";
import Blog from "@/components/Blog";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import FinalCTA from "@/components/FinalCTA";
import CallBack from "@/components/CallBack";
import Contact from "@/components/Contact";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InfoStrip />
      <WhoWeAre />
      <Services />
      <WhoWeServe />
      <OurApproach />
      <Programs />
      <Blog />
      <Partners />
      <Newsletter />
      <FinalCTA />
      <CallBack />
      <Contact />
      <PartnerCTA />
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
