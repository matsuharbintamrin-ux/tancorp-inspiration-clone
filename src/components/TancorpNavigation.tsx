import { useState, useEffect } from "react";

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="text-primary-foreground font-bold text-3xl tracking-wider">
              TANCORP
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a
              href="#tancorp"
              className="text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium text-sm tracking-wider uppercase"
            >
              TANCORP
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
              CAREERS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TancorpNavigation;
