import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Mail, Clock, ExternalLink } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your server
    console.log("Form submitted:", formData);
    toast({
      title: "Meddelande Skickat",
      description: "Tack för att du kontaktade oss. Vi svarar snart.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Kontakta Oss</h1>
          
          {/* Enhanced Contact Banner */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-100 mb-10">
            <h2 className="text-xl font-semibold mb-3">Kundservice & Support</h2>
            <p className="text-gray-700 mb-4">
              Vårt dedikerade team är tillgängligt för att hjälpa dig med frågor eller funderingar om våra återhämtningsprodukter.
              Vi erbjuder flera sätt att komma i kontakt och strävar efter att svara på alla förfrågningar inom 24 timmar.
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-peptide-purple mr-2" />
                <span>Måndag - Fredag: 9:00 - 17:00 CET</span>
              </div>
              <a 
                href="mailto:support@protidelab.com" 
                className="text-peptide-purple hover:underline flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                support@protidelab.com
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* Contact Information - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-peptide-purple mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Fysisk Adress</h2>
                    <p className="text-gray-700">
                    732 S 6TH ST, STE R<br />
                    LAS VEGAS NEVADA 89101<br />
                      United States
                    </p>
                    <a 
                      href="https://maps.google.com/?q=123+Science+Drive+Boston+MA+02210" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-peptide-purple hover:underline text-sm flex items-center mt-3"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Visa på Google Maps
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <Mail className="h-5 w-5 text-peptide-purple mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Kundservice</h2>
                    <p className="text-gray-700 mb-3">
                      <span className="font-medium block">Allmänna Förfrågningar:</span>
                      <a href="mailto:support@protidelab.com" className="hover:underline">support@protidelab.com</a>
                    </p>
                    <p className="text-gray-700 mb-3">
                      <span className="font-medium block">Försäljningsavdelning:</span>
                      <a href="mailto:sales@protidelab.com" className="hover:underline">sales@protidelab.com</a>
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium block">Teknisk Support:</span>
                      <a href="mailto:support@protidelab.com" className="hover:underline">support@protidelab.com</a>
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6">Skicka oss ett meddelande</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Fullständigt Namn
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-peptide-purple"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-postadress
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-peptide-purple"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Ämne
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-peptide-purple"
                      required
                    >
                      <option value="">Välj ett ämne</option>
                      <option value="Product Inquiry">Produktförfrågan</option>
                      <option value="Technical Question">Teknisk Fråga</option>
                      <option value="Order Status">Orderstatus</option>
                      <option value="Other">Annat</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Meddelande
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-peptide-purple"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className="focus:ring-peptide-purple h-4 w-4 text-peptide-purple border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-600">
                        Jag erkänner att alla produkter är för personlig återhämtning och fysisk hälsa.
                      </label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto bg-peptide-purple hover:bg-peptide-dark-purple">
                    Skicka Meddelande
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
