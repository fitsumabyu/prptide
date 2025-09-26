import { useRef, useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Info, ArrowRight, AlertTriangle } from "lucide-react";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";
// CSS is now imported globally in layout.tsx
import { useShippingCountry } from "@/context/ShippingCountryContext";
import { useCountry } from "@/components/shipping/CountrySelector";

// Define US states (allowed) and non-US locations (restricted)
const allowedLocations = [
  "US-CA", "US-NY", "US-TX", "US-FL", "US-IL", 
  "US-WA", "US-CO", "US-MA", "US-PA", "US-MI",
  "US-NJ", "US-MD", "US-VA", "US-GA", "US-AZ"
];

const restrictedCountries = [
  "GB", "CA", "DE", "NL", "SE", "DK", "FI", "NO", "IE", "NZ", "AU", 
  "FR", "IT", "ES", "JP", "KR", "SG", "AE", "IR", "KP", "SY", "CU"
];

interface Product {
  id: string;
  name: string;
  swedishname?: string;
  purity: string;
  price: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
  subtitle?: string;
  isLoading?: boolean;
  maxDisplayCount?: number; // Add optional prop to limit display count
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

const ProductCarousel = ({ products, title, subtitle, isLoading = false, maxDisplayCount }: ProductCarouselProps) => {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showAll, setShowAll] = useState(true); // Default to showing all products
  const [isInitializing, setIsInitializing] = useState(true);
  const { country } = useShippingCountry();
  const { showWarning } = useCountry();

  // Display all products by default, or limit if maxDisplayCount is provided
  const displayedProducts = maxDisplayCount && !showAll 
    ? products.slice(0, maxDisplayCount) 
    : products;

  // Check if the current country is in the restricted list (non-US)
  const isCountryShippable = useMemo(() => {
    if (!country) return true; // If no country selected, show products
    return country === "US"; // Only allow US locations
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

    const scrollAmount = 320; // Adjusted scroll amount to ensure full card visibility
    const container = carouselRef.current;

    if (direction === "left") {
      // Check if we're close to the beginning, if so scroll to absolute start
      if (container.scrollLeft <= scrollAmount) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    // Update scroll position after animation completes
    setTimeout(() => {
      setScrollPosition(container.scrollLeft);
    }, 300);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      setScrollPosition(scrollLeft);
    }
  };

  // Force recalculation of scroll buttons on product change
  useEffect(() => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  }, [products, displayedProducts]);

  // Initialize scroll position when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        setScrollPosition(carouselRef.current.scrollLeft);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const canScrollLeft = scrollPosition > 1;
  const canScrollRight = carouselRef.current
    ? scrollPosition <
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 5
    : true;

  const handleSeeAllProductsClick = () => {
    router.push("/products");
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
    <div className="product-carousel relative bg-gradient-to-b from-purple-50/50 to-white py-6 rounded-2xl mx-auto max-w-7xl">
      <div className="flex justify-between items-center mb-4 md:mb-6 px-6">
        <div className="flex items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-peptide-purple">{title}</h2>
            {subtitle && (
              <p className="text-sm text-gray-600 italic">{subtitle}</p>
            )}
          </div>
          <div className="ml-2 inline-flex items-center bg-red-100 px-2 py-1 rounded-full text-xs text-red-600 font-medium">
            <Info className="h-3 w-3 mr-1" />
            återhämtning
          </div>
        </div>
        <div className="flex gap-1 md:gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (carouselRef.current && carouselRef.current.scrollLeft <= 50) {
                carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                setTimeout(() => {
                  if (carouselRef.current) {
                    setScrollPosition(carouselRef.current.scrollLeft);
                  }
                }, 300);
              } else {
                scroll("left");
              }
            }}
            disabled={!canScrollLeft || isLoading || isInitializing || (!isCountryShippable && showWarning)}
            className="rounded-full w-8 h-8 md:w-10 md:h-10 border-peptide-purple text-peptide-purple hover:bg-peptide-purple/10 transition-colors disabled:opacity-30"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight || isLoading || isInitializing || (!isCountryShippable && showWarning)}
            className="rounded-full w-8 h-8 md:w-10 md:h-10 border-peptide-purple text-peptide-purple hover:bg-peptide-purple/10 transition-colors disabled:opacity-30"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>

      <div className="text-xs text-gray-600 mb-4 flex items-start bg-white/70 p-2 rounded-lg border border-purple-100 mx-6">
        <Info className="h-4 w-4 text-peptide-purple mr-2 flex-shrink-0 mt-0.5" />
        <span className="block">
          All products display accurate name, purity level, and price in SEK.
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
                We're sorry, but we currently don't ship outside the United States. 
                Our products are only available for domestic US customers at this time.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div
              ref={carouselRef}
              className="carousel-scroll flex gap-3 md:gap-6 overflow-x-auto pb-4 md:pb-6 snap-x justify-start"
              style={{ paddingLeft: '0px', paddingRight: '8px' }}
              onScroll={handleScroll}
            >
              {isLoading || isInitializing ? (
                // Skeleton loading state
                Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] snap-start product-card-wrapper"
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
                    className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] snap-start product-card-wrapper"
                    style={{ '--index': index } as React.CSSProperties}
                  >
                    <div className="h-full flex flex-col">
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        swedishname={product.swedishname}
                        purity={product.purity}
                        price={product.price}
                        image={product.image}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
            {scrollPosition > 1 && <div className="fade-left"></div>}
            <div className="fade-right"></div>
          </>
        )}
      </div>

      {!isLoading && !isInitializing && isCountryShippable && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSeeAllProductsClick}
            className="group border-peptide-purple text-peptide-purple hover:bg-peptide-purple hover:text-white transition-all duration-300 font-medium px-8 py-2 rounded-full shadow-sm hover:shadow"
          >
            <span className="flex items-center">
              See All Products 
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
