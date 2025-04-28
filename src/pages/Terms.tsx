import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              These Terms and Conditions govern your use of the Nexus Lab website and the purchase of products from our company. 
              By accessing our website or purchasing our products, you agree to these Terms and Conditions in full.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Research Use Only</h2>
            <p className="text-gray-700 mb-6">
              All products sold by Nexus Lab are strictly for research purposes only. Our products are not for human or veterinary use, diagnostic use, therapeutic use, or any medical purpose. They are to be used by qualified professionals in laboratory settings only.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Ordering and Payment</h2>
            <p className="text-gray-700 mb-6">
              Orders may be placed through our website, email, or by phone. We accept payment by credit card, wire transfer, or purchase order (for qualified institutions). All orders are subject to acceptance and product availability.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Shipping and Delivery</h2>
            <p className="text-gray-700 mb-6">
              We ship products worldwide in compliance with all applicable regulations. Shipping costs will be calculated and displayed during the checkout process. Delivery times are estimates and not guaranteed. We are not responsible for delays due to customs clearance or other factors beyond our control.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Product Quality and Returns</h2>
            <p className="text-gray-700 mb-6">
              We stand behind the quality of our products. All products are shipped with a Certificate of Analysis. If you receive a product that does not meet the specifications listed on the COA, you may return it within 30 days of receipt for a replacement or refund. To initiate a return, please contact our customer service department.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on our website, including text, graphics, logos, images, and software, is the property of Nexus Lab and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express permission.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Nexus Lab shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our products or website. Our liability is limited to the amount paid for the product in question.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using our website or purchasing our products, you consent to the practices described in our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website or purchase of our products after any changes constitutes your acceptance of the revised terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms and Conditions are governed by and construed in accordance with the laws of the United States and the State of California, without giving effect to any principles of conflicts of law.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-gray-700 mb-6">
              Nexus Lab<br />
              123 Research Boulevard, Suite 456<br />
              San Francisco, CA 94107<br />
              Email: legal@nexuslab.com<br />
              Phone: (800) 123-4567
            </p>
            
            <p className="text-gray-700 mt-12 italic">
              Last updated: April 21, 2023
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
