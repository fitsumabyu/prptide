import { ShippingDestination } from "@/components/shipping/PreferredDestinations";

// Individual product that exists as a separate item
export interface IndividualProduct {
  id: string;
  name: string;
  description: string;
  swedishdescription: string;
  category: string;
  unitType: string;
  swedishUnitType: string;
  image?: string;
  storage: string;
  coaLink?: string;
}

// Bundle item represents a quantity of an individual product within a bundle
export interface BundleItem {
  individualProduct: IndividualProduct;
  quantity: number;
}

// Product bundle that customers actually purchase
export interface ProductBundle {
  id: string;
  name: string;
  description: string;
  swedishdescription: string;
  purity: string;
  price: number; // Price in SEK
  image: string;
  category: string;
  correlatesto: string;
  imagedescription: string;
  tier: number;
  bundleItems: BundleItem[];
  shippingDestinations?: ShippingDestination[];
}

// Legacy interface - keeping for backward compatibility
export interface ProductContent {
  englishname: string;
  swedishname: string;
  englishdescription: string;
  swedishdescription: string;
  quantity?: number;
  englishunittype?: string;
  swedishunittype?: string;
}

// Legacy interface - keeping for backward compatibility
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

// USA shipping destinations
const usaStates: ShippingDestination[] = [
  { 
    id: 101, 
    name: "California", 
    description: "Available for personal use with proper documentation.",
    productSpecific: true
  },
  { 
    id: 102, 
    name: "New York", 
    description: "Personal use only with state verification.",
    productSpecific: true
  },
  { 
    id: 103, 
    name: "Florida", 
    description: "Limited availability for certified users.",
    productSpecific: true
  }
];

// Individual products that can be part of bundles
export const individualProducts: IndividualProduct[] = [
  {
    id: "hydration-sheet-masks",
    name: "Intensive Hydration Sheet Masks",
    description: "Single-use cosmetic biocellulose masks with ceramides.",
    swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider.",
    category: "Cosmetic",
    unitType: "masks",
    swedishUnitType: "masker",
    image: "/labimages/88815.png",
    storage: "Förvara vid rumstemperatur, undvik direkt solljus",
    coaLink: "/certificates/hydration-sheet-masks-coa.pdf"
  },
  {
    id: "lip-masks",
    name: "Ultra-Hydrating Lip Masks",
    description: "Single-use cosmetic hydrogel lip patches.",
    swedishdescription: "Engångs kosmetiska hydrogel läpplappar.",
    category: "Cosmetic",
    unitType: "masks",
    swedishUnitType: "masker",
    image: "/labimages/88816.png",
    storage: "Förvara vid rumstemperatur, undvik direkt solljus",
    coaLink: "/certificates/lip-masks-coa.pdf"
  },
  {
    id: "lanolin-lip-balm",
    name: "Medical-grade Lanolin Lip Balm",
    description: "Anhydrous lanolin lip balm (cosmetic).",
    swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk).",
    category: "Cosmetic",
    unitType: "tubes",
    swedishUnitType: "tubar",
    image: "/labimages/88817.png",
    storage: "Förvara vid rumstemperatur, undvik direkt solljus",
    coaLink: "/certificates/lanolin-lip-balm-coa.pdf"
  },
  {
    id: "body-cream",
    name: "Ceramide & Shea Butter Body Cream",
    description: "Rich, ceramide-containing body cream.",
    swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
    category: "Cosmetic",
    unitType: "jars",
    swedishUnitType: "burkar",
    image: "/labimages/88818.png",
    storage: "Förvara vid rumstemperatur, undvik direkt solljus",
    coaLink: "/certificates/body-cream-coa.pdf"
  },
  {
    id: "hydration-complex",
    name: "Metabolic Hydration Complex",
    description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
    swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
    category: "Food supplement",
    unitType: "servings",
    swedishUnitType: "portioner",
    image: "/labimages/88819.png",
    storage: "Förvara vid rumstemperatur, undvik direkt solljus",
    coaLink: "/certificates/hydration-complex-coa.pdf"
  },
  {
    id: "herbal-gi-tea",
    name: "Herbal GI Soothing Tea Packs",
    description: "Soothing herbal tea blend with ginger, fennel, and chamomile.",
    swedishdescription: "Lugnande örttesblandning med ingefära, fänkål och kamomill.",
    category: "Tea",
    unitType: "packs",
    swedishUnitType: "paket",
    image: "/labimages/herbal-tea.png",
    storage: "Förvara torrt och svalt",
    coaLink: "/certificates/herbal-gi-tea-coa.pdf"
  },
  {
    id: "electrolyte-ginger-sticks",
    name: "Electrolyte + Ginger Stick Packs",
    description: "Enhanced electrolyte formula with ginger for digestive support.",
    swedishdescription: "Förbättrad elektrolytformel med ingefära för matsmältningsstöd.",
    category: "Food supplement",
    unitType: "packs",
    swedishUnitType: "paket",
    image: "/labimages/ginger-sticks.png",
    storage: "Förvara vid rumstemperatur, undvik fukt",
    coaLink: "/certificates/electrolyte-ginger-sticks-coa.pdf"
  }
];

