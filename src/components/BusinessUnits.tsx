import { Factory, ShoppingBag, Cpu, Building, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BusinessUnits = () => {
  const units = [
    {
      icon: Factory,
      title: "Manufaktur",
      description: "Produksi bahan bangunan dan material berkualitas tinggi untuk pembangunan infrastruktur modern",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-500"
    },
    {
      icon: ShoppingBag,
      title: "Distribusi & Retail",
      description: "Jaringan distribusi luas dengan sistem logistik terintegrasi untuk menjangkau seluruh nusantara",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-500"
    },
    {
      icon: Cpu,
      title: "Teknologi & Inovasi",
      description: "Solusi digital dan transformasi teknologi untuk meningkatkan efisiensi bisnis modern",
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-500"
    },
    {
      icon: Building,
      title: "Properti & Hospitalitas",
      description: "Pengembangan properti premium dan layanan hospitalitas kelas dunia",
      color: "from-amber-500/20 to-amber-600/20",
      iconColor: "text-amber-500"
    },
    {
      icon: Heart,
      title: "Kesehatan & Kosmetik",
      description: "Produk kesehatan dan kecantikan berkualitas untuk meningkatkan kualitas hidup masyarakat",
      color: "from-pink-500/20 to-pink-600/20",
      iconColor: "text-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Investasi & M&A",
      description: "Strategi investasi dan merger akuisisi untuk pertumbuhan berkelanjutan",
      color: "from-indigo-500/20 to-indigo-600/20",
      iconColor: "text-indigo-500"
    },
  ];

  return (
    <section id="business" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-6 py-2 bg-accent/10 rounded-full">
            <span className="text-accent font-semibold">Unit Bisnis Kami</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Diversifikasi Sektor Industri
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Portofolio bisnis yang beragam dan terintegrasi untuk memberikan nilai maksimal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 border-border hover:border-accent/50 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${unit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <unit.icon className={`w-8 h-8 ${unit.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {unit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {unit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnits;
