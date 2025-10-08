import {
  Leaf,
  Flame,
  ShieldCheck,
  Wind,
  Sparkles,
  Clock,
  Droplet,
  FireExtinguisher,
} from "lucide-react";

const expertiseItems = [
  {
    icon: Flame,
    title: "100% Coconut Shells",
    desc: "Dikembangkan dari 100% arang tempurung kelapa organik yang menghasilkan briket berkualitas tinggi dengan panas maksimal.",
  },
  {
    icon: ShieldCheck,
    title: "No Additive",
    desc: "Tanpa bahan tambahan berbahaya — bebas bau, bebas polusi, dan aman digunakan di berbagai tempat.",
  },
  {
    icon: Wind,
    title: "Efficient Heating",
    desc: "Menghasilkan panas efektif tanpa mengubah rasa makanan atau menimbulkan asap berlebihan.",
  },
  {
    icon: Clock,
    title: "Durable",
    desc: "Menyala stabil lebih dari dua jam dengan suhu konsisten dan daya tahan tinggi.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Sisa abu sangat sedikit dan tidak mudah menyebar — ramah lingkungan dan mudah dibersihkan.",
  },
  {
    icon: Sparkles,
    title: "No Sparks",
    desc: "Bebas percikan api, aman digunakan di dalam ruangan maupun luar ruangan.",
  },
  {
    icon: FireExtinguisher,
    title: "Strong Product",
    desc: "Bentuk padat tahan benturan dan panas, mudah disusun serta tidak mudah hancur.",
  },
  {
    icon: Droplet,
    title: "Popular for Shisha & BBQ",
    desc: "Ideal untuk shisha dan BBQ — pembakaran bertahap dengan panas merata tanpa asap.",
  },
];

const ProductsExpertise = () => {
  return (
    <section id="expertise" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase">
            OUR PRODUCTS EXPERTISE
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Surya Grisse mengembangkan produk arang dengan performa pemanasan
            luar biasa yang cocok untuk berbagai kebutuhan pemanasan dan ramah
            lingkungan.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-accent text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-md hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsExpertise;
