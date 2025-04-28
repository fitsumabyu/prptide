import React, { useState, createContext, useContext, ReactNode } from "react";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { preferredCountries } from "./PreferredDestinations";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import allCountriesData from "./countries.json";
import { useShippingCountry } from "@/context/ShippingCountryContext";

// Use the full countries list from the JSON file
const allCountries = allCountriesData.map(country => ({
  id: country.id,
  name: country.name,
  description: ""
}));

// Create a list of allowed shipping destinations (using the same IDs as in the JSON)
const allowedCountries = [
  // Using the countries from preferredCountries but keeping their names consistent with countries.json
  "GB", // United Kingdom
  "CA", // Canada
  "DE", // Germany
  "NL", // Netherlands
  "SE", // Sweden
  "DK", // Denmark
  "FI", // Finland
  "NO", // Norway
  "IE", // Ireland
  "NZ"  // New Zealand
];

// Add specific warning countries
const restrictedCountries = [
  "AE", // U.A.E.
  "IR", // Iran
  "KP", // North Korea
  "SY", // Syria
  "CU"  // Cuba
];

// Sort countries alphabetically by name
const sortedCountries = [...allCountries].sort((a, b) => 
  a.name.localeCompare(b.name)
);

// Define the shape of our context
interface CountryContextType {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  showWarning: boolean;
  warningMessage: string;
}

// Create context with default values
const CountryContext = createContext<CountryContextType>({
  selectedCountry: "",
  setSelectedCountry: () => {},
  showWarning: false,
  warningMessage: ""
});

// Custom hook to use the country context
export const useCountry = () => useContext(CountryContext);

// Provider component that wraps the app
interface CountryProviderProps {
  children: ReactNode;
}

export const CountryProvider: React.FC<CountryProviderProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleCountryChange = (countryName: string) => {
    setSelectedCountry(countryName);
    
    // Scroll to the top of the page when a country is selected
    window.scrollTo(0, 0);
    
    // Find the country object by name
    const countryObj = allCountries.find(c => c.name === countryName);
    
    if (countryObj) {
      // Special case for US - no warning banner
      if (countryObj.id === "US") {
        setShowWarning(false);
        setWarningMessage("");
        return;
      }
      
      // Check if the country is in the restricted list
      if (restrictedCountries.includes(countryObj.id)) {
        setShowWarning(true);
        setWarningMessage(`Sorry, we do not ship to ${countryName}!`);
        return;
      }
      
      // Check if the country is in the allowed list
      if (allowedCountries.includes(countryObj.id)) {
        setShowWarning(false);
        setWarningMessage("");
      } else {
        // Country exists but is not in our allowed shipping destinations
        setShowWarning(true);
        setWarningMessage(`Sorry, we currently don't ship to ${countryName}. Check back soon as we expand our shipping network.`);
      }
    } else if (countryName) {
      // If country is selected but not found in our list (unlikely but for safety)
      setShowWarning(true);
      setWarningMessage(`Country not recognized: ${countryName}`);
    } else {
      setShowWarning(false);
      setWarningMessage("");
    }
  };

  return (
    <CountryContext.Provider value={{ 
      selectedCountry, 
      setSelectedCountry: handleCountryChange,
      showWarning,
      warningMessage
    }}>
      {children}
    </CountryContext.Provider>
  );
};

// The country selector component
interface CountrySelectorProps {
  className?: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ className }) => {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const { country, setCountry } = useShippingCountry();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Filter countries based on search term
  const filteredCountries = sortedCountries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Custom handler to update both contexts
  const handleCountryChange = (countryName: string) => {
    setSelectedCountry(countryName);
    
    // Find the country object by name to get its ID
    const countryObj = allCountries.find(c => c.name === countryName);
    if (countryObj) {
      // Update the shipping country context with the country ID
      setCountry(countryObj.id);
    }
  };

  // Custom Select component with search
  return (
    <div className={className}>
      <Select 
        onValueChange={handleCountryChange} 
        value={selectedCountry}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) setSearchTerm("");
        }}
      >
        <SelectTrigger className="w-[180px] text-sm hover:bg-gray-100 focus:ring-peptide-purple">
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent className="overflow-auto max-h-[300px]">
          {isOpen && (
            <div className="flex items-center px-3 pb-2 pt-1 sticky top-0 bg-white z-10 border-b">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <Input
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-8 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
              />
            </div>
          )}
          <SelectGroup>
            <SelectLabel>Countries ({filteredCountries.length})</SelectLabel>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => {
                const isAllowed = allowedCountries.includes(country.id);
                const isRestricted = restrictedCountries.includes(country.id);
                return (
                  <SelectItem 
                    key={country.id} 
                    value={country.name}
                  >
                    {country.name}
                  </SelectItem>
                );
              })
            ) : (
              <div className="py-2 px-2 text-sm text-gray-500">No countries found</div>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountrySelector;
export { allCountries, sortedCountries }; 