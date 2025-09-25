import React from "react";
import { calculateTotalCost, getCountryByCode } from "@/data/countries";

interface Props {
  totalItems: number;
  totalPrice: number;
  countryCode?: string;
}

const OrderSummary: React.FC<Props> = ({ totalItems, totalPrice, countryCode = 'SE' }) => {
  // Calculate country-specific costs
  const costCalculation = calculateTotalCost(totalPrice, countryCode);
  const country = getCountryByCode(countryCode);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border
    
     border-gray-100 sticky top-6">
      <h2 className="text-xl font-bold mb-4">Beställningssammanfattning</h2>
      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Artiklar ({totalItems}):</span>
          <span className="font-medium">{costCalculation.subtotal.toFixed(2)} kr</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">
            Frakt {country ? `till ${country.name}` : ''}:
          </span>
          <span className="font-medium">{costCalculation.shippingCost.toFixed(2)} kr</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">
            Moms ({country ? `${(country.taxRate * 100).toFixed(0)}%` : 'N/A'}):
          </span>
          <span className="font-medium">{costCalculation.taxAmount.toFixed(2)} kr</span>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span>Totalt:</span>
            <span>{costCalculation.total.toFixed(2)} kr</span>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2 mb-4">
        <p>Betalning behandlas säkert. Ditt kort debiteras omedelbart vid beställning.</p>
        <p className="mt-1">Alla priser i SEK. {country && country.code !== 'SE' ? `Frakt till ${country.name} inkluderad.` : 'Inhemsk frakt inkluderad.'}</p>
      </div>
      <div className="mt-6 bg-red-50 p-4 rounded-md border border-red-100">
        <p className="text-sm text-red-700 font-medium mb-2">
          IMPORTANT DISCLAIMER
        </p>
        <p className="text-xs text-red-600">
          These products are not
          intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-6">
              <div className="flex items-center justify-center mb-3">
                <p className="text-sm font-medium text-gray-700">🔒 Säker betalning</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-3">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/visa.svg" alt="Visa" className="h-6 grayscale" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/mastercard.svg" alt="Mastercard" className="h-6 grayscale" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/americanexpress.svg" alt="American Express" className="h-6 grayscale" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/discover.svg" alt="Discover" className="h-6 grayscale" />
              </div>
              <p className="text-xs text-center text-gray-500">
                Din transaktion är säkrad med SSL-kryptering
              </p>
            </div>
    </div>
  );
};

export default OrderSummary;
