import { useParams } from "react-router-dom";
import ProductHeader from "@/components/product/ProductHeader";
import ProductHero from "@/components/product/ProductHero";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductImage from "@/components/product/ProductImage";
import ProductDetails from "@/components/product/ProductDetails";
import HexagonalCharcoalSection from "@/components/product/HexagonalCharcoalSection"; // ✅ Tambahkan section baru

const ProductPage = () => {
  const { slug } = useParams(); // ambil slug dari URL
  console.log("Current product slug:", slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 🔹 Header, Hero, dan Breadcrumb */}
      <ProductHeader />
      <ProductHero />
      <ProductBreadcrumb />

      {/* 🔹 Gambar & Detail Produk */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:grid md:grid-cols-2 gap-10">
        <div className="order-1 md:order-none">
          <ProductImage />
        </div>
        <div className="order-2 md:order-none">
          <ProductDetails />
        </div>
      </section>

      {/* 🟢 Section tambahan: "What Makes Us the Obvious Choice" + FAQ */}
      <HexagonalCharcoalSection />
    </div>
  );
};

export default ProductPage;
