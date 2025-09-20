import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";

type CustomerInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ageVerified: boolean;
  refundPolicyAccepted: boolean;
  paymentMethod: string;
};

interface Props {
  customer: CustomerInfo;
  setCustomer: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  errors: { [key: string]: string };
  onContinue: () => void;
}

const CustomerDetailsForm: React.FC<Props> = ({
  customer,
  setCustomer,
  errors,
  onContinue,
}) => (
  <div className="space-y-6">
    <h3 className="font-medium text-lg mb-2">Faktureringsdetaljer</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">Förnamn *</Label>
        <Input
          id="firstName"
          placeholder="Ange ditt förnamn"
          value={customer.firstName}
          onChange={e =>
            setCustomer(c => ({ ...c, firstName: e.target.value }))
          }
          autoFocus
        />
        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Efternamn *</Label>
        <Input
          id="lastName"
          placeholder="Ange ditt efternamn"
          value={customer.lastName}
          onChange={e =>
            setCustomer(c => ({ ...c, lastName: e.target.value }))
          }
        />
        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">E-postadress *</Label>
      <Input
        id="email"
        type="email"
        placeholder="Ange din e-postadress"
        value={customer.email}
        onChange={e => setCustomer(c => ({ ...c, email: e.target.value }))}
      />
      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
    </div>
    <div className="space-y-2">
      <Label htmlFor="phone">Telefon (valfritt)</Label>
      <Input
        id="phone"
        placeholder="Ange ditt telefonnummer"
        value={customer.phone}
        onChange={e => setCustomer(c => ({ ...c, phone: e.target.value }))}
      />
      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
    </div>

    {/* Payment Method Selection */}
    <div className="space-y-4">
      <h4 className="font-medium text-lg">Betalningsmetod</h4>
      <RadioGroup
        value={customer.paymentMethod}
        onValueChange={(value) => setCustomer(c => ({ ...c, paymentMethod: value }))}
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="revolut" id="revolut" disabled />
          <Label htmlFor="revolut" className="flex-1 text-gray-400">
            <div>
              <div className="font-medium">Kortbetalning (Revolut.com)</div>
              <div className="text-sm text-gray-400">Betala tryggt, säkert och helt anonymt via 3:e part (Revolut.com)</div>
              <div className="text-sm text-gray-400">Rekommenderas varmt till de som redan är kund hos Revolut.</div>
            </div>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="mercuryo" id="mercuryo" disabled />
          <Label htmlFor="mercuryo" className="flex-1 text-gray-400">
            <div>
              <div className="font-medium">Kortbetalning (Mercuryo.io)</div>
              <div className="text-sm text-gray-400">(disabled/grey)</div>
            </div>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bitcoin" id="bitcoin" disabled />
          <Label htmlFor="bitcoin" className="flex-1 text-gray-400">
            <div className="font-medium">Bitcoin (BTC)</div>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="ethereum" id="ethereum" />
          <Label htmlFor="ethereum" className="flex-1">
            <div className="font-medium">Ethereum (ERC20)</div>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="polygon" id="polygon" />
          <Label htmlFor="polygon" className="flex-1">
            <div className="font-medium">Polygon Matic (ERC20)</div>
          </Label>
        </div>
      </RadioGroup>
      {errors.paymentMethod && <p className="text-sm text-red-500">{errors.paymentMethod}</p>}
    </div>
    <div className="flex items-start space-x-2 pt-2">
      <Checkbox 
        id="ageVerification" 
        checked={customer.ageVerified}
        onCheckedChange={(checked) => 
          setCustomer(c => ({ ...c, ageVerified: checked as boolean }))
        }
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="ageVerification"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Jag bekräftar att jag är 21 år eller äldre
        </label>
        <p className="text-sm text-red-600">
          Du måste vara minst 21 år gammal för att köpa från denna webbplats.
        </p>
      </div>
    </div>
    {errors.ageVerified && <p className="text-sm text-red-500">{errors.ageVerified}</p>}
    
    <div className="flex items-start space-x-2 pt-2">
      <Checkbox 
        id="refundPolicyAccepted" 
        checked={customer.refundPolicyAccepted}
        onCheckedChange={(checked) => 
          setCustomer(c => ({ ...c, refundPolicyAccepted: checked as boolean }))
        }
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="refundPolicyAccepted"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Jag har läst och accepterar <Link to="/refund-policy" target="_blank" className="text-peptide-purple hover:underline">Återbetalnings- och returpolicy</Link>
        </label>
      </div>
    </div>
    {errors.refundPolicyAccepted && <p className="text-sm text-red-500">{errors.refundPolicyAccepted}</p>}
    
    <div className="pt-4">
      <Button
        className="w-full bg-peptide-purple hover:bg-peptide-dark-purple"
        onClick={onContinue}
      >
        Fortsätt till leverans
      </Button>
    </div>
  </div>
);

export default CustomerDetailsForm;
