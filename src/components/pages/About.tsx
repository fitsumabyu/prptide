import Layout from "@/components/layout/Layout";
import Disclaimer from "@/components/ui/Disclaimer";
import BilingualText from "@/components/ui/BilingualText";
import { Building2 as Building } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <BilingualText 
            english="About Protidelab" 
            swedish="Om Protidelab" 
            className="text-3xl font-bold mb-6"
          />
          
          {/* Business Identity Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2 text-peptide-purple" />
              <BilingualText english="Business Information" swedish="Företagsinformation" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <BilingualText 
                  english="Official Company Name" 
                  swedish="Officiellt Företagsnamn" 
                  className="text-sm text-gray-500 mb-1"
                />
                <p className="font-medium mb-4">H&amp;H WORLDWIDE GROUP</p>
                
                <BilingualText 
                  english="Brand" 
                  swedish="Varumärke" 
                  className="text-sm text-gray-500 mb-1"
                />
                <p className="font-medium mb-4">Protidelab</p>
                
                <BilingualText 
                  english="Protidelab is a brand from H&H WORLDWIDE GROUP." 
                  swedish="Protidelab är ett varumärke från H&H WORLDWIDE GROUP." 
                  className="text-xs text-gray-500 mb-4"
                />
                
               
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1 flex items-start">
                  <span className="text-gray-400 mt-0.5 flex-shrink-0 mr-1">🗺️</span> 
                  <BilingualText english="Registered Address" swedish="Registrerad Adress" inline />
                </p>
                <p className="font-medium mb-4">
                  732 S 6TH ST, STE R<br />
                  LAS VEGAS NEVADA 89101<br />
                </p>
                
                
                <p className="text-sm text-gray-500 mb-1 flex items-center">
                  <span className="text-gray-400 mr-1">📧</span> 
                  <BilingualText english="Email" swedish="E-post" inline />
                </p>
                <p className="font-medium">support@protidelab.com</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <BilingualText 
              english="Protidelab is a leading supplier of high-quality recovery products designed for physical health and well-being. Our mission is to support your recovery by offering premium recovery products for your physical health."
              swedish="Protidelab är en ledande leverantör av högkvalitativa återhämtningsprodukter designade för fysisk hälsa och välbefinnande. Vårt uppdrag är att stödja din återhämtning genom att erbjuda premium återhämtningsprodukter för din fysiska hälsa."
              className="text-lg text-gray-700 mb-6"
            />
            
            <BilingualText 
              english="Our Commitment to Quality" 
              swedish="Vårt Engagemang för Kvalitet" 
              className="text-2xl font-semibold mt-8 mb-4"
            />
            <BilingualText 
              english="At Protidelab, we are committed to delivering the highest quality recovery products available. Our rigorous quality control process ensures that every recovery product meets strict safety standards before it reaches you."
              swedish="På Protidelab är vi engagerade i att leverera de högsta kvalitetsåterhämtningsprodukterna som finns tillgängliga. Vår rigorösa kvalitetskontrollprocess säkerställer att varje återhämtningsprodukt uppfyller strikta säkerhetsstandarder innan den når dig."
              className="text-gray-700 mb-6"
            />
            <BilingualText 
              english="Each product undergoes extensive testing and is accompanied by detailed quality certification that verifies its safety, purity, and composition. This commitment to quality helps you achieve reliable and effective results for your recovery."
              swedish="Varje produkt genomgår omfattande testning och följs av en detaljerad kvalitetscertifiering som verifierar dess säkerhet, renhet och sammansättning. Detta engagemang för kvalitet hjälper dig att uppnå pålitliga och effektiva resultat för din återhämtning."
              className="text-gray-700 mb-6"
            />
            
            <BilingualText 
              english="Recovery Focus" 
              swedish="Återhämtningsfokus" 
              className="text-2xl font-semibold mt-8 mb-4"
            />
            <BilingualText 
              english="We specialize in providing recovery products for a wide range of physical health needs, including:"
              swedish="Vi specialiserar oss på att tillhandahålla återhämtningsprodukter för ett brett spektrum av fysiska hälsobehov, inklusive:"
              className="text-gray-700 mb-6"
            />
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                <BilingualText 
                  english="Muscle recovery and pain relief" 
                  swedish="Muskelåterhämtning och smärtlindring" 
                  inline 
                />
              </li>
              <li>
                <BilingualText 
                  english="Stress reduction and relaxation" 
                  swedish="Stressreduktion och avkoppling" 
                  inline 
                />
              </li>
              <li>
                <BilingualText 
                  english="Sleep optimization and energy restoration" 
                  swedish="Sömnoptimering och energiåterställning" 
                  inline 
                />
              </li>
              <li>
                <BilingualText 
                  english="Immune enhancement and well-being" 
                  swedish="Immunförstärkning och välbefinnande" 
                  inline 
                />
              </li>
              <li>
                <BilingualText 
                  english="Aromatherapy and natural recovery methods" 
                  swedish="Aromaterapi och naturliga återhämtningsmetoder" 
                  inline 
                />
              </li>
              <li>
                <BilingualText 
                  english="Physical rehabilitation and recovery guides" 
                  swedish="Fysisk rehabilitering och återhämtningsguider" 
                  inline 
                />
              </li>
            </ul>
            
            <BilingualText 
              english="Our Standards" 
              swedish="Våra Standarder" 
              className="text-2xl font-semibold mt-8 mb-4"
            />
            <BilingualText 
              english="Protidelab follows the following standards:"
              swedish="Protidelab följer följande standarder:"
              className="text-gray-700 mb-6"
            />
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                <BilingualText 
                  english="Highest safety standards for all recovery products" 
                  swedish="Högsta säkerhetsstandarder för alla återhämtningsprodukter" 
                  inline 
                />
              </li>
              <li>
                <BilingualText 
                  english="Rigorous quality testing and verification" 
                  swedish="Rigorös kvalitetstestning och verifiering" 
                  inline 
                />
              </li>
              <li>
                <BilingualText 
                  english="Secure, temperature-controlled storage and delivery" 
                  swedish="Säker, temperaturkontrollerad lagring och leverans" 
                  inline 
                />
              </li>
              <li>
                <BilingualText 
                  english="Comprehensive documentation and quality certificates" 
                  swedish="Omfattande dokumentation och kvalitetscertifikat" 
                  inline 
                />
              </li>
              <li>
                <BilingualText 
                  english="Strict compliance with all relevant regulations" 
                  swedish="Strikt efterlevnad av alla relevanta regler" 
                  inline 
                />
              </li>
            </ul>
            
            <Disclaimer />
            
            <BilingualText 
              english="Contact Us" 
              swedish="Kontakta Oss" 
              className="text-2xl font-semibold mt-8 mb-4"
            />
            <div className="text-gray-700 mb-6">
              <BilingualText 
                english="If you have questions about our products or want to discuss your recovery needs, don't hesitate to contact us. Our team of health experts is available to provide technical assistance and support for your recovery."
                swedish="Om du har frågor om våra produkter eller vill diskutera dina återhämtningsbehov, tveka inte att kontakta oss. Vårt team av hälsaexperter är tillgängliga för att ge teknisk assistans och stöd för din återhämtning."
              />
              <p className="mt-2">
                <a href="/contact" className="text-peptide-purple hover:underline font-medium">
                  <BilingualText english="Contact us here" swedish="Kontakta oss här" inline />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
