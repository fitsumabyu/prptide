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
    productId: string;
    size: string;
    storage: string;
    coaLink: string;
  };
  shippingDestinations?: ShippingDestination[];
}

// Exempel på USA-stater som kan användas för specifika produkter
const usaStates: ShippingDestination[] = [
  { 
    id: 101, 
    name: "Kalifornien", 
    description: "Tillgängligt för personlig användning med korrekt dokumentation.",
    productSpecific: true
  },
  { 
    id: 102, 
    name: "New York", 
    description: "Endast för personlig användning med statlig verifiering.",
    productSpecific: true
  },
  { 
    id: 103, 
    name: "Florida", 
    description: "Begränsad tillgänglighet för certifierade användare.",
    productSpecific: true
  }
];

export const products: Product[] = [
  // Metabolisk Integritetsprotokoll Kits
  {
    id: "88815",
    name: "Metabolisk Integritetsprotokoll - Fas I",
    description: "Omfattande stödpaket designat för att stödja kroppens naturliga återhämtningsprocesser. Inkluderar orala kosttillskott, estetiskt stöd och avancerade wellness-enheter för förbättrade resultat.",
    purity: "Premium Kvalitet",
    price: "1500 kr",
    image: "/labimages/88815p1.png",
    category: "Metabolisk Integritetsprotokoll",
    details: {
      productId: "88815",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/metabolic-integrity-phase-i-coa.pdf"
    }
  },

  // Kroppskomposition Stack Kits
  {
    id: "88816",
    name: "Kroppskomposition Stack - Grundläggande",
    description: "Väsentligt kroppskompositionsstödpaket med essentiella aminosyror, mager massformel och mikronäringsämnes-elektrolyt blandning. Perfekt för grundläggande kroppskompositionsstöd.",
    purity: "Forskningskvalitet",
    price: "699 kr",
    image: "/labimages/88816p1.png",
    category: "Kroppskomposition Stack",
    details: {
      productId: "88816",
      size: "60-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/body-recomposition-foundation-coa.pdf"
    }
  },

  // Tri-Faktor Metabolisk Protokoll Kits
  {
    id: "88817",
    name: "Tri-Faktor Metabolisk Protokoll - I",
    description: "Avancerat metaboliskt stödpaket med termogeneskomplex, essentiella aminosyror och omfattande estetisk stack. Designat för proffsnivå metabolisk optimering.",
    purity: "Premium Kvalitet",
    price: "1000 kr",
    image: "/labimages/88817p1.png",
    category: "Tri-Faktor Metabolisk Protokoll",
    details: {
      productId: "88817",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/tri-factor-metabolic-protocol-i-coa.pdf"
    },
    shippingDestinations: [...usaStates]
  },

  // Dermal Ommodellering Matrix Kits
  {
    id: "88818",
    name: "Dermal Ommodellering Matrix - Grundläggande",
    description: "Omfattande dermal och systemisk förnyelsepaket med biomimetiska kopparanaloger, marint kollagen och avancerad mikronålsteknik för förbättrad hudommodellering.",
    purity: "Kosmetisk Kvalitet",
    price: "600 kr",
    image: "/labimages/88818p1.png",
    category: "Dermal Ommodellering Matrix",
    details: {
      productId: "88818",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/dermal-remodeling-foundation-coa.pdf"
    }
  },

  // Systemisk Torrhetsprotokoll Kits
  {
    id: "88819",
    name: "Systemisk Torrhetsprotokoll - I",
    description: "Intensivt dermatologiskt stödsystem designat för att bekämpa systemisk torrhet och stödja leverfunktion under intensiva hudvårdsprotokoll. Innehåller högt DHA omega-3 och medicinsk kvalitet topiska räddningsprodukter.",
    purity: "Medicinsk Kvalitet",
    price: "700 kr",
    image: "/labimages/88819p1.png",
    category: "Systemisk Torrhetsprotokoll",
    details: {
      productId: "88819",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/systemic-dryness-protocol-i-coa.pdf"
    }
  }
];