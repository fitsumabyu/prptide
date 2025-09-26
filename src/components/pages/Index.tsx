import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ClientOnly from "@/components/ClientOnly";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ProductCarousel from "@/components/ui/ProductCarousel";
import Disclaimer from "@/components/ui/Disclaimer";
import { useProducts } from "@/hooks/useProducts";
import BilingualText from "@/components/ui/BilingualText";

const Index = () => {
  const { products, loading, error } = useProducts();
  
  // Filter products to show only the recommended items in the carousel
  const recommendedProducts = products.filter(product => 
    ['88815p1', '88816p1', '88817p1', '88818p1', '88819p1'].includes(product.id)
  );

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
              <BilingualText english="Try Again" swedish="Försök igen" showBoth={true} inline />
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ClientOnly fallback={<div className="h-screen bg-gradient-to-br from-purple-50 to-white"></div>}>
        <HeroSection fullHeight={true} />
      </ClientOnly>
      
      <div className="py-20 container mx-auto px-4 bg-gradient-to-b from-white to-gray-50 -mt-[1px]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <BilingualText 
            english="Premium Recovery Products"
            swedish="Premium Återhämtningsprodukter"
            className="text-3xl font-bold text-gray-900 mb-4"
          />
          <BilingualText 
            english="Explore our selection of high-quality recovery products for physical health and well-being."
            swedish="Utforska vårt urval av högkvalitativa återhämtningsprodukter för fysisk hälsa och välbefinnande."
            className="text-lg text-gray-700 mb-8 max-w-2xl"
          />
          <div className="inline-block bg-yellow-50 p-2 rounded-md border border-yellow-100">
            <BilingualText 
              english="Safe products for your recovery"
              swedish="Säkra produkter för din återhämtning"
              className="text-sm text-yellow-600 font-medium"
            />
          </div>
        </div>
        
        <div className="mb-8 max-w-4xl mx-auto bg-blue-50 p-4 border border-blue-200 rounded-md">
          <BilingualText 
            english="Product Information"
            swedish="Produktinformation"
            className="text-lg font-semibold text-blue-800 mb-2"
          />
          <BilingualText 
            english="All products are correctly listed with their complete names, clear descriptions, and current prices in SEK and USD. Each product page contains detailed specifications and usage instructions. For complete product information, visit individual product pages."
            swedish="Alla produkter är korrekt listade med sina fullständiga namn, tydliga beskrivningar och aktuella priser i SEK. Varje produktsida innehåller detaljerade specifikationer och användningsanvisningar. För komplett produktinformation, besök enskilda produktsidor."
            className="text-sm text-blue-700"
          />
        </div>
        
        <ClientOnly fallback={<div className="h-64 bg-gray-50 rounded-lg animate-pulse"></div>}>
          <ProductCarousel
            products={recommendedProducts} 
            title="Rekommenderade Återhämtningsprodukter"
            subtitle="Recommended Recovery Products"
          />
        </ClientOnly>
      </div>
      
      <FeaturesSection />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Disclaimer />
      </div>
      
      <ResearchSection />
    </Layout>
  );
};

export default Index;
