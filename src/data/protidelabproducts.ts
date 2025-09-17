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
    id: "88815p1",
    name: "Metabolisk Integritetsprotokoll - Fas I",
    description: "Omfattande stödpaket designat för att stödja kroppens naturliga återhämtningsprocesser. Inkluderar orala kosttillskott, estetiskt stöd och avancerade wellness-enheter för förbättrade resultat.",
    purity: "Premium Kvalitet",
    price: "1500 kr",
    image: "/labimages/88815p1.png",
    category: "Metabolisk Integritetsprotokoll",
    details: {
      productId: "88815p1",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/metabolic-integrity-phase-i-coa.pdf"
    }
  },
  {
    id: "88815p2",
    name: "Metabolisk Integritetsprotokoll - Fas II",
    description: "Avancerat stödpaket med premium wellness-enheter och omfattande återhämtningsstöd. Inkluderar avancerade bio-enheter med LED-teknologi för optimala resultat.",
    purity: "Premium Kvalitet",
    price: "2500 kr",
    image: "/labimages/88815p2.png",
    category: "Metabolisk Integritetsprotokoll",
    details: {
      productId: "88815p2",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/metabolic-integrity-phase-ii-coa.pdf"
    }
  },
  {
    id: "88815p3",
    name: "Metabolisk Integritetsprotokoll - Fas III",
    description: "Professionellt stödpaket med premium wellness-enheter och avancerad massage-teknologi. Inkluderar LED-terapi och professionell massage-utrustning.",
    purity: "Premium Kvalitet",
    price: "4500 kr",
    image: "/labimages/88815p3.png",
    category: "Metabolisk Integritetsprotokoll",
    details: {
      productId: "88815p3",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/metabolic-integrity-phase-iii-coa.pdf"
    }
  },
  {
    id: "88815p4",
    name: "Metabolisk Integritetsprotokoll - Apex",
    description: "Ultimat premium stödpaket med full-body LED-terapi och avancerad wellness-teknologi. Inkluderar professionell massage-utrustning och premium wellness-enheter.",
    purity: "Premium Kvalitet",
    price: "8500 kr",
    image: "/labimages/88815p4.png",
    category: "Metabolisk Integritetsprotokoll",
    details: {
      productId: "88815p4",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/metabolic-integrity-apex-coa.pdf"
    }
  },

  // Kroppskomposition Stack Kits
  {
    id: "88816p1",
    name: "Kroppskomposition Stack - Grundläggande",
    description: "Väsentligt kroppskompositionsstödpaket med essentiella aminosyror, mager massformel och mikronäringsämnes-elektrolyt blandning. Perfekt för grundläggande kroppskompositionsstöd.",
    purity: "Forskningskvalitet",
    price: "699 kr",
    image: "/labimages/88816p1.png",
    category: "Kroppskomposition Stack",
    details: {
      productId: "88816p1",
      size: "60-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/body-recomposition-foundation-coa.pdf"
    }
  },
  {
    id: "88816p2",
    name: "Kroppskomposition Stack - Accelerator",
    description: "Avancerat kroppskompositionsstödpaket med premium wellness-enheter och mikronålsteknik. Inkluderar avancerade återhämtningsverktyg för förbättrade resultat.",
    purity: "Forskningskvalitet",
    price: "1398 kr",
    image: "/labimages/88816p2.png",
    category: "Kroppskomposition Stack",
    details: {
      productId: "88816p2",
      size: "60-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/body-recomposition-accelerator-coa.pdf"
    }
  },
  {
    id: "88816p3",
    name: "Kroppskomposition Stack - Avancerad",
    description: "Professionellt kroppskompositionsstödpaket med LED-terapi och avancerad wellness-teknologi. Inkluderar premium wellness-enheter för optimala resultat.",
    purity: "Forskningskvalitet",
    price: "2796 kr",
    image: "/labimages/88816p3.png",
    category: "Kroppskomposition Stack",
    details: {
      productId: "88816p3",
      size: "60-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/body-recomposition-advanced-coa.pdf"
    }
  },
  {
    id: "88816p4",
    name: "Kroppskomposition Stack - Apex",
    description: "Ultimat kroppskompositionsstödpaket med fullständig wellness-system. Inkluderar LED-terapi, massage-utrustning och mikronålsteknik för maximala resultat.",
    purity: "Forskningskvalitet",
    price: "5592 kr",
    image: "/labimages/88816p4.png",
    category: "Kroppskomposition Stack",
    details: {
      productId: "88816p4",
      size: "60-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/body-recomposition-apex-coa.pdf"
    }
  },

  // Tri-Faktor Metabolisk Protokoll Kits
  {
    id: "88817p1",
    name: "Tri-Faktor Metabolisk Protokoll - I",
    description: "Avancerat metaboliskt stödpaket med termogeneskomplex, essentiella aminosyror och omfattande estetisk stack. Designat för proffsnivå metabolisk optimering.",
    purity: "Premium Kvalitet",
    price: "1000 kr",
    image: "/labimages/88817p1.png",
    category: "Tri-Faktor Metabolisk Protokoll",
    details: {
      productId: "88817p1",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/tri-factor-metabolic-protocol-i-coa.pdf"
    },
    shippingDestinations: [...usaStates]
  },
  {
    id: "88817p2",
    name: "Tri-Faktor Metabolisk Protokoll - II",
    description: "Professionellt metaboliskt stödpaket med avancerad LED-terapi och premium wellness-enheter. Inkluderar avancerade återhämtningsverktyg för optimala resultat.",
    purity: "Premium Kvalitet",
    price: "1800 kr",
    image: "/labimages/88817p2.png",
    category: "Tri-Faktor Metabolisk Protokoll",
    details: {
      productId: "88817p2",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/tri-factor-metabolic-protocol-ii-coa.pdf"
    },
    shippingDestinations: [...usaStates]
  },
  {
    id: "88817p3",
    name: "Tri-Faktor Metabolisk Protokoll - III",
    description: "Avancerat professionellt stödpaket med massage-teknologi och LED-terapi. Inkluderar premium wellness-enheter och avancerad återhämtningsutrustning.",
    purity: "Premium Kvalitet",
    price: "5000 kr",
    image: "/labimages/88817p3.png",
    category: "Tri-Faktor Metabolisk Protokoll",
    details: {
      productId: "88817p3",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/tri-factor-metabolic-protocol-iii-coa.pdf"
    },
    shippingDestinations: [...usaStates]
  },
  {
    id: "88817p4",
    name: "Tri-Faktor Metabolisk Protokoll - Apex",
    description: "Ultimat professionellt stödpaket med full-body LED-terapi och avancerad massage-teknologi. Inkluderar premium wellness-enheter och professionell återhämtningsutrustning.",
    purity: "Premium Kvalitet",
    price: "9000 kr",
    image: "/labimages/88817p4.png",
    category: "Tri-Faktor Metabolisk Protokoll",
    details: {
      productId: "88817p4",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/tri-factor-metabolic-protocol-apex-coa.pdf"
    },
    shippingDestinations: [...usaStates]
  },

  // Dermal Ommodellering Matrix Kits
  {
    id: "88818p1",
    name: "Dermal Ommodellering Matrix - Grundläggande",
    description: "Omfattande dermal och systemisk förnyelsepaket med biomimetiska kopparanaloger, marint kollagen och avancerad mikronålsteknik för förbättrad hudommodellering.",
    purity: "Kosmetisk Kvalitet",
    price: "600 kr",
    image: "/labimages/88818p1.png",
    category: "Dermal Ommodellering Matrix",
    details: {
      productId: "88818p1",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/dermal-remodeling-foundation-coa.pdf"
    }
  },
  {
    id: "88818p2",
    name: "Dermal Ommodellering Matrix - Accelerator",
    description: "Avancerat dermal förnyelsepaket med premium wellness-enheter och avancerad hudvårdsteknik. Inkluderar elektroniska wellness-verktyg för förbättrad hudommodellering.",
    purity: "Kosmetisk Kvalitet",
    price: "1000 kr",
    image: "/labimages/88818p2.png",
    category: "Dermal Ommodellering Matrix",
    details: {
      productId: "88818p2",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/dermal-remodeling-accelerator-coa.pdf"
    }
  },
  {
    id: "88818p3",
    name: "Dermal Ommodellering Matrix - Avancerad",
    description: "Professionellt dermal förnyelsepaket med LED-terapi och avancerad hudvårdsteknik. Inkluderar premium wellness-enheter och avancerad mikronålsteknik.",
    purity: "Kosmetisk Kvalitet",
    price: "1900 kr",
    image: "/labimages/88818p3.png",
    category: "Dermal Ommodellering Matrix",
    details: {
      productId: "88818p3",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/dermal-remodeling-advanced-coa.pdf"
    }
  },
  {
    id: "88818p4",
    name: "Dermal Ommodellering Matrix - Apex",
    description: "Ultimat dermal förnyelsepaket med fullständig LED-terapi och avancerad hudvårdsteknik. Inkluderar premium wellness-enheter och professionell hudvårdsutrustning.",
    purity: "Kosmetisk Kvalitet",
    price: "3600 kr",
    image: "/labimages/88818p4.png",
    category: "Dermal Ommodellering Matrix",
    details: {
      productId: "88818p4",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/dermal-remodeling-apex-coa.pdf"
    }
  },

  // Systemisk Torrhetsprotokoll Kits
  {
    id: "88819p1",
    name: "Systemisk Torrhetsprotokoll - I",
    description: "Intensivt dermatologiskt stödsystem designat för att bekämpa systemisk torrhet och stödja leverfunktion under intensiva hudvårdsprotokoll. Innehåller högt DHA omega-3 och medicinsk kvalitet topiska räddningsprodukter.",
    purity: "Medicinsk Kvalitet",
    price: "700 kr",
    image: "/labimages/88819p1.png",
    category: "Systemisk Torrhetsprotokoll",
    details: {
      productId: "88819p1",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/systemic-dryness-protocol-i-coa.pdf"
    }
  },
  {
    id: "88819p2",
    name: "Systemisk Torrhetsprotokoll - II",
    description: "Avancerat dermatologiskt stödsystem med omfattande hydraterande produkter och avancerad hudvårdsteknik. Inkluderar premium wellness-enheter för förbättrad hudhälsa.",
    purity: "Medicinsk Kvalitet",
    price: "1200 kr",
    image: "/labimages/88819p2.png",
    category: "Systemisk Torrhetsprotokoll",
    details: {
      productId: "88819p2",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/systemic-dryness-protocol-ii-coa.pdf"
    }
  },
  {
    id: "88819p3",
    name: "Systemisk Torrhetsprotokoll - III",
    description: "Professionellt dermatologiskt stödsystem med massage-teknologi och avancerad hudvårdsteknik. Inkluderar premium wellness-enheter och avancerad återhämtningsutrustning.",
    purity: "Medicinsk Kvalitet",
    price: "2000 kr",
    image: "/labimages/88819p3.png",
    category: "Systemisk Torrhetsprotokoll",
    details: {
      productId: "88819p3",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/systemic-dryness-protocol-iii-coa.pdf"
    }
  },
  {
    id: "88819p4",
    name: "Systemisk Torrhetsprotokoll - Apex",
    description: "Ultimat dermatologiskt stödsystem med fullständig LED-terapi och avancerad massage-teknologi. Inkluderar premium wellness-enheter och professionell återhämtningsutrustning.",
    purity: "Medicinsk Kvalitet",
    price: "3700 kr",
    image: "/labimages/88819p4.png",
    category: "Systemisk Torrhetsprotokoll",
    details: {
      productId: "88819p4",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/systemic-dryness-protocol-apex-coa.pdf"
    }
  }
];