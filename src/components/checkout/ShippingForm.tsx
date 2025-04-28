import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InfoIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { preferredStates } from "@/components/shipping/PreferredDestinations";

// US states for dropdown
const usStates = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
  { value: "DC", label: "District of Columbia" }
];

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
        <Label htmlFor="state">State</Label>
        <Select 
          value={shipping.state} 
          onValueChange={(value) => setShipping(s => ({ ...s, state: value }))}
        >
          <SelectTrigger id="state">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            {usStates.map((state) => (
              <SelectItem key={state.value} value={state.value}>
                {state.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="zip">ZIP Code</Label>
        <Input
          id="zip"
          placeholder="ZIP code"
          value={shipping.zip}
          onChange={e => setShipping(s => ({ ...s, zip: e.target.value }))}
        />
        {errors.zip && <p className="text-sm text-red-500">{errors.zip}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select 
          value={shipping.country}
          onValueChange={(value) => setShipping(s => ({ ...s, country: value }))}
          disabled
        >
          <SelectTrigger id="country">
            <SelectValue placeholder="United States" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="United States">United States</SelectItem>
          </SelectContent>
        </Select>
        {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
        <p className="text-xs text-gray-500 mt-1">
          We currently only ship to addresses within the United States.
        </p>
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
