import Layout from "@/components/layout/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Legal Disclaimer</h1>
          
          <div className="prose max-w-none">
            <div className="bg-green-50 border border-green-200 p-6 rounded-md mb-8">
              <p className="text-green-700 font-semibold mb-2">
                IMPORTANT: SAFE PRODUCTS FOR PERSONAL USE
              </p>
              <p className="text-green-600">
                All products sold by H&amp;H WORLDWIDE GROUP are safe, ethically-sourced recovery products for personal use. 
                These products are designed for physical health and wellness, manufactured with the highest quality standards, 
                and are safe for personal consumption and use.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Product Safety & Quality</h2>
            <p className="text-gray-700 mb-6">
              All recovery products sold by H&amp;H WORLDWIDE GROUP are manufactured with the highest quality standards and are safe for personal use. Our products are ethically sourced, tested for purity and safety, and designed to support physical health and wellness. We maintain strict quality control processes to ensure every product meets our high standards.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Personal Use Only</h2>
            <p className="text-gray-700 mb-6">
              H&amp;H WORLDWIDE GROUP products are intended for personal use to support physical health and recovery. While we stand behind the quality and safety of our products, we make no medical claims. Any statements made about our products are for informational purposes only and are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional for medical advice.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Quality Assurance</h2>
            <p className="text-gray-700 mb-6">
              While we strive to provide accurate product information and high-quality recovery products, H&amp;H WORLDWIDE GROUP makes no warranties, expressed or implied, regarding the accuracy, completeness, reliability, or suitability of the information provided. We provide our products "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Responsibility</h2>
            <p className="text-gray-700 mb-6">
              The user assumes all responsibility for the proper use of our products in compliance with all applicable laws and regulations. The user is responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Following all product instructions and recommended usage guidelines</li>
              <li>Ensuring that the use of our products complies with all applicable laws and regulations</li>
              <li>Consulting with healthcare professionals when appropriate</li>
              <li>Properly storing and handling products according to instructions</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Liability Limitation</h2>
            <p className="text-gray-700 mb-6">
                  In no event shall H&amp;H WORLDWIDE GROUP be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) arising from the use or inability to use our products or from any action or decision taken as a result of using the information provided on our website, even if advised of the possibility of such damages.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Legal Compliance</h2>
            <p className="text-gray-700 mb-6">
              H&amp;H WORLDWIDE GROUP products are sold with the understanding that the purchaser is familiar with and agrees to comply with all applicable federal, state, and local laws and regulations regarding their purchase, possession, and use.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Health Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new health regimen.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              H&amp;H WORLDWIDE GROUP reserves the right to modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting on our website. Your continued use of our website or purchase of our products after any changes to this disclaimer constitutes your acceptance of the revised disclaimer.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              <strong>Official Business Name:</strong> H&amp;H WORLDWIDE GROUP<br />
              <strong>Brand:</strong> FormulaX<br />
              <span className="text-xs text-gray-500">FormulaX is a brand of H&amp;H WORLDWIDE GROUP.</span>
            </p>
            
            <p className="text-gray-700 mb-6">
              If you have any questions about this disclaimer, please contact us at:
            </p>
            <p className="text-gray-700 mb-6">
              H&amp;H WORLDWIDE GROUP<br />
              732 S 6TH ST, STE R<br />
              LAS VEGAS NEVADA 89101
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

export default Disclaimer;
