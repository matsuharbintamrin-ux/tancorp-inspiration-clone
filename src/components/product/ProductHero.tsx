import heroImage from "@/assets/own-charcoal.jpg";

const ProductHero = () => {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <img
        src={heroImage}
        alt="Charcoal Factory"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Products</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
