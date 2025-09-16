import { Check, Shield, FileCheck, TrendingUp, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Check className="h-6 w-6 text-white" />,
    title: "Hög Kvalitet",
    description: "Alla återhämtningsprodukter är noggrant testade för att säkerställa säkerhet och effektivitet."
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Kvalitetssäkring",
    description: "Kvalitetscertifikat tillgängligt för varje produkt."
  },
  {
    icon: <FileCheck className="h-6 w-6 text-white" />,
    title: "Återhämtningsfokus",
    description: "Designade specifikt för fysisk återhämtning och välbefinnande."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Naturlig Hälsa",
    description: "Stödjer din naturliga återhämtningsprocess med säkra och effektiva produkter."
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
          <h2 className="text-3xl font-bold text-purple-600 relative z-10">Varför Välja Våra Återhämtningsprodukter</h2>
        </div>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Vårt engagemang för kvalitet säkerställer att du får de bästa återhämtningsprodukterna för din fysiska hälsa.
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
              <h3 className="text-white text-2xl font-bold mb-4">Premium Återhämtning</h3>
              <p className="text-white text-lg mb-6">
                Våra återhämtningsprodukter uppfyller de högsta standarderna för fysisk hälsa och välbefinnande.
              </p>
              <div className="flex items-center">
                <span className="inline-block mr-3 p-1 rounded-full bg-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="font-semibold text-green-200">Säkra och naturliga produkter för din återhämtning.</span>
              </div>
              <Button asChild size="lg" className="mt-6 bg-white text-peptide-purple hover:bg-gray-100">
                <Link to="/products" className="inline-flex items-center">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Utforska Återhämtningsprodukter
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
