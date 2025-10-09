import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import redstarLogo from "@/assets/logo.png";

const ProductHeader = () => {
  return (
    <header className="bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* 🟢 Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={redstarLogo}
              alt="Red Star Charcoal Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* 🟢 Navigation menu */}
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="/"
              className="text-white/90 hover:text-accent transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
            >
              HOME
            </a>
            <a
              href="#business"
              className="text-white/90 hover:text-accent transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
            >
              BUSINESS UNITS
            </a>
            <a
              href="#product"
              className="text-white/90 hover:text-accent transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
            >
              PRODUCTS
            </a>
            
          </nav>

          {/* 🟢 Search & Cart */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-accent transition-colors duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-accent relative transition-colors duration-300"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProductHeader;
