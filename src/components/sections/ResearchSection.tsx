import { Button } from "@/components/ui/button";
import Link from "next/link";

const ResearchSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-purple-50 py-20 overflow-hidden">
      {/* Background elements */}
      <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="hidden md:block absolute bottom-10 left-40 w-48 h-48 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="hidden md:block absolute top-40 left-20 w-64 h-64 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title bar with colored background */}
        <div className="relative mb-16 py-3 px-6 overflow-hidden bg-gradient-to-r w-fit mx-auto">
          <h2 className="text-3xl font-bold text-purple-600 relative z-10">Återhämtningsapplikationer</h2>
        </div>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Våra återhämtningsprodukter används för olika fysiska återhämtningsbehov. Här är några vanliga användningsområden.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-peptide-purple to-peptide-dark-purple"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 p-3 inline-block bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Muskelåterhämtning</h3>
              <p className="text-purple-50">
                Stödj din muskelåterhämtning efter träning med våra specialiserade återhämtningsprodukter och kylpaket.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute top-12 right-4 w-12 h-12 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-peptide-purple to-peptide-dark-purple"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 p-3 inline-block bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Smärtlindring</h3>
              <p className="text-purple-50">
                Lindra smärta och inflammation med våra naturliga återhämtningsprodukter och aromaterapi-paket.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute top-12 right-4 w-12 h-12 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-peptide-purple to-peptide-dark-purple"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 p-3 inline-block bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Stressreduktion</h3>
              <p className="text-purple-50">
                Minska stress och främja avkoppling med våra återhämtningsguider och aromaterapi-produkter.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute top-12 right-4 w-12 h-12 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-peptide-purple to-peptide-dark-purple"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 p-3 inline-block bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Sömnoptimering</h3>
              <p className="text-purple-50">
                Förbättra din sömnkvalitet med våra återhämtningsprodukter och sömnprotokoll.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute top-12 right-4 w-12 h-12 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-peptide-purple to-peptide-dark-purple"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 p-3 inline-block bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Immunförstärkning</h3>
              <p className="text-purple-50">
                Stärk ditt immunsystem med våra naturliga återhämtningsprodukter och hälsoguider.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute top-12 right-4 w-12 h-12 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-peptide-purple to-peptide-dark-purple"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 p-3 inline-block bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Energiåterställning</h3>
              <p className="text-purple-50">
                Återställ din energi och vitalitet med våra återhämtningsprodukter och välbefinnande-protokoll.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute top-12 right-4 w-12 h-12 bg-white/5 rounded-full"></div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-green-600 font-medium bg-white/70 py-2 px-4 rounded-md inline-block">
            Alla återhämtningsprodukter är avsedda för personlig användning och fysisk hälsa. Konsultera alltid en läkare vid medicinska frågor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
