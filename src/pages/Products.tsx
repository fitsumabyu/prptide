import { useState, useMemo, Fragment } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ui/ProductCard";
import Disclaimer from "@/components/ui/Disclaimer";
import { products } from "@/data/products";
import { useShippingCountry } from "@/context/ShippingCountryContext";
import { useCountry } from "@/components/shipping/CountrySelector";
import { AlertTriangle, Search } from "lucide-react";
import { Popover, Transition } from "@headlessui/react";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

// Define allowed and restricted countries
const allowedCountries = [
  "GB", "CA", "DE", "NL", "SE", "DK", "FI", "NO", "IE", "NZ"
];

const restrictedCountries = [
  "AE", "IR", "KP", "SY", "CU"
];

// Define category descriptions for filter
const categoryDescriptions: Record<string, string> = {
  "all": "View all product categories",
  "Tissue Healing": "Peptides studied for tissue protective properties",
  "Growth Hormone": "Peptides related to growth hormone function",
  "Melanocortin": "Peptides that interact with melanocortin receptors",
  "Modified Growth Hormone": "Modified fragments of growth hormone peptides"
};

// Define the type for our category filter
interface CategoryFilterState {
  "all": boolean;
  "Tissue Healing": boolean;
  "Growth Hormone": boolean;
  "Melanocortin": boolean;
  "Modified Growth Hormone": boolean;
  [key: string]: boolean; // To allow dynamic keys
}

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { country } = useShippingCountry();
  const { showWarning } = useCountry();
  
  // Set up filter state with initial values
  const initialCategoryFilter: CategoryFilterState = {
    "all": true,
    "Tissue Healing": false,
    "Growth Hormone": false,
    "Melanocortin": false,
    "Modified Growth Hormone": false
  };
  
  const [filter, setFilter] = useState({
    category: { ...initialCategoryFilter }
  });

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return ["all", ...uniqueCategories];
  }, []);

  // Toggle filter function
  const toggleFilter = (filterType: string, name: string) => {
    if (filterType === "category") {
      // If selecting "all", deselect others
      if (name === "all") {
        const resetFilters = { ...initialCategoryFilter };
        resetFilters["all"] = true;
        
        setFilter({
          ...filter,
          category: resetFilters
        });
      } else {
        // If selecting any other, deselect "all"
        setFilter({
          ...filter,
          category: {
            ...filter.category,
            [name]: !filter.category[name],
            "all": false
          }
        });
      }
    }
  };

  // Get the active categories
  const activeCategories = useMemo(() => {
    const selected = Object.entries(filter.category)
      .filter(([_, checked]) => checked)
      .map(([name]) => name);
    
    // If "all" is selected or nothing is selected, return "all"
    return selected.includes("all") || selected.length === 0 ? ["all"] : selected;
  }, [filter.category]);

  // Handle filter application
  const handleFilter = () => {
    // This function would be called when applying the filter
    // It's already handled by our reactive state
  };

  // Clear all category filters
  const clearCategoryFilters = () => {
    const resetFilters = { ...initialCategoryFilter };
    resetFilters["all"] = true;
    
    setFilter({
      ...filter,
      category: resetFilters
    });
  };

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategories.includes("all") || activeCategories.includes(product.category))
    );
  }, [searchTerm, activeCategories]);

  // Group products by category
  const productsByCategory = useMemo(() => {
    if (activeCategories.length === 1 && activeCategories[0] !== "all") {
      return {
        [activeCategories[0]]: filteredProducts
      };
    }

    return filteredProducts.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as Record<string, typeof products>);
  }, [filteredProducts, activeCategories]);

  // Check if the current country is in the restricted list or not in the allowed list
  const isCountryShippable = useMemo(() => {
    if (!country) return true; // If no country selected, show products
    return !restrictedCountries.includes(country) && allowedCountries.includes(country);
  }, [country]);

  // Render the category filter UI
  const renderCategoryFilter = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-6000 focus:outline-none ${
                open ? "!border-primary-500 " : ""
              }`}
            >
              <span>Category</span>
              <i className="las la-angle-down ml-2"></i>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-5">
                    {Object.entries(filter.category).map(
                      ([name, checked]) => (
                        <div key={name} className="">
                          <div className="flex items-center">
                            <input
                              id={`category-${name}`}
                              name={name}
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleFilter("category", name)}
                              className="h-5 w-5 rounded text-peptide-purple focus:ring-peptide-purple"
                            />
                            <label htmlFor={`category-${name}`} className="ml-2 text-sm text-gray-700">
                              {name === "all" ? "All Categories" : name}
                              <span className="block text-xs text-gray-500">
                                {categoryDescriptions[name]}
                              </span>
                            </label>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <button
                      onClick={() => {
                        clearCategoryFilters();
                      }}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Clear
                    </button>
                    <button
                      onClick={() => {
                        handleFilter();
                        close();
                      }}
                      className="px-4 py-2 text-sm bg-peptide-purple text-white rounded hover:bg-peptide-purple/90"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-96px)] flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Research Peptides</h1>
          <p className="text-gray-600 mb-6">
            Browse our selection of high-purity peptides for laboratory research applications.
            <span className="text-red-600 font-medium"> For Research Use Only - Not for Human Use.</span>
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Where would you like your sanctuary to be?"
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-peptide-purple"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              {renderCategoryFilter()}
            </div>
          </div>

          <div className="bg-amber-50 p-4 border border-amber-200 rounded-md mb-8">
            <h2 className="text-lg font-semibold text-amber-800 mb-2">Product Information Notice</h2>
            <p className="text-sm text-amber-700">
              All products listed on this page are for research purposes only. Each product displays its accurate name, 
              description, purity level, and price in USD. For detailed specifications and Certificate of Analysis, 
              please visit the individual product pages.
            </p>
          </div>

          <div className="mb-8">
            <Disclaimer />
          </div>
        </div>

        {/* Active filter display */}
        {!activeCategories.includes("all") && activeCategories.length > 0 && (
          <div className="mb-6 flex items-center flex-wrap gap-2">
            <span className="mr-2 text-sm text-gray-600">Filters:</span>
            {activeCategories.map(category => (
              <div key={category} className="bg-peptide-purple/10 text-peptide-purple text-sm px-3 py-1 rounded-full flex items-center">
                {category}
                <button 
                  onClick={() => toggleFilter("category", category)} 
                  className="ml-2 text-peptide-purple hover:text-peptide-purple/80"
                >
                  ×
                </button>
              </div>
            ))}
            {activeCategories.length > 1 && (
              <button 
                onClick={clearCategoryFilters}
                className="text-sm text-gray-600 underline hover:text-peptide-purple"
              >
                Clear all
              </button>
            )}
          </div>
        )}

        {!isCountryShippable && showWarning ? (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center my-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <AlertTriangle className="h-12 w-12 text-red-500" />
              <h2 className="text-2xl font-bold text-red-700">Products Not Available in Your Region</h2>
              <p className="text-red-600 max-w-2xl">
                We're sorry, but we currently don't ship our research peptides to your selected country. 
                Please select a different shipping destination to view our product catalog.
              </p>
            </div>
          </div>
        ) : (
          filteredProducts.length > 0 ? (
            Object.entries(productsByCategory).map(([category, categoryProducts]) => (
              <div key={category} className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categoryProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      purity={product.purity}
                      price={product.price}
                      image={product.image}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching "{searchTerm}"</p>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default Products;
