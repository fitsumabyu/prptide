import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
  fullWidthContent?: boolean;
}

const Layout = ({ children, fullWidthContent = false }: LayoutProps) => {
  const { totalItems } = useCart();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === '/';
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Use transparent navbar on home page and when not scrolled
  const useTransparentNavbar = isHomePage && !isScrolled;
  
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Navbar transparent={useTransparentNavbar} />
      <main className={`flex-grow flex flex-col ${fullWidthContent ? 'w-full' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
