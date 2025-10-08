import { Building2, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, value: "15+", label: "Unit Bisnis" },
    { icon: Users, value: "5000+", label: "Karyawan" },
    { icon: TrendingUp, value: "8+", label: "Tahun Berkembang" },
    { icon: Award, value: "50+", label: "Penghargaan" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-accent/30 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-6 py-2 bg-accent/10 rounded-full">
            <span className="text-accent font-semibold">Tentang Kami</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Memimpin Berbagai Sektor Industri
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Excellence Corporation adalah perusahaan induk terkemuka yang didirikan dengan visi untuk 
            membangun masa depan berkelanjutan. Kami telah memimpin berbagai lintas sektor—mulai dari 
            manufaktur, distribusi, teknologi, properti, hingga gaya hidup dan investasi.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Berbekal reputasi yang kuat, semangat kewirausahaan, inovasi berkelanjutan, serta tata kelola 
            yang terpercaya, kami berdiri sebagai pilar pertumbuhan yang berkelas nasional sekaligus 
            diperhitungkan di panggung global.
          </p>

          <div className="pt-8">
            <div className="inline-block p-8 bg-gradient-to-br from-primary to-primary-glow rounded-2xl text-primary-foreground">
              <p className="text-2xl font-bold mb-2">Visi Kami</p>
              <p className="text-lg opacity-90">
                "Untuk Kehidupan Manusia yang Lebih Baik"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
