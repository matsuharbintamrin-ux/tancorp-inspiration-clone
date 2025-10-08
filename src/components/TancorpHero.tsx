import heroImage from "@/assets/hero-main.jpg";

const TancorpHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-6xl">
          <h1 className="text-7xl md:text-9xl font-bold text-primary-foreground mb-8 tracking-tight">
            Tancorp
          </h1>
          
          <div className="max-w-4xl space-y-6">
            <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed">
              TANCORP adalah perusahaan induk terkemuka yang didirikan oleh Hermanto Tanoko pada tahun 2015, 
              dan saat ini telah memimpin berbagai lintas sektor—mulai dari manufaktur bahan bangunan, 
              makanan & minuman, distribusi, kosmetik, kesehatan, properti, hospitalitas hingga gaya hidup 
              dan investasi merger & akuisisi.
            </p>
            
            <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed">
              Berbekal reputasi yang kuat, semangat kewirausahaan, inovasi berkelanjutan, serta tata kelola 
              yang terpercaya, TANCORP berdiri sebagai pilar pertumbuhan yang berkelas nasional sekaligus 
              diperhitungkan di panggung global.
            </p>
            
            <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed font-medium">
              Lebih dari sekadar holding company, TANCORP merupakan kekuatan bisnis visioner yang menghadirkan 
              nilai, membangun dampak sosial, dan mendorong keberlanjutan. Semangat tersebut terwujud dalam satu 
              komitmen yang tak tergoyahkan: <span className="text-accent">Driving Growth with Impact</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TancorpHero;
