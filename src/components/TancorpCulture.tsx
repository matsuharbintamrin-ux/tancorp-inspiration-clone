const TancorpCulture = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Bagaimana kinerja kami dalam mewujudkan visi dan misi kami ?
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hadir dengan <span className="italic">tagline</span> "For a Better Human Life", 
              <span className="font-semibold"> Surya Grisse</span> memiliki visi dan misi menghadirkan 
              produk arang premium dan layanan terbaik bagi pelanggan. Dalam mewujudkannya, 
              kami membangun budaya kerja yang kami sebut dengan 
              <span className="font-bold text-accent"> CINTA</span>.
            </p>

          </div>

          <div className="flex justify-center">
             <a
              href="#products"
              className="px-8 py-4 bg-accent text-white text-lg font-semibold shadow-md 
              hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              View more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TancorpCulture;
