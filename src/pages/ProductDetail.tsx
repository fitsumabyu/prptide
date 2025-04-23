import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Disclaimer from "@/components/ui/Disclaimer";
import { products } from "@/data/products";
import { ArrowLeft, ShoppingCart, Globe } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import PreferredDestinations from "@/components/shipping/PreferredDestinations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
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
                <div className="mt-1 text-sm text-gray-600">
                  <span className="block mb-1">Plus applicable taxes</span>
                  <span className="block">Flat-rate shipping: $9.99 (US) / $19.99 (International)</span>
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
              
              {/* Shipping availability indicator */}
              {product.shippingDestinations && product.shippingDestinations.length > 0 && (
                <div className="my-4 px-4 py-3 bg-blue-50 rounded-md flex items-start">
                  <Globe className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-700">Special Shipping Destinations Available</p>
                    <p className="text-blue-600">This product has specific shipping eligibility. See the Shipping tab below for details.</p>
                  </div>
                </div>
              )}
              
              <Disclaimer />
            </div>
          </div>
        </div>
        
        {/* Product tabs with shipping information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12">
          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Information</h3>
                <p>{product.description}</p>
                <p>For research use only. Not for human or veterinary use.</p>
                <h4 className="text-lg font-semibold mt-6 mb-3">Storage and Handling</h4>
                <p>
                  {product.details.storage}<br />
                  Once reconstituted, the product should be used immediately or stored at -20°C in aliquots.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping">
              <PreferredDestinations 
                productId={product.id}
                productName={product.name}
                additionalDestinations={product.shippingDestinations}
              />
            </TabsContent>
            
            <TabsContent value="faq">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold">What is the purity level of this product?</h4>
                    <p>This product has a purity level of {product.purity}. Each batch is tested and comes with a Certificate of Analysis.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">How should I store this product?</h4>
                    <p>{product.details.storage}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Is this product available for international shipping?</h4>
                    <p>Yes, we ship to select international destinations. Please see the Shipping tab for specific country availability for this product.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
