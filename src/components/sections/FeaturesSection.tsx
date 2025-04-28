import { Check, Shield, FileCheck, TrendingUp, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Check className="h-6 w-6 text-white" />,
    title: "High Purity",
    description: "All chemical reference materials are rigorously tested to ensure ≥99% purity."
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Quality Assurance",
    description: "Certificate of Analysis available for every product."
  },
  {
    icon: <FileCheck className="h-6 w-6 text-white" />,
    title: "Research Focus",
    description: "Designed specifically for laboratory research applications."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Scientific Advancement",
    description: "Supporting cutting-edge research in chemical reference material science."
  }
];

const FeaturesSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-purple-50 py-20 overflow-hidden">
      {/* Background elements */}
      <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="hidden md:block absolute bottom-10 left-40 w-48 h-48 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="hidden md:block absolute top-40 left-20 w-64 h-64 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title bar with colored background */}
        <div className="relative mb-16 py-3 px-6 overflow-hidden bg-gradient-to-r w-fit mx-auto">
          <h2 className="text-3xl font-bold text-purple-600 relative z-10">Why Choose Our Laboratory Reagents</h2>
        </div>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Our commitment to quality ensures that researchers receive the highest grade chemical reference materials for their laboratory studies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden relative"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-peptide-purple to-peptide-dark-purple"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 p-3 inline-block bg-white/20 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-purple-50">{feature.description}</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute top-12 right-4 w-12 h-12 bg-white/5 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Research highlight section with image */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-xl border border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/Y44yZjGjpONpnXptj5cE/media/67381e52e3d9716df25f08f9.jpeg" 
                alt="Laboratory research" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-peptide-dark-purple/70 to-transparent"></div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-peptide-purple/90 to-peptide-dark-purple p-8 flex flex-col justify-center">
              <h3 className="text-white text-2xl font-bold mb-4">Research-Grade Excellence</h3>
              <p className="text-white text-lg mb-6">
                Our laboratory reagents meet the highest standards for laboratory research applications.
              </p>
              <div className="flex items-center">
                <span className="inline-block mr-3 p-1 rounded-full bg-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                <span className="font-semibold text-red-200">Strictly for research purposes. Not for human consumption.</span>
              </div>
              <Button asChild size="lg" className="mt-6 bg-white text-peptide-purple hover:bg-gray-100">
                <Link to="/products" className="inline-flex items-center">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Browse Research Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
