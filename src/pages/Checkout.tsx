
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import CheckoutSteps from "@/components/checkout/CheckoutSteps";
import CustomerDetailsForm from "@/components/checkout/CustomerDetailsForm";
import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentForm from "@/components/checkout/PaymentForm";
import OrderReview from "@/components/checkout/OrderReview";
import OrderSummary from "@/components/checkout/OrderSummary";

type CheckoutStep = "details" | "shipping" | "payment" | "review";

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

const initialCustomer: CustomerInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
const initialShipping: ShippingInfo = {
  address: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "United States",
};
const initialPayment: PaymentInfo = {
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
};

const Checkout = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("details");
  const navigate = useNavigate();

  // Form data states
  const [customer, setCustomer] = useState<CustomerInfo>(initialCustomer);
  const [shipping, setShipping] = useState<ShippingInfo>(initialShipping);
  const [payment, setPayment] = useState<PaymentInfo>(initialPayment);

  // Simple error state for showing missing info
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully! Thank you for your purchase.");
    clearCart();
    navigate("/");
  };

  // Step validations
  const validateDetails = () => {
    const errs: { [k: string]: string } = {};
    if (!customer.firstName.trim()) errs.firstName = "First name is required.";
    if (!customer.lastName.trim()) errs.lastName = "Last name is required.";
    if (!customer.email.trim() || !/^\S+@\S+\.\S+$/.test(customer.email.trim())) errs.email = "A valid email is required.";
    if (!customer.phone.trim()) errs.phone = "Phone number is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const validateShipping = () => {
    const errs: { [k: string]: string } = {};
    if (!shipping.address.trim()) errs.address = "Street address is required.";
    if (!shipping.city.trim()) errs.city = "City is required.";
    if (!shipping.state.trim()) errs.state = "State is required.";
    if (!shipping.zip.trim()) errs.zip = "ZIP/Postal code is required.";
    if (!shipping.country.trim()) errs.country = "Country is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const validatePayment = () => {
    const errs: { [k: string]: string } = {};
    if (!payment.cardName.trim()) errs.cardName = "Name on card is required.";
    if (!payment.cardNumber.trim() || !/^\d{12,19}$/.test(payment.cardNumber.replace(/\s/g, ""))) errs.cardNumber = "A valid card number is required.";
    if (!payment.expiry.trim() || !/^[01]?\d\/\d{2,4}$/.test(payment.expiry.trim())) errs.expiry = "Expiry date is required (MM/YY).";
    if (!payment.cvc.trim() || !/^\d{3,4}$/.test(payment.cvc.trim())) errs.cvc = "CVC is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6">You need to add items to your cart before checking out.</p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center">
          <Button asChild variant="outline" className="mr-4">
            <Link to="/cart">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Forms & Steps */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-bold">Checkout Process</h2>
                <div className="text-sm text-gray-500">
                  Step{" "}
                  {currentStep === "details"
                    ? "1"
                    : currentStep === "shipping"
                    ? "2"
                    : currentStep === "payment"
                    ? "3"
                    : "4"}{" "}
                  of 4
                </div>
              </div>
              <CheckoutSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
              {currentStep === "details" && (
                <CustomerDetailsForm
                  customer={customer}
                  setCustomer={setCustomer}
                  errors={errors}
                  onContinue={() => {
                    if (validateDetails()) {
                      setErrors({});
                      setCurrentStep("shipping");
                    } else {
                      toast.error("Please fill out all required customer information.");
                    }
                  }}
                />
              )}
              {currentStep === "shipping" && (
                <ShippingForm
                  shipping={shipping}
                  setShipping={setShipping}
                  errors={errors}
                  onBack={() => {
                    setErrors({});
                    setCurrentStep("details");
                  }}
                  onContinue={() => {
                    if (validateShipping()) {
                      setErrors({});
                      setCurrentStep("payment");
                    } else {
                      toast.error("Please fill out all required shipping information.");
                    }
                  }}
                />
              )}
              {currentStep === "payment" && (
                <PaymentForm
                  payment={payment}
                  setPayment={setPayment}
                  errors={errors}
                  onBack={() => {
                    setErrors({});
                    setCurrentStep("shipping");
                  }}
                  onContinue={() => {
                    if (validatePayment()) {
                      setErrors({});
                      setCurrentStep("review");
                    } else {
                      toast.error("Please fill out all required payment information.");
                    }
                  }}
                />
              )}
              {currentStep === "review" && (
                <OrderReview
                  items={items}
                  customer={customer}
                  shipping={shipping}
                  payment={payment}
                  onBack={() => {
                    setErrors({});
                    setCurrentStep("payment");
                  }}
                  onPlaceOrder={handlePlaceOrder}
                />
              )}
            </div>
          </div>
          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary totalItems={totalItems} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
