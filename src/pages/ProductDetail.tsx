import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Disclaimer from "@/components/ui/Disclaimer";
import { products } from "@/data/protidelabproducts";
import { ArrowLeft, ShoppingCart, Globe, FileText } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import PreferredDestinations from "@/components/shipping/PreferredDestinations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold mb-4">Produkt hittades inte</h1>
          <p className="mb-6">Produkten du letar efter finns inte.</p>
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tillbaka till Produkter
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tillbaka till Produkter
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md border border-gray-200">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="inline-block bg-peptide-purple text-white text-sm font-medium px-3 py-1 rounded-md">
                  {product.purity}
                </div>
                <div className="mt-4 text-2xl font-semibold text-gray-900">
                  {product.price}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  <span className="block mb-1">Plus tillämpliga skatter</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Beskrivning</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Produktdetaljer</h2>
                <div className="border rounded-md overflow-hidden shadow-sm">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Produkt-ID</td>
                        <td className="px-4 py-3">{product.details.productId}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Kvalitetsgrad</td>
                        <td className="px-4 py-3">{product.purity}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Förpackningsstorlek</td>
                        <td className="px-4 py-3">{product.details.size}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 bg-gray-50 font-medium">Förvaringsinstruktioner</td>
                        <td className="px-4 py-3">{product.details.storage}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 border-r"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-[40px] text-center">{quantity}</span>
                  <button 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 border-l"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
                
                <Button 
                  className="flex-1 bg-peptide-purple hover:bg-peptide-dark-purple"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Lägg i varukorg
                </Button>

              </div>
              
              {/* Shipping availability indicator */}
              {product.shippingDestinations && product.shippingDestinations.length > 0 && (
                <div className="my-4 px-4 py-3 bg-blue-50 rounded-md flex items-start">
                  <Globe className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-700">Särskilda leveransdestinationer tillgängliga</p>
                    <p className="text-blue-600">Denna produkt har specifik leveransberättigande. Se fliken Leverans nedan för detaljer.</p>
                  </div>
                </div>
              )}
              
              <Disclaimer />
            </div>
          </div>
        </div>
        
        {/* Product tabs with shipping information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12">
          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Detaljer</TabsTrigger>
              <TabsTrigger value="shipping">Leverans</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Produktinformation</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="font-medium text-green-600 mb-6">Premium kvalitetsprodukter för personlig hälsa och återhämtning.</p>
                
                <h4 className="text-lg font-semibold mt-6 mb-3">Produktspecifikationer</h4>
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Produkt-ID:</strong> {product.details.productId}</li>
                    <li><strong>Kvalitetsgrad:</strong> {product.purity}</li>
                    <li><strong>Förpackningsstorlek:</strong> {product.details.size}</li>
                    <li><strong>Förvaringsinstruktioner:</strong> {product.details.storage}</li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-4">
                  Denna hälsoprodukt är designad för personlig användning och återhämtningsstöd. 
                  Varje produkt är noggrant formulerad och testad för kvalitet och säkerhet enligt de högsta industristandarderna.
                </p>
                
                <h4 className="text-lg font-semibold mt-6 mb-3">Kvalitetsgaranti</h4>
                <p className="text-gray-700 mb-4">
                  Alla våra produkter genomgår rigorös kvalitetskontroll och testning. Vi garanterar att varje produkt 
                  uppfyller våra strikta kvalitetsstandarder och kommer med fullständig dokumentation.
                </p>
                
                <h4 className="text-lg font-semibold mt-6 mb-3">Förvaring och skötsel</h4>
                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="text-gray-700 mb-2">
                    <strong>Förvaringsinstruktioner:</strong> {product.details.storage}
                  </p>
                  <p className="text-gray-700">
                    Håll produkter i sin ursprungliga förpackning och följ alla inkluderade instruktioner för bästa resultat.
                    Förvara på en sval, torr plats och undvik direkt solljus. Kontrollera utgångsdatumet regelbundet.
                  </p>
                </div>
                
                <h4 className="text-lg font-semibold mt-6 mb-3">Säkerhetsinformation</h4>
                <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                  <p className="text-amber-800 text-sm">
                    <strong>Viktigt:</strong> Denna produkt är avsedd för personlig användning. Konsultera alltid med en 
                    kvalificerad sjukvårdspersonal innan användning, särskilt om du har befintliga medicinska tillstånd 
                    eller tar andra mediciner. Håll produkter utom räckhåll för barn.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping">
              <PreferredDestinations 
                productId={product.id}
                productName={product.name}
                additionalDestinations={product.shippingDestinations}
              />
            </TabsContent>
            
            <TabsContent value="faq">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Vanliga frågor</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold">Vad är kvalitetsgraden för denna produkt?</h4>
                    <p>Denna produkt är {product.purity} kvalitet. Varje produkt är noggrant testad och kommer med kvalitetssäkringsdokumentation. Vi använder endast de högsta kvalitetsstandarderna för alla våra produkter.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Hur ska jag förvara denna produkt?</h4>
                    <p>{product.details.storage} Det är viktigt att följa dessa instruktioner för att säkerställa produktens effektivitet och säkerhet under hela dess hållbarhetsperiod.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Vad är den avsedda användningen för denna produkt?</h4>
                    <p>Denna produkt är designad för personlig hälsa och återhämtningsstöd. Den är avsedd för individuell användning som en del av en omfattande hälsorutin. Konsultera alltid med en sjukvårdspersonal innan användning.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Finns denna produkt tillgänglig för leverans till min plats?</h4>
                    <p>Vi levererar till Sverige och USA. Svensk leverans tar 1-5 arbetsdagar medan amerikansk leverans tar 5-9 arbetsdagar. Se fliken Leverans för specifik tillgänglighetsinformation för denna produkt.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Vilka betalningsmetoder accepterar ni?</h4>
                    <p>Vi accepterar alla större kreditkort (Visa, MasterCard, American Express), PayPal och banköverföringar. Alla transaktioner är säkra och krypterade för din skydd.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Kan jag returnera produkten om jag inte är nöjd?</h4>
                    <p>Ja, vi erbjuder en 30-dagars returpolicy för oanvända produkter i originalförpackning. Kontakta vår kundtjänst för att initiera en retur.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Är produkterna säkra att använda?</h4>
                    <p>Alla våra produkter genomgår rigorös kvalitetskontroll och testning. Vi följer strikta säkerhetsstandarder och alla produkter kommer med detaljerade användningsanvisningar. Läs alltid etiketten och följ användningsanvisningarna noggrant.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Hur kan jag kontakta er för support?</h4>
                    <p>Du kan kontakta vår kundtjänst via e-post eller telefon. Vi svarar vanligtvis inom 24 timmar på vardagar. Se vår Kontakt-sida för fullständig kontaktinformation.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
