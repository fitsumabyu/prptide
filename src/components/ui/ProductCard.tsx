import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ImageIcon, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  purity: string;
  price: string;
  image: string;
}

const ProductCard = ({ id, name, purity, price, image }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [adding, setAdding] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handles add-to-cart action with button feedback
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    setAdding(true);
    addToCart(id, 1);
    setTimeout(() => setAdding(false), 700); // brief visual feedback
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageError(true);
    // Fallback for broken images
    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/220x220?text=Image+Not+Available';
  };

  // For gallery navigation (simplified version since we have just one image)
  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(0); // Reset to 0 since we only have one image
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(0); // Reset to 0 since we only have one image
  };

  return (
    <Card className="nc-ProductCard group relative overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <Link to={`/products/${id}`} className="block">
        {/* Image Gallery Section */}
        <div className="relative w-full">
          <div className="aspect-w-4 aspect-h-3 relative h-[280px] bg-gradient-to-b from-purple-50 to-white overflow-hidden">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="animate-pulse flex flex-col items-center">
                  <ImageIcon className="h-12 w-12 text-gray-300" />
                  <span className="text-xs text-gray-400 mt-2">Loading image...</span>
                </div>
              </div>
            )}
            <img
              src={image}
              alt={name}
              className={`w-full h-full object-contain group-hover:scale-105 transition duration-300 ${!imageLoaded && !imageError ? 'opacity-0' : 'opacity-100'}`}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            <div className="absolute top-3 right-3 bg-peptide-purple text-white text-xs font-semibold px-2 py-1 rounded shadow">
              {purity}
            </div>
            
            {/* Navigation dots (simplified) */}
            {/* <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1.5">
              <button 
                className="w-2 h-2 rounded-full bg-white bg-opacity-80"
                onClick={(e) => e.preventDefault()}
              />
            </div> */}
            
            {/* Navigation arrows (for gallery feel) */}
            {/* <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={handlePrevImage}
                className="w-8 h-8 rounded-full bg-white bg-opacity-60 hover:bg-opacity-90 flex items-center justify-center shadow-lg"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNextImage}
                className="w-8 h-8 rounded-full bg-white bg-opacity-60 hover:bg-opacity-90 flex items-center justify-center shadow-lg"
              >
                <span className="sr-only">Next</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
        
        {/* Content Section */}
        <CardContent className="p-4 space-y-4">
          <div className="space-y-2">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              recovery performance · {purity}
            </span>
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold text-base text-neutral-900 dark:text-white line-clamp-1">
                {name}
              </h2>
            </div>
          </div>
          
          <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
          
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold text-peptide-purple">
              {price}
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal ml-1">
                + tax & shipping
              </span>
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 mt-2 justify-between">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-peptide-purple text-peptide-purple hover:bg-peptide-purple/10 transition text-xs sm:text-sm py-1"
            >
              <Link to={`/products/${id}`}>View Details</Link>
            </Button>
            <Button
              size="sm"
              className={`bg-peptide-purple hover:bg-peptide-dark-purple text-white font-medium shadow transition text-xs sm:text-sm py-1 ${adding ? "opacity-80" : ""}`}
              onClick={handleAddToCart}
              disabled={adding}
            >
              <ShoppingCart className="h-3 w-3 mr-1" />
              {adding ? "Added!" : "Add to Cart"}
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
