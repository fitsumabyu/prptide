import Layout from "@/components/layout/Layout";

const ShippingPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Shipping & Delivery Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              At Peptide Lab Nexus, we strive to deliver your research products safely, securely, and efficiently. This policy outlines our shipping procedures, estimated delivery times, and other important information related to the delivery of your order.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Processing Time</h2>
            <p className="text-gray-700 mb-6">
              All orders are processed within 1-2 business days (Monday through Friday, excluding holidays) after receiving your order confirmation. You will receive an email with tracking information once your order has shipped.
            </p>
            <p className="text-gray-700 mb-6">
              Please note that for custom synthesized peptides, processing time may be extended to 5-10 business days depending on complexity and quantity.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Shipping Methods</h2>
            <p className="text-gray-700 mb-6">
              We offer the following shipping options:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Standard Shipping:</strong> 3-5 business days (USPS Priority Mail or UPS Ground)</li>
              <li><strong>Expedited Shipping:</strong> 2-3 business days (UPS 2-Day Air)</li>
              <li><strong>Rush Shipping:</strong> 1-2 business days (UPS Next Day Air)</li>
              <li><strong>International Shipping:</strong> 7-14 business days (varies by destination)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              For products requiring temperature-controlled shipping, we use specialized packaging with cold packs or dry ice to maintain product integrity during transit. These items are shipped exclusively via expedited services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Shipping Costs</h2>
            <p className="text-gray-700 mb-6">
              Shipping costs are calculated based on the weight of your order, shipping method, and destination:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Standard Shipping:</strong> $10-15 (free for orders over $250)</li>
              <li><strong>Expedited Shipping:</strong> $20-30</li>
              <li><strong>Rush Shipping:</strong> $35-50</li>
              <li><strong>International Shipping:</strong> $40-100 (varies by country)</li>
              <li><strong>Temperature-Controlled Shipping:</strong> Additional $15-25</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Exact shipping costs will be calculated and displayed during checkout.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Geographic Shipping Restrictions</h2>
            <p className="text-gray-700 mb-6">
              Due to regulatory requirements and shipping constraints, we are unable to ship to certain countries and regions. Currently, we ship to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>United States (all 50 states and territories)</li>
              <li>Canada (except Nunavut)</li>
              <li>European Union member countries</li>
              <li>United Kingdom</li>
              <li>Australia</li>
              <li>New Zealand</li>
              <li>Japan</li>
              <li>South Korea</li>
              <li>Singapore</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If your country is not listed above, please contact our customer service team to determine shipping eligibility.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Service Regions Clarification:</h3>
              <p className="text-gray-700">
                We do not ship to the following regions due to regulatory constraints: North Korea, Iran, Syria, Cuba, and certain regions of Ukraine and Russia. For complete transparency, we explicitly state on our homepage and checkout process: "We do not ship to these restricted regions." This ensures compliance with legal restrictions in certain jurisdictions.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Order Tracking</h2>
            <p className="text-gray-700 mb-6">
              Once your order ships, you will receive a tracking number via email. You can track your package's status by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Clicking the tracking link in your shipping confirmation email</li>
              <li>Logging into your account on our website and viewing your order history</li>
              <li>Contacting our customer service team with your order number</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Delivery Issues</h2>
            <p className="text-gray-700 mb-6">
              In the event of delivery issues:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Missing Packages:</strong> If your tracking shows delivered but you haven't received your package, please contact us within 48 hours.</li>
              <li><strong>Damaged Packages:</strong> If your package arrives damaged, please take photos and contact us immediately.</li>
              <li><strong>Incorrect Address:</strong> If you provided an incorrect shipping address, additional shipping charges may apply for redirection or reshipment.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. International Orders</h2>
            <p className="text-gray-700 mb-6">
              For international orders, please note:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Customs Duties and Taxes:</strong> Customers are responsible for any customs duties, taxes, or import fees levied by their country's customs authorities.</li>
              <li><strong>Customs Delays:</strong> International shipments may be subject to customs inspection, which can delay delivery. These delays are beyond our control.</li>
              <li><strong>Documentation:</strong> We provide all necessary documentation for customs clearance, but we cannot guarantee that your order will clear customs in your country.</li>
            </ul>
            
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Import/Export Compliance Notice:</h3>
              <p className="text-gray-700">
                International customers are responsible for complying with all local laws regarding import and use of our products. Customers must ensure the products are legal in their country and are responsible for any import duties or restrictions. By placing an order, you confirm that you will comply with all applicable regulations in your jurisdiction.
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Local Law Considerations:</h3>
              <p className="text-gray-700">
                Our products are sold with standard disclaimers (research use only, no medical claims, age restrictions) to comply with international regulations. All our product descriptions and packaging avoid using regulated terminology that might be interpreted differently across jurisdictions. These standard disclaimers ensure our compliance with global merchant processing requirements.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about our shipping policy or need assistance with a shipment, please contact our customer service team:
            </p>
            <p className="text-gray-700 mb-6">
              Email: shipping@peptidelabnexus.com<br />
              Phone: (800) 123-4567<br />
              Hours: Monday-Friday, 9am-5pm EST
            </p>
            
            <p className="text-gray-700 mt-12 italic">
              Last updated: May 26, 2023
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPolicy; 