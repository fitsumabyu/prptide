import { useParams } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Disclaimer from "@/components/ui/Disclaimer";
import BilingualText from "@/components/ui/BilingualText";
import { useProduct } from "@/hooks/useProducts";
import { ArrowLeft, FileText } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import PreferredDestinations from "@/components/shipping/PreferredDestinations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(id || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <BilingualText english="Loading product..." swedish="Laddar produkt..." className="text-gray-600" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <BilingualText 
            english="Product not found" 
            swedish="Produkt hittades inte" 
            className="text-2xl font-bold mb-4"
          />
          <div className="mb-6">
            {error ? (
              <BilingualText 
                english={`Error loading product: ${error}`}
                swedish={`Fel vid laddning av produkt: ${error}`}
              />
            ) : (
              <BilingualText 
                english="The product you are looking for does not exist."
                swedish="Produkten du letar efter finns inte."
              />
            )}
          </div>
          <Button asChild variant="outline">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <BilingualText english="Back to Products" swedish="Tillbaka till Produkter" inline />
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = async () => {
    await addToCart(product.id, quantity);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-6">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <BilingualText english="Back to Products" swedish="Tillbaka till Produkter" inline />
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
                <BilingualText 
                  english={product.name}
                  swedish={product.swedishname}
                  className="text-3xl font-bold mb-2"
                />
                <div className="inline-block bg-peptide-purple text-white text-sm font-medium px-3 py-1 rounded-md">
                  {product.purity}
                </div>
                <div className="mt-4 text-2xl font-semibold text-gray-900">
                  {product.price}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  <BilingualText 
                    english="Plus applicable taxes"
                    swedish="Plus tillämpliga skatter"
                    className="block mb-1"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <BilingualText 
                  english="Description"
                  swedish="Beskrivning"
                  className="text-lg font-semibold mb-2"
                />
                <BilingualText 
                  english={product.description}
                  swedish={product.swedishdescription}
                  className="text-gray-700"
                />
              </div>
              
              {/* Product Contents Section */}
              <div className="mb-6">
                <BilingualText 
                  english="Kit Contents"
                  swedish="Innehåll i Kitet"
                  className="text-lg font-semibold mb-3"
                />
                <div className="space-y-3">
                  {product.contents.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <BilingualText 
                            english={item.englishname}
                            swedish={item.swedishname}
                            className="font-medium text-gray-900"
                          />
                        </div>
                        <span className="text-sm font-medium text-peptide-purple bg-white px-2 py-1 rounded">
                          {item.quantity} <BilingualText english={item.englishunittype} swedish={item.swedishunittype} inline />
                        </span>
                      </div>
                      <BilingualText 
                        english={item.englishdescription}
                        swedish={item.swedishdescription}
                        className="text-sm text-gray-600"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <BilingualText 
                  english="Product Details"
                  swedish="Produktdetaljer"
                  className="text-lg font-semibold mb-3"
                />
                <div className="border rounded-md overflow-hidden shadow-sm">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">
                          <BilingualText english="Product ID" swedish="Produkt-ID" inline />
                        </td>
                        <td className="px-4 py-3">{product.details.productId}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">
                          <BilingualText english="Quality Grade" swedish="Kvalitetsgrad" inline />
                        </td>
                        <td className="px-4 py-3">{product.purity}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">
                          <BilingualText english="Package Size" swedish="Förpackningsstorlek" inline />
                        </td>
                        <td className="px-4 py-3">{product.details.size}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 bg-gray-50 font-medium">
                          <BilingualText english="Storage Instructions" swedish="Förvaringsinstruktioner" inline />
                        </td>
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
                  🛒
                  <BilingualText english="Add to Cart" swedish="Lägg i varukorg" inline />
                </Button>

              </div>
              
              {/* Shipping availability indicator */}
              {product.shippingDestinations && product.shippingDestinations.length > 0 && (
                <div className="my-4 px-4 py-3 bg-blue-50 rounded-md flex items-start">
                  <span className="text-blue-500 mr-2 mt-0.5 flex-shrink-0">🌍</span>
                  <div className="text-sm">
                    <BilingualText 
                      english="Special delivery destinations available"
                      swedish="Särskilda leveransdestinationer tillgängliga"
                      className="font-medium text-blue-700"
                    />
                    <BilingualText 
                      english="This product has specific shipping eligibility. See the Shipping tab below for details."
                      swedish="Denna produkt har specifik leveransberättigande. Se fliken Leverans nedan för detaljer."
                      className="text-blue-600"
                    />
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
              <TabsTrigger value="details">
                <BilingualText english="Details" swedish="Detaljer" inline />
              </TabsTrigger>
              <TabsTrigger value="shipping">
                <BilingualText english="Shipping" swedish="Leverans" inline />
              </TabsTrigger>
              <TabsTrigger value="faq">
                <BilingualText english="FAQ" swedish="FAQ" inline />
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details">
              <div className="prose max-w-none">
                <BilingualText 
                  english="Product Information"
                  swedish="Produktinformation"
                  className="text-xl font-semibold mb-4"
                />
                <BilingualText 
                  english={product.description}
                  swedish={product.swedishdescription}
                  className="text-gray-700 mb-4"
                />
                <BilingualText 
                  english="Premium quality products for personal health and recovery."
                  swedish="Premium kvalitetsprodukter för personlig hälsa och återhämtning."
                  className="font-medium text-green-600 mb-6"
                />
                
                <BilingualText 
                  english="Product Specifications"
                  swedish="Produktspecifikationer"
                  className="text-lg font-semibold mt-6 mb-3"
                />
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <BilingualText english="Product ID:" swedish="Produkt-ID:" inline className="font-bold" /> {product.details.productId}
                    </li>
                    <li>
                      <BilingualText english="Quality Grade:" swedish="Kvalitetsgrad:" inline className="font-bold" /> {product.purity}
                    </li>
                    <li>
                      <BilingualText english="Package Size:" swedish="Förpackningsstorlek:" inline className="font-bold" /> {product.details.size}
                    </li>
                    <li>
                      <BilingualText english="Storage Instructions:" swedish="Förvaringsinstruktioner:" inline className="font-bold" /> {product.details.storage}
                    </li>
                  </ul>
                </div>
                
                <BilingualText 
                  english="Complete Contents List"
                  swedish="Komplett Innehållsförteckning"
                  className="text-lg font-semibold mt-6 mb-3"
                />
                <div className="bg-white border rounded-md overflow-hidden mb-4">
                  <div className="grid gap-4 p-4">
                    {product.contents.map((item, index) => (
                      <div key={index} className="border-l-4 border-peptide-purple pl-4 py-2">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <BilingualText 
                              english={item.englishname}
                              swedish={item.swedishname}
                              className="font-semibold text-gray-900"
                            />
                          </div>
                          <span className="text-sm font-medium text-peptide-purple">
                            {item.quantity} <BilingualText english={item.englishunittype} swedish={item.swedishunittype} inline />
                          </span>
                        </div>
                        <BilingualText 
                          english={item.englishdescription}
                          swedish={item.swedishdescription}
                          className="text-gray-600 text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <BilingualText 
                  english="This health product is designed for personal use and recovery support. Each product is carefully formulated and tested for quality and safety according to the highest industry standards."
                  swedish="Denna hälsoprodukt är designad för personlig användning och återhämtningsstöd. Varje produkt är noggrant formulerad och testad för kvalitet och säkerhet enligt de högsta industristandarderna."
                  className="text-gray-700 mb-4"
                />
                
                <BilingualText 
                  english="Quality Guarantee"
                  swedish="Kvalitetsgaranti"
                  className="text-lg font-semibold mt-6 mb-3"
                />
                <BilingualText 
                  english="All our products undergo rigorous quality control and testing. We guarantee that each product meets our strict quality standards and comes with complete documentation."
                  swedish="Alla våra produkter genomgår rigorös kvalitetskontroll och testning. Vi garanterar att varje produkt uppfyller våra strikta kvalitetsstandarder och kommer med fullständig dokumentation."
                  className="text-gray-700 mb-4"
                />
                
                <BilingualText 
                  english="Storage and Care"
                  swedish="Förvaring och skötsel"
                  className="text-lg font-semibold mt-6 mb-3"
                />
                <div className="bg-blue-50 p-4 rounded-md">
                  <div className="text-gray-700 mb-2">
                    <BilingualText 
                      english="Storage Instructions:" 
                      swedish="Förvaringsinstruktioner:" 
                      className="font-bold" 
                      inline 
                    /> {product.details.storage}
                  </div>
                  <BilingualText 
                    english="Keep products in their original packaging and follow all included instructions for best results. Store in a cool, dry place and avoid direct sunlight. Check expiration dates regularly."
                    swedish="Håll produkter i sin ursprungliga förpackning och följ alla inkluderade instruktioner för bästa resultat. Förvara på en sval, torr plats och undvik direkt solljus. Kontrollera utgångsdatumet regelbundet."
                    className="text-gray-700"
                  />
                </div>
                
                <BilingualText 
                  english="Safety Information"
                  swedish="Säkerhetsinformation"
                  className="text-lg font-semibold mt-6 mb-3"
                />
                <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                  <div className="text-amber-800 text-sm">
                    <BilingualText 
                      english="Important:" 
                      swedish="Viktigt:" 
                      className="font-bold" 
                      inline 
                    /> <BilingualText 
                      english="This product is intended for personal use. Always consult with a qualified healthcare professional before use, especially if you have existing medical conditions or are taking other medications. Keep products out of reach of children."
                      swedish="Denna produkt är avsedd för personlig användning. Konsultera alltid med en kvalificerad sjukvårdspersonal innan användning, särskilt om du har befintliga medicinska tillstånd eller tar andra mediciner. Håll produkter utom räckhåll för barn."
                      inline
                    />
                  </div>
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
                <BilingualText 
                  english="Frequently Asked Questions"
                  swedish="Vanliga frågor"
                  className="text-xl font-semibold mb-4"
                />
                <div className="space-y-6">
                  <div>
                    <BilingualText 
                      english="What is the quality grade of this product?"
                      swedish="Vad är kvalitetsgraden för denna produkt?"
                      className="text-lg font-semibold"
                    />
                    <BilingualText 
                      english={`This product is ${product.purity} quality. Each product is carefully tested and comes with quality assurance documentation. We use only the highest quality standards for all our products.`}
                      swedish={`Denna produkt är ${product.purity} kvalitet. Varje produkt är noggrant testad och kommer med kvalitetssäkringsdokumentation. Vi använder endast de högsta kvalitetsstandarderna för alla våra produkter.`}
                    />
                  </div>
                  <div>
                    <BilingualText 
                      english="How should I store this product?"
                      swedish="Hur ska jag förvara denna produkt?"
                      className="text-lg font-semibold"
                    />
                    <BilingualText 
                      english={`${product.details.storage} It is important to follow these instructions to ensure the product's effectiveness and safety throughout its shelf life.`}
                      swedish={`${product.details.storage} Det är viktigt att följa dessa instruktioner för att säkerställa produktens effektivitet och säkerhet under hela dess hållbarhetsperiod.`}
                    />
                  </div>
                  <div>
                    <BilingualText 
                      english="What is the intended use of this product?"
                      swedish="Vad är den avsedda användningen för denna produkt?"
                      className="text-lg font-semibold"
                    />
                    <BilingualText 
                      english="This product is designed for personal health and recovery support. It is intended for individual use as part of a comprehensive health routine. Always consult with a healthcare professional before use."
                      swedish="Denna produkt är designad för personlig hälsa och återhämtningsstöd. Den är avsedd för individuell användning som en del av en omfattande hälsorutin. Konsultera alltid med en sjukvårdspersonal innan användning."
                    />
                  </div>
                  <div>
                    <BilingualText 
                      english="Is this product available for delivery to my location?"
                      swedish="Finns denna produkt tillgänglig för leverans till min plats?"
                      className="text-lg font-semibold"
                    />
                    <BilingualText 
                      english="We deliver to Sweden and USA. Swedish delivery takes 1-5 business days while US delivery takes 5-9 business days. See the Shipping tab for specific availability information for this product."
                      swedish="Vi levererar till Sverige och USA. Svensk leverans tar 1-5 arbetsdagar medan amerikansk leverans tar 5-9 arbetsdagar. Se fliken Leverans för specifik tillgänglighetsinformation för denna produkt."
                    />
                  </div>
                  <div>
                    <BilingualText 
                      english="What payment methods do you accept?"
                      swedish="Vilka betalningsmetoder accepterar ni?"
                      className="text-lg font-semibold"
                    />
                    <BilingualText 
                      english="We accept all major credit cards (Visa, MasterCard, American Express), PayPal and bank transfers. All transactions are secure and encrypted for your protection."
                      swedish="Vi accepterar alla större kreditkort (Visa, MasterCard, American Express), PayPal och banköverföringar. Alla transaktioner är säkra och krypterade för din skydd."
                    />
                  </div>
                  <div>
                    <BilingualText 
                      english="Can I return the product if I'm not satisfied?"
                      swedish="Kan jag returnera produkten om jag inte är nöjd?"
                      className="text-lg font-semibold"
                    />
                    <BilingualText 
                      english="Yes, we offer a 30-day return policy for unused products in original packaging. Contact our customer service to initiate a return."
                      swedish="Ja, vi erbjuder en 30-dagars returpolicy för oanvända produkter i originalförpackning. Kontakta vår kundtjänst för att initiera en retur."
                    />
                  </div>
                  <div>
                    <BilingualText 
                      english="Are the products safe to use?"
                      swedish="Är produkterna säkra att använda?"
                      className="text-lg font-semibold"
                    />
                    <BilingualText 
                      english="All our products undergo rigorous quality control and testing. We follow strict safety standards and all products come with detailed usage instructions. Always read the label and follow the usage instructions carefully."
                      swedish="Alla våra produkter genomgår rigorös kvalitetskontroll och testning. Vi följer strikta säkerhetsstandarder och alla produkter kommer med detaljerade användningsanvisningar. Läs alltid etiketten och följ användningsanvisningarna noggrant."
                    />
                  </div>
                  <div>
                    <BilingualText 
                      english="How can I contact you for support?"
                      swedish="Hur kan jag kontakta er för support?"
                      className="text-lg font-semibold"
                    />
                    <BilingualText 
                      english="You can contact our customer service via email or phone. We usually respond within 24 hours on weekdays. See our Contact page for complete contact information."
                      swedish="Du kan kontakta vår kundtjänst via e-post eller telefon. Vi svarar vanligtvis inom 24 timmar på vardagar. Se vår Kontakt-sida för fullständig kontaktinformation."
                    />
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
