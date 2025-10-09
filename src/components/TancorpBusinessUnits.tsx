import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // ⬅️ tambahkan ini
import charcoalPic from "@/assets/hexagonal.jpg";

const ProductVariant = () => {
  const navigate = useNavigate(); // ⬅️ inisialisasi router

  const variants = [
    { name: "Hexagonal Charcoal", subtitle: "Permukaan luas, panas merata", image: charcoalPic, slug: "hexagonal-charcoal" },
    { name: "Perforated Charcoal", subtitle: "Efisien untuk kebutuhan besar", image: charcoalPic, slug: "perforated-charcoal" },
    { name: "Special Charcoal", subtitle: "Bentuk khusus sesuai permintaan", image: charcoalPic, slug: "special-charcoal" },
    { name: "Hardwood Charcoal", subtitle: "Bahan kayu alami, panas cepat", image: charcoalPic, slug: "hardwood-charcoal" },
    { name: "Barbeque Charcoal", subtitle: "Aman untuk makanan & BBQ", image: charcoalPic, slug: "barbeque-charcoal" },
    { name: "Finger Charcoal", subtitle: "Ukuran kecil, mudah disusun", image: charcoalPic, slug: "finger-charcoal" },
    { name: "Coconut Charcoal", subtitle: "Ramah lingkungan dan tahan lama", image: charcoalPic, slug: "coconut-charcoal" },
    { name: "Premium Export", subtitle: "Standar ekspor internasional", image: charcoalPic, slug: "premium-export" },
    { name: "Cube Charcoal", subtitle: "Cocok untuk shisha dan makanan", image: charcoalPic, slug: "cube-charcoal" },
    { name: "Eco Charcoal", subtitle: "Menggunakan bahan ramah lingkungan", image: charcoalPic, slug: "eco-charcoal" },
    { name: "Quick Burn", subtitle: "Cepat menyala, cocok untuk dapur", image: charcoalPic, slug: "quick-burn" },
    { name: "Long Lasting", subtitle: "Tahan panas lebih lama", image: charcoalPic, slug: "long-lasting" },
    { name: "BBQ Pro", subtitle: "Untuk kebutuhan kuliner profesional", image: charcoalPic, slug: "bbq-pro" },
    { name: "Coconut Premium", subtitle: "Kualitas tinggi dari kelapa pilihan", image: charcoalPic, slug: "coconut-premium" },
    { name: "Outdoor Charcoal", subtitle: "Ideal untuk aktivitas luar ruangan", image: charcoalPic, slug: "outdoor-charcoal" },
    { name: "Black Diamond", subtitle: "Varian eksklusif berstandar tinggi", image: charcoalPic, slug: "black-diamond" },
  ];

  // Bagi jadi kelompok 8 item per slide
  const groupedVariants = [];
  for (let i = 0; i < variants.length; i += 8) {
    groupedVariants.push(variants.slice(i, i + 8));
  }

  return (
    <section id="product" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase">
            PRODUCT VARIANT
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Kami menghadirkan berbagai varian arang premium yang diproduksi dengan standar tinggi dan bahan alami ramah lingkungan.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          className="max-w-6xl mx-auto"
        >
          {groupedVariants.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.map((variant, i) => (
                  <div
                    key={i}
                    onClick={() => navigate(`/product/${variant.slug}`)} // ⬅️ navigasi ke halaman produk
                    className="group flex flex-col items-center p-8 bg-background hover:bg-accent transition-all duration-300 border-2 border-transparent hover:border-accent rounded-2xl cursor-pointer"
                  >
                    <div className="w-32 h-32 rounded-full bg-primary/5 flex items-center justify-center mb-6 overflow-hidden">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-background mb-2 text-center transition-colors">
                      {variant.name}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-background/80 text-sm text-center transition-colors">
                      {variant.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductVariant;
