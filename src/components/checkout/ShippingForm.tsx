import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
    <h3 className="font-medium text-lg mb-2">Leveransinformation</h3>
    
    <div className="bg-blue-50 p-3 rounded-md flex items-start mb-4">
      <InfoIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
      <div className="text-sm text-blue-700">
        <p>Beställningar behandlas vanligtvis inom 1-2 arbetsdagar. Standardfrakt tar 3-5 arbetsdagar.</p>
        <p className="mt-1">
          Se vår <Link href="/shipping-policy" target="_blank" className="text-peptide-purple hover:underline font-medium">Frakt- och leveranspolicy</Link> för mer information om fraktmetoder, kostnader och begränsningar.
        </p>
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="address">Gatuadress</Label>
      <Input
        id="address"
        placeholder="Ange din gatuadress"
        value={shipping.address}
        onChange={e => setShipping(s => ({ ...s, address: e.target.value }))}
      />
      {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
    </div>
    <div className="space-y-2">
      <Label htmlFor="address2">Lägenhet, svit, etc. (valfritt)</Label>
      <Input
        id="address2"
        placeholder="Lägenhet, svit, enhet, etc."
        value={shipping.address2}
        onChange={e => setShipping(s => ({ ...s, address2: e.target.value }))}
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="city">Stad</Label>
        <Input
          id="city"
          placeholder="Stad"
          value={shipping.city}
          onChange={e => setShipping(s => ({ ...s, city: e.target.value }))}
        />
        {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="state">Stat/Provins</Label>
        <Input
          id="state"
          placeholder="Ange stat/provins"
          value={shipping.state}
          onChange={e => setShipping(s => ({ ...s, state: e.target.value }))}
        />
        {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="zip">Postnummer</Label>
        <Input
          id="zip"
          placeholder="Postnummer"
          value={shipping.zip}
          onChange={e => setShipping(s => ({ ...s, zip: e.target.value }))}
        />
        {errors.zip && <p className="text-sm text-red-500">{errors.zip}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">Land</Label>
        <Input
          id="country"
          placeholder="Ange land"
          value={shipping.country}
          onChange={e => setShipping(s => ({ ...s, country: e.target.value }))}
        />
        {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
      </div>
    </div>
    <div className="pt-4 flex justify-between">
      <Button variant="outline" onClick={onBack}>
        Tillbaka
      </Button>
      <Button className="bg-peptide-purple hover:bg-peptide-dark-purple" onClick={onContinue}>
        Fortsätt till betalning
      </Button>
    </div>
  </div>
);

export default ShippingForm;
