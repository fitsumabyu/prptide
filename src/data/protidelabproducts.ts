import { ShippingDestination } from "@/components/shipping/PreferredDestinations";

export interface ProductContent {
  englishname: string;
  swedishname: string;
  englishdescription: string;
  swedishdescription: string;
  quantity?: number;
  englishunittype?: string;
  swedishunittype?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  swedishdescription: string;
  purity: string;
  price: string;
  image: string;
  category: string;
  correlatesto: string;
  imagedescription: string;
  contents: ProductContent[];
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

// Simplified product data - only the 5 base products with their 4 tiers each
export const products: Product[] = [
  // Intensive Hydration Sheet Masks - 4 tiers
  {
    id: "88815p1",
    name: "Intensive Hydration Sheet Masks - Tier 1",
    description: "Single-use cosmetic biocellulose masks with ceramides.",
    swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider.",
    purity: "Premium Kvalitet",
    price: "1500 kr",
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 5mg",
    imagedescription: "Product image for Intensive Hydration Sheet Masks - Tier 1",
    contents: [
      {
        englishname: "Intensive Hydration Sheet Masks",
        swedishname: "Intensiva Hydrering Ansiktsmasker",
        englishdescription: "Single-use cosmetic biocellulose masks with ceramides",
        swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider",
        quantity: 12,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
    details: {
      productId: "88815p1",
      size: "12 masks",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88815p1-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88815p2",
    name: "Intensive Hydration Sheet Masks - Tier 2",
    description: "Single-use cosmetic biocellulose masks with ceramides.",
    swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider.",
    purity: "Premium Kvalitet",
    price: "2500 kr",
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 10mg",
    imagedescription: "Product image for Intensive Hydration Sheet Masks - Tier 2",
    contents: [
      {
        englishname: "Intensive Hydration Sheet Masks",
        swedishname: "Intensiva Hydrering Ansiktsmasker",
        englishdescription: "Single-use cosmetic biocellulose masks with ceramides",
        swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider",
        quantity: 24,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
    details: {
      productId: "88815p2",
      size: "24 masks",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88815p2-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88815p3",
    name: "Intensive Hydration Sheet Masks - Tier 3",
    description: "Single-use cosmetic biocellulose masks with ceramides.",
    swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider.",
    purity: "Premium Kvalitet",
    price: "4500 kr",
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 20mg",
    imagedescription: "Product image for Intensive Hydration Sheet Masks - Tier 3",
    contents: [
      {
        englishname: "Intensive Hydration Sheet Masks",
        swedishname: "Intensiva Hydrering Ansiktsmasker",
        englishdescription: "Single-use cosmetic biocellulose masks with ceramides",
        swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider",
        quantity: 36,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
    details: {
      productId: "88815p3",
      size: "36 masks",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88815p3-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88815p4",
    name: "Intensive Hydration Sheet Masks - Tier 4",
    description: "Single-use cosmetic biocellulose masks with ceramides.",
    swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider.",
    purity: "Premium Kvalitet",
    price: "8500 kr",
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 40mg",
    imagedescription: "Product image for Intensive Hydration Sheet Masks - Tier 4",
    contents: [
      {
        englishname: "Intensive Hydration Sheet Masks",
        swedishname: "Intensiva Hydrering Ansiktsmasker",
        englishdescription: "Single-use cosmetic biocellulose masks with ceramides",
        swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider",
        quantity: 48,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
    details: {
      productId: "88815p4",
      size: "48 masks",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88815p4-coa.pdf"
    },
    shippingDestinations: usaStates
  },

  // Ultra-Hydrating Lip Masks - 4 tiers
  {
    id: "88816p1",
    name: "Ultra-Hydrating Lip Masks - Tier 1",
    description: "Single-use cosmetic hydrogel lip patches.",
    swedishdescription: "Engångs kosmetiska hydrogel läpplappar.",
    purity: "Premium Kvalitet",
    price: "699 kr",
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 5mg",
    imagedescription: "Product image for Ultra-Hydrating Lip Masks - Tier 1",
    contents: [
      {
        englishname: "Ultra-Hydrating Lip Masks",
        swedishname: "Ultra-Hydrerande Läppmasker",
        englishdescription: "Single-use cosmetic hydrogel lip patches",
        swedishdescription: "Engångs kosmetiska hydrogel läpplappar",
        quantity: 10,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
    details: {
      productId: "88816p1",
      size: "10 masks",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88816p1-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88816p2",
    name: "Ultra-Hydrating Lip Masks - Tier 2",
    description: "Single-use cosmetic hydrogel lip patches.",
    swedishdescription: "Engångs kosmetiska hydrogel läpplappar.",
    purity: "Premium Kvalitet",
    price: "1398 kr",
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 10mg",
    imagedescription: "Product image for Ultra-Hydrating Lip Masks - Tier 2",
    contents: [
      {
        englishname: "Ultra-Hydrating Lip Masks",
        swedishname: "Ultra-Hydrerande Läppmasker",
        englishdescription: "Single-use cosmetic hydrogel lip patches",
        swedishdescription: "Engångs kosmetiska hydrogel läpplappar",
        quantity: 20,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
    details: {
      productId: "88816p2",
      size: "20 masks",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88816p2-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88816p3",
    name: "Ultra-Hydrating Lip Masks - Tier 3",
    description: "Single-use cosmetic hydrogel lip patches.",
    swedishdescription: "Engångs kosmetiska hydrogel läpplappar.",
    purity: "Premium Kvalitet",
    price: "2796 kr",
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 20mg",
    imagedescription: "Product image for Ultra-Hydrating Lip Masks - Tier 3",
    contents: [
      {
        englishname: "Ultra-Hydrating Lip Masks",
        swedishname: "Ultra-Hydrerande Läppmasker",
        englishdescription: "Single-use cosmetic hydrogel lip patches",
        swedishdescription: "Engångs kosmetiska hydrogel läpplappar",
        quantity: 30,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
    details: {
      productId: "88816p3",
      size: "30 masks",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88816p3-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88816p4",
    name: "Ultra-Hydrating Lip Masks - Tier 4",
    description: "Single-use cosmetic hydrogel lip patches.",
    swedishdescription: "Engångs kosmetiska hydrogel läpplappar.",
    purity: "Premium Kvalitet",
    price: "5592 kr",
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 40mg",
    imagedescription: "Product image for Ultra-Hydrating Lip Masks - Tier 4",
    contents: [
      {
        englishname: "Ultra-Hydrating Lip Masks",
        swedishname: "Ultra-Hydrerande Läppmasker",
        englishdescription: "Single-use cosmetic hydrogel lip patches",
        swedishdescription: "Engångs kosmetiska hydrogel läpplappar",
        quantity: 40,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
    details: {
      productId: "88816p4",
      size: "40 masks",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88816p4-coa.pdf"
    },
    shippingDestinations: usaStates
  },

  // Medical-grade Lanolin Lip Balm - 4 tiers
  {
    id: "88817p1",
    name: "Medical-grade Lanolin Lip Balm - Tier 1",
    description: "Anhydrous lanolin lip balm (cosmetic).",
    swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk).",
    purity: "Premium Kvalitet",
    price: "1000 kr",
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 4mg",
    imagedescription: "Product image for Medical-grade Lanolin Lip Balm - Tier 1",
    contents: [
      {
        englishname: "Medical-grade Lanolin Lip Balm",
        swedishname: "Medicinsk Lanolin Läppbalsam",
        englishdescription: "Anhydrous lanolin lip balm in a tube",
        swedishdescription: "Vattenfri lanolin läppbalsam i en tub",
        quantity: 1,
        englishunittype: "tubes",
        swedishunittype: "tubar"
      }
    ],
    details: {
      productId: "88817p1",
      size: "1 tube",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88817p1-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88817p2",
    name: "Medical-grade Lanolin Lip Balm - Tier 2",
    description: "Anhydrous lanolin lip balm (cosmetic).",
    swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk).",
    purity: "Premium Kvalitet",
    price: "1800 kr",
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 8mg",
    imagedescription: "Product image for Medical-grade Lanolin Lip Balm - Tier 2",
    contents: [
      {
        englishname: "Medical-grade Lanolin Lip Balm",
        swedishname: "Medicinsk Lanolin Läppbalsam",
        englishdescription: "Anhydrous lanolin lip balm in a tube",
        swedishdescription: "Vattenfri lanolin läppbalsam i en tub",
        quantity: 2,
        englishunittype: "tubes",
        swedishunittype: "tubar"
      }
    ],
    details: {
      productId: "88817p2",
      size: "2 tubes",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88817p2-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88817p3",
    name: "Medical-grade Lanolin Lip Balm - Tier 3",
    description: "Anhydrous lanolin lip balm (cosmetic).",
    swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk).",
    purity: "Premium Kvalitet",
    price: "5000 kr",
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 20mg",
    imagedescription: "Product image for Medical-grade Lanolin Lip Balm - Tier 3",
    contents: [
      {
        englishname: "Medical-grade Lanolin Lip Balm",
        swedishname: "Medicinsk Lanolin Läppbalsam",
        englishdescription: "Anhydrous lanolin lip balm in a tube",
        swedishdescription: "Vattenfri lanolin läppbalsam i en tub",
        quantity: 3,
        englishunittype: "tubes",
        swedishunittype: "tubar"
      }
    ],
    details: {
      productId: "88817p3",
      size: "3 tubes",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88817p3-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88817p4",
    name: "Medical-grade Lanolin Lip Balm - Tier 4",
    description: "Anhydrous lanolin lip balm (cosmetic).",
    swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk).",
    purity: "Premium Kvalitet",
    price: "9000 kr",
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 40mg",
    imagedescription: "Product image for Medical-grade Lanolin Lip Balm - Tier 4",
    contents: [
      {
        englishname: "Medical-grade Lanolin Lip Balm",
        swedishname: "Medicinsk Lanolin Läppbalsam",
        englishdescription: "Anhydrous lanolin lip balm in a tube",
        swedishdescription: "Vattenfri lanolin läppbalsam i en tub",
        quantity: 4,
        englishunittype: "tubes",
        swedishunittype: "tubar"
      }
    ],
    details: {
      productId: "88817p4",
      size: "4 tubes",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88817p4-coa.pdf"
    },
    shippingDestinations: usaStates
  },

  // Ceramide & Shea Butter Body Cream - 4 tiers
  {
    id: "88818p1",
    name: "Ceramide & Shea Butter Body Cream - Tier 1",
    description: "Rich, ceramide-containing body cream.",
    swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
    purity: "Premium Kvalitet",
    price: "600 kr",
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 50mg",
    imagedescription: "Product image for Ceramide & Shea Butter Body Cream - Tier 1",
    contents: [
      {
        englishname: "Ceramide & Shea Butter Body Cream",
        swedishname: "Ceramid & Sheasmör Kroppskräm",
        englishdescription: "Rich, ceramide-containing body cream in a jar",
        swedishdescription: "Rik, ceramid-innehållande kroppskräm i en burk",
        quantity: 1,
        englishunittype: "jars",
        swedishunittype: "burkar"
      }
    ],
    details: {
      productId: "88818p1",
      size: "1 jar",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88818p1-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88818p2",
    name: "Ceramide & Shea Butter Body Cream - Tier 2",
    description: "Rich, ceramide-containing body cream.",
    swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
    purity: "Premium Kvalitet",
    price: "1000 kr",
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 100mg",
    imagedescription: "Product image for Ceramide & Shea Butter Body Cream - Tier 2",
    contents: [
      {
        englishname: "Ceramide & Shea Butter Body Cream",
        swedishname: "Ceramid & Sheasmör Kroppskräm",
        englishdescription: "Rich, ceramide-containing body cream in a jar",
        swedishdescription: "Rik, ceramid-innehållande kroppskräm i en burk",
        quantity: 2,
        englishunittype: "jars",
        swedishunittype: "burkar"
      }
    ],
    details: {
      productId: "88818p2",
      size: "2 jars",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88818p2-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88818p3",
    name: "Ceramide & Shea Butter Body Cream - Tier 3",
    description: "Rich, ceramide-containing body cream.",
    swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
    purity: "Premium Kvalitet",
    price: "1900 kr",
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 200mg",
    imagedescription: "Product image for Ceramide & Shea Butter Body Cream - Tier 3",
    contents: [
      {
        englishname: "Ceramide & Shea Butter Body Cream",
        swedishname: "Ceramid & Sheasmör Kroppskräm",
        englishdescription: "Rich, ceramide-containing body cream in a jar",
        swedishdescription: "Rik, ceramid-innehållande kroppskräm i en burk",
        quantity: 3,
        englishunittype: "jars",
        swedishunittype: "burkar"
      }
    ],
    details: {
      productId: "88818p3",
      size: "3 jars",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88818p3-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88818p4",
    name: "Ceramide & Shea Butter Body Cream - Tier 4",
    description: "Rich, ceramide-containing body cream.",
    swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
    purity: "Premium Kvalitet",
    price: "3600 kr",
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 400mg",
    imagedescription: "Product image for Ceramide & Shea Butter Body Cream - Tier 4",
    contents: [
      {
        englishname: "Ceramide & Shea Butter Body Cream",
        swedishname: "Ceramid & Sheasmör Kroppskräm",
        englishdescription: "Rich, ceramide-containing body cream in a jar",
        swedishdescription: "Rik, ceramid-innehållande kroppskräm i en burk",
        quantity: 4,
        englishunittype: "jars",
        swedishunittype: "burkar"
      }
    ],
    details: {
      productId: "88818p4",
      size: "4 jars",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88818p4-coa.pdf"
    },
    shippingDestinations: usaStates
  },

  // Metabolic Hydration Complex - 4 tiers
  {
    id: "88819p1",
    name: "Metabolic Hydration Complex - Tier 1",
    description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
    swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
    purity: "Premium Kvalitet",
    price: "700 kr",
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 1000mg",
    imagedescription: "Product image for Metabolic Hydration Complex - Tier 1",
    contents: [
      {
        englishname: "Metabolic Hydration Complex",
        swedishname: "Metaboliskt Hydreringskomplex",
        englishdescription: "Electrolyte formula with non-stimulant cofactors",
        swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer",
        quantity: 30,
        englishunittype: "servings",
        swedishunittype: "portioner"
      }
    ],
    details: {
      productId: "88819p1",
      size: "30 servings",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88819p1-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88819p2",
    name: "Metabolic Hydration Complex - Tier 2",
    description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
    swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
    purity: "Premium Kvalitet",
    price: "1200 kr",
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 2000mg",
    imagedescription: "Product image for Metabolic Hydration Complex - Tier 2",
    contents: [
      {
        englishname: "Metabolic Hydration Complex",
        swedishname: "Metaboliskt Hydreringskomplex",
        englishdescription: "Electrolyte formula with non-stimulant cofactors",
        swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer",
        quantity: 60,
        englishunittype: "servings",
        swedishunittype: "portioner"
      }
    ],
    details: {
      productId: "88819p2",
      size: "60 servings",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88819p2-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88819p3",
    name: "Metabolic Hydration Complex - Tier 3",
    description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
    swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
    purity: "Premium Kvalitet",
    price: "2000 kr",
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 4000mg",
    imagedescription: "Product image for Metabolic Hydration Complex - Tier 3",
    contents: [
      {
        englishname: "Metabolic Hydration Complex",
        swedishname: "Metaboliskt Hydreringskomplex",
        englishdescription: "Electrolyte formula with non-stimulant cofactors",
        swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      }
    ],
    details: {
      productId: "88819p3",
      size: "90 servings",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88819p3-coa.pdf"
    },
    shippingDestinations: usaStates
  },
  {
    id: "88819p4",
    name: "Metabolic Hydration Complex - Tier 4",
    description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
    swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
    purity: "Premium Kvalitet",
    price: "3700 kr",
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 8000mg",
    imagedescription: "Product image for Metabolic Hydration Complex - Tier 4",
    contents: [
      {
        englishname: "Metabolic Hydration Complex",
        swedishname: "Metaboliskt Hydreringskomplex",
        englishdescription: "Electrolyte formula with non-stimulant cofactors",
        swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer",
        quantity: 120,
        englishunittype: "servings",
        swedishunittype: "portioner"
      }
    ],
    details: {
      productId: "88819p4",
      size: "120 servings",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/88819p4-coa.pdf"
    },
    shippingDestinations: usaStates
  }
];
