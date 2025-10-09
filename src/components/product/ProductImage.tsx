import { useState } from "react";
import { ZoomIn } from "lucide-react";
import charcoalImage from "@/assets/hexagonal.jpg";

const ProductImage = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="sticky top-6 animate-scale-in">
      <div className="relative bg-black rounded-lg overflow-hidden group">
        <img
          src={charcoalImage}
          alt="Hexagonal Charcoal Briquettes"
          className={`w-full h-auto transition-transform duration-300 ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="h-5 w-5" />
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="aspect-square bg-black rounded-md overflow-hidden border-2 border-transparent hover:border-primary transition-colors cursor-pointer"
          >
            <img
              src={charcoalImage}
              alt={`Charcoal view ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
