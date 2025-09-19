
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type ItemType = {
  product: {
    id: string;
    name: string;
    purity: string;
    image: string;
    price: string;
  };
  quantity: number;
};

type CustomerInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};
type ShippingInfo = {
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};
type PaymentInfo = {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
};

interface Props {
  items: ItemType[];
  customer: CustomerInfo;
  shipping: ShippingInfo;
  payment: PaymentInfo;
  onBack: () => void;
  onPlaceOrder: () => void;
}

const OrderReview: React.FC<Props> = ({
  items,
  customer,
  shipping,
  payment,
  onBack,
  onPlaceOrder,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // For now, we'll keep it processing indefinitely as requested
    // In a real implementation, you would call onPlaceOrder() after processing
  };

  return (
  <div className="space-y-6">
    <h3 className="font-medium text-lg">Order Review</h3>
    <div>
      <h4 className="font-medium mb-2">Items</h4>
      <div className="border rounded-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Product</th>
              <th className="px-4 py-2 text-right font-medium text-gray-600">Quantity</th>
              <th className="px-4 py-2 text-right font-medium text-gray-600">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map(item => {
              const price = parseFloat(item.product.price.replace("$", ""));
              const itemTotal = price * item.quantity;
              return (
                <tr key={item.product.id}>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden mr-3 bg-gray-100">
                        <img 
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{item.product.name}</div>
                        <div className="text-xs text-gray-500">{item.product.purity}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">{item.quantity}</td>
                  <td className="px-4 py-3 text-right font-medium">SEK {itemTotal.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    <div className="text-sm space-y-2">
      <h4 className="font-medium">Customer Information</h4>
      <p>
        {customer.firstName} {customer.lastName} ({customer.email})
      </p>
      <p>{customer.phone}</p>
    </div>
    <div className="text-sm space-y-2">
      <h4 className="font-medium">Shipping Address</h4>
      <p>
        {shipping.address}
        {shipping.address2 && <span>, {shipping.address2}</span>}
      </p>
      <p>
        {shipping.city}, {shipping.state} {shipping.zip}
      </p>
      <p>{shipping.country}</p>
    </div>
    <div className="text-sm space-y-2">
      <h4 className="font-medium">Payment Method</h4>
      <p>
        Credit Card ending in {payment.cardNumber.replace(/\s/g, "").slice(-4)}
      </p>
    </div>
    <div className="pt-4 flex justify-between">
      <Button variant="outline" onClick={onBack} disabled={isProcessing}>
        Back
      </Button>
      {isProcessing ? (
        <Button
          className="bg-peptide-purple hover:bg-peptide-dark-purple"
          disabled
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing Payment...
        </Button>
      ) : (
        <Button
          className="bg-peptide-purple hover:bg-peptide-dark-purple"
          onClick={handlePlaceOrder}
        >
          Place Order
        </Button>
      )}
    </div>
  </div>
  );
};

export default OrderReview;
