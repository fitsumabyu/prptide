import { ShippingDestination } from "@/components/shipping/PreferredDestinations";

export interface Product {
  id: string;
  name: string;
  description: string;
  purity: string;
  price: string;
  image: string;
  category: string;
  details: {
    cas: string;
    size: string;
    storage: string;
    coaLink: string; // Now redirects to the /certificates/:id page (previously linked directly to PDF)
  };
  shippingDestinations?: ShippingDestination[]; // Product-specific shipping destinations
}

// Example USA states that could be used for specific products
const usaStates: ShippingDestination[] = [
  { 
    id: 101, 
    name: "California", 
    description: "Available for research use only with proper documentation.",
    productSpecific: true
  },
  { 
    id: 102, 
    name: "New York", 
    description: "Research facilities only with state verification.",
    productSpecific: true
  },
  { 
    id: 103, 
    name: "Florida", 
    description: "Limited availability for certified research institutions.",
    productSpecific: true
  }
];

export const products: Product[] = [
  // Category 1: Research Compounds - Swedish Market
  {
    id: "88815",
    name: "Semaglutide",
    description: "Forskningsförening för laboratoriebruk endast. Syntetisk analog som används som referensmaterial för metaboliska studier i kontrollerade laboratoriemiljöer.",
    purity: "≥98% renhet",
    price: "från 1500 kr",
    image: "/seg.jpg",
    category: "Research Compounds",
    details: {
      cas: "910463-68-2",
      size: "5mg-40mg",
      storage: "Förvara vid -20°C, undvik ljus",
      coaLink: "/certificates/semaglutide-coa.pdf"
    }
  },
  {
    id: "88816",
    name: "Tirzepatide",
    description: "Forskningsförening för laboratoriebruk endast. Syntetisk analog som används som referensmaterial för metabolisk forskning i kontrollerade laboratoriemiljöer.",
    purity: "≥98% renhet",
    price: "från 699 kr",
    image: "/tri.jpg",
    category: "Research Compounds",
    details: {
      cas: "2023148-47-6",
      size: "5mg-40mg",
      storage: "Förvara vid -20°C, undvik ljus",
      coaLink: "/certificates/tirzepatide-coa.pdf"
    }
  },
  {
    id: "88817",
    name: "Retatrutide",
    description: "Forskningsförening för laboratoriebruk endast. Ny syntetisk förening för användning som referensmaterial i biokemiska forskningsapplikationer.",
    purity: "≥99% renhet",
    price: "från 1000 kr",
    image: "/ret.jpg",
    category: "Research Compounds",
    details: {
      cas: "N/A",
      size: "4mg-40mg",
      storage: "Förvara vid -20°C, undvik ljus",
      coaLink: "/certificates/retatrutide-coa.pdf"
    },
    shippingDestinations: [...usaStates]
  },
  {
    id: "88818",
    name: "GHK-Cu",
    description: "Forskningsförening för laboratoriebruk endast. Kopparkomplex som används som referensmaterial för cellulära studier i kontrollerade laboratorieförhållanden.",
    purity: "≥98% renhet",
    price: "från 600 kr",
    image: "/ghk.jpg",
    category: "Research Compounds",
    details: {
      cas: "49557-75-7",
      size: "50mg-400mg",
      storage: "Förvara vid -20°C, undvik ljus",
      coaLink: "/certificates/ghk-cu-coa.pdf"
    }
  },
  {
    id: "88819",
    name: "Roaccutan (Isotretinoin)",
    description: "Forskningsförening för laboratoriebruk endast. Referensförening för dermatologisk forskning i kontrollerade laboratoriemiljöer.",
    purity: "≥99% renhet",
    price: "från 700 kr",  
    image: "/iso.jpg",
    category: "Research Compounds",
    details: {
      cas: "4759-48-2",
      size: "1000mg-8000mg",
      storage: "Förvara vid -20°C, undvik ljus",
      coaLink: "/certificates/isotretinoin-coa.pdf"
    }
  }
];
