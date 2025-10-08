import React from "react";
import { Button } from "@/components/ui/button";

const CompanyPerspective: React.FC = () => {
  return (
    <section id="company-perspective" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12 text-center space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase">
            COMPANY PERSPECTIVE
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pandangan Surya Grisse dalam menghadirkan inovasi arang briket premium dari sumber daya alam Indonesia yang melimpah.
          </p>
        </div>

        {/* Video YouTube */}
        <div className="w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YJ67R90BuXk"
            title="Company Video"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Text + Button */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Surya Grisse berkomitmen menghadirkan arang briket berkualitas tinggi dari 100% tempurung kelapa,
            memanfaatkan potensi alam Indonesia untuk pasar dunia.
          </p>

          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold bg-accent text-background hover:bg-accent/80 transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompanyPerspective;
