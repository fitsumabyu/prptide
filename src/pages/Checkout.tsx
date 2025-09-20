import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Info, Shield, Lock } from "lucide-react";
import { toast } from "sonner";
import CheckoutSteps from "@/components/checkout/CheckoutSteps";
import CustomerDetailsForm from "@/components/checkout/CustomerDetailsForm";
import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentForm from "@/components/checkout/PaymentForm";
import CryptoPaymentForm from "@/components/checkout/CryptoPaymentForm";
import OrderReview from "@/components/checkout/OrderReview";
import OrderSummary from "@/components/checkout/OrderSummary";

type CheckoutStep = "details" | "shipping" | "payment" | "crypto-payment" | "review";

type CustomerInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ageVerified: boolean;
  refundPolicyAccepted: boolean;
  paymentMethod: string;
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
  ageVerified: false,
  refundPolicyAccepted: false,
  paymentMethod: "",
};
const initialShipping: ShippingInfo = {
  address: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "United Kingdom",
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
    toast.success("Beställning lagd framgångsrikt! Tack för ditt köp.");
    clearCart();
    navigate("/");
  };

  // Step validations
  const validateDetails = () => {
    const errs: { [k: string]: string } = {};
    if (!customer.firstName.trim()) errs.firstName = "Förnamn krävs.";
    if (!customer.lastName.trim()) errs.lastName = "Efternamn krävs.";
    if (!customer.email.trim() || !/^\S+@\S+\.\S+$/.test(customer.email.trim())) errs.email = "En giltig e-postadress krävs.";
    if (!customer.paymentMethod) errs.paymentMethod = "Välj en betalningsmetod.";
    if (!customer.ageVerified) errs.ageVerified = "Du måste bekräfta att du är 21 år eller äldre för att fortsätta.";
    if (!customer.refundPolicyAccepted) errs.refundPolicyAccepted = "Du måste acceptera vår återbetalningspolicy för att fortsätta.";
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
            {/* Secure Checkout Banner */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border border-green-100 mb-6 flex items-center">
              <Lock className="h-5 w-5 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-green-800">Secure Checkout</p>
                <p className="text-xs text-green-700">Your payment information is encrypted and secure</p>
              </div>
            </div>

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
                    : currentStep === "crypto-payment"
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
                      // Route to crypto payment if crypto method selected, otherwise to shipping
                      if (['bitcoin', 'ethereum', 'polygon'].includes(customer.paymentMethod)) {
                        setCurrentStep("crypto-payment");
                      } else {
                        setCurrentStep("shipping");
                      }
                    } else {
                      toast.error("Vänligen fyll i all nödvändig kundinformation.");
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
              {currentStep === "crypto-payment" && (
                <CryptoPaymentForm
                  paymentMethod={customer.paymentMethod}
                  totalAmount={totalPrice}
                  onPaymentComplete={() => {
                    toast.success("Beställning lagd framgångsrikt! Tack för ditt köp.");
                    clearCart();
                    navigate("/");
                  }}
                  onBack={() => {
                    setCurrentStep("details");
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

            {/* Payment Methods Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
              <h3 className="text-lg font-semibold mb-4">Accepted Payment Methods</h3>
              <div className="flex flex-wrap gap-4 mb-6">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/visa.svg" alt="Visa" className="h-8" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/mastercard.svg" alt="Mastercard" className="h-8" />
              </div>
              <p className="text-sm text-gray-600">We only accept Visa and Mastercard for all transactions. We do not accept any other payment methods at this time.</p>
            </div>
            
            {/* Product Safety Disclaimer */}
            <div className="bg-green-50 border border-green-200 p-5 rounded-lg shadow-sm mb-6">
              <p className="text-green-700 font-medium mb-2 text-lg">
                IMPORTANT INFORMATION
              </p>
              <p className="text-green-600 text-sm leading-relaxed">
                We sell high-quality recovery products for physical health and wellness. 
                All products are safe, ethically-sourced, and designed for personal use.
              </p>
              <p className="text-green-600 text-sm leading-relaxed mt-2">
                These products are intended for personal recovery and physical health. 
                These statements have not been evaluated by the Food and Drug Administration. 
                These products are not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>

            {/* Trust Badges Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
              <div className="flex items-start mb-4">
                <Shield className="h-5 w-5 text-peptide-purple mr-2 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">Shop with Confidence</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <img src="https://cdn2.iconfinder.com/data/icons/web-ui-16/33/ui-06-512.png" alt="Secure Site" className="h-8 mb-2" />
                  <span className="text-xs text-center font-medium">Secure Site</span>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWDGocTFM3uZvYetr4v11JozAP8qcDTBEHA&s" alt="PCI Compliant" className="h-8 mb-2" />
                  <span className="text-xs text-center font-medium">PCI Compliant</span>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/norton.svg" alt="Norton Secured" className="h-8 mb-2" />
                  <span className="text-xs text-center font-medium">Norton Secured</span>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/mcafee.svg" alt="McAfee Secure" className="h-8 mb-2" />
                  <span className="text-xs text-center font-medium">McAfee Secure</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Your data is protected with industry-standard SSL encryption and we adhere to strict PCI compliance standards.
              </p>
            </div>

            {/* Payment Terms & Policy Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
              <div className="flex items-start mb-4">
                <Info className="h-5 w-5 text-peptide-purple mr-2 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">Payment & Billing Information</h3>
              </div>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium mb-1">Payment Methods</h4>
                  <p>We primarily accept Visa and Mastercard. All payments are processed in SEK.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Billing & Pricing</h4>
                  <p>Your card will be charged immediately upon order confirmation. All prices are shown in SEK and include the product cost only. Taxes and shipping are calculated at checkout.</p>
                </div>
              
                <div>
                  <h4 className="font-medium mb-1">Subscription Terms</h4>
                  <p>If you choose a subscription option, your payment method will be charged automatically according to the schedule you select. You can cancel at any time through your account settings or by contacting customer service.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Refund Policy</h4>
                  <p>We offer a 30-day satisfaction guarantee. If you're not satisfied with your purchase, please contact our customer service team for return instructions. Refunds will be processed to the original payment method within 5-7 business days after we receive the returned product.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary totalItems={totalItems} totalPrice={totalPrice} />
            
            {/* Additional Trust Elements */}
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
