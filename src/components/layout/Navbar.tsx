import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import CountrySelector from "@/components/shipping/CountrySelector";
import { cn } from "@/lib/utils";
import { useShippingCountry } from "@/context/ShippingCountryContext";
import ExchangeRateDisplay from "@/components/ui/ExchangeRateDisplay";
import { LanguageToggle } from "@/components/ui/BilingualText";
import BilingualText from "@/components/ui/BilingualText";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const { totalItems } = useCart();
  const { country } = useShippingCountry();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Close sidebar when route changes
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Exchange Rate Banner */}
      {!transparent && (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-blue-200">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <ExchangeRateDisplay className="flex-1" />
            <LanguageToggle className="ml-4" />
          </div>
        </div>
      )}
      
      <header className={cn(
        "w-full border-b sticky top-0 z-50", 
        transparent 
          ? "bg-transparent border-transparent" 
          : "bg-white border-gray-200"
      )}>
        <div className="container mx-auto px-4 py-2 flex items-center justify-between min-h-[60px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className={cn(
            "font-bold flex-shrink-0 text-sm sm:text-2xl",
            transparent ? "text-white" : "text-peptide-purple"
          )}>
            <span className="md:inline">Protidelab</span>
          </Link>
        </div>

        {/* Center nav links (desktop) */}
        <div className="flex-1 flex justify-center items-center">
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className={cn(
              "hover:text-peptide-purple transition-colors",
              transparent ? "text-gray-100" : "text-gray-700"
            )}>
              <BilingualText english="Products" swedish="Produkter" showBoth={false} />
            </Link>
            <Link href="/about" className={cn(
              "hover:text-peptide-purple transition-colors",
              transparent ? "text-gray-100" : "text-gray-700"
            )}>
              <BilingualText english="About Us" swedish="Om Oss" showBoth={false} />
            </Link>
            <Link href="/contact" className={cn(
              "hover:text-peptide-purple transition-colors",
              transparent ? "text-gray-100" : "text-gray-700"
            )}>
              <BilingualText english="Contact" swedish="Kontakt" showBoth={false} />
            </Link>
          </nav>
        </div>

        {/* Right side items: Country selector and Cart (Desktop) / Country selector and Hamburger (Mobile) */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Country Selector */}
          <div className="mr-2 order-1 md:order-1">
            <CountrySelector className={cn(
              "scale-90 sm:scale-100",
            )} />
          </div>
          
          {/* Cart icon - desktop only */}
          <div className="hidden md:flex items-center relative order-2">
            <Button
              asChild
              variant="ghost"
              size="xl"
              className={cn(
                "relative flex items-center justify-center border-0 shadow-none bg-transparent h-auto w-auto p-0 focus-visible:ring-2 focus-visible:ring-peptide-purple",
                transparent ? "text-white" : "text-peptide-purple"
              )}
              style={{ minWidth: 0, minHeight: 0 }}
            >
              <Link
                href="/cart"
                className="flex items-center justify-center h-full w-full"
                aria-label="Cart"
              >
                <ShoppingCart className="h-24 w-24" />
                {totalItems > 0 && (
                  <span className="absolute -top-4 -right-4 bg-peptide-purple text-white rounded-full h-7 w-7 flex items-center justify-center text-base font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>
          </div>
          
          {/* Mobile hamburger menu */}
          <div className="md:hidden relative order-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="xl"
                  className={cn(
                    "h-10 w-10 p-0 flex items-center justify-center",
                    transparent ? "text-white" : "text-gray-700"
                  )}
                  aria-label="Open menu"
                >
                  <Menu size={32} />
                  {/* Show cart count on hamburger menu when there are items */}
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-peptide-purple text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 flex flex-col">
                <nav className="flex flex-col gap-4 p-6 min-h-[50vh]">
                  {/* Mobile Cart Link */}
                  <Link
                    href="/cart"
                    className="flex items-center gap-2 text-lg text-peptide-purple hover:text-peptide-purple/80 transition-colors font-medium border-b border-gray-200 pb-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShoppingCart size={20} />
                    <span><BilingualText english={`Cart${totalItems > 0 ? ` (${totalItems})` : ''}`} swedish={`Kundvagn${totalItems > 0 ? ` (${totalItems})` : ''}`} showBoth={false} /></span>
                  </Link>
                  
                  <Link
                    href="/products"
                    className="text-lg text-gray-700 hover:text-peptide-purple transition-colors"
                  >
                    <BilingualText english="Products" swedish="Produkter" showBoth={false} />
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg text-gray-700 hover:text-peptide-purple transition-colors"
                  >
                    <BilingualText english="About Us" swedish="Om Oss" showBoth={false} />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg text-gray-700 hover:text-peptide-purple transition-colors"
                  >
                    <BilingualText english="Contact" swedish="Kontakt" showBoth={false} />
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;

