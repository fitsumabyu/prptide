import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { useState, useEffect } from "react";
import AgeVerification from "@/components/AgeVerification";
import { CountryProvider } from "@/components/shipping/CountrySelector";
import ShippingWarningBanner from "@/components/shipping/ShippingWarningBanner";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Shipping from "./pages/Shipping";
import ShippingPolicy from "./pages/ShippingPolicy";
import Disclaimer from "./pages/Disclaimer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import RefundPolicy from "./pages/RefundPolicy";

const queryClient = new QueryClient();

const App = () => {
  const [ageVerified, setAgeVerified] = useState<boolean>(() => {
    // Check if user has already verified age in this session
    return localStorage.getItem("ageVerified") === "true";
  });

  const handleAgeVerification = () => {
    localStorage.setItem("ageVerified", "true");
    setAgeVerified(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <CartProvider>
          <CountryProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {!ageVerified && <AgeVerification onVerify={handleAgeVerification} />}
              <div className={!ageVerified ? "hidden" : ""}>
                <ShippingWarningBanner />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/shipping" element={<Shipping />} />
                  <Route path="/shipping-policy" element={<ShippingPolicy />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </TooltipProvider>
          </CountryProvider>
        </CartProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
