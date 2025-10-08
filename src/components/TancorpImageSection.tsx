import { useEffect, useState } from "react";
import imageSectionBg from "@/assets/own-charcoal.jpg";
import { Button } from "@/components/ui/button";

const TancorpImageSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi apakah sedang di mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-[480px] sm:h-[600px] md:h-[700px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageSectionBg})`,
          backgroundAttachment: isMobile ? "scroll" : "fixed",
        }}
      >
        {/* Overlay gelap agar teks kontras */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Text + buttons */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Pabrik Arang Premium
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md mb-8">
          Surya Grisse — Menghadirkan arang berkualitas tinggi, alami, dan berkelanjutan 
          untuk pasar lokal maupun internasional.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent text-white hover:bg-accent/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
          >
            Order Now
          </Button>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TancorpImageSection;
