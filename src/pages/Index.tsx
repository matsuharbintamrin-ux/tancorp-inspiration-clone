import TancorpNavigation from "@/components/TancorpNavigation";
import TancorpHero from "@/components/TancorpHero";
import TancorpCulture from "@/components/TancorpCulture";
import TancorpStats from "@/components/TancorpStats";
import TancorpVision from "@/components/TancorpVision";
import TancorpBusinessUnits from "@/components/TancorpBusinessUnits";
import TancorpImageSection from "@/components/TancorpImageSection";
import TancorpNews from "@/components/TancorpNews";
import TancorpFooter from "@/components/TancorpFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TancorpNavigation />
      <TancorpHero />
      <TancorpCulture />
      <TancorpStats />
      <TancorpVision />
      <TancorpBusinessUnits />
      <TancorpImageSection />
      <TancorpNews />
      <TancorpFooter />
    </div>
  );
};

export default Index;
