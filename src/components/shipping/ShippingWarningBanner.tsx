import React from "react";
import { AlertTriangle } from "lucide-react";
import { useCountry } from "./CountrySelector";
import { useShippingCountry } from "@/context/ShippingCountryContext";

const ShippingWarningBanner: React.FC = () => {
  const { showWarning, warningMessage } = useCountry();
  const { country } = useShippingCountry();

  if (!showWarning) return null;

  return (
    <div className="w-full bg-red-100 p-3 text-center">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-red-700">
        <AlertTriangle className="h-5 w-5" />
        <p className="font-medium">{warningMessage}</p>
      </div>
    </div>
  );
};

export default ShippingWarningBanner; 