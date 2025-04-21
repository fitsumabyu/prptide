
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  // Close sidebar when route changes
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full border-b border-gray-200 sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between min-h-[60px]">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-peptide-purple flex-shrink-0">
          Peptide Lab Nexus
        </Link>

        {/* Center nav links (desktop) */}
        <div className="flex-1 flex justify-center items-center">
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-peptide-purple transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-peptide-purple transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-peptide-purple transition-colors">
              Contact
            </Link>
            
          </nav>
        </div>

        {/* Cart icon, always present */}
        <div className="ml-2 flex items-center relative">
          <Button
            asChild
            variant="ghost"
            size="xl"
            className="relative flex items-center justify-center border-0 shadow-none bg-transparent h-auto w-auto p-0 focus-visible:ring-2 focus-visible:ring-peptide-purple"
            style={{ minWidth: 0, minHeight: 0 }}
          >
            <Link
              to="/cart"
              className="flex items-center justify-center h-full w-full"
              aria-label="Cart"
            >
              <ShoppingCart className="h-24 w-24 text-peptide-purple" />
              {totalItems > 0 && (
                <span className="absolute -top-4 -right-4 bg-peptide-purple text-white rounded-full h-7 w-7 flex items-center justify-center text-base font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>
        </div>

        {/* Mobile hamburger menu */}
        <div className="md:hidden ml-2">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="xl"
                className="text-gray-700 h-10 w-10 p-0 flex items-center justify-center"
                aria-label="Open menu"
              >
                <Menu size={32} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 flex flex-col">
              <nav className="flex flex-col gap-4 p-6 min-h-[50vh]">
                <Link
                  to="/products"
                  className="text-lg text-gray-700 hover:text-peptide-purple transition-colors"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="text-lg text-gray-700 hover:text-peptide-purple transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-lg text-gray-700 hover:text-peptide-purple transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

