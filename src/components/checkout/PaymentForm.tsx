
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

type PaymentInfo = {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
};

interface Props {
  payment: PaymentInfo;
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo>>;
  errors: { [key: string]: string };
  onBack: () => void;
  onContinue: () => void;
}

const PaymentForm: React.FC<Props> = ({
  payment,
  setPayment,
  errors,
  onBack,
  onContinue,
}) => (
  <div className="space-y-4">
    <h3 className="font-medium text-lg mb-2">Payment Information</h3>
    <div className="p-4 border border-gray-200 rounded-md bg-gray-50 mb-4">
      <div className="flex items-center text-gray-800">
        <CreditCard className="mr-2 h-5 w-5" />
        <span>Credit Card Payment</span>
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor="cardName">Name on Card</Label>
      <Input
        id="cardName"
        placeholder="Name as it appears on your card"
        value={payment.cardName}
        onChange={e => setPayment(p => ({ ...p, cardName: e.target.value }))}
      />
      {errors.cardName && <p className="text-sm text-red-500">{errors.cardName}</p>}
    </div>
    <div className="space-y-2">
      <Label htmlFor="cardNumber">Card Number</Label>
      <Input
        id="cardNumber"
        placeholder="XXXX XXXX XXXX XXXX"
        value={payment.cardNumber}
        maxLength={19}
        onChange={e => {
          let val = e.target.value.replace(/[^\d]/g, "");
          val = val.replace(/(.{4})/g, "$1 ").trim();
          setPayment(p => ({ ...p, cardNumber: val }));
        }}
      />
      {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="expiry">Expiry Date</Label>
        <Input
          id="expiry"
          placeholder="MM/YY"
          value={payment.expiry}
          maxLength={7}
          onChange={e => setPayment(p => ({ ...p, expiry: e.target.value }))}
        />
        {errors.expiry && <p className="text-sm text-red-500">{errors.expiry}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="cvc">CVC</Label>
        <Input
          id="cvc"
          placeholder="CVC"
          value={payment.cvc}
          maxLength={4}
          onChange={e => setPayment(p => ({ ...p, cvc: e.target.value }))}
        />
        {errors.cvc && <p className="text-sm text-red-500">{errors.cvc}</p>}
      </div>
    </div>
    <div className="pt-4 flex justify-between">
      <Button variant="outline" onClick={onBack}>
        Back
      </Button>
      <Button
        className="bg-peptide-purple hover:bg-peptide-dark-purple"
        onClick={onContinue}
      >
        Review Order
      </Button>
    </div>
  </div>
);

export default PaymentForm;
