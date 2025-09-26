import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ui/ProductCard";
import Disclaimer from "@/components/ui/Disclaimer";
import BilingualText from "@/components/ui/BilingualText";
import { useProducts } from "@/hooks/useProducts";
import { useShippingCountry } from "@/context/ShippingCountryContext";
import { useCountry } from "@/components/shipping/CountrySelector";
// Using text/emoji icons instead of lucide-react to avoid import issues

const ProductsNew = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { country } = useShippingCountry();
  const { showWarning } = useCountry();
  const { products, loading, error } = useProducts();

  // Check if the current country is in the restricted list or not in the allowed list
  const isCountryShippable = country === "US"; // Only allow US locations

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <BilingualText english="Loading products..." swedish="Laddar produkter..." className="text-gray-600" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <BilingualText 
              english={`Error loading products: ${error}`}
              swedish={`Fel vid laddning av produkter: ${error}`}
              className="text-red-600 mb-4"
            />
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <BilingualText english="Try again" swedish="Försök igen" inline />
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // Group products by base product (first 5 characters of ID)
  const productGroups = products.reduce((acc, product) => {
    const baseId = product.id.substring(0, 5); // e.g., "88815"
    const baseName = product.name.split(' - ')[0]; // e.g., "Intensive Hydration Sheet Masks"
    
    if (!acc[baseId]) {
      acc[baseId] = {
        name: baseName,
        description: product.description,
        swedishdescription: product.swedishdescription,
        category: product.category,
        products: []
      };
    }
    acc[baseId].products.push(product);
    return acc;
  }, {} as Record<string, {
    name: string;
    description: string;
    swedishdescription: string;
    category: string;
    products: typeof products;
  }>);

  // Filter product groups based on search term
  const filteredProductGroups = Object.entries(productGroups).filter(([_, group]) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-96px)] flex flex-col">
        <div className="mb-8">
          <BilingualText 
            english="Recovery Products" 
            swedish="Återhämtningsprodukter" 
            className="text-3xl font-bold mb-4"
          />
          <div className="text-gray-600 mb-6">
            <BilingualText 
              english="We sell high-quality recovery products for physical health and well-being. All products are safe and natural for personal use."
              swedish="Vi säljer högkvalitativa återhämtningsprodukter för fysisk hälsa och välbefinnande. Alla produkter är säkra och naturliga för personlig användning."
            />
            <div className="text-yellow-600 font-medium mt-2">
              <BilingualText english="Safe products for your recovery." swedish="Säkra produkter för din återhämtning." inline />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Sök återhämtningsprodukter..."
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-peptide-purple"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 border border-blue-200 rounded-md mb-8">
            <BilingualText 
              english="Product Information" 
              swedish="Produktinformation" 
              className="text-lg font-semibold text-blue-800 mb-2"
            />
            <BilingualText 
              english="All products listed on this page are for personal recovery. Each product shows its correct name, description, quality level and price in SEK. For detailed specifications and quality certificates, visit the individual product pages."
              swedish="Alla produkter som listas på denna sida är för personlig återhämtning. Varje produkt visar sitt korrekta namn, beskrivning, kvalitetsnivå och pris i SEK. För detaljerade specifikationer och kvalitetscertifikat, besök de enskilda produktsidorna."
              className="text-sm text-blue-700"
            />
          </div>

          <div className="mb-8">
            <Disclaimer />
          </div>
        </div>

        {!isCountryShippable && showWarning ? (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center my-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-6xl">⚠️</div>
              <BilingualText 
                english="Products Not Available in Your Region" 
                swedish="Produkter inte tillgängliga i din region" 
                className="text-2xl font-bold text-red-700"
              />
              <BilingualText 
                english="We're sorry, but we currently don't ship our recovery products to your selected country. Please select a different shipping destination to view our product catalog."
                swedish="Vi ber om ursäkt, men vi skickar för närvarande inte våra återhämtningsprodukter till ditt valda land. Vänligen välj en annan fraktdestination för att se vår produktkatalog."
                className="text-red-600 max-w-2xl"
              />
            </div>
          </div>
        ) : (
          filteredProductGroups.length > 0 ? (
            filteredProductGroups.map(([baseId, group]) => (
              <div key={baseId} className="mb-12">
                {/* Product Group Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">{group.name}</h2>
                  <p className="text-gray-600 mb-2">{group.description}</p>
                  <p className="text-gray-500 text-sm mb-4">{group.swedishdescription}</p>
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm text-gray-600 font-medium">{group.category}</span>
                  </div>
                </div>

                {/* Product Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.products.map(product => (
                    <div key={product.id} className="relative">
                      {/* Tier Badge */}
                      <div className="absolute -top-2 -right-2 bg-peptide-purple text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                        Tier {product.id.slice(-1)}
                      </div>
                      
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        purity={product.purity}
                        price={product.price}
                        image={product.image}
                      />
                    </div>
                  ))}
                </div>

                {/* Product Group Footer */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div>
                      <BilingualText english="Available Sizes:" swedish="Tillgängliga storlekar:" className="font-medium" inline />
                      <span className="ml-2">
                        {group.products.map(p => p.contents[0]?.quantity + ' ' + p.contents[0]?.englishunittype).join(', ')}
                      </span>
                    </div>
                    <div>
                      <BilingualText english="Price Range:" swedish="Prisintervall:" className="font-medium" inline />
                      <span className="ml-2">
                        {Math.min(...group.products.map(p => parseInt(p.price.replace(' kr', ''))))} kr - {Math.max(...group.products.map(p => parseInt(p.price.replace(' kr', ''))))} kr
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <BilingualText 
                english={`No products found matching "${searchTerm}"`}
                swedish={`Inga produkter hittades som matchar "${searchTerm}"`}
                className="text-gray-500 text-lg"
              />
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default ProductsNew;
