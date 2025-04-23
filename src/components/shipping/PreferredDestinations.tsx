import React from "react";
import { Globe } from "lucide-react";

export type ShippingDestination = {
  id: number;
  name: string;
  description: string;
  productSpecific?: boolean; // Indicates if this is a product-specific destination
};

// General destinations available for all products
const preferredCountries: ShippingDestination[] = [
  {
    id: 1,
    name: "United Kingdom",
    description: "Permits importation of research chemicals with proper labeling."
  },
  {
    id: 2,
    name: "Canada",
    description: "Allows research-use-only peptides; ensure accurate documentation."
  },
  {
    id: 3,
    name: "Germany",
    description: "Accepts research chemicals; compliance with EU regulations is essential."
  },
  {
    id: 4,
    name: "Netherlands",
    description: "Known for a pragmatic approach to research substances."
  },
  {
    id: 5,
    name: "Sweden",
    description: "Supports importation of research peptides with correct labeling."
  },
  {
    id: 6,
    name: "Denmark",
    description: "Permits research chemicals under strict compliance."
  },
  {
    id: 7,
    name: "Finland",
    description: "Allows importation for research purposes with proper documentation."
  },
  {
    id: 8,
    name: "Norway",
    description: "Accepts research-use substances; ensure adherence to local regulations."
  },
  {
    id: 9,
    name: "Ireland",
    description: "Permits research chemicals; compliance with EU standards is required."
  },
  {
    id: 10,
    name: "New Zealand",
    description: "Allows importation of research peptides with appropriate labeling."
  }
];

// Example of product-specific destinations (to be used in the future)
// This can be merged with the main list when needed for specific products
export const usaStatesForProduct: ShippingDestination[] = [
  { 
    id: 101, 
    name: "California", 
    description: "Available for specific research products only",
    productSpecific: true
  },
  { 
    id: 102, 
    name: "New York", 
    description: "Available for specific research products only",
    productSpecific: true
  },
  { 
    id: 103, 
    name: "Florida", 
    description: "Available for specific research products only",
    productSpecific: true
  }
];

interface PreferredDestinationsProps {
  productId?: string; // Optional product ID to show product-specific destinations
  productName?: string; // Optional product name to display
  additionalDestinations?: ShippingDestination[]; // Product-specific destinations
}

const PreferredDestinations: React.FC<PreferredDestinationsProps> = ({ 
  productId, 
  productName,
  additionalDestinations = []
}) => {
  // Combine general destinations with any product-specific ones
  const destinations = productId 
    ? [...preferredCountries, ...additionalDestinations]
    : preferredCountries;
  
  return (
    <div className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="text-peptide-purple h-6 w-6" />
        <h2 className="text-2xl font-bold">
          {productName 
            ? `Shipping Destinations for ${productName}` 
            : "Preferred Shipping Destinations"}
        </h2>
      </div>
      
      {productName && (
        <p className="text-gray-600 mb-4">
          Below are countries that accept shipment of this research product. Different products may have different shipping eligibility based on local regulations.
        </p>
      )}
      
      <div className="space-y-4">
        {destinations.map((country) => (
          <div key={country.id} className="flex items-start">
            <div className={`text-lg font-semibold mr-2 ${country.productSpecific ? "text-blue-600" : "text-peptide-purple"}`}>
              {country.id < 100 ? `${country.id}.` : "•"}
            </div>
            <div>
              <span className={`font-semibold ${country.productSpecific ? "text-blue-600" : ""}`}>
                {country.name}:
              </span>{" "}
              <span className="text-gray-700">{country.description}</span>
            </div>
          </div>
        ))}
      </div>
      
      {productName && additionalDestinations.length > 0 && (
        <div className="mt-6 text-sm text-gray-500">
          <p>• Blue items indicate product-specific shipping destinations.</p>
        </div>
      )}
    </div>
  );
};

export default PreferredDestinations;
export { preferredCountries }; 