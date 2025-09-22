import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-lg mx-auto">
            <div className="text-gray-400 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                🛒
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6 flex items-center">
          <Button asChild variant="outline" className="mr-4">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Your Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-6 py-4 font-medium text-gray-700">Product</th>
                      <th className="px-6 py-4 font-medium text-gray-700">Price</th>
                      <th className="px-6 py-4 font-medium text-gray-700">Quantity</th>
                      <th className="px-6 py-4 font-medium text-gray-700">Total</th>
                      <th className="px-6 py-4 font-medium text-gray-700"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {items.map(item => {
                      const price = parseFloat(item.product.price.replace("$", ""));
                      const itemTotal = price * item.quantity;
                      
                      return (
                        <tr key={item.product.id}>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="h-16 w-16 flex-shrink-0 rounded overflow-hidden mr-4 bg-gray-100">
                                <img 
                                  src={item.product.image} 
                                  alt={item.product.name} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-medium text-gray-800">{item.product.name}</div>
                                <div className="text-sm text-gray-500">{item.product.purity}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-gray-800">{item.product.price.replace("$", "SEK ")}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center border rounded-md inline-flex">
                              <button 
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100 border-r"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="px-3 py-1 min-w-[40px] text-center">{item.quantity}</span>
                              <button 
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100 border-l"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-800">SEK {itemTotal.toFixed(2)}</div>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              className="text-red-500 hover:text-red-700"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              🗑️
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({totalItems}):</span>
                  <span className="font-medium">SEK {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Estimated Total:</span>
                    <span>SEK {totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Button asChild className="w-full bg-peptide-purple hover:bg-peptide-dark-purple">
                <Link href="/checkout">
                  Proceed to Checkout
                </Link>
              </Button>
              
              <div className="mt-6">
                <div className="text-sm text-gray-500 mb-4">
                  <p className="font-medium text-red-600 mb-2">IMPORTANT DISCLAIMER</p>
                  <p className="text-red-600 mb-2">We sell laboratory reagents and chemical reference materials for academic and industrial research. We do not sell consumer products. All products are labeled for research use only.</p>
                  <p>These products are intended for laboratory research use only. Not for diagnostic, therapeutic, or human use.</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-6">
              <div className="flex items-center justify-center mb-3">
                🔒
                <p className="text-sm font-medium text-gray-700">Secure Checkout</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-3">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/visa.svg" alt="Visa" className="h-6 grayscale" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/mastercard.svg" alt="Mastercard" className="h-6 grayscale" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/americanexpress.svg" alt="American Express" className="h-6 grayscale" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/discover.svg" alt="Discover" className="h-6 grayscale" />
              </div>
              <p className="text-xs text-center text-gray-500">
                Your transaction is secured with SSL encryption
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
