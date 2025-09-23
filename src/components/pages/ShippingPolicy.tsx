import Layout from "@/components/layout/Layout";
import PreferredDestinations from "@/components/shipping/PreferredDestinations";

const ShippingPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Shipping & Delivery Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              At H&amp;H WORLDWIDE GROUP, we strive to deliver your research products safely, securely, and efficiently. This policy outlines our shipping procedures, estimated delivery times, and other important information related to the delivery of your order.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Processing Time</h2>
            <p className="text-gray-700 mb-6">
              All orders are processed within 1-2 business days (Monday through Friday, excluding holidays) after receiving your order confirmation. You will receive an email with tracking information once your order has shipped.
            </p>
            <p className="text-gray-700 mb-6">
              Please note that for custom synthesized chemical reference materials, processing time may be extended to 5-10 business days depending on complexity and quantity.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Shipping Methods</h2>
            <p className="text-gray-700 mb-6">
              We offer the following shipping options:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Standard Shipping:</strong> 3-5 business days (USPS Priority Mail or UPS Ground)</li>
              <li><strong>Expedited Shipping:</strong> 2-3 business days (UPS 2-Day Air)</li>
              <li><strong>Rush Shipping:</strong> 1-2 business days (UPS Next Day Air)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              For products requiring temperature-controlled shipping, we use specialized packaging with cold packs or dry ice to maintain product integrity during transit. These items are shipped exclusively via expedited services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Shipping Costs</h2>
            <p className="text-gray-700 mb-6">
              Shipping costs are calculated based on the weight of your order, shipping method, and destination state:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Standard Shipping:</strong> $10-15 (free for orders over $250)</li>
              <li><strong>Expedited Shipping:</strong> $20-30</li>
              <li><strong>Rush Shipping:</strong> $35-50</li>
              <li><strong>Temperature-Controlled Shipping:</strong> Additional $15-25</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Exact shipping costs will be calculated and displayed during checkout.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Geographic Shipping Restrictions</h2>
            <p className="text-gray-700 mb-6">
              We currently only ship within the United States. Our domestic shipping network includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>All 48 contiguous United States</li>
              <li>Alaska (additional shipping charges may apply)</li>
              <li>Hawaii (additional shipping charges may apply)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              At this time, we do not offer international shipping. This allows us to focus on providing the highest quality service and ensuring product integrity for our domestic customers.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Domestic Focus:</h3>
              <p className="text-gray-700">
                We focus exclusively on serving the domestic US market to ensure compliance with all regulatory requirements and to minimize shipping risks. Our recovery products are formulated and packaged specifically for US customers.
              </p>
            </div>
            
            <PreferredDestinations />
            
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
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Interstate Shipping Considerations</h2>
            <p className="text-gray-700 mb-6">
              For shipping between states, please note:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>State Regulations:</strong> Some states may have specific regulations regarding certain laboratory reagents. We ensure all shipments comply with state-level requirements.</li>
              <li><strong>Delivery Timelines:</strong> Delivery to certain states may take longer depending on distance from our distribution centers.</li>
              <li><strong>Documentation:</strong> We provide all necessary documentation for interstate shipping of recovery performances.</li>
            </ul>
            
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">State Law Considerations:</h3>
              <p className="text-gray-700">
                Our products are sold with standard disclaimers (research use only, no medical claims, age restrictions) to comply with regulations across all US states. All our product descriptions and packaging avoid using regulated terminology that might be interpreted differently across state jurisdictions.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about our shipping policy or need assistance with a shipment, please contact our customer service team:
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Official Business Name:</strong> H&amp;H WORLDWIDE GROUP<br />
              <strong>Brand:</strong> Protidelab<br />
              <span className="text-xs text-gray-500">Protidelab is a brand of H&amp;H WORLDWIDE GROUP.</span>
            </p>
            <p className="text-gray-700 mb-6">
              Email: support@protidelab.com<br />
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