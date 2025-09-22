import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-peptide-purple">
              FormulaX
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Högkvalitativa återhämtningsprodukter för fysisk hälsa och välbefinnande.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              Produkter
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Alla Produkter
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Nya Produkter
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Bästsäljare
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              Företag
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              Juridiskt
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Villkor & Bestämmelser
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Återbetalning & Returpolicy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Leverans & Frakt
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-gray-600 hover:text-peptide-purple">
                  Ansvarsfriskrivning
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-base text-green-600 font-semibold mb-2">
              VIKTIGT: Säkra produkter för personlig återhämtning och fysisk hälsa.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Dessa produkter är avsedda för personlig återhämtning och fysisk hälsa. Konsultera alltid en läkare vid medicinska frågor.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Inga Medicinska Påståenden: Produkterna är inte godkända av tillsynsmyndigheter och är inte avsedda att diagnostisera, behandla, bota eller förhindra någon sjukdom.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Åldersbegränsning: Måste vara 18+ för att köpa/använda denna webbplats. Denna webbplats är inte avsedd för minderåriga.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              H&amp;H WORLDWIDE GROUP<br />
              732 S 6TH ST, STE R<br />
              LAS VEGAS NEVADA 89101
            </p>
            <p className="text-sm text-gray-500 mt-4">
              &copy; {new Date().getFullYear()} FormulaX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
