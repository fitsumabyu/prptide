import Layout from "@/components/layout/Layout";
import Disclaimer from "@/components/ui/Disclaimer";
import { Building, MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Om FormulaX</h1>
          
          {/* Business Identity Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2 text-peptide-purple" />
              Företagsinformation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Officiellt Företagsnamn</p>
                <p className="font-medium mb-4">H&amp;H WORLDWIDE GROUP</p>
                
                <p className="text-sm text-gray-500 mb-1">Varumärke</p>
                <p className="font-medium mb-4">FormulaX</p>
                
                <p className="text-xs text-gray-500 mb-4">FormulaX är ett varumärke från H&amp;H WORLDWIDE GROUP.</p>
                
                <p className="text-sm text-gray-500 mb-1">Företagsregistrering</p>
                <p className="font-medium">Företagsnummer: LLC-78291045</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1 flex items-start">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400 mt-0.5 flex-shrink-0" /> Registrerad Adress
                </p>
                <p className="font-medium mb-4">
                  732 S 6TH ST, STE R<br />
                  LAS VEGAS NEVADA 89101<br />
                </p>
                
                <p className="text-sm text-gray-500 mb-1 flex items-center">
                  <Phone className="h-4 w-4 mr-1 text-gray-400" /> Telefon
                </p>
                <p className="font-medium mb-4">+1 (708) 734-6847
                </p>
                
                <p className="text-sm text-gray-500 mb-1 flex items-center">
                  <Mail className="h-4 w-4 mr-1 text-gray-400" /> E-post
                </p>
                <p className="font-medium">support@formulax.dev</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              FormulaX är en ledande leverantör av högkvalitativa återhämtningsprodukter designade för fysisk hälsa och välbefinnande. 
              Vårt uppdrag är att stödja din återhämtning genom att erbjuda premium återhämtningsprodukter för din fysiska hälsa.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Vårt Engagemang för Kvalitet</h2>
            <p className="text-gray-700 mb-6">
              På FormulaX är vi engagerade i att leverera de högsta kvalitetsåterhämtningsprodukterna som finns tillgängliga. Vår rigorösa kvalitetskontrollprocess säkerställer att varje återhämtningsprodukt uppfyller strikta säkerhetsstandarder innan den når dig.
            </p>
            <p className="text-gray-700 mb-6">
              Varje produkt genomgår omfattande testning och följs av en detaljerad kvalitetscertifiering som verifierar dess säkerhet, renhet och sammansättning. Detta engagemang för kvalitet hjälper dig att uppnå pålitliga och effektiva resultat för din återhämtning.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Återhämtningsfokus</h2>
            <p className="text-gray-700 mb-6">
              Vi specialiserar oss på att tillhandahålla återhämtningsprodukter för ett brett spektrum av fysiska hälsobehov, inklusive:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Muskelåterhämtning och smärtlindring</li>
              <li>Stressreduktion och avkoppling</li>
              <li>Sömnoptimering och energiåterställning</li>
              <li>Immunförstärkning och välbefinnande</li>
              <li>Aromaterapi och naturliga återhämtningsmetoder</li>
              <li>Fysisk rehabilitering och återhämtningsguider</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Våra Standarder</h2>
            <p className="text-gray-700 mb-6">
              FormulaX följer följande standarder:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Högsta säkerhetsstandarder för alla återhämtningsprodukter</li>
              <li>Rigorös kvalitetstestning och verifiering</li>
              <li>Säker, temperaturkontrollerad lagring och leverans</li>
              <li>Omfattande dokumentation och kvalitetscertifikat</li>
              <li>Strikt efterlevnad av alla relevanta regler</li>
            </ul>
            
            <Disclaimer />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakta Oss</h2>
            <p className="text-gray-700 mb-6">
              Om du har frågor om våra produkter eller vill diskutera dina återhämtningsbehov, tveka inte att <a href="/contact" className="text-peptide-purple hover:underline">kontakta oss</a>. Vårt team av hälsaexperter är tillgängliga för att ge teknisk assistans och stöd för din återhämtning.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
