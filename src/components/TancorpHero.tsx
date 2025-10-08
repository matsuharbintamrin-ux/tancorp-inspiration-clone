import { useState, useEffect } from "react";
import hero3 from "@/assets/factory.webp";
import hero2 from "@/assets/charcoal.jpg";
import hero1 from "@/assets/own-charcoal.jpg";
import hero4 from "@/assets/art-co.webp";

const TancorpHero = () => {
  const images = [hero1, hero2, hero3, hero4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 pt-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-3xl md:text-8xl font-bold mb-6 tracking-tight 
            bg-gradient-to-r from-yellow-400 via-blue-500 via-orange-500 to-red-500 
            bg-clip-text text-transparent"
          >
            Surya Grisse
          </h1>

          <p className="text-2xl md:text-3xl font-medium text-primary-foreground/90 mb-8">
            Sustainable Charcoal, Trusted Quality
          </p>

          <div className="max-w-4xl mx-auto space-y-6 mb-10">
            <p className="text-lg md:text-2xl text-primary-foreground/95 leading-relaxed">
              Berdiri sejak 2015 oleh <strong>Heri Susanto</strong>, Surya Grisse
              telah tumbuh menjadi salah satu produsen{" "}
              <strong>charcoal premium</strong> di Indonesia.
              Kami memproduksi berbagai jenis arang — mulai dari{" "}
              <strong>briquette</strong> hingga
              <strong> natural lump charcoal</strong> — dengan komitmen pada{" "}
              <strong>kualitas, keberlanjutan, dan inovasi</strong> untuk memenuhi pasar lokal
              maupun ekspor.
            </p>
          </div>

          {/* 🎯 Tombol aksi */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#products"
              className="px-8 py-4 rounded-full bg-accent text-white text-lg font-semibold shadow-md 
              hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              Our Products
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-accent text-accent text-lg font-semibold 
              hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TancorpHero;
