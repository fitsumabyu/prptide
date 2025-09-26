'use client';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/context/CartContext";
import { useState, useEffect } from "react";
import AgeVerification from "@/components/AgeVerification";
import { CountryProvider } from "@/components/shipping/CountrySelector";
import ShippingWarningBanner from "@/components/shipping/ShippingWarningBanner";
import { ShippingCountryProvider } from "@/context/ShippingCountryContext";
import { LanguageProvider } from "@/components/ui/BilingualText";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  const [ageVerified, setAgeVerified] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  // Check age verification status after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
    const verified = localStorage.getItem("ageVerified") === "true";
    setAgeVerified(verified);
  }, []);

  const handleAgeVerification = () => {
    localStorage.setItem("ageVerified", "true");
    setAgeVerified(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <CartProvider>
          <ShippingCountryProvider>
            <CountryProvider>
              <TooltipProvider>
              <Toaster />
              <Sonner />
              {isClient && !ageVerified && <AgeVerification onVerify={handleAgeVerification} />}
              <div className={isClient && !ageVerified ? "hidden" : ""}>
                <ShippingWarningBanner />
                {children}
              </div>
              </TooltipProvider>
            </CountryProvider>
          </ShippingCountryProvider>
        </CartProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
