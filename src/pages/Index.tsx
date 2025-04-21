
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ProductCarousel from "@/components/ui/ProductCarousel";
import Disclaimer from "@/components/ui/Disclaimer";
import { products } from "@/data/products";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <div className="py-20 container mx-auto px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Research Peptides</h2>
          <p className="text-gray-700">
            Browse our selection of high-purity peptides specifically formulated for advanced laboratory research.
            All products undergo rigorous quality control testing.
          </p>
        </div>
        
        <ProductCarousel 
          products={products} 
          title="Featured Research Peptides" 
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
