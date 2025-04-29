import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

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
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
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
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          
          {/* Enhanced Contact Banner */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-100 mb-10">
            <h2 className="text-xl font-semibold mb-3">Customer Service & Support</h2>
            <p className="text-gray-700 mb-4">
              Our dedicated team is available to assist you with any questions or concerns about our research products.
              We offer multiple ways to get in touch and aim to respond to all inquiries within 24 business hours.
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-peptide-purple mr-2" />
                <span>Monday - Friday: 9:00 AM - 5:00 PM EST</span>
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
                    <h2 className="text-lg font-semibold mb-2">Physical Address</h2>
                    <p className="text-gray-700">
                    131 Continental,<br /> Dr Suite 305<br /> Newark, DE 19713<br />
                      United States
                    </p>
                    <a 
                      href="https://maps.google.com/?q=123+Science+Drive+Boston+MA+02210" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-peptide-purple hover:underline text-sm flex items-center mt-3"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <Phone className="h-5 w-5 text-peptide-purple mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Phone Support</h2>
                    <p className="text-gray-700 mb-3">
                      <span className="font-medium block">Main Office:</span>
                      <a href="tel:+16175550123" className="hover:underline">+1 (617) 555-0123</a>
                    </p>
                    <p className="text-gray-700 mb-3">
                      <span className="font-medium block">Customer Service:</span>
                      <a href="tel:+18001234567" className="hover:underline">(800) 123-4567</a>
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium block">Technical Support:</span>
                      <a href="tel:+18007654321" className="hover:underline">(800) 765-4321</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-peptide-purple mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Email Contacts</h2>
                    <p className="text-gray-700 mb-3">
                      <span className="font-medium block">General Inquiries:</span>
                      <a href="mailto:support@protidelab.com" className="hover:underline">support@protidelab.com</a>
                    </p>
                    <p className="text-gray-700 mb-3">
                      <span className="font-medium block">Sales Department:</span>
                      <a href="mailto:sales@protidelab.com" className="hover:underline">sales@protidelab.com</a>
                    </p>    
                    <p className="text-gray-700">
                      <span className="font-medium block">Technical Support:</span>
                      <a href="mailto:support@protidelab.com" className="hover:underline">support@protidelab.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
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
                        Email Address
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
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-peptide-purple"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Technical Question">Technical Question</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
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
                        I acknowledge that all products are for research use only and not for human consumption.
                      </label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto bg-peptide-purple hover:bg-peptide-dark-purple">
                    Send Message
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
