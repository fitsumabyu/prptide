import Layout from "@/components/layout/Layout";
import PreferredDestinations from "@/components/shipping/PreferredDestinations";

const Shipping = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Shipping & Returns</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Information</h2>
            <p className="text-gray-700 mb-6">
              At Protidelab, we understand the importance of receiving your recovery performances in a timely manner and in optimal condition. We ship all products in temperature-controlled packaging to ensure their integrity during transit.
            </p>
            
            <PreferredDestinations />
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Shipping Methods</h3>
            <p className="text-gray-700 mb-6">
              We offer the following shipping options:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Standard Shipping (3-5 business days)</strong> - For domestic orders within the United States</li>
              <li><strong>Express Shipping (1-2 business days)</strong> - Available for domestic orders placed before 2 PM EST</li>
            </ul>
            
            <div className="bg-amber-50 p-4 rounded-md border border-amber-200 mb-6">
              <h4 className="font-semibold text-amber-800 mb-2">Important Shipping Notice:</h4>
              <p className="text-amber-700">
                We currently only ship within the United States. International shipping is not available at this time.
                We focus on providing reliable service to our domestic customers to ensure product quality and timely delivery.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Shipping Costs</h3>
            <p className="text-gray-700 mb-6">
              Shipping costs are calculated based on the destination state, weight, and selected shipping method. The exact shipping cost will be displayed during the checkout process before you complete your order.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Order Processing</h3>
            <p className="text-gray-700 mb-6">
              All orders are processed within 1-2 business days after payment confirmation. Orders placed on weekends or holidays will be processed on the next business day.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Tracking Information</h3>
            <p className="text-gray-700 mb-6">
              Once your order ships, you will receive a confirmation email with tracking information. You can track your package's status at any time by clicking the tracking link in the email or by logging into your account on our website.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Interstate Shipping</h3>
            <p className="text-gray-700 mb-6">
              For orders shipping to different states within the US, please note:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Delivery times may vary based on proximity to our distribution centers</li>
              <li>Some states may have specific regulations regarding certain laboratory reagents</li>
              <li>Additional documentation may be required for certain states</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Return Policy</h2>
            <p className="text-gray-700 mb-6">
              We stand behind the quality of our products and want you to be completely satisfied with your purchase.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Return Eligibility</h3>
            <p className="text-gray-700 mb-6">
              Products may be returned within 30 days of receipt if:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>The product does not meet the specifications listed on the Certificate of Analysis</li>
              <li>The product was damaged during shipping</li>
              <li>You received an incorrect item</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Return Process</h3>
            <p className="text-gray-700 mb-6">
              To initiate a return:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-6">
              <li>Contact our customer service department at returns@formulax.com or (800) 123-4567</li>
              <li>Provide your order number, the item(s) you wish to return, and the reason for the return</li>
              <li>Our team will review your request and provide you with return instructions</li>
              <li>Ship the item(s) back to us using the provided return label</li>
              <li>Once we receive and inspect the returned item(s), we will process your refund or send a replacement</li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Refunds</h3>
            <p className="text-gray-700 mb-6">
              Refunds will be issued to the original payment method within 5-7 business days after we receive and inspect the returned item(s). Shipping costs are non-refundable unless the return is due to our error.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Non-Returnable Items</h3>
            <p className="text-gray-700 mb-6">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Products that have been opened, used, or tampered with</li>
              <li>Products returned more than 30 days after delivery</li>
              <li>Custom or special orders</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about our shipping and return policies, please contact our customer service team:
            </p>
            <p className="text-gray-700 mb-6">
                Email: support@protidelab.com<br />
              Hours: Monday-Friday, 9 AM - 5 PM EST
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;
