import { useParams } from "react-router-dom";
import ProductHeader from "@/components/product/ProductHeader";
import ProductHero from "@/components/product/ProductHero";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductImage from "@/components/product/ProductImage";
import ProductDetails from "@/components/product/ProductDetails";
import HexagonalCharcoalSection from "@/components/product/HexagonalCharcoalSection"; // ⬅️ tambahkan ini

const ProductPage = () => {
  const { slug } = useParams(); // ambil slug dari URL
  console.log("Current product slug:", slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProductHeader />
      <ProductHero />
      <ProductBreadcrumb />

      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage />
        <ProductDetails />
      </section>

      {/* 🟢 Tambahkan section "What Makes Us the Obvious Choice" + FAQ */}
      <HexagonalCharcoalSection />
    </div>
  );
};

export default ProductPage;
