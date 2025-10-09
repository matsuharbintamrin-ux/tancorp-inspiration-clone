import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame, Clock, Leaf, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // ✅ pakai react-icons

const ProductDetails = () => {
  const features = [
    { icon: Flame, text: "Panas yang Tinggi" },
    { icon: Clock, text: "Waktu Pembakaran Lama" },
    { icon: Leaf, text: "Ramah Lingkungan & Alami" },
    { icon: Star, text: "Kualitas Premium" },
  ];

  const benefits = [
    "Terbuat dari 100% tempurung kelapa alami",
    "Dapat menyala hingga 3 jam terus-menerus",
    "Tanpa percikan api, tanpa asap, tanpa bau",
    "Bentuk heksagonal sempurna untuk panas merata",
    "Ideal untuk BBQ, shisha, dan memanggang",
    "Diproduksi dengan cara yang berkelanjutan bagi lingkungan",
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <Badge className="mb-3 bg-primary text-primary-foreground">Produk Premium</Badge>
        <h1 className="text-4xl font-bold mb-4">
          Arang Heksagonal Ramah Lingkungan di Pleasure Point dari Red Star Charcoal
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Red Star Charcoal yang berbasis di Pleasure Point adalah pemasok utama produk arang premium yang terkenal karena menghadirkan pengalaman memanggang dan kuliner yang luar biasa. 
          Dengan pengalaman bertahun-tahun di industri arang, kami dikenal karena menyediakan arang heksagonal berkualitas tinggi, ramah lingkungan, dan tahan lama di Pleasure Point.
        </p>
      </div>

      {/* 🔹 Fitur Produk */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
          >
            <feature.icon className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* 🔹 Keunggulan Produk */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-2xl font-semibold mb-4">Keunggulan Produk</h2>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Tombol WhatsApp */}
      <div className="pt-6">
        <p className="text-muted-foreground mb-6">
          Produk kami mencakup arang tradisional serta varian modern seperti arang heksagonal premium di Pleasure Point,
          yang semakin populer berkat efisiensi dan kemudahannya.
        </p>

        <a
          href="https://wa.me/6282333899903?text=Halo%20Red%20Star%20Charcoal%2C%20saya%20tertarik%20dengan%20produk%20arang%20heksagonal%20Anda."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="bg-[#25D366] hover:bg-[#1EBE5C] text-white px-8 py-6 text-lg font-semibold flex items-center gap-3 rounded-lg shadow-lg transition-all"
          >
            <FaWhatsapp className="h-6 w-6" />
            Hubungi Kami di WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
