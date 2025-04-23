import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InfoIcon } from "lucide-react";

type ShippingInfo = {
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

interface Props {
  shipping: ShippingInfo;
  setShipping: React.Dispatch<React.SetStateAction<ShippingInfo>>;
  errors: { [key: string]: string };
  onBack: () => void;
  onContinue: () => void;
}

const ShippingForm: React.FC<Props> = ({
  shipping,
  setShipping,
  errors,
  onBack,
  onContinue,
}) => (
  <div className="space-y-4">
    <h3 className="font-medium text-lg mb-2">Shipping Information</h3>
    
    <div className="bg-blue-50 p-3 rounded-md flex items-start mb-4">
      <InfoIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
      <div className="text-sm text-blue-700">
        <p>Orders are typically processed within 1-2 business days. Standard shipping takes 3-5 business days.</p>
        <p className="mt-1">
          View our <Link to="/shipping-policy" target="_blank" className="text-peptide-purple hover:underline font-medium">Shipping & Delivery Policy</Link> for more details on shipping methods, costs, and restrictions.
        </p>
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="address">Street Address</Label>
      <Input
        id="address"
        placeholder="Enter your street address"
        value={shipping.address}
        onChange={e => setShipping(s => ({ ...s, address: e.target.value }))}
      />
      {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
    </div>
    <div className="space-y-2">
      <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
      <Input
        id="address2"
        placeholder="Apartment, suite, unit, etc."
        value={shipping.address2}
        onChange={e => setShipping(s => ({ ...s, address2: e.target.value }))}
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          placeholder="City"
          value={shipping.city}
          onChange={e => setShipping(s => ({ ...s, city: e.target.value }))}
        />
        {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="state">State/Province</Label>
        <Input
          id="state"
          placeholder="State/Province"
          value={shipping.state}
          onChange={e => setShipping(s => ({ ...s, state: e.target.value }))}
        />
        {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="zip">ZIP / Postal Code</Label>
        <Input
          id="zip"
          placeholder="ZIP / Postal code"
          value={shipping.zip}
          onChange={e => setShipping(s => ({ ...s, zip: e.target.value }))}
        />
        {errors.zip && <p className="text-sm text-red-500">{errors.zip}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          placeholder="Country"
          value={shipping.country}
          onChange={e => setShipping(s => ({ ...s, country: e.target.value }))}
        />
        {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
      </div>
    </div>
    <div className="pt-4 flex justify-between">
      <Button variant="outline" onClick={onBack}>
        Back
      </Button>
      <Button className="bg-peptide-purple hover:bg-peptide-dark-purple" onClick={onContinue}>
        Continue to Payment
      </Button>
    </div>
  </div>
);

export default ShippingForm;
