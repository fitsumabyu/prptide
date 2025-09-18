import React from "react";
import { Globe } from "lucide-react";

export type ShippingDestination = {
  id: number;
  name: string;
  description: string;
  productSpecific?: boolean; // Indicates if this is a product-specific destination
};

// Swedish counties for domestic shipping
const swedishCounties: ShippingDestination[] = [
  {
    id: 1,
    name: "Stockholm",
    description: "1-2 arbetsdagar leverans till huvudstadsområdet"
  },
  {
    id: 2,
    name: "Göteborg",
    description: "1-2 arbetsdagar leverans till Göteborgsområdet"
  },
  {
    id: 3,
    name: "Malmö",
    description: "1-2 arbetsdagar leverans till Skåne"
  },
  {
    id: 4,
    name: "Uppsala",
    description: "2-3 arbetsdagar leverans till Uppsala län"
  },
  {
    id: 5,
    name: "Västra Götaland",
    description: "2-3 arbetsdagar leverans till Västra Götalands län"
  },
  {
    id: 6,
    name: "Östergötland",
    description: "2-3 arbetsdagar leverans till Östergötlands län"
  },
  {
    id: 7,
    name: "Skåne",
    description: "2-3 arbetsdagar leverans till Skåne län"
  },
  {
    id: 8,
    name: "Värmland",
    description: "3-4 arbetsdagar leverans till Värmlands län"
  },
  {
    id: 9,
    name: "Dalarna",
    description: "3-4 arbetsdagar leverans till Dalarnas län"
  },
  {
    id: 10,
    name: "Norrbotten",
    description: "4-5 arbetsdagar leverans till Norrbottens län"
  }
];

// US states for international shipping
const usStates: ShippingDestination[] = [
  {
    id: 101,
    name: "California",
    description: "5-7 business days shipping to major cities"
  },
  {
    id: 102,
    name: "New York",
    description: "5-7 business days shipping to the metro area"
  },
  {
    id: 103,
    name: "Texas",
    description: "6-8 business days shipping throughout the state"
  },
  {
    id: 104,
    name: "Florida",
    description: "5-7 business days shipping to major cities"
  },
  {
    id: 105,
    name: "Illinois",
    description: "5-7 business days shipping to Chicago metro area"
  },
  {
    id: 106,
    name: "Washington",
    description: "6-8 business days shipping to Seattle and surrounding areas"
  },
  {
    id: 107,
    name: "Colorado",
    description: "7-9 business days shipping to major research centers"
  },
  {
    id: 108,
    name: "Massachusetts",
    description: "5-7 business days shipping to research institutions"
  },
  {
    id: 109,
    name: "Pennsylvania",
    description: "6-8 business days shipping throughout the state"
  },
  {
    id: 110,
    name: "Michigan",
    description: "7-9 business days shipping to major cities"
  }
];

// Combine Swedish and US destinations
const preferredStates: ShippingDestination[] = [...swedishCounties, ...usStates];

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
            ? `Leveransdestinationer för ${productName}` 
            : "Leveransdestinationer"}
        </h2>
      </div>
      
      {productName && (
        <p className="text-gray-600 mb-4">
          Nedan visas de regioner där vi för närvarande levererar denna produkt. Olika produkter kan ha olika leveransberättigande baserat på lokala bestämmelser.
        </p>
      )}
      
      <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-6">
        <p className="text-blue-800 font-medium">
          Vi levererar till Sverige och USA. Svensk leverans är snabbare och mer kostnadseffektiv.
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Swedish Counties Section */}
        <div>
          <h3 className="text-lg font-semibold text-peptide-purple mb-3">🇸🇪 Svenska Län (Snabb Leverans)</h3>
          <div className="space-y-3">
            {swedishCounties.map((county) => (
              <div key={county.id} className="flex items-start">
                <div className="text-lg font-semibold mr-2 text-peptide-purple">
                  {county.id}.
                </div>
                <div>
                  <span className="font-semibold text-peptide-purple">
                    {county.name}:
                  </span>{" "}
                  <span className="text-gray-700">{county.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* US States Section */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">🇺🇸 Amerikanska Delstater (Internationell Leverans)</h3>
          <div className="space-y-3">
            {usStates.map((state) => (
              <div key={state.id} className="flex items-start">
                <div className="text-lg font-semibold mr-2 text-blue-600">
                  {state.id - 100}.
                </div>
                <div>
                  <span className="font-semibold text-blue-600">
                    {state.name}:
                  </span>{" "}
                  <span className="text-gray-700">{state.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Product-Specific Destinations */}
        {additionalDestinations.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-3">Produktspecifika Destinationer</h3>
            <div className="space-y-3">
              {additionalDestinations.map((dest) => (
                <div key={dest.id} className="flex items-start">
                  <div className="text-lg font-semibold mr-2 text-green-600">
                    •
                  </div>
                  <div>
                    <span className="font-semibold text-green-600">
                      {dest.name}:
                    </span>{" "}
                    <span className="text-gray-700">{dest.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        <p>• Svensk leverans: 1-5 arbetsdagar | Amerikansk leverans: 5-9 arbetsdagar</p>
        <p>• Alla leveranser inkluderar spårning och försäkring</p>
      </div>
    </div>
  );
};

export default PreferredDestinations;
export { preferredStates }; 