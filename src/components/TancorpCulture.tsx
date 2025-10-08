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
              Hadir dengan <span className="italic">tagline</span> "For a Better Human Life", Tancorp memiliki 
              visi dan misi menyejahterakan Bangsa Indonesia. Dalam mewujudkan visi dan misi tersebut, 
              kami membangun culture yang kami sebut dengan <span className="font-bold text-accent">CINTA</span>.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-medium"
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
