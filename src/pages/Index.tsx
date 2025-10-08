import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BusinessUnits from "@/components/BusinessUnits";
import Values from "@/components/Values";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <BusinessUnits />
      <Values />
      <Footer />
    </div>
  );
};

export default Index;
