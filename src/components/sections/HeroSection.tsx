
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-purple-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Research-Grade Peptides for Laboratory Use Only
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Premium quality peptides with high purity for scientific research. 
              <span className="font-semibold text-red-600"> Strictly for research purposes. Not for human consumption.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-peptide-purple hover:bg-peptide-dark-purple">
                <Link to="/products" className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Browse Products
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-peptide-light-purple rounded-lg rotate-6 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-peptide-purple rounded-lg -rotate-3 opacity-20"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&auto=format&fit=crop&q=80" 
                  alt="Laboratory research" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">High-quality peptides for advanced laboratory research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract lab background elements */}
      <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="hidden md:block absolute bottom-10 right-40 w-48 h-48 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
