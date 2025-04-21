
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type CustomerInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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
  <div className="space-y-4">
    <h3 className="font-medium text-lg mb-2">Customer Information</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          placeholder="Enter your first name"
          value={customer.firstName}
          onChange={e =>
            setCustomer(c => ({ ...c, firstName: e.target.value }))
          }
          autoFocus
        />
        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          placeholder="Enter your last name"
          value={customer.lastName}
          onChange={e =>
            setCustomer(c => ({ ...c, lastName: e.target.value }))
          }
        />
        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email Address</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={customer.email}
        onChange={e => setCustomer(c => ({ ...c, email: e.target.value }))}
      />
      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
    </div>
    <div className="space-y-2">
      <Label htmlFor="phone">Phone Number</Label>
      <Input
        id="phone"
        placeholder="Enter your phone number"
        value={customer.phone}
        onChange={e => setCustomer(c => ({ ...c, phone: e.target.value }))}
      />
      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
    </div>
    <div className="pt-4">
      <Button
        className="w-full bg-peptide-purple hover:bg-peptide-dark-purple"
        onClick={onContinue}
      >
        Continue to Shipping
      </Button>
    </div>
  </div>
);

export default CustomerDetailsForm;
