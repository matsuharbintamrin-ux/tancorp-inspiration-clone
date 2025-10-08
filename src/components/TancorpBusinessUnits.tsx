import { Package, Link, TrendingUp, Building2, Award, Heart, Briefcase, Globe } from "lucide-react";

const TancorpBusinessUnits = () => {
  const units = [
    { icon: Package, name: "TanBiz", subtitle: "Brand" },
    { icon: Link, name: "TanLink", subtitle: "Distribution" },
    { icon: TrendingUp, name: "TanRise", subtitle: "Property" },
    { icon: Building2, name: "TanLy", subtitle: "Hospitality" },
    { icon: Award, name: "TanObel", subtitle: "Manufacturing" },
    { icon: Heart, name: "TanLife", subtitle: "Health & Beauty" },
    { icon: Briefcase, name: "TanVest", subtitle: "Investment" },
    { icon: Globe, name: "TanWorld", subtitle: "Global" },
  ];

  return (
    <section id="business" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase">
            BUSINESS UNITS of TANCORP
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Seiring berjalannya waktu, kami berkomitmen untuk terus bertumbuh dan berkembang melalui 
            pengembangan produk dan layanan inovatif yang akan memberikan value lebih bagi konsumen 
            melalui 8 Subholding yang bergerak di bidang industri yang berbeda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {units.map((unit, index) => (
            <a
              key={index}
              href="#"
              className="group flex flex-col items-center p-8 bg-background hover:bg-accent transition-all duration-300 border-2 border-transparent hover:border-accent"
            >
              <div className="w-24 h-24 rounded-full bg-primary/5 group-hover:bg-background flex items-center justify-center mb-6 transition-colors">
                <unit.icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground group-hover:text-background mb-2 transition-colors">
                {unit.name}
              </h3>
              
              <p className="text-muted-foreground group-hover:text-background/80 text-sm transition-colors">
                {unit.subtitle}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TancorpBusinessUnits;
