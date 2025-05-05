import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ProductCarousel from "@/components/ui/ProductCarousel";
import Disclaimer from "@/components/ui/Disclaimer";
import { products } from "@/data/products";

const Index = () => {
  // Filter products to show only the recommended items in the carousel
  const recommendedProducts = products.filter(product => 
    ['bpc-157', 'tb-500', 'ghk-cu', 'selank', 'semax', 'mots-c', 'thymosin-a1'].includes(product.id)
  );

  return (
    <Layout>
      <HeroSection fullHeight={true} />
      
      <div className="py-20 container mx-auto px-4 bg-gradient-to-b from-white to-gray-50 -mt-[1px]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Laboratory Reagents</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Browse our selection of high-purity chemical reference materials specifically formulated for advanced laboratory research.
          </p>
          <div className="inline-block bg-red-50 p-2 rounded-md border border-red-100">
            <p className="text-sm text-red-600 font-medium">For Research Use Only - Not for Human Use</p>
          </div>
        </div>
        
        <div className="mb-8 max-w-4xl mx-auto bg-amber-50 p-4 border border-amber-200 rounded-md">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Product Listings Information</h3>
          <p className="text-sm text-amber-700">
            All products are accurately listed with their complete names, clear descriptions, and current pricing in USD.
            Each product page includes the "Research Use Only" disclaimer and detailed specifications to avoid any ambiguity.
            For complete product information, please visit individual product pages.
          </p>
        </div>
        
        <ProductCarousel
          products={recommendedProducts} 
          title="Recommended Research Compounds" 
        />
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
