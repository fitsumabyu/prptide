import { Check, Shield, FileCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BilingualText from "@/components/ui/BilingualText";

const features = [
  {
    icon: <Check className="h-6 w-6 text-white" />,
    title: "Hög Kvalitet",
    englishTitle: "High Quality",
    description: "Alla återhämtningsprodukter är noggrant testade för att säkerställa säkerhet och effektivitet.",
    englishDescription: "All recovery products are carefully tested to ensure safety and effectiveness."
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Kvalitetssäkring",
    englishTitle: "Quality Assurance",
    description: "Kvalitetscertifikat tillgängligt för varje produkt.",
    englishDescription: "Quality certificates available for every product."
  },
  {
    icon: <FileCheck className="h-6 w-6 text-white" />,
    title: "Återhämtningsfokus",
    englishTitle: "Recovery Focus",
    description: "Designade specifikt för fysisk återhämtning och välbefinnande.",
    englishDescription: "Designed specifically for physical recovery and well-being."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Naturlig Hälsa",
    englishTitle: "Natural Health",
    description: "Stödjer din naturliga återhämtningsprocess med säkra och effektiva produkter.",
    englishDescription: "Supports your natural recovery process with safe and effective products."
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
          <BilingualText 
            english="Why Choose Our Recovery Products"
            swedish="Varför Välja Våra Återhämtningsprodukter"
            className="text-3xl font-bold text-purple-600 relative z-10"
          />
        </div>
        
        <BilingualText 
          english="Our commitment to quality ensures you get the best recovery products for your physical health."
          swedish="Vårt engagemang för kvalitet säkerställer att du får de bästa återhämtningsprodukterna för din fysiska hälsa."
          className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12"
        />
        
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
                <BilingualText 
                  english={feature.englishTitle}
                  swedish={feature.title}
                  className="text-xl font-semibold mb-2 text-white"
                />
                <BilingualText 
                  english={feature.englishDescription}
                  swedish={feature.description}
                  className="text-purple-50"
                />
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
              <BilingualText 
                english="Premium Recovery"
                swedish="Premium Återhämtning"
                className="text-white text-2xl font-bold mb-4"
              />
              <BilingualText 
                english="Our recovery products meet the highest standards for physical health and well-being."
                swedish="Våra återhämtningsprodukter uppfyller de högsta standarderna för fysisk hälsa och välbefinnande."
                className="text-white text-lg mb-6"
              />
              <div className="flex items-center">
                <span className="inline-block mr-3 p-1 rounded-full bg-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <BilingualText 
                  english="Safe and natural products for your recovery."
                  swedish="Säkra och naturliga produkter för din återhämtning."
                  className="font-semibold text-yellow-200"
                  inline
                />
              </div>
              <Button asChild size="lg" className="mt-6 bg-white text-peptide-purple hover:bg-gray-100 px-6 py-3 text-sm">
                <Link href="/products" className="inline-flex items-center justify-center text-center">
                  <span className="mr-2">🛒</span>
                  <BilingualText 
                    english="Explore Recovery Products"
                    swedish="Utforska Återhämtningsprodukter"
                    inline
                  />
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
