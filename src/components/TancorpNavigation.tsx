import { useState, useEffect } from "react";
import logo from "@/assets/logo.png"; // ✅ import logo di atas

const TancorpNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* ✅ Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Tancorp Logo"
              className="h-12 md:h-16 w-auto object-contain 
             drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]
             brightness-110 
             contrast-120"
            />

          </div>

          {/* ✅ Navigation menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a
              href="#tancorp"
              className="text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
            >
              HOME
            </a>
            <a
              href="#business"
              className="text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
            >
              BUSINESS UNITS
            </a>
            <a
              href="#careers"
              className="text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
            >
              PRODUCTS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TancorpNavigation;
