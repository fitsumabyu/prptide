
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Disclaimer from "@/components/ui/Disclaimer";
import { products } from "@/data/products";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for does not exist.</p>
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md border border-gray-200">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="inline-block bg-peptide-purple text-white text-sm font-medium px-3 py-1 rounded-md">
                  {product.purity}
                </div>
                <div className="mt-4 text-2xl font-semibold text-gray-900">
                  {product.price}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Product Details</h2>
                <div className="border rounded-md overflow-hidden shadow-sm">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">CAS Number</td>
                        <td className="px-4 py-3">{product.details.cas}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Purity</td>
                        <td className="px-4 py-3">{product.purity}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Size / Volume</td>
                        <td className="px-4 py-3">{product.details.size}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 bg-gray-50 font-medium">Storage Instructions</td>
                        <td className="px-4 py-3">{product.details.storage}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 border-r"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-[40px] text-center">{quantity}</span>
                  <button 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 border-l"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
                
                <Button 
                  className="flex-1 bg-peptide-purple hover:bg-peptide-dark-purple"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>

                <Button asChild variant="outline">
                  <a href={product.details.coaLink} target="_blank" rel="noopener noreferrer">
                    View COA
                  </a>
                </Button>
              </div>
              
              <Disclaimer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