// Product bundles that customers can purchase
export const productBundles: ProductBundle[] = [
  // Intensive Hydration Sheet Masks - 4 tiers (WITH complementary products)
  {
    id: "88815p1",
    name: "Intensive Hydration Sheet Masks - Tier 1",
    description: "Single-use cosmetic biocellulose masks with ceramides and complementary wellness support.",
    swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider och kompletterande välmåendestöd.",
    purity: "Premium Kvalitet",
    price: 1500,
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 5mg",
    imagedescription: "Product image for Intensive Hydration Sheet Masks - Tier 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-sheet-masks")!,
        quantity: 12
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 12
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 12
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88815p2",
    name: "Intensive Hydration Sheet Masks - Tier 2",
    description: "Single-use cosmetic biocellulose masks with ceramides and complementary wellness support.",
    swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider och kompletterande välmåendestöd.",
    purity: "Premium Kvalitet",
    price: 2500,
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 10mg",
    imagedescription: "Product image for Intensive Hydration Sheet Masks - Tier 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-sheet-masks")!,
        quantity: 24
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 24
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 24
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88815p3",
    name: "Intensive Hydration Sheet Masks - Tier 3",
    description: "Single-use cosmetic biocellulose masks with ceramides and complementary wellness support.",
    swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider och kompletterande välmåendestöd.",
    purity: "Premium Kvalitet",
    price: 4500,
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 20mg",
    imagedescription: "Product image for Intensive Hydration Sheet Masks - Tier 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-sheet-masks")!,
        quantity: 36
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 36
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 36
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88815p4",
    name: "Intensive Hydration Sheet Masks - Tier 4",
    description: "Single-use cosmetic biocellulose masks with ceramides and complementary wellness support.",
    swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider och kompletterande välmåendestöd.",
    purity: "Premium Kvalitet",
    price: 8500,
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 40mg",
    imagedescription: "Product image for Intensive Hydration Sheet Masks - Tier 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-sheet-masks")!,
        quantity: 60
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 60
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 60
      }
    ],
    shippingDestinations: usaStates
  },

  // Ultra-Hydrating Lip Masks - 4 tiers (WITH complementary products)
  {
    id: "88816p1",
    name: "Ultra-Hydrating Lip Masks - Tier 1",
    description: "Single-use cosmetic hydrogel lip patches with complementary digestive support.",
    swedishdescription: "Engångs kosmetiska hydrogel läpplappar med kompletterande matsmältningsstöd.",
    purity: "Premium Kvalitet",
    price: 699,
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 5mg",
    imagedescription: "Product image for Ultra-Hydrating Lip Masks - Tier 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lip-masks")!,
        quantity: 10
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 10
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 10
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88816p2",
    name: "Ultra-Hydrating Lip Masks - Tier 2",
    description: "Single-use cosmetic hydrogel lip patches with complementary digestive support.",
    swedishdescription: "Engångs kosmetiska hydrogel läpplappar med kompletterande matsmältningsstöd.",
    purity: "Premium Kvalitet",
    price: 1398,
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 10mg",
    imagedescription: "Product image for Ultra-Hydrating Lip Masks - Tier 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lip-masks")!,
        quantity: 20
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 20
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 20
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88816p3",
    name: "Ultra-Hydrating Lip Masks - Tier 3",
    description: "Single-use cosmetic hydrogel lip patches with complementary digestive support.",
    swedishdescription: "Engångs kosmetiska hydrogel läpplappar med kompletterande matsmältningsstöd.",
    purity: "Premium Kvalitet",
    price: 2796,
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 20mg",
    imagedescription: "Product image for Ultra-Hydrating Lip Masks - Tier 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lip-masks")!,
        quantity: 30
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 30
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 30
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88816p4",
    name: "Ultra-Hydrating Lip Masks - Tier 4",
    description: "Single-use cosmetic hydrogel lip patches with complementary digestive support.",
    swedishdescription: "Engångs kosmetiska hydrogel läpplappar med kompletterande matsmältningsstöd.",
    purity: "Premium Kvalitet",
    price: 5592,
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 40mg",
    imagedescription: "Product image for Ultra-Hydrating Lip Masks - Tier 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lip-masks")!,
        quantity: 40
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 40
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 40
      }
    ],
    shippingDestinations: usaStates
  },

  // Medical-grade Lanolin Lip Balm - 4 tiers (WITH complementary products)
  {
    id: "88817p1",
    name: "Medical-grade Lanolin Lip Balm - Tier 1",
    description: "Anhydrous lanolin lip balm (cosmetic) with soothing wellness support.",
    swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk) med lugnande välmåendestöd.",
    purity: "Premium Kvalitet",
    price: 1000,
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 4mg",
    imagedescription: "Product image for Medical-grade Lanolin Lip Balm - Tier 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lanolin-lip-balm")!,
        quantity: 1
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 5
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 5
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88817p2",
    name: "Medical-grade Lanolin Lip Balm - Tier 2",
    description: "Anhydrous lanolin lip balm (cosmetic) with soothing wellness support.",
    swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk) med lugnande välmåendestöd.",
    purity: "Premium Kvalitet",
    price: 1800,
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 8mg",
    imagedescription: "Product image for Medical-grade Lanolin Lip Balm - Tier 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lanolin-lip-balm")!,
        quantity: 2
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 10
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 10
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88817p3",
    name: "Medical-grade Lanolin Lip Balm - Tier 3",
    description: "Anhydrous lanolin lip balm (cosmetic) with soothing wellness support.",
    swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk) med lugnande välmåendestöd.",
    purity: "Premium Kvalitet",
    price: 5000,
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 20mg",
    imagedescription: "Product image for Medical-grade Lanolin Lip Balm - Tier 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lanolin-lip-balm")!,
        quantity: 3
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 15
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 15
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88817p4",
    name: "Medical-grade Lanolin Lip Balm - Tier 4",
    description: "Anhydrous lanolin lip balm (cosmetic) with soothing wellness support.",
    swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk) med lugnande välmåendestöd.",
    purity: "Premium Kvalitet",
    price: 9000,
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 40mg",
    imagedescription: "Product image for Medical-grade Lanolin Lip Balm - Tier 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lanolin-lip-balm")!,
        quantity: 4
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 20
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 20
      }
    ],
    shippingDestinations: usaStates
  },

  // Ceramide & Shea Butter Body Cream - 4 tiers (WITH complementary products)
  {
    id: "88818p1",
    name: "Ceramide & Shea Butter Body Cream - Tier 1",
    description: "Rich, ceramide-containing body cream with wellness enhancement.",
    swedishdescription: "Rik, ceramid-innehållande kroppskräm med välmåendeförstärkning.",
    purity: "Premium Kvalitet",
    price: 600,
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 50mg",
    imagedescription: "Product image for Ceramide & Shea Butter Body Cream - Tier 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "body-cream")!,
        quantity: 1
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 7
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 7
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88818p2",
    name: "Ceramide & Shea Butter Body Cream - Tier 2",
    description: "Rich, ceramide-containing body cream.",
    swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
    purity: "Premium Kvalitet",
    price: 1000,
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 100mg",
    imagedescription: "Product image for Ceramide & Shea Butter Body Cream - Tier 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "body-cream")!,
        quantity: 2
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88818p3",
    name: "Ceramide & Shea Butter Body Cream - Tier 3",
    description: "Rich, ceramide-containing body cream.",
    swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
    purity: "Premium Kvalitet",
    price: 1900,
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 200mg",
    imagedescription: "Product image for Ceramide & Shea Butter Body Cream - Tier 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "body-cream")!,
        quantity: 3
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88818p4",
    name: "Ceramide & Shea Butter Body Cream - Tier 4",
    description: "Rich, ceramide-containing body cream.",
    swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
    purity: "Premium Kvalitet",
    price: 3600,
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 400mg",
    imagedescription: "Product image for Ceramide & Shea Butter Body Cream - Tier 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "body-cream")!,
        quantity: 4
      }
    ],
    shippingDestinations: usaStates
  },

  // Metabolic Hydration Complex - 4 tiers (WITH complementary products)
  {
    id: "88819p1",
    name: "Metabolic Hydration Complex - Tier 1",
    description: "Electrolyte formula with non-stimulant cofactors and additional digestive support. No performance claims.",
    swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer och ytterligare matsmältningsstöd. Inga prestationspåståenden.",
    purity: "Premium Kvalitet",
    price: 700,
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 1000mg",
    imagedescription: "Product image for Metabolic Hydration Complex - Tier 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-complex")!,
        quantity: 30
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 30
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 30
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88819p2",
    name: "Metabolic Hydration Complex - Tier 2",
    description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
    swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
    purity: "Premium Kvalitet",
    price: 1200,
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 2000mg",
    imagedescription: "Product image for Metabolic Hydration Complex - Tier 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-complex")!,
        quantity: 60
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88819p3",
    name: "Metabolic Hydration Complex - Tier 3",
    description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
    swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
    purity: "Premium Kvalitet",
    price: 2000,
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 4000mg",
    imagedescription: "Product image for Metabolic Hydration Complex - Tier 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-complex")!,
        quantity: 90
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88819p4",
    name: "Metabolic Hydration Complex - Tier 4",
    description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
    swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
    purity: "Premium Kvalitet",
    price: 3700,
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 8000mg",
    imagedescription: "Product image for Metabolic Hydration Complex - Tier 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-complex")!,
        quantity: 120
      }
    ],
    shippingDestinations: usaStates
  }
];

