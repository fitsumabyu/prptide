import React from "react";
import { Globe } from "lucide-react";

export type ShippingDestination = {
  id: number;
  name: string;
  description: string;
  productSpecific?: boolean; // Indicates if this is a product-specific destination
};

// US states for domestic shipping
const preferredStates: ShippingDestination[] = [
  {
    id: 1,
    name: "California",
    description: "2-3 business days shipping to major cities"
  },
  {
    id: 2,
    name: "New York",
    description: "2-3 business days shipping to the metro area"
  },
  {
    id: 3,
    name: "Texas",
    description: "2-4 business days shipping throughout the state"
  },
  {
    id: 4,
    name: "Florida",
    description: "2-3 business days shipping to major cities"
  },
  {
    id: 5,
    name: "Illinois",
    description: "2-3 business days shipping to Chicago metro area"
  },
  {
    id: 6,
    name: "Washington",
    description: "2-4 business days shipping to Seattle and surrounding areas"
  },
  {
    id: 7,
    name: "Colorado",
    description: "3-5 business days shipping to major research centers"
  },
  {
    id: 8,
    name: "Massachusetts",
    description: "2-3 business days shipping to research institutions"
  },
  {
    id: 9,
    name: "Pennsylvania",
    description: "2-4 business days shipping throughout the state"
  },
  {
    id: 10,
    name: "Michigan",
    description: "3-5 business days shipping to major cities"
  }
];

// Example of product-specific destinations (to be used in the future)
// This can be merged with the main list when needed for specific products
export const additionalStates: ShippingDestination[] = [
  { 
    id: 101, 
    name: "New Jersey", 
    description: "Available for specific research products only",
    productSpecific: true
  },
  { 
    id: 102, 
    name: "Maryland", 
    description: "Available for specific research products only",
    productSpecific: true
  },
  { 
    id: 103, 
    name: "Virginia", 
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
    ? [...preferredStates, ...additionalDestinations]
    : preferredStates;
  
  return (
    <div className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="text-peptide-purple h-6 w-6" />
        <h2 className="text-2xl font-bold">
          {productName 
            ? `Shipping Destinations for ${productName}` 
            : "Domestic US Shipping States"}
        </h2>
      </div>
      
      {productName && (
        <p className="text-gray-600 mb-4">
          Below are states where we currently ship this research product. Different products may have different shipping eligibility based on local regulations.
        </p>
      )}
      
      <div className="bg-amber-50 p-4 rounded-md border border-amber-200 mb-6">
        <p className="text-amber-800 font-medium">
          Note: We currently only ship within the United States. International shipping is not available at this time.
        </p>
      </div>
      
      <div className="space-y-4">
        {destinations.map((state) => (
          <div key={state.id} className="flex items-start">
            <div className={`text-lg font-semibold mr-2 ${state.productSpecific ? "text-blue-600" : "text-peptide-purple"}`}>
              {state.id < 100 ? `${state.id}.` : "•"}
            </div>
            <div>
              <span className={`font-semibold ${state.productSpecific ? "text-blue-600" : ""}`}>
                {state.name}:
              </span>{" "}
              <span className="text-gray-700">{state.description}</span>
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
export { preferredStates }; 