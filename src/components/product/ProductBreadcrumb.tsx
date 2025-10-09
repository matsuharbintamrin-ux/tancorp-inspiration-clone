import { ChevronRight } from "lucide-react";

const ProductBreadcrumb = () => {
  return (
    <div className="bg-card py-3 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Charcoal
          </a>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground">Eco-Friendly Hexagonal Charcoal</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBreadcrumb;
