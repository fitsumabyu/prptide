import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ImageIcon } from "lucide-react";
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

  return (
    <Card className="overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-200 border border-purple-100 relative bg-white flex flex-col justify-between w-full">
      <div className="product-image-container h-[220px] bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
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
      </div>
      <CardContent className="p-3 md:p-5 flex flex-col flex-grow card-content">
        <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-gray-900 line-clamp-2 text-center">{name}</h3>
        <p className="text-gray-500 mb-2 md:mb-4 text-sm flex-grow text-center">
          <span className="block text-gray-600 mb-1">Starting at</span>
          <span className="font-semibold text-peptide-purple text-lg">{price}</span>
          <span className="block text-xs text-gray-500 mt-1">+ tax & shipping at checkout</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-auto justify-center">
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
    </Card>
  );
};

export default ProductCard;
