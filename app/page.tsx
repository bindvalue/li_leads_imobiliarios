import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Numbers from "../components/Numbers";
import Services from "../components/Services";
import Differentials from "../components/Differentials";
import HowItWorks from "../components/HowItWorks";
import CtaFinal from "../components/CtaFinal";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Numbers />
      <Services />
      <Differentials />
      <HowItWorks />
      <CtaFinal />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}