
import React from "react";

type CheckoutStep = "details" | "shipping" | "payment" | "crypto-payment" | "review";

interface CheckoutStepsProps {
  currentStep: CheckoutStep;
  setCurrentStep?: (step: CheckoutStep) => void;
}

const steps: { key: CheckoutStep; label: string }[] = [
  { key: "details", label: "Customer Details" },
  { key: "shipping", label: "Shipping" },
  { key: "payment", label: "Payment" },
  { key: "crypto-payment", label: "Crypto Payment" },
  { key: "review", label: "Review" },
];

export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  // Show different steps based on current step
  const getVisibleSteps = () => {
    if (currentStep === "crypto-payment") {
      return [
        { key: "details", label: "Customer Details" },
        { key: "crypto-payment", label: "Crypto Payment" },
        { key: "review", label: "Review" },
      ];
    }
    return steps;
  };

  const visibleSteps = getVisibleSteps();

  return (
    <div className="flex mb-8">
      {visibleSteps.map((step) => (
        <div
          key={step.key}
          className={`flex-1 pb-3 border-b-2 ${
            currentStep === step.key
              ? "border-peptide-purple text-peptide-purple font-medium"
              : "border-gray-200"
          }`}
        >
          {step.label}
        </div>
      ))}
    </div>
  );
}
