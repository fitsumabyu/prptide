import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-peptide-purple">
              Peptide Lab Nexus
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Research-grade peptides for laboratory use only.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-peptide-purple">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-peptide-purple">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-peptide-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Refund & Return Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-base text-red-600 font-semibold mb-2">
              IMPORTANT: Not for human consumption. For laboratory research only.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              These products are intended for laboratory research use only. Not for diagnostic, therapeutic, or human use.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              No Medical Claims: The products are not approved by regulatory authorities and not intended to diagnose, treat, cure, or prevent any disease. This clarifies that no health or medical claims are being made.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Age Restriction: Must be 21+ to purchase/use this website. This website is not intended for minors.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              &copy; {new Date().getFullYear()} Peptide Lab Nexus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
