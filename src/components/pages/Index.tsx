import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ClientOnly from "@/components/ClientOnly";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ProductCarousel from "@/components/ui/ProductCarousel";
import Disclaimer from "@/components/ui/Disclaimer";
import { useProducts } from "@/hooks/useProducts";

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
            <p className="text-gray-600">Laddar produkter...</p>
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
            <p className="text-red-600 mb-4">Fel vid laddning av produkter: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Försök igen
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Återhämtningsprodukter</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Utforska vårt urval av högkvalitativa återhämtningsprodukter för fysisk hälsa och välbefinnande.
          </p>
          <div className="inline-block bg-green-50 p-2 rounded-md border border-green-100">
            <p className="text-sm text-green-600 font-medium">Säkra produkter för din återhämtning</p>
          </div>
        </div>
        
        <div className="mb-8 max-w-4xl mx-auto bg-blue-50 p-4 border border-blue-200 rounded-md">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Produktinformation</h3>
          <p className="text-sm text-blue-700">
            Alla produkter är korrekt listade med sina fullständiga namn, tydliga beskrivningar och aktuella priser i SEK.
            Varje produktsida innehåller detaljerade specifikationer och användningsanvisningar.
            För komplett produktinformation, besök enskilda produktsidor.
          </p>
        </div>
        
        <ClientOnly fallback={<div className="h-64 bg-gray-50 rounded-lg animate-pulse"></div>}>
          <ProductCarousel
            products={recommendedProducts} 
            title="Rekommenderade Återhämtningsprodukter" 
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
