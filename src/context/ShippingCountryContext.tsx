import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ShippingCountryContextType {
  country: string;
  setCountry: (country: string) => void;
}

const ShippingCountryContext = createContext<ShippingCountryContextType | undefined>(undefined);

export function useShippingCountry() {
  const context = useContext(ShippingCountryContext);
  if (context === undefined) {
    throw new Error('useShippingCountry must be used within a ShippingCountryProvider');
  }
  return context;
}

interface ShippingCountryProviderProps {
  children: ReactNode;
}

export function ShippingCountryProvider({ children }: ShippingCountryProviderProps) {
  // Default to US
  const [country, setCountry] = useState<string>('US');

  const value = {
    country,
    setCountry,
  };

  return (
    <ShippingCountryContext.Provider value={value}>
      {children}
    </ShippingCountryContext.Provider>
  );
} 