// Legacy export for backward compatibility
export const products: Product[] = productBundles.map(bundle => ({
  id: bundle.id,
  name: bundle.name,
  description: bundle.description,
  swedishdescription: bundle.swedishdescription,
  purity: bundle.purity,
  price: `${bundle.price} kr`,
  image: bundle.image,
  category: bundle.category,
  correlatesto: bundle.correlatesto,
  imagedescription: bundle.imagedescription,
  contents: bundle.bundleItems.map(item => ({
    englishname: item.individualProduct.name,
    swedishname: item.individualProduct.name, // Could add Swedish names to individual products
    englishdescription: item.individualProduct.description,
    swedishdescription: item.individualProduct.swedishdescription,
    quantity: item.quantity,
    englishunittype: item.individualProduct.unitType,
    swedishunittype: item.individualProduct.swedishUnitType
  })),
  details: {
    productId: bundle.id,
    size: bundle.bundleItems.map(item => `${item.quantity} ${item.individualProduct.unitType}`).join(', '),
    storage: bundle.bundleItems[0]?.individualProduct.storage || "Förvara vid rumstemperatur",
    coaLink: bundle.bundleItems[0]?.individualProduct.coaLink || `/certificates/${bundle.id}-coa.pdf`
  },
  shippingDestinations: bundle.shippingDestinations
}));
