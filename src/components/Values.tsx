import { Shield, Lightbulb, Target, Users2 } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Integritas",
      description: "Komitmen kuat terhadap kejujuran, transparansi, dan etika bisnis yang tinggi",
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description: "Terus berinovasi untuk menciptakan solusi terbaik dan menghadapi tantangan masa depan",
    },
    {
      icon: Target,
      title: "Keunggulan",
      description: "Berusaha mencapai standar tertinggi dalam setiap aspek operasional dan layanan kami",
    },
    {
      icon: Users2,
      title: "Kolaborasi",
      description: "Membangun kemitraan yang kuat dan saling menguntungkan dengan semua stakeholder",
    },
  ];

  return (
    <section id="values" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent font-semibold">Nilai-Nilai Kami</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Budaya yang Menginspirasi
          </h2>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Fondasi kuat yang membimbing setiap keputusan dan tindakan kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold">{value.title}</h3>
              
              <p className="text-primary-foreground/80">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm rounded-2xl border border-accent/30">
            <p className="text-3xl font-bold mb-2">Driving Growth with Impact</p>
            <p className="text-xl text-primary-foreground/80">
              Komitmen kami untuk pertumbuhan yang berkelanjutan dan bermakna
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
