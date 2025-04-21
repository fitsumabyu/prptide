import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  purity: string;
  price: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel = ({ products, title }: ProductCarouselProps) => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showAll, setShowAll] = useState(false);
  
  const displayedProducts = showAll ? products : products.slice(0, 4);
  
  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300;
    const container = carouselRef.current;
    
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    
    // Update scroll position
    setTimeout(() => {
      setScrollPosition(container.scrollLeft);
    }, 300);
  };
  
  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };
  
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = carouselRef.current 
    ? scrollPosition < carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
    : true;
  
  const handleSeeMoreClick = () => {
    if (showAll) {
      setShowAll(false);
    } else {
      navigate("/products");
    }
  };
  
  // Fix to ensure consistent card heights
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const cards = carouselRef.current.querySelectorAll('.product-card-wrapper');
    let maxHeight = 0;
    
    // Reset heights
    cards.forEach(card => {
      (card as HTMLElement).style.height = 'auto';
      const height = (card as HTMLElement).offsetHeight;
      maxHeight = Math.max(maxHeight, height);
    });
    
    // Apply max height to all cards
    if (maxHeight > 0) {
      cards.forEach(card => {
        (card as HTMLElement).style.height = `${maxHeight}px`;
      });
    }
  }, [displayedProducts]);
  
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        <div className="flex gap-1 md:gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="rounded-full w-8 h-8 md:w-10 md:h-10"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="rounded-full w-8 h-8 md:w-10 md:h-10"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={carouselRef}
        className="flex gap-3 md:gap-6 overflow-x-auto pb-4 md:pb-6 snap-x hide-scrollbar"
        onScroll={handleScroll}
      >
        {displayedProducts.map((product) => (
          <div 
            key={product.id} 
            className="min-w-[220px] sm:min-w-[250px] md:min-w-[280px] snap-start product-card-wrapper"
          >
            <div className="h-full flex flex-col">
              <ProductCard {...product} />
            </div>
          </div>
        ))}
      </div>
      
      {products.length > 4 && (
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSeeMoreClick}
            className="border-peptide-purple text-peptide-purple hover:bg-peptide-purple/10 font-medium px-6 md:px-8 text-sm"
          >
            {showAll ? "Show Less" : "See More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
