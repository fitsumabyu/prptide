import { useRef, useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Info, ArrowRight, AlertTriangle } from "lucide-react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import "./product-carousel.css";
import { useShippingCountry } from "@/context/ShippingCountryContext";
import { useCountry } from "@/components/shipping/CountrySelector";

// Define allowed and restricted countries
const allowedCountries = [
  "GB", "CA", "DE", "NL", "SE", "DK", "FI", "NO", "IE", "NZ"
];

const restrictedCountries = [
  "AE", "IR", "KP", "SY", "CU"
];

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
  isLoading?: boolean;
}

const ProductSkeleton = () => {
  return (
    <div className="h-full bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-[220px] bg-gray-200"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3 mt-2"></div>
        <div className="flex gap-2 pt-2">
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = ({ products, title, isLoading = false }: ProductCarouselProps) => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const { country } = useShippingCountry();
  const { showWarning } = useCountry();

  const displayedProducts = showAll ? products : products.slice(0, 4);

  // Check if the current country is in the restricted list or not in the allowed list
  const isCountryShippable = useMemo(() => {
    if (!country) return true; // If no country selected, show products
    return !restrictedCountries.includes(country) && allowedCountries.includes(country);
  }, [country]);

  useEffect(() => {
    // Simulate loading completion after component mount
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

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
    ? scrollPosition <
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
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
    if (!carouselRef.current || isLoading || isInitializing) return;

    const cards = carouselRef.current.querySelectorAll(".product-card-wrapper");
    let maxHeight = 0;

    // Reset heights
    cards.forEach((card) => {
      (card as HTMLElement).style.height = "auto";
      const height = (card as HTMLElement).offsetHeight;
      maxHeight = Math.max(maxHeight, height);
    });

    // Apply max height to all cards
    if (maxHeight > 0) {
      cards.forEach((card) => {
        (card as HTMLElement).style.height = `${maxHeight}px`;
      });
    }

    // Also ensure all product card text sections have the same height
    const textSections = carouselRef.current.querySelectorAll(".card-content");
    let maxTextHeight = 0;

    textSections.forEach((section) => {
      (section as HTMLElement).style.height = "auto";
      const height = (section as HTMLElement).offsetHeight;
      maxTextHeight = Math.max(maxTextHeight, height);
    });

    if (maxTextHeight > 0) {
      textSections.forEach((section) => {
        (section as HTMLElement).style.height = `${maxTextHeight}px`;
      });
    }
  }, [displayedProducts, isLoading, isInitializing]);

  return (
    <div className="product-carousel relative bg-gradient-to-b from-purple-50/50 to-white p-6 rounded-2xl mx-auto max-w-7xl">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div className="flex items-center">
          <h2 className="text-xl md:text-2xl font-bold text-peptide-purple">{title}</h2>
          <div className="ml-2 inline-flex items-center bg-red-100 px-2 py-1 rounded-full text-xs text-red-600 font-medium">
            <Info className="h-3 w-3 mr-1" />
            Research Use Only
          </div>
        </div>
        <div className="flex gap-1 md:gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft || isLoading || isInitializing || (!isCountryShippable && showWarning)}
            className="rounded-full w-8 h-8 md:w-10 md:h-10 border-peptide-purple text-peptide-purple hover:bg-peptide-purple/10 transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight || isLoading || isInitializing || (!isCountryShippable && showWarning)}
            className="rounded-full w-8 h-8 md:w-10 md:h-10 border-peptide-purple text-peptide-purple hover:bg-peptide-purple/10 transition-colors disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>

      <div className="text-xs text-gray-600 mb-4 flex items-start bg-white/70 p-2 rounded-lg border border-purple-100">
        <Info className="h-4 w-4 text-peptide-purple mr-2 flex-shrink-0 mt-0.5" />
        <span className="block">
          All products display accurate name, purity level, and price in USD.
          For full details, view individual product pages.
        </span>
      </div>

      <div className="carousel-container relative">
        {!isCountryShippable && showWarning ? (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center my-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <AlertTriangle className="h-10 w-10 text-red-500" />
              <h2 className="text-xl font-bold text-red-700">Products Not Available in Your Region</h2>
              <p className="text-red-600 max-w-md text-sm">
                We're sorry, but we currently don't ship our research peptides to your selected country. 
                Please select a different shipping destination to view our products.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div
              ref={carouselRef}
              className="carousel-scroll flex gap-3 md:gap-6 overflow-x-auto pb-4 md:pb-6 snap-x px-2 justify-center"
              onScroll={handleScroll}
            >
              {isLoading || isInitializing ? (
                // Skeleton loading state
                Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="min-w-[220px] sm:min-w-[250px] md:min-w-[280px] snap-start product-card-wrapper"
                    style={{ '--index': index } as React.CSSProperties}
                  >
                    <ProductSkeleton />
                  </div>
                ))
              ) : (
                // Actual product cards
                displayedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="min-w-[220px] sm:min-w-[250px] md:min-w-[280px] snap-start product-card-wrapper"
                    style={{ '--index': index } as React.CSSProperties}
                  >
                    <div className="h-full flex flex-col">
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        purity={product.purity}
                        price={product.price}
                        image={product.image}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="fade-left"></div>
            <div className="fade-right"></div>
          </>
        )}
      </div>

      {products.length > 4 && !isLoading && !isInitializing && isCountryShippable && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSeeMoreClick}
            className="group border-peptide-purple text-peptide-purple hover:bg-peptide-purple hover:text-white transition-all duration-300 font-medium px-8 py-2 rounded-full shadow-sm hover:shadow"
          >
            {showAll ? "Show Less" : (
              <span className="flex items-center">
                Browse All Products 
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
