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

// Orderable product bundle that customers actually purchase
export interface OrderableProductBundle {
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
  },
  {
    id: "serum-ampoules",
    name: "Single-Use Serum Ampoules",
    description: "HA 1% + niacinamide 5% + ceramide complex in premium glass vials (2 mL). Daily AM use, travel-safe.",
    swedishdescription: "HA 1% + niacinamid 5% + ceramidkomplex i premium glasflaskor (2 mL). Daglig AM-användning, resekompatibel.",
    category: "Cosmetic",
    unitType: "vials",
    swedishUnitType: "flaskor",
    image: "/labimages/serum-ampoules.png",
    storage: "Förvara vid rumstemperatur, undvik direkt solljus",
    coaLink: "/certificates/serum-ampoules-coa.pdf"
  },
  {
    id: "night-repair-balm-pods",
    name: "Night Repair Balm Pods",
    description: "Occlusive ceramide balm, fragrance-free in convenient pods (3-4g). Nightly seal over actives.",
    swedishdescription: "Ocklusiv ceramidbalsam, parfymfri i bekväma kapslar (3-4g). Nattlig försegling över aktiva ämnen.",
    category: "Cosmetic",
    unitType: "pods",
    swedishUnitType: "kapslar",
    image: "/labimages/night-balm-pods.png",
    storage: "Förvara vid rumstemperatur, undvik direkt solljus",
    coaLink: "/certificates/night-repair-balm-pods-coa.pdf"
  },
  {
    id: "under-eye-patches",
    name: "Under-Eye Hydrogel Patches",
    description: "Caffeine + peptide-free botanicals for under-eye care. Targeted hydration patches.",
    swedishdescription: "Koffein + peptidfria botanicals för ögonvård. Riktade hydreringslappar.",
    category: "Cosmetic",
    unitType: "pairs",
    swedishUnitType: "par",
    image: "/labimages/under-eye-patches.png",
    storage: "Förvara vid rumstemperatur, undvik direkt solljus",
    coaLink: "/certificates/under-eye-patches-coa.pdf"
  }
];

