import React from "react";
import { Lock } from "lucide-react";
interface Props {
  totalItems: number;
  totalPrice: number;
}

const OrderSummary: React.FC<Props> = ({ totalItems, totalPrice }) => {
  // Calculate shipping and tax - adding flat shipping rate and 7% tax
  const shippingCost = 9.99;
  const taxRate = 0.07;
  const taxAmount = totalPrice * taxRate;
  const orderTotal = totalPrice + shippingCost + taxAmount;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border
    
     border-gray-100 sticky top-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Items ({totalItems}):</span>
          <span className="font-medium">SEK {totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-medium">SEK {shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (7%):</span>
          <span className="font-medium">SEK {taxAmount.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>SEK {orderTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2 mb-4">
        <p>Payment is processed securely. Your card will be charged immediately upon order placement.</p>
        <p className="mt-1">All prices in SEK. International shipping costs may vary.</p>
      </div>
      <div className="mt-6 bg-red-50 p-4 rounded-md border border-red-100">
        <p className="text-sm text-red-700 font-medium mb-2">
          IMPORTANT DISCLAIMER
        </p>
        <p className="text-xs text-red-600">
          These products are intended for laboratory research use only. Not for
          diagnostic, therapeutic, or human use. These statements have not been
          evaluated by the Food and Drug Administration. These products are not
          intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-6">
              <div className="flex items-center justify-center mb-3">
                <Lock className="h-4 w-4 text-gray-600 mr-2" />
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
  );
};

export default OrderSummary;
