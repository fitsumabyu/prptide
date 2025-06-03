import Layout from "@/components/layout/Layout";

const RefundPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Refund, Return & Cancellation Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              At FormulaX, we strive to ensure your satisfaction with every purchase. This policy outlines our procedures for returns, refunds, and order cancellations.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Return Conditions</h2>
            <p className="text-gray-700 mb-6">
              We accept returns under the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Unopened Products:</strong> Only products in their original, sealed packaging can be returned.</li>
              <li><strong>Time Limit:</strong> Returns must be initiated within 14 days of delivery.</li>
              <li><strong>Proof of Purchase:</strong> A valid order number or receipt is required for all returns.</li>
              <li><strong>Product Condition:</strong> Products must be in resalable condition without damage.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Non-Returnable Items</h2>
            <p className="text-gray-700 mb-6">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Opened or used products</li>
              <li>Products with broken seals or damaged packaging</li>
              <li>Custom-synthesized chemical reference materials</li>
              <li>Products requiring refrigeration or special handling</li>
              <li>Items marked as non-returnable at the time of purchase</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Refund Process</h2>
            <p className="text-gray-700 mb-6">
              Once your return is received and inspected, we will process your refund as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Approval Time:</strong> Return requests are typically processed within 3 business days.</li>
              <li><strong>Refund Method:</strong> Refunds will be issued to the original payment method used for the purchase.</li>
              <li><strong>Processing Time:</strong> After approval, refunds typically take 5-7 business days to appear on your statement, depending on your financial institution.</li>
              <li><strong>Shipping Costs:</strong> Original shipping costs are non-refundable. Return shipping costs are the responsibility of the customer unless the return is due to our error.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Order Cancellations</h2>
            <p className="text-gray-700 mb-6">
              You may request to cancel an order under these conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Timeframe:</strong> Cancellation requests must be submitted within 24 hours of placing an order.</li>
              <li><strong>Processing Status:</strong> Orders that have already been shipped cannot be cancelled.</li>
              <li><strong>Cancellation Method:</strong> To cancel an order, contact our customer service team immediately with your order number.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Damaged or Defective Products</h2>
            <p className="text-gray-700 mb-6">
              If you receive a damaged or defective product:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Contact us within 48 hours of receiving the order.</li>
              <li>Provide clear photos of the damaged product and packaging.</li>
              <li>We may offer a replacement or full refund including shipping costs for confirmed cases.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. How to Initiate a Return</h2>
            <p className="text-gray-700 mb-6">
              To start the return process:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-6">
              <li>Contact our customer service team at returns@formulax.com or call (800) 123-4567.</li>
              <li>Provide your order number, the items you wish to return, and the reason for the return.</li>
              <li>If approved, you will receive a Return Merchandise Authorization (RMA) number and return instructions.</li>
              <li>Package the items securely with the RMA number clearly marked on the outside of the package.</li>
              <li>Ship the return to the address provided in the return instructions.</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Exceptions and Special Circumstances</h2>
            <p className="text-gray-700 mb-6">
              We review special circumstances on a case-by-case basis. If you have a unique situation not covered by this policy, please contact our customer service team for assistance.
            </p>
            
            <p className="text-gray-700 mt-12 italic">
              Last updated: May 25, 2023
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPolicy; 