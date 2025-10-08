import statsImage from "@/assets/stats-bg.jpg";

const SuryaGrisseStats = () => {
  const stats = [
    { value: "10.000+", label: "Ton Arang Diproduksi / Tahun" },
    { value: "25+", label: "Negara Tujuan Ekspor" },
    { value: "5+", label: "Fasilitas Produksi" },
    { value: "300+", label: "Tenaga Kerja Terampil" },
    { value: "100%", label: "Alami & Berkelanjutan" },
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${statsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary/95" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-4">
            PENCAPAIAN KAMI
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-accent mb-4">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/90 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuryaGrisseStats;