// Orderable product bundles that customers can purchase
export const orderableProductBundles: OrderableProductBundle[] = [
  // Anti-Swell Facial Remedy - 4 tiers
  {
    id: "88815p1",
    name: "Anti-Swell Facial Remedy 1",
    description: "Advanced facial treatment system with hydration masks, under-eye care, and serum enhancement.",
    swedishdescription: "Avancerat ansiktsbehandlingssystem med hydrateringsmasker, ögonvård och serumförstärkning.",
    purity: "Premium Kvalitet",
    price: 1500,
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 5mg",
    imagedescription: "Product image for Anti-Swell Facial Remedy 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-sheet-masks")!,
        quantity: 10
      },
      {
        individualProduct: individualProducts.find(p => p.id === "under-eye-patches")!,
        quantity: 10
      },
      {
        individualProduct: individualProducts.find(p => p.id === "serum-ampoules")!,
        quantity: 10
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88815p2",
    name: "Anti-Swell Facial Remedy 2",
    description: "Advanced facial treatment system with hydration masks, under-eye care, and serum enhancement.",
    swedishdescription: "Avancerat ansiktsbehandlingssystem med hydrateringsmasker, ögonvård och serumförstärkning.",
    purity: "Premium Kvalitet",
    price: 2500,
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 10mg",
    imagedescription: "Product image for Anti-Swell Facial Remedy 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-sheet-masks")!,
        quantity: 20
      },
      {
        individualProduct: individualProducts.find(p => p.id === "under-eye-patches")!,
        quantity: 20
      },
      {
        individualProduct: individualProducts.find(p => p.id === "serum-ampoules")!,
        quantity: 20
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88815p3",
    name: "Anti-Swell Facial Remedy 3",
    description: "Advanced facial treatment system with hydration masks, under-eye care, and serum enhancement.",
    swedishdescription: "Avancerat ansiktsbehandlingssystem med hydrateringsmasker, ögonvård och serumförstärkning.",
    purity: "Premium Kvalitet",
    price: 4500,
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 20mg",
    imagedescription: "Product image for Anti-Swell Facial Remedy 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-sheet-masks")!,
        quantity: 40
      },
      {
        individualProduct: individualProducts.find(p => p.id === "under-eye-patches")!,
        quantity: 40
      },
      {
        individualProduct: individualProducts.find(p => p.id === "serum-ampoules")!,
        quantity: 40
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88815p4",
    name: "Anti-Swell Facial Remedy 4",
    description: "Advanced facial treatment system with hydration masks, under-eye care, and serum enhancement.",
    swedishdescription: "Avancerat ansiktsbehandlingssystem med hydrateringsmasker, ögonvård och serumförstärkning.",
    purity: "Premium Kvalitet",
    price: 8500,
    image: "/labimages/88815.png",
    category: "Cosmetic",
    correlatesto: "Semaglutide 40mg",
    imagedescription: "Product image for Anti-Swell Facial Remedy 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-sheet-masks")!,
        quantity: 80
      },
      {
        individualProduct: individualProducts.find(p => p.id === "under-eye-patches")!,
        quantity: 80
      },
      {
        individualProduct: individualProducts.find(p => p.id === "serum-ampoules")!,
        quantity: 80
      }
    ],
    shippingDestinations: usaStates
  },

  // Facial Hydro Focus - 4 tiers
  {
    id: "88816p1",
    name: "Facial Hydro Focus 1",
    description: "Intensive lip hydration system with masks and overnight repair treatment.",
    swedishdescription: "Intensivt läpphydreringssystem med masker och nattlig reparationsbehandling.",
    purity: "Premium Kvalitet",
    price: 699,
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 5mg",
    imagedescription: "Product image for Facial Hydro Focus 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lip-masks")!,
        quantity: 10
      },
      {
        individualProduct: individualProducts.find(p => p.id === "night-repair-balm-pods")!,
        quantity: 10
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88816p2",
    name: "Facial Hydro Focus 2",
    description: "Intensive lip hydration system with masks and overnight repair treatment.",
    swedishdescription: "Intensivt läpphydreringssystem med masker och nattlig reparationsbehandling.",
    purity: "Premium Kvalitet",
    price: 1398,
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 10mg",
    imagedescription: "Product image for Facial Hydro Focus 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lip-masks")!,
        quantity: 20
      },
      {
        individualProduct: individualProducts.find(p => p.id === "night-repair-balm-pods")!,
        quantity: 20
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88816p3",
    name: "Facial Hydro Focus 3",
    description: "Intensive lip hydration system with masks and overnight repair treatment.",
    swedishdescription: "Intensivt läpphydreringssystem med masker och nattlig reparationsbehandling.",
    purity: "Premium Kvalitet",
    price: 2796,
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 20mg",
    imagedescription: "Product image for Facial Hydro Focus 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lip-masks")!,
        quantity: 40
      },
      {
        individualProduct: individualProducts.find(p => p.id === "night-repair-balm-pods")!,
        quantity: 40
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88816p4",
    name: "Facial Hydro Focus 4",
    description: "Intensive lip hydration system with masks and overnight repair treatment.",
    swedishdescription: "Intensivt läpphydreringssystem med masker och nattlig reparationsbehandling.",
    purity: "Premium Kvalitet",
    price: 5592,
    image: "/labimages/88816.png",
    category: "Cosmetic",
    correlatesto: "Tirzepatide 40mg",
    imagedescription: "Product image for Facial Hydro Focus 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lip-masks")!,
        quantity: 80
      },
      {
        individualProduct: individualProducts.find(p => p.id === "night-repair-balm-pods")!,
        quantity: 80
      }
    ],
    shippingDestinations: usaStates
  },

  // Destressing Recovery - 4 tiers
  {
    id: "88817p1",
    name: "Destressing Recovery 1",
    description: "Complete wellness recovery system with lip care, soothing tea, and digestive support.",
    swedishdescription: "Komplett välmående återhämtningssystem med läppvård, lugnande te och matsmältningsstöd.",
    purity: "Premium Kvalitet",
    price: 1000,
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 4mg",
    imagedescription: "Product image for Destressing Recovery 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lanolin-lip-balm")!,
        quantity: 4
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 8
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 8
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88817p2",
    name: "Destressing Recovery 2",
    description: "Complete wellness recovery system with lip care, soothing tea, and digestive support.",
    swedishdescription: "Komplett välmående återhämtningssystem med läppvård, lugnande te och matsmältningsstöd.",
    purity: "Premium Kvalitet",
    price: 1800,
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 8mg",
    imagedescription: "Product image for Destressing Recovery 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lanolin-lip-balm")!,
        quantity: 8
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 16
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 16
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88817p3",
    name: "Destressing Recovery 3",
    description: "Complete wellness recovery system with lip care, soothing tea, and digestive support.",
    swedishdescription: "Komplett välmående återhämtningssystem med läppvård, lugnande te och matsmältningsstöd.",
    purity: "Premium Kvalitet",
    price: 5000,
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 20mg",
    imagedescription: "Product image for Destressing Recovery 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lanolin-lip-balm")!,
        quantity: 16
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 32
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 32
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88817p4",
    name: "Destressing Recovery 4",
    description: "Complete wellness recovery system with lip care, soothing tea, and digestive support.",
    swedishdescription: "Komplett välmående återhämtningssystem med läppvård, lugnande te och matsmältningsstöd.",
    purity: "Premium Kvalitet",
    price: 9000,
    image: "/labimages/88817.png",
    category: "Cosmetic",
    correlatesto: "Retatrutide 40mg",
    imagedescription: "Product image for Destressing Recovery 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "lanolin-lip-balm")!,
        quantity: 32
      },
      {
        individualProduct: individualProducts.find(p => p.id === "herbal-gi-tea")!,
        quantity: 64
      },
      {
        individualProduct: individualProducts.find(p => p.id === "electrolyte-ginger-sticks")!,
        quantity: 64
      }
    ],
    shippingDestinations: usaStates
  },

  // Skin Revival Recovery - 4 tiers
  {
    id: "88818p1",
    name: "Skin Revival Recovery 1",
    description: "Premium body cream for comprehensive skin restoration and nourishment.",
    swedishdescription: "Premium kroppskräm för omfattande hudåterställning och näring.",
    purity: "Premium Kvalitet",
    price: 600,
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 50mg",
    imagedescription: "Product image for Skin Revival Recovery 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "body-cream")!,
        quantity: 2
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88818p2",
    name: "Skin Revival Recovery 2",
    description: "Premium body cream for comprehensive skin restoration and nourishment.",
    swedishdescription: "Premium kroppskräm för omfattande hudåterställning och näring.",
    purity: "Premium Kvalitet",
    price: 1000,
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 100mg",
    imagedescription: "Product image for Skin Revival Recovery 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "body-cream")!,
        quantity: 4
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88818p3",
    name: "Skin Revival Recovery 3",
    description: "Premium body cream for comprehensive skin restoration and nourishment.",
    swedishdescription: "Premium kroppskräm för omfattande hudåterställning och näring.",
    purity: "Premium Kvalitet",
    price: 1900,
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 200mg",
    imagedescription: "Product image for Skin Revival Recovery 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "body-cream")!,
        quantity: 8
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88818p4",
    name: "Skin Revival Recovery 4",
    description: "Premium body cream for comprehensive skin restoration and nourishment.",
    swedishdescription: "Premium kroppskräm för omfattande hudåterställning och näring.",
    purity: "Premium Kvalitet",
    price: 3600,
    image: "/labimages/88818.png",
    category: "Cosmetic",
    correlatesto: "GHK-Cu 400mg",
    imagedescription: "Product image for Skin Revival Recovery 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "body-cream")!,
        quantity: 16
      }
    ],
    shippingDestinations: usaStates
  },

  // Electrolyte Salt GI Biome Complex - 4 tiers
  {
    id: "88819p1",
    name: "Electrolyte Salt GI Biome Complex 1",
    description: "Advanced electrolyte and digestive support formula for optimal hydration and gut health.",
    swedishdescription: "Avancerad elektrolyt- och matsmältningsstödformel för optimal hydrering och tarmhälsa.",
    purity: "Premium Kvalitet",
    price: 700,
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 1000mg",
    imagedescription: "Product image for Electrolyte Salt GI Biome Complex 1",
    tier: 1,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-complex")!,
        quantity: 3
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88819p2",
    name: "Electrolyte Salt GI Biome Complex 2",
    description: "Advanced electrolyte and digestive support formula for optimal hydration and gut health.",
    swedishdescription: "Avancerad elektrolyt- och matsmältningsstödformel för optimal hydrering och tarmhälsa.",
    purity: "Premium Kvalitet",
    price: 1200,
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 2000mg",
    imagedescription: "Product image for Electrolyte Salt GI Biome Complex 2",
    tier: 2,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-complex")!,
        quantity: 6
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88819p3",
    name: "Electrolyte Salt GI Biome Complex 3",
    description: "Advanced electrolyte and digestive support formula for optimal hydration and gut health.",
    swedishdescription: "Avancerad elektrolyt- och matsmältningsstödformel för optimal hydrering och tarmhälsa.",
    purity: "Premium Kvalitet",
    price: 2000,
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 4000mg",
    imagedescription: "Product image for Electrolyte Salt GI Biome Complex 3",
    tier: 3,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-complex")!,
        quantity: 12
      }
    ],
    shippingDestinations: usaStates
  },
  {
    id: "88819p4",
    name: "Electrolyte Salt GI Biome Complex 4",
    description: "Advanced electrolyte and digestive support formula for optimal hydration and gut health.",
    swedishdescription: "Avancerad elektrolyt- och matsmältningsstödformel för optimal hydrering och tarmhälsa.",
    purity: "Premium Kvalitet",
    price: 3700,
    image: "/labimages/88819.png",
    category: "Food supplement",
    correlatesto: "Roaccutan 8000mg",
    imagedescription: "Product image for Electrolyte Salt GI Biome Complex 4",
    tier: 4,
    bundleItems: [
      {
        individualProduct: individualProducts.find(p => p.id === "hydration-complex")!,
        quantity: 24
      }
    ],
    shippingDestinations: usaStates
  }
];

// Legacy export for backward compatibility
export const products: Product[] = orderableProductBundles.map(bundle => ({
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