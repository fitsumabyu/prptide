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

export const products: Product[] = [
  // Metabolisk Integritetsprotokoll Kits
  {
    id: "88815p1",
    name: "Metabolisk Integritetsprotokoll - Fas I",
    description: "Correlated to Semaglutide. This protocol provides a complete nutritional and topical support system to counteract the primary side effects of rapid weight loss, focusing on lean muscle preservation, GI function, and dermal integrity.",
    purity: "Premium Kvalitet",
    price: "1500 kr",
    image: "/labimages/88815p1.png",
    category: "Metabolisk Integritetsprotokoll",
    correlatesto: "Semaglutide 5mg",
    imagedescription: "A clean, eye-level product group shot on a light grey stone surface. One large matte white plastic canister, one amber glass bottle with capsules, one clear glass dropper bottle, and one small retail box containing stick-pack sachets. All packaging is minimalist with no labels. Bright, even studio lighting.",
    contents: [
      {
        englishname: "Sarcopenia Defense Matrix",
        swedishname: "Sarkopeni Försvar Matrix",
        englishdescription: "EAA, HMB, and Creatine powder blend",
        swedishdescription: "EAA, HMB och Kreatin pulverblandning",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Prokinetic GI Formula",
        swedishname: "Prokinetisk GI Formel",
        englishdescription: "Capsule-based Digestive Enzymes and herbal prokinetics",
        swedishdescription: "Kapselbaserade matsmältningsenzymer och örtprokinetika",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Dermal Volume Serum",
        swedishname: "Dermal Volym Serum",
        englishdescription: "A topical Hyaluronic Acid + Matrixyl 3000 peptide complex",
        swedishdescription: "Ett topikalt Hyaluronsyra + Matrixyl 3000 peptidkomplex",
        quantity: 30,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Electrolyte Hydration Complex",
        swedishname: "Elektrolyt Hydreringskomplex",
        englishdescription: "Single-serving electrolyte powder sachets",
        swedishdescription: "Elektrolytpulver i portionsförpackningar",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      }
    ],
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
    description: "Correlated to Semaglutide. This protocol enhances the foundational support with intensive skin nutrition and hair support, addressing the increased aesthetic concerns of a higher dose regimen.",
    purity: "Premium Kvalitet",
    price: "2500 kr",
    image: "/labimages/88815p2.png",
    category: "Metabolisk Integritetsprotokoll",
    correlatesto: "Semaglutide 10mg",
    imagedescription: "A neat, organized flat lay on a clean white laboratory countertop. Two large matte white canisters, one amber glass capsule bottle, one clear glass dropper bottle, a box of electrolyte sachets, and a second, flat retail box designed to hold sheet masks. Soft, diffused overhead light.",
    contents: [
      {
        englishname: "Sarcopenia Defense Matrix",
        swedishname: "Sarkopeni Försvar Matrix",
        englishdescription: "EAA, HMB, and Creatine powder blend",
        swedishdescription: "EAA, HMB och Kreatin pulverblandning",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Prokinetic GI Formula",
        swedishname: "Prokinetisk GI Formel",
        englishdescription: "Capsule-based Digestive Enzymes and herbal prokinetics",
        swedishdescription: "Kapselbaserade matsmältningsenzymer och örtprokinetika",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Dermal Volume Serum",
        swedishname: "Dermal Volym Serum",
        englishdescription: "A topical Hyaluronic Acid + Matrixyl 3000 peptide complex",
        swedishdescription: "Ett topikalt Hyaluronsyra + Matrixyl 3000 peptidkomplex",
        quantity: 30,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Electrolyte Hydration Complex",
        swedishname: "Elektrolyt Hydreringskomplex",
        englishdescription: "Single-serving electrolyte powder sachets",
        swedishdescription: "Elektrolytpulver i portionsförpackningar",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Hydrolyzed Marine Collagen",
        swedishname: "Hydrolyserat Marint Kollagen",
        englishdescription: "Unflavored powder with added Biotin and Silica",
        swedishdescription: "Smakneutralt pulver med tillsatt Biotin och Kiseldioxid",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Intensive Hydration Sheet Masks",
        swedishname: "Intensiva Hydrering Ansiktsmasker",
        englishdescription: "Single-use biocellulose masks with ceramides",
        swedishdescription: "Engångs biocellulosa masker med ceramider",
        quantity: 12,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
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
    description: "Correlated to Semaglutide. For intensive, high-dose protocols, this kit adds comprehensive support for hepatic function and stress response, acknowledging the increased physiological load on the body.",
    purity: "Premium Kvalitet",
    price: "4500 kr",
    image: "/labimages/88815p3.png",
    category: "Metabolisk Integritetsprotokoll",
    correlatesto: "Semaglutide 20mg",
    imagedescription: "An eye-level product group shot on a light grey stone surface. The set includes two white canisters, two amber glass capsule bottles, one clear dropper bottle, one dark glass tincture bottle, and two different retail boxes for sachets and masks. All packaging is minimalist and cohesive.",
    contents: [
      {
        englishname: "Sarcopenia Defense Matrix",
        swedishname: "Sarkopeni Försvar Matrix",
        englishdescription: "EAA, HMB, and Creatine powder blend",
        swedishdescription: "EAA, HMB och Kreatin pulverblandning",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Prokinetic GI Formula",
        swedishname: "Prokinetisk GI Formel",
        englishdescription: "Capsule-based Digestive Enzymes and herbal prokinetics",
        swedishdescription: "Kapselbaserade matsmältningsenzymer och örtprokinetika",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Dermal Volume Serum",
        swedishname: "Dermal Volym Serum",
        englishdescription: "A topical Hyaluronic Acid + Matrixyl 3000 peptide complex",
        swedishdescription: "Ett topikalt Hyaluronsyra + Matrixyl 3000 peptidkomplex",
        quantity: 30,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Electrolyte Hydration Complex",
        swedishname: "Elektrolyt Hydreringskomplex",
        englishdescription: "Single-serving electrolyte powder sachets",
        swedishdescription: "Elektrolytpulver i portionsförpackningar",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Hydrolyzed Marine Collagen",
        swedishname: "Hydrolyserat Marint Kollagen",
        englishdescription: "Unflavored powder with added Biotin and Silica",
        swedishdescription: "Smakneutralt pulver med tillsatt Biotin och Kiseldioxid",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Intensive Hydration Sheet Masks",
        swedishname: "Intensiva Hydrering Ansiktsmasker",
        englishdescription: "Single-use biocellulose masks with ceramides",
        swedishdescription: "Engångs biocellulosa masker med ceramider",
        quantity: 12,
        englishunittype: "masks",
        swedishunittype: "masker"
      },
      {
        englishname: "Hepatic Support Complex",
        swedishname: "Hepatiskt Stödkomplex",
        englishdescription: "TUDCA + Milk Thistle capsules",
        swedishdescription: "TUDCA + Mjölktistel kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Liposomal Vitamin C Gel",
        swedishname: "Liposomal Vitamin C Gel",
        englishdescription: "High-absorption Vitamin C in single-serving gel packs",
        swedishdescription: "Högabsorberande Vitamin C i portionsförpackade gel",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Adaptogenic Stress Tincture",
        swedishname: "Adaptogen Stress Tinktur",
        englishdescription: "A sublingual liquid blend of Ashwagandha and L-Theanine",
        swedishdescription: "En sublingual vätskeblandning av Ashwagandha och L-Theanin",
        quantity: 60,
        englishunittype: "ml",
        swedishunittype: "ml"
      }
    ],
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
    description: "Correlated to Semaglutide. The Apex protocol is a complete, multi-month consumable wellness system, providing an overwhelming abundance of nutritional and cosmeceutical support for maximum-intensity regimens.",
    purity: "Premium Kvalitet",
    price: "8500 kr",
    image: "/labimages/88815p4.png",
    category: "Metabolisk Integritetsprotokoll",
    correlatesto: "Semaglutide 40mg",
    imagedescription: "A large, impressive flat lay covering a white marble surface. An entire system of matching containers: three large white canisters, three amber glass capsule bottles, one dark glass tincture bottle, one clear glass dropper bottle, and four different retail boxes for masks, sachets, and small glass ampoules. The sheer quantity communicates immense value.",
    contents: [
      {
        englishname: "Sarcopenia Defense Matrix",
        swedishname: "Sarkopeni Försvar Matrix",
        englishdescription: "EAA, HMB, and Creatine powder blend",
        swedishdescription: "EAA, HMB och Kreatin pulverblandning",
        quantity: 180,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Prokinetic GI Formula",
        swedishname: "Prokinetisk GI Formel",
        englishdescription: "Capsule-based Digestive Enzymes and herbal prokinetics",
        swedishdescription: "Kapselbaserade matsmältningsenzymer och örtprokinetika",
        quantity: 180,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Dermal Volume Serum",
        swedishname: "Dermal Volym Serum",
        englishdescription: "A topical Hyaluronic Acid + Matrixyl 3000 peptide complex",
        swedishdescription: "Ett topikalt Hyaluronsyra + Matrixyl 3000 peptidkomplex",
        quantity: 60,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Electrolyte Hydration Complex",
        swedishname: "Elektrolyt Hydreringskomplex",
        englishdescription: "Single-serving electrolyte powder sachets",
        swedishdescription: "Elektrolytpulver i portionsförpackningar",
        quantity: 180,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Hydrolyzed Marine Collagen",
        swedishname: "Hydrolyserat Marint Kollagen",
        englishdescription: "Unflavored powder with added Biotin and Silica",
        swedishdescription: "Smakneutralt pulver med tillsatt Biotin och Kiseldioxid",
        quantity: 180,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Intensive Hydration Sheet Masks",
        swedishname: "Intensiva Hydrering Ansiktsmasker",
        englishdescription: "Single-use biocellulose masks with ceramides",
        swedishdescription: "Engångs biocellulosa masker med ceramider",
        quantity: 24,
        englishunittype: "masks",
        swedishunittype: "masker"
      },
      {
        englishname: "Hepatic Support Complex",
        swedishname: "Hepatiskt Stödkomplex",
        englishdescription: "TUDCA + Milk Thistle capsules",
        swedishdescription: "TUDCA + Mjölktistel kapslar",
        quantity: 180,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Liposomal Vitamin C Gel",
        swedishname: "Liposomal Vitamin C Gel",
        englishdescription: "High-absorption Vitamin C in single-serving gel packs",
        swedishdescription: "Högabsorberande Vitamin C i portionsförpackade gel",
        quantity: 180,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Adaptogenic Stress Tincture",
        swedishname: "Adaptogen Stress Tinktur",
        englishdescription: "A sublingual liquid blend of Ashwagandha and L-Theanine",
        swedishdescription: "En sublingual vätskeblandning av Ashwagandha och L-Theanin",
        quantity: 120,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "7-Day Dermal Ampoule Course",
        swedishname: "7-dagars Dermal Ampullkur",
        englishdescription: "A concentrated, single-use glass ampoule treatment for skin revitalization",
        swedishdescription: "En koncentrerad, engångs glasampull behandling för hudrevitalisering",
        quantity: 4,
        englishunittype: "sets",
        swedishunittype: "set"
      },
      {
        englishname: "Nightly Gut Repair Formula",
        swedishname: "Nattlig Tarmreparations Formel",
        englishdescription: "A separate powder blend of L-Glutamine, Zinc Carnosine, and probiotics",
        swedishdescription: "En separat pulverblandning av L-Glutamin, Zink Karnosin och probiotika",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      }
    ],
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
    description: "Correlated to Tirzepatide. This foundational kit addresses the key challenges of dual-agonist therapy: supporting lean mass retention and ensuring proper nutrient absorption despite reduced appetite.",
    purity: "Forskningskvalitet",
    price: "699 kr",
    image: "/labimages/88816p1.png",
    category: "Kroppskomposition Stack",
    correlatesto: "Tirzepatide 5mg",
    imagedescription: "A simple, eye-level shot of three products on a sterile white countertop. Two large, matte white plastic canisters with screw-on lids, and one medium-sized amber glass bottle with a simple black screw-on cap. All containers are label-free.",
    contents: [
      {
        englishname: "Sarcopenia Defense Matrix",
        swedishname: "Sarkopeni Försvar Matrix",
        englishdescription: "EAA, HMB, and Creatine powder blend",
        swedishdescription: "EAA, HMB och Kreatin pulverblandning",
        quantity: 30,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Prokinetic GI Formula",
        swedishname: "Prokinetisk GI Formel",
        englishdescription: "Digestive Enzyme and herbal prokinetic capsules",
        swedishdescription: "Matsmältningsenzymer och örtprokinetiska kapslar",
        quantity: 30,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Micronutrient Balance",
        swedishname: "Mikronäringsämnes Balans",
        englishdescription: "A comprehensive electrolyte powder",
        swedishdescription: "Ett omfattande elektrolytpulver",
        quantity: 30,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      }
    ],
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
    description: "Correlated to Tirzepatide. This stack accelerates results by adding dermal support consumables and crucial protein building blocks to combat aesthetic side effects like skin laxity.",
    purity: "Forskningskvalitet",
    price: "1398 kr",
    image: "/labimages/88816p2.png",
    category: "Kroppskomposition Stack",
    correlatesto: "Tirzepatide 10mg",
    imagedescription: "A neat flat lay on a light grey concrete surface. Three large matte white canisters and one amber glass capsule bottle. Next to them is a simple, clean white plastic handle with a detachable, clear-cased microneedling roller head.",
    contents: [
      {
        englishname: "Sarcopenia Defense Matrix",
        swedishname: "Sarkopeni Försvar Matrix",
        englishdescription: "EAA, HMB, and Creatine powder blend",
        swedishdescription: "EAA, HMB och Kreatin pulverblandning",
        quantity: 60,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Prokinetic GI Formula",
        swedishname: "Prokinetisk GI Formel",
        englishdescription: "Digestive Enzyme and herbal prokinetic capsules",
        swedishdescription: "Matsmältningsenzymer och örtprokinetiska kapslar",
        quantity: 60,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Micronutrient Balance",
        swedishname: "Mikronäringsämnes Balans",
        englishdescription: "A comprehensive electrolyte powder",
        swedishdescription: "Ett omfattande elektrolytpulver",
        quantity: 60,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Hydrolyzed Marine Collagen",
        swedishname: "Hydrolyserat Marint Kollagen",
        englishdescription: "Unflavored powder for skin and joint support",
        swedishdescription: "Smakneutralt pulver för hud- och ledstöd",
        quantity: 60,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Bio-Device (Inexpensive/Exhaustible)",
        swedishname: "Bio-Enhet (Billig/Förbrukningsbar)",
        englishdescription: "Cosmetic Microneedling Roller (0.25mm), recommended for replacement every 60 days",
        swedishdescription: "Kosmetisk Mikronålsrulle (0.25mm), rekommenderas för utbyte var 60:e dag",
        quantity: 1,
        englishunittype: "device",
        swedishunittype: "enhet"
      }
    ],
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
    description: "Correlated to Tirzepatide. This advanced stack introduces intensive topical treatments and hepatic support, providing a more holistic approach for users on a prolonged or high-dose regimen.",
    purity: "Forskningskvalitet",
    price: "2796 kr",
    image: "/labimages/88816p3.png",
    category: "Kroppskomposition Stack",
    correlatesto: "Tirzepatide 20mg",
    imagedescription: "An organized group shot on a white laboratory countertop. Three large matte white canisters, two amber glass capsule bottles, one microneedling roller, and one sleek retail box for sheet masks. All items are label-free.",
    contents: [
      {
        englishname: "Sarcopenia Defense Matrix",
        swedishname: "Sarkopeni Försvar Matrix",
        englishdescription: "EAA, HMB, and Creatine powder blend",
        swedishdescription: "EAA, HMB och Kreatin pulverblandning",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Prokinetic GI Formula",
        swedishname: "Prokinetisk GI Formel",
        englishdescription: "Digestive Enzyme and herbal prokinetic capsules",
        swedishdescription: "Matsmältningsenzymer och örtprokinetiska kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Micronutrient Balance",
        swedishname: "Mikronäringsämnes Balans",
        englishdescription: "A comprehensive electrolyte powder",
        swedishdescription: "Ett omfattande elektrolytpulver",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Hydrolyzed Marine Collagen",
        swedishname: "Hydrolyserat Marint Kollagen",
        englishdescription: "Unflavored powder for skin and joint support",
        swedishdescription: "Smakneutralt pulver för hud- och ledstöd",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Bio-Device (Inexpensive/Exhaustible)",
        swedishname: "Bio-Enhet (Billig/Förbrukningsbar)",
        englishdescription: "Cosmetic Microneedling Roller (0.25mm), recommended for replacement every 60 days",
        swedishdescription: "Kosmetisk Mikronålsrulle (0.25mm), rekommenderas för utbyte var 60:e dag",
        quantity: 1,
        englishunittype: "device",
        swedishunittype: "enhet"
      },
      {
        englishname: "Hepatic Support Complex",
        swedishname: "Hepatiskt Stödkomplex",
        englishdescription: "TUDCA + Milk Thistle capsules",
        swedishdescription: "TUDCA + Mjölktistel kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Intensive Hydration Sheet Masks",
        swedishname: "Intensiva Hydrering Ansiktsmasker",
        englishdescription: "Single-use biocellulose masks",
        swedishdescription: "Engångs biocellulosa masker",
        quantity: 12,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
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
    description: "Correlated to Tirzepatide. The Apex stack is a complete consumable system for the serious bio-optimizer, providing multi-pathway support for cellular energy, physical recovery, and aesthetic maintenance.",
    purity: "Forskningskvalitet",
    price: "5592 kr",
    image: "/labimages/88816p4.png",
    category: "Kroppskomposition Stack",
    correlatesto: "Tirzepatide 40mg",
    imagedescription: "A comprehensive product line photo on a light grey stone surface. An array of consumables: three matte white canisters, two amber glass capsule bottles, one dark glass tincture bottle, and two different retail boxes for masks and sachets. One microneedling roller is also present.",
    contents: [
      {
        englishname: "Sarcopenia Defense Matrix",
        swedishname: "Sarkopeni Försvar Matrix",
        englishdescription: "EAA, HMB, and Creatine powder blend",
        swedishdescription: "EAA, HMB och Kreatin pulverblandning",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Prokinetic GI Formula",
        swedishname: "Prokinetisk GI Formel",
        englishdescription: "Digestive Enzyme and herbal prokinetic capsules",
        swedishdescription: "Matsmältningsenzymer och örtprokinetiska kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Micronutrient Balance",
        swedishname: "Mikronäringsämnes Balans",
        englishdescription: "A comprehensive electrolyte powder",
        swedishdescription: "Ett omfattande elektrolytpulver",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Hydrolyzed Marine Collagen",
        swedishname: "Hydrolyserat Marint Kollagen",
        englishdescription: "Unflavored powder for skin and joint support",
        swedishdescription: "Smakneutralt pulver för hud- och ledstöd",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Bio-Device (Inexpensive/Exhaustible)",
        swedishname: "Bio-Enhet (Billig/Förbrukningsbar)",
        englishdescription: "Cosmetic Microneedling Roller (0.25mm), recommended for replacement every 60 days",
        swedishdescription: "Kosmetisk Mikronålsrulle (0.25mm), rekommenderas för utbyte var 60:e dag",
        quantity: 1,
        englishunittype: "device",
        swedishunittype: "enhet"
      },
      {
        englishname: "Hepatic Support Complex",
        swedishname: "Hepatiskt Stödkomplex",
        englishdescription: "TUDCA + Milk Thistle capsules",
        swedishdescription: "TUDCA + Mjölktistel kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Intensive Hydration Sheet Masks",
        swedishname: "Intensiva Hydrering Ansiktsmasker",
        englishdescription: "Single-use biocellulose masks",
        swedishdescription: "Engångs biocellulosa masker",
        quantity: 12,
        englishunittype: "masks",
        swedishunittype: "masker"
      },
      {
        englishname: "Liposomal Glutathione Gel",
        swedishname: "Liposomal Glutation Gel",
        englishdescription: "A high-bioavailability antioxidant in single-serving sachets",
        swedishdescription: "En hög-biotillgänglig antioxidant i portionsförpackningar",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Sleep & Recovery Tincture",
        swedishname: "Sömn & Återhämtnings Tinktur",
        englishdescription: "A sublingual blend of Magnesium, Glycine, and herbal extracts",
        swedishdescription: "En sublingual blandning av Magnesium, Glycin och örtextrakt",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      }
    ],
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
    description: "Correlated to Retatrutide. This foundational protocol supports the advanced tri-agonist mechanism by providing comprehensive metabolic optimization, addressing the complex physiological demands of three-pathway hormone modulation.",
    purity: "Premium Kvalitet",
    price: "1000 kr",
    image: "/labimages/88817p1.png",
    category: "Tri-Faktor Metabolisk Protokoll",
    correlatesto: "Retatrutide 5mg",
    imagedescription: "A sophisticated product arrangement on a clean white laboratory surface. Three large matte white canisters, two amber glass capsule bottles, one clear glass dropper bottle, and one sleek retail box. All containers feature minimalist, clinical design with no visible labels.",
    contents: [
      {
        englishname: "Advanced Metabolic Support Matrix",
        swedishname: "Avancerad Metabolisk Stöd Matrix",
        englishdescription: "Triple-pathway metabolic enhancement powder with specialized amino acid complex",
        swedishdescription: "Trippelvägs metabolisk förstärkningspulver med specialiserat aminosyrakomplex",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Tri-Factor GI Optimization Formula",
        swedishname: "Tri-Faktor GI Optimeringsformel",
        englishdescription: "Enhanced digestive enzyme complex with gastroprotective compounds",
        swedishdescription: "Förstärkt matsmältningsenzymkomplex med gastroprotektiva föreningar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Metabolic Hydration Complex",
        swedishname: "Metaboliskt Hydreringskomplex",
        englishdescription: "Advanced electrolyte formula with metabolic cofactors",
        swedishdescription: "Avancerad elektrolytformel med metaboliska kofaktorer",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      }
    ],
    details: {
      productId: "88817p1",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/tri-factor-metabolic-protocol-i-coa.pdf"
    }
  },
  {
    id: "88817p2",
    name: "Tri-Faktor Metabolisk Protokoll - II",
    description: "Correlated to Retatrutide. This enhanced protocol adds comprehensive hepatic and metabolic support, recognizing the increased physiological complexity of tri-agonist therapy and its demands on multiple organ systems.",
    purity: "Premium Kvalitet",
    price: "1800 kr",
    image: "/labimages/88817p2.png",
    category: "Tri-Faktor Metabolisk Protokoll",
    correlatesto: "Retatrutide 10mg",
    imagedescription: "A professional arrangement on a light grey stone surface. Four large matte white canisters, two amber glass capsule bottles, one clear glass dropper bottle, and two retail boxes for specialized supplements. Clean, clinical lighting emphasizes the premium quality.",
    contents: [
      {
        englishname: "Advanced Metabolic Support Matrix",
        swedishname: "Avancerad Metabolisk Stöd Matrix",
        englishdescription: "Triple-pathway metabolic enhancement powder with specialized amino acid complex",
        swedishdescription: "Trippelvägs metabolisk förstärkningspulver med specialiserat aminosyrakomplex",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Tri-Factor GI Optimization Formula",
        swedishname: "Tri-Faktor GI Optimeringsformel",
        englishdescription: "Enhanced digestive enzyme complex with gastroprotective compounds",
        swedishdescription: "Förstärkt matsmältningsenzymkomplex med gastroprotektiva föreningar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Metabolic Hydration Complex",
        swedishname: "Metaboliskt Hydreringskomplex",
        englishdescription: "Advanced electrolyte formula with metabolic cofactors",
        swedishdescription: "Avancerad elektrolytformel med metaboliska kofaktorer",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Hepatic Optimization Complex",
        swedishname: "Hepatiskt Optimeringskomplex",
        englishdescription: "Advanced liver support with TUDCA and metabolic cofactors",
        swedishdescription: "Avancerat leverstöd med TUDCA och metaboliska kofaktorer",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Tri-Agonist Recovery Formula",
        swedishname: "Tri-Agonist Återhämtningsformel",
        englishdescription: "Specialized nutrient blend for hormonal pathway optimization",
        swedishdescription: "Specialiserad näringsämnesblandning för hormonell vägsoptimering",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      }
    ],
    details: {
      productId: "88817p2",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/tri-factor-metabolic-protocol-ii-coa.pdf"
    }
  },
  {
    id: "88817p3",
    name: "Tri-Faktor Metabolisk Protokoll - III",
    description: "Correlated to Retatrutide. This advanced protocol introduces comprehensive stress adaptation support and cellular protection, addressing the intensive physiological demands of maximum tri-agonist optimization.",
    purity: "Premium Kvalitet",
    price: "5000 kr",
    image: "/labimages/88817p3.png",
    category: "Tri-Faktor Metabolisk Protokoll",
    correlatesto: "Retatrutide 20mg",
    imagedescription: "An impressive array on a white marble surface. Five large matte white canisters, three amber glass capsule bottles, one dark glass tincture bottle, and three specialized retail boxes. The extensive collection demonstrates comprehensive metabolic support.",
    contents: [
      {
        englishname: "Advanced Metabolic Support Matrix",
        swedishname: "Avancerad Metabolisk Stöd Matrix",
        englishdescription: "Triple-pathway metabolic enhancement powder with specialized amino acid complex",
        swedishdescription: "Trippelvägs metabolisk förstärkningspulver med specialiserat aminosyrakomplex",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Tri-Factor GI Optimization Formula",
        swedishname: "Tri-Faktor GI Optimeringsformel",
        englishdescription: "Enhanced digestive enzyme complex with gastroprotective compounds",
        swedishdescription: "Förstärkt matsmältningsenzymkomplex med gastroprotektiva föreningar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Metabolic Hydration Complex",
        swedishname: "Metaboliskt Hydreringskomplex",
        englishdescription: "Advanced electrolyte formula with metabolic cofactors",
        swedishdescription: "Avancerad elektrolytformel med metaboliska kofaktorer",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Hepatic Optimization Complex",
        swedishname: "Hepatiskt Optimeringskomplex",
        englishdescription: "Advanced liver support with TUDCA and metabolic cofactors",
        swedishdescription: "Avancerat leverstöd med TUDCA och metaboliska kofaktorer",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Tri-Agonist Recovery Formula",
        swedishname: "Tri-Agonist Återhämtningsformel",
        englishdescription: "Specialized nutrient blend for hormonal pathway optimization",
        swedishdescription: "Specialiserad näringsämnesblandning för hormonell vägsoptimering",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Adaptogenic Stress Response Tincture",
        swedishname: "Adaptogen Stressrespons Tinktur",
        englishdescription: "Premium adaptogenic blend for hormonal stress management",
        swedishdescription: "Premium adaptogen blandning för hormonell stresshantering",
        quantity: 60,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Cellular Protection Complex",
        swedishname: "Cellulärt Skyddskomplex",
        englishdescription: "Advanced antioxidant and mitochondrial support formula",
        swedishdescription: "Avancerad antioxidant och mitokondriell stödformel",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      }
    ],
    details: {
      productId: "88817p3",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/tri-factor-metabolic-protocol-iii-coa.pdf"
    }
  },
  {
    id: "88817p4",
    name: "Tri-Faktor Metabolisk Protokoll - Apex",
    description: "Correlated to Retatrutide. The ultimate tri-agonist support system, providing comprehensive multi-pathway optimization with extended supply duration and advanced recovery protocols for maximum-intensity metabolic transformation.",
    purity: "Premium Kvalitet",
    price: "9000 kr",
    image: "/labimages/88817p4.png",
    category: "Tri-Faktor Metabolisk Protokoll",
    correlatesto: "Retatrutide 40mg",
    imagedescription: "An extensive, premium product display covering a large white marble surface. Six large matte white canisters, four amber glass capsule bottles, two dark glass tincture bottles, and four different retail boxes. This comprehensive system represents the pinnacle of metabolic support technology.",
    contents: [
      {
        englishname: "Advanced Metabolic Support Matrix",
        swedishname: "Avancerad Metabolisk Stöd Matrix",
        englishdescription: "Triple-pathway metabolic enhancement powder with specialized amino acid complex",
        swedishdescription: "Trippelvägs metabolisk förstärkningspulver med specialiserat aminosyrakomplex",
        quantity: 180,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Tri-Factor GI Optimization Formula",
        swedishname: "Tri-Faktor GI Optimeringsformel",
        englishdescription: "Enhanced digestive enzyme complex with gastroprotective compounds",
        swedishdescription: "Förstärkt matsmältningsenzymkomplex med gastroprotektiva föreningar",
        quantity: 180,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Metabolic Hydration Complex",
        swedishname: "Metaboliskt Hydreringskomplex",
        englishdescription: "Advanced electrolyte formula with metabolic cofactors",
        swedishdescription: "Avancerad elektrolytformel med metaboliska kofaktorer",
        quantity: 180,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Hepatic Optimization Complex",
        swedishname: "Hepatiskt Optimeringskomplex",
        englishdescription: "Advanced liver support with TUDCA and metabolic cofactors",
        swedishdescription: "Avancerat leverstöd med TUDCA och metaboliska kofaktorer",
        quantity: 180,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Tri-Agonist Recovery Formula",
        swedishname: "Tri-Agonist Återhämtningsformel",
        englishdescription: "Specialized nutrient blend for hormonal pathway optimization",
        swedishdescription: "Specialiserad näringsämnesblandning för hormonell vägsoptimering",
        quantity: 180,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Adaptogenic Stress Response Tincture",
        swedishname: "Adaptogen Stressrespons Tinktur",
        englishdescription: "Premium adaptogenic blend for hormonal stress management",
        swedishdescription: "Premium adaptogen blandning för hormonell stresshantering",
        quantity: 120,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Cellular Protection Complex",
        swedishname: "Cellulärt Skyddskomplex",
        englishdescription: "Advanced antioxidant and mitochondrial support formula",
        swedishdescription: "Avancerad antioxidant och mitokondriell stödformel",
        quantity: 180,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Advanced Sleep & Recovery Optimization",
        swedishname: "Avancerad Sömn & Återhämtningsoptimering",
        englishdescription: "Specialized nighttime recovery formula for tri-agonist protocols",
        swedishdescription: "Specialiserad nattsömn återhämtningsformel för tri-agonist protokoll",
        quantity: 180,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Metabolic Precision Monitoring Kit",
        swedishname: "Metabolisk Precisionsövervaknings Kit",
        englishdescription: "Biomarker tracking supplements for protocol optimization",
        swedishdescription: "Biomarkör spårnings tillägg för protokolloptimering",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      }
    ],
    details: {
      productId: "88817p4",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/tri-factor-metabolic-protocol-apex-coa.pdf"
    }
  },

  // Dermal Ommodellering Matrix Kits
  {
    id: "88818p1",
    name: "Dermal Ommodellering Matrix - Grundläggande",
    description: "Correlated to GHK-Cu. This kit provides the essential synergistic consumables to maximize the skin and hair rejuvenation effects of copper peptide therapy by providing key structural proteins and enhancing topical delivery.",
    purity: "Kosmetisk Kvalitet",
    price: "600 kr",
    image: "/labimages/88818p1.png",
    category: "Dermal Ommodellering Matrix",
    correlatesto: "GHK-Cu 50mg",
    imagedescription: "A clean product shot on a white marble surface. One small, clear glass bottle with a white dropper cap showing a slightly blue-tinted liquid inside. Next to it, one amber glass capsule bottle and one white plastic handle with two detachable microneedling roller heads.",
    contents: [
      {
        englishname: "Biomimetic Copper Peptide Serum",
        swedishname: "Biomimetisk Koppar Peptid Serum",
        englishdescription: "A legal, high-concentration cosmetic peptide analog serum",
        swedishdescription: "Ett lagligt, högkoncentrerat kosmetiskt peptidanalog serum",
        quantity: 30,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Oral Dermal Stack",
        swedishname: "Oral Dermal Stack",
        englishdescription: "Marine Collagen and Hyaluronic Acid capsules",
        swedishdescription: "Marint kollagen och hyaluronsyra kapslar",
        quantity: 30,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Bio-Device (Inexpensive/Exhaustible)",
        swedishname: "Bio-Enhet (Billig/Förbrukningsbar)",
        englishdescription: "Dual-head Microneedling Roller (0.25mm face, 0.5mm scalp)",
        swedishdescription: "Dubbelhuvud Mikronålsrulle (0.25mm ansikte, 0.5mm hårbotten)",
        quantity: 1,
        englishunittype: "device",
        swedishunittype: "enhet"
      }
    ],
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
    description: "Correlated to GHK-Cu. The Accelerator kit adds a weekly intensive cosmeceutical treatment to dramatically improve skin texture and radiance, working in tandem with the daily serum.",
    purity: "Kosmetisk Kvalitet",
    price: "1000 kr",
    image: "/labimages/88818p2.png",
    category: "Dermal Ommodellering Matrix",
    correlatesto: "GHK-Cu 100mg",
    imagedescription: "An eye-level shot of a skincare system on a sterile white countertop. One clear glass dropper bottle, one amber glass capsule bottle, one microneedling roller, and one low-profile white plastic jar designed to hold thin exfoliating pads.",
    contents: [
      {
        englishname: "Biomimetic Copper Peptide Serum",
        swedishname: "Biomimetisk Koppar Peptid Serum",
        englishdescription: "A legal, high-concentration cosmetic peptide analog serum",
        swedishdescription: "Ett lagligt, högkoncentrerat kosmetiskt peptidanalog serum",
        quantity: 60,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Oral Dermal Stack",
        swedishname: "Oral Dermal Stack",
        englishdescription: "Marine Collagen and Hyaluronic Acid capsules",
        swedishdescription: "Marint kollagen och hyaluronsyra kapslar",
        quantity: 60,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Bio-Device (Inexpensive/Exhaustible)",
        swedishname: "Bio-Enhet (Billig/Förbrukningsbar)",
        englishdescription: "Dual-head Microneedling Roller (0.25mm face, 0.5mm scalp)",
        swedishdescription: "Dubbelhuvud Mikronålsrulle (0.25mm ansikte, 0.5mm hårbotten)",
        quantity: 1,
        englishunittype: "device",
        swedishunittype: "enhet"
      },
      {
        englishname: "Glycolic Acid Resurfacing Pads",
        swedishname: "Glykolsyra Resurfäcering Pads",
        englishdescription: "A daily or weekly chemical exfoliation treatment",
        swedishdescription: "En daglig eller veckovis kemisk exfolieringsbehandling",
        quantity: 60,
        englishunittype: "pads",
        swedishunittype: "pads"
      }
    ],
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
    description: "Correlated to GHK-Cu. This advanced matrix adds single-use, high-potency topical treatments for an immediate boost in hydration and glow, complementing the long-term remodeling protocol.",
    purity: "Kosmetisk Kvalitet",
    price: "1900 kr",
    image: "/labimages/88818p3.png",
    category: "Dermal Ommodellering Matrix",
    correlatesto: "GHK-Cu 200mg",
    imagedescription: "A neat flat lay on a light grey concrete surface. One clear glass dropper bottle (face serum), one frosted glass bottle (scalp tonic), one amber glass capsule bottle, one jar of exfoliating pads, one microneedling roller, and one retail box for sheet masks.",
    contents: [
      {
        englishname: "Biomimetic Copper Peptide Serum",
        swedishname: "Biomimetisk Koppar Peptid Serum",
        englishdescription: "A legal, high-concentration cosmetic peptide analog serum",
        swedishdescription: "Ett lagligt, högkoncentrerat kosmetiskt peptidanalog serum",
        quantity: 90,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Oral Dermal Stack",
        swedishname: "Oral Dermal Stack",
        englishdescription: "Marine Collagen and Hyaluronic Acid capsules",
        swedishdescription: "Marint kollagen och hyaluronsyra kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Bio-Device (Inexpensive/Exhaustible)",
        swedishname: "Bio-Enhet (Billig/Förbrukningsbar)",
        englishdescription: "Dual-head Microneedling Roller (0.25mm face, 0.5mm scalp)",
        swedishdescription: "Dubbelhuvud Mikronålsrulle (0.25mm ansikte, 0.5mm hårbotten)",
        quantity: 1,
        englishunittype: "device",
        swedishunittype: "enhet"
      },
      {
        englishname: "Glycolic Acid Resurfacing Pads",
        swedishname: "Glykolsyra Resurfäcering Pads",
        englishdescription: "A daily or weekly chemical exfoliation treatment",
        swedishdescription: "En daglig eller veckovis kemisk exfolieringsbehandling",
        quantity: 90,
        englishunittype: "pads",
        swedishunittype: "pads"
      },
      {
        englishname: "Copper Peptide Infused Sheet Masks",
        swedishname: "Koppar Peptid Infunderade Ansiktsmasker",
        englishdescription: "Single-use, high-potency biocellulose masks",
        swedishdescription: "Engångs, högpotent biocellulosa masker",
        quantity: 12,
        englishunittype: "masks",
        swedishunittype: "masker"
      },
      {
        englishname: "Topical Scalp Tonic",
        swedishname: "Topisk Hårbotten Tonic",
        englishdescription: "A separate, nutrient-rich liquid formula for hair and scalp health",
        swedishdescription: "En separat, näringsrik vätskeformel för hår- och hårbottens hälsa",
        quantity: 60,
        englishunittype: "ml",
        swedishunittype: "ml"
      }
    ],
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
    description: "Correlated to GHK-Cu. The Apex system provides an intensive, clinical-strength course of consumable cosmeceuticals, designed for users undertaking a maximum-intensity systemic rejuvenation protocol.",
    purity: "Kosmetisk Kvalitet",
    price: "3600 kr",
    image: "/labimages/88818p4.png",
    category: "Dermal Ommodellering Matrix",
    correlatesto: "GHK-Cu 400mg",
    imagedescription: "A professional shot of a full cosmeceutical system. The scene includes one clear dropper bottle, one frosted bottle, two different amber glass capsule bottles, one jar of pads, one microneedling roller, one box of masks, and one tray holding seven small, single-use glass ampoules.",
    contents: [
      {
        englishname: "Biomimetic Copper Peptide Serum",
        swedishname: "Biomimetisk Koppar Peptid Serum",
        englishdescription: "A legal, high-concentration cosmetic peptide analog serum",
        swedishdescription: "Ett lagligt, högkoncentrerat kosmetiskt peptidanalog serum",
        quantity: 90,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "Oral Dermal Stack",
        swedishname: "Oral Dermal Stack",
        englishdescription: "Marine Collagen and Hyaluronic Acid capsules",
        swedishdescription: "Marint kollagen och hyaluronsyra kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Bio-Device (Inexpensive/Exhaustible)",
        swedishname: "Bio-Enhet (Billig/Förbrukningsbar)",
        englishdescription: "Dual-head Microneedling Roller (0.25mm face, 0.5mm scalp)",
        swedishdescription: "Dubbelhuvud Mikronålsrulle (0.25mm ansikte, 0.5mm hårbotten)",
        quantity: 1,
        englishunittype: "device",
        swedishunittype: "enhet"
      },
      {
        englishname: "Glycolic Acid Resurfacing Pads",
        swedishname: "Glykolsyra Resurfäcering Pads",
        englishdescription: "A daily or weekly chemical exfoliation treatment",
        swedishdescription: "En daglig eller veckovis kemisk exfolieringsbehandling",
        quantity: 90,
        englishunittype: "pads",
        swedishunittype: "pads"
      },
      {
        englishname: "Copper Peptide Infused Sheet Masks",
        swedishname: "Koppar Peptid Infunderade Ansiktsmasker",
        englishdescription: "Single-use, high-potency biocellulose masks",
        swedishdescription: "Engångs, högpotent biocellulosa masker",
        quantity: 12,
        englishunittype: "masks",
        swedishunittype: "masker"
      },
      {
        englishname: "Topical Scalp Tonic",
        swedishname: "Topisk Hårbotten Tonic",
        englishdescription: "A separate, nutrient-rich liquid formula for hair and scalp health",
        swedishdescription: "En separat, näringsrik vätskeformel för hår- och hårbottens hälsa",
        quantity: 60,
        englishunittype: "ml",
        swedishunittype: "ml"
      },
      {
        englishname: "7-Day Dermal Ampoule Course",
        swedishname: "7-dagars Dermal Ampullkur",
        englishdescription: "A month's supply of concentrated, single-use glass ampoule treatments",
        swedishdescription: "En månads förråd av koncentrerade, engångs glasampull behandlingar",
        quantity: 4,
        englishunittype: "sets",
        swedishunittype: "set"
      },
      {
        englishname: "Oral Antioxidant Complex",
        swedishname: "Oralt Antioxidantkomplex",
        englishdescription: "A separate capsule formula with Liposomal Glutathione and Astaxanthin",
        swedishdescription: "En separat kapselformel med Liposomal Glutation och Astaxanthin",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      }
    ],
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
    description: "Correlated to Isotretinoin ('Roaccutan'). This essential kit directly targets the most common and severe side effects of high-dose retinoid therapy: extreme dryness of the skin, lips, and eyes, while providing foundational liver support.",
    purity: "Medicinsk Kvalitet",
    price: "700 kr",
    image: "/labimages/88819p1.png",
    category: "Systemisk Torrhetsprotokoll",
    correlatesto: "Roaccutan 1000mg",
    imagedescription: "A gentle, clean product shot on a plain white background. Two amber glass capsule bottles, one heavy double-walled white plastic jar, one simple white squeeze tube, and one small white eye-dropper bottle. All items are label-free.",
    contents: [
      {
        englishname: "Oral Support Stack",
        swedishname: "Oralt Stöd Stack",
        englishdescription: "High-DHA Omega-3 Fish Oil and Milk Thistle capsules",
        swedishdescription: "Hög-DHA Omega-3 Fiskolja och Mjölktistel kapslar",
        quantity: 30,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Medical-grade Lanolin Lip Balm",
        swedishname: "Medicinsk Lanolin Läppbalsam",
        englishdescription: "In a tube",
        swedishdescription: "I en tub",
        quantity: 1,
        englishunittype: "tube",
        swedishunittype: "tub"
      },
      {
        englishname: "Ceramide & Shea Butter Body Cream",
        swedishname: "Ceramid & Sheasmör Kroppskräm",
        englishdescription: "In a jar",
        swedishdescription: "I en burk",
        quantity: 1,
        englishunittype: "jar",
        swedishunittype: "burk"
      },
      {
        englishname: "Preservative-Free Hyaluronate Eye Drops",
        swedishname: "Konserveringsmedelfria Hyaluronat Ögondroppar",
        englishdescription: "In a bottle",
        swedishdescription: "I en flaska",
        quantity: 1,
        englishunittype: "bottle",
        swedishunittype: "flaska"
      }
    ],
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
    description: "Correlated to Isotretinoin ('Roaccutan'). This protocol adds nutritional and topical support for joint and muscle health, addressing the common side effect of arthralgia (joint pain) experienced during treatment.",
    purity: "Medicinsk Kvalitet",
    price: "1200 kr",
    image: "/labimages/88819p2.png",
    category: "Systemisk Torrhetsprotokoll",
    correlatesto: "Roaccutan 2000mg",
    imagedescription: "An organized flat lay on a light grey surface. Three amber glass capsule bottles, one white plastic jar, one squeeze tube, one eye-drop bottle, and one large, minimalist resealable bag for bath salts.",
    contents: [
      {
        englishname: "Oral Support Stack",
        swedishname: "Oralt Stöd Stack",
        englishdescription: "High-DHA Omega-3 Fish Oil and Milk Thistle capsules",
        swedishdescription: "Hög-DHA Omega-3 Fiskolja och Mjölktistel kapslar",
        quantity: 60,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Medical-grade Lanolin Lip Balm",
        swedishname: "Medicinsk Lanolin Läppbalsam",
        englishdescription: "In a tube",
        swedishdescription: "I en tub",
        quantity: 1,
        englishunittype: "tube",
        swedishunittype: "tub"
      },
      {
        englishname: "Ceramide & Shea Butter Body Cream",
        swedishname: "Ceramid & Sheasmör Kroppskräm",
        englishdescription: "In a jar",
        swedishdescription: "I en burk",
        quantity: 1,
        englishunittype: "jar",
        swedishunittype: "burk"
      },
      {
        englishname: "Preservative-Free Hyaluronate Eye Drops",
        swedishname: "Konserveringsmedelfria Hyaluronat Ögondroppar",
        englishdescription: "In a bottle",
        swedishdescription: "I en flaska",
        quantity: 1,
        englishunittype: "bottle",
        swedishunittype: "flaska"
      },
      {
        englishname: "Oral Joint Formula",
        swedishname: "Oralt Ledformel",
        englishdescription: "Glucosamine, Chondroitin, and MSM capsules",
        swedishdescription: "Glukosamin, Kondroitin och MSM kapslar",
        quantity: 60,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Joint & Muscle Soak",
        swedishname: "Led & Muskel Blötläggning",
        englishdescription: "A blend of Magnesium Chloride flakes, Epsom salts, and Arnica for bathing",
        swedishdescription: "En blandning av Magnesiumklorid flingor, Epsom salt och Arnica för badning",
        quantity: 1,
        englishunittype: "kg bag",
        swedishunittype: "kg påse"
      }
    ],
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
    description: "Correlated to Isotretinoin ('Roaccutan'). For high-dose regimens, this protocol upgrades to a more potent form of liver support and adds intensive, single-use hydrating treatments for severely compromised skin.",
    purity: "Medicinsk Kvalitet",
    price: "2000 kr",
    image: "/labimages/88819p3.png",
    category: "Systemisk Torrhetsprotokoll",
    correlatesto: "Roaccutan 4000mg",
    imagedescription: "Eye-level product group shot on a white countertop. Four amber glass capsule bottles, one white plastic jar, one squeeze tube, one eye-drop bottle, one large bag of bath salts, and one small retail box for lip masks. Bright, clinical lighting.",
    contents: [
      {
        englishname: "High-DHA Omega-3 Fish Oil",
        swedishname: "Hög-DHA Omega-3 Fiskolja",
        englishdescription: "Fish oil capsules",
        swedishdescription: "Fiskolja kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Upgraded Oral Hepatic Support",
        swedishname: "Uppgraderat Oralt Hepatiskt Stöd",
        englishdescription: "Premium TUDCA capsules (replaces Milk Thistle)",
        swedishdescription: "Premium TUDCA kapslar (ersätter Mjölktistel)",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Medical-grade Lanolin Lip Balm",
        swedishname: "Medicinsk Lanolin Läppbalsam",
        englishdescription: "In a tube",
        swedishdescription: "I en tub",
        quantity: 1,
        englishunittype: "tube",
        swedishunittype: "tub"
      },
      {
        englishname: "Ceramide & Shea Butter Body Cream",
        swedishname: "Ceramid & Sheasmör Kroppskräm",
        englishdescription: "In a jar",
        swedishdescription: "I en burk",
        quantity: 1,
        englishunittype: "jar",
        swedishunittype: "burk"
      },
      {
        englishname: "Preservative-Free Hyaluronate Eye Drops",
        swedishname: "Konserveringsmedelfria Hyaluronat Ögondroppar",
        englishdescription: "In a bottle",
        swedishdescription: "I en flaska",
        quantity: 1,
        englishunittype: "bottle",
        swedishunittype: "flaska"
      },
      {
        englishname: "Oral Joint Formula",
        swedishname: "Oralt Ledformel",
        englishdescription: "Glucosamine, Chondroitin, and MSM capsules",
        swedishdescription: "Glukosamin, Kondroitin och MSM kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Joint & Muscle Soak",
        swedishname: "Led & Muskel Blötläggning",
        englishdescription: "A blend of Magnesium Chloride flakes, Epsom salts, and Arnica for bathing",
        swedishdescription: "En blandning av Magnesiumklorid flingor, Epsom salt och Arnica för badning",
        quantity: 1,
        englishunittype: "kg bag",
        swedishunittype: "kg påse"
      },
      {
        englishname: "Ultra-Hydrating Lip Masks",
        swedishname: "Ultra-Hydrerande Läppmasker",
        englishdescription: "Single-use hydrogel lip patches",
        swedishdescription: "Engångs hydrogel läpplappar",
        quantity: 30,
        englishunittype: "masks",
        swedishunittype: "masker"
      }
    ],
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
    description: "Correlated to Isotretinoin ('Roaccutan'). The Apex protocol offers a complete, multi-pathway consumable solution, adding internal hydration support and a powerful topical analgesic for maximum comfort during the most intensive courses.",
    purity: "Medicinsk Kvalitet",
    price: "3700 kr",
    image: "/labimages/88819p4.png",
    category: "Systemisk Torrhetsprotokoll",
    correlatesto: "Roaccutan 8000mg",
    imagedescription: "A comprehensive product line photo on a light grey stone surface. An entire system of consumables: four amber glass capsule bottles, two different white jars, one squeeze tube, one eye-drop bottle, one large bag of bath salts, and two different retail boxes (for lip masks and sachets).",
    contents: [
      {
        englishname: "High-DHA Omega-3 Fish Oil",
        swedishname: "Hög-DHA Omega-3 Fiskolja",
        englishdescription: "Fish oil capsules",
        swedishdescription: "Fiskolja kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Upgraded Oral Hepatic Support",
        swedishname: "Uppgraderat Oralt Hepatiskt Stöd",
        englishdescription: "Premium TUDCA capsules (replaces Milk Thistle)",
        swedishdescription: "Premium TUDCA kapslar (ersätter Mjölktistel)",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Medical-grade Lanolin Lip Balm",
        swedishname: "Medicinsk Lanolin Läppbalsam",
        englishdescription: "In a tube",
        swedishdescription: "I en tub",
        quantity: 1,
        englishunittype: "tube",
        swedishunittype: "tub"
      },
      {
        englishname: "Ceramide & Shea Butter Body Cream",
        swedishname: "Ceramid & Sheasmör Kroppskräm",
        englishdescription: "In a jar",
        swedishdescription: "I en burk",
        quantity: 1,
        englishunittype: "jar",
        swedishunittype: "burk"
      },
      {
        englishname: "Preservative-Free Hyaluronate Eye Drops",
        swedishname: "Konserveringsmedelfria Hyaluronat Ögondroppar",
        englishdescription: "In a bottle",
        swedishdescription: "I en flaska",
        quantity: 1,
        englishunittype: "bottle",
        swedishunittype: "flaska"
      },
      {
        englishname: "Oral Joint Formula",
        swedishname: "Oralt Ledformel",
        englishdescription: "Glucosamine, Chondroitin, and MSM capsules",
        swedishdescription: "Glukosamin, Kondroitin och MSM kapslar",
        quantity: 90,
        englishunittype: "Day Supply",
        swedishunittype: "Dagars Förbrukning"
      },
      {
        englishname: "Joint & Muscle Soak",
        swedishname: "Led & Muskel Blötläggning",
        englishdescription: "A blend of Magnesium Chloride flakes, Epsom salts, and Arnica for bathing",
        swedishdescription: "En blandning av Magnesiumklorid flingor, Epsom salt och Arnica för badning",
        quantity: 1,
        englishunittype: "kg bag",
        swedishunittype: "kg påse"
      },
      {
        englishname: "Ultra-Hydrating Lip Masks",
        swedishname: "Ultra-Hydrerande Läppmasker",
        englishdescription: "Single-use hydrogel lip patches",
        swedishdescription: "Engångs hydrogel läpplappar",
        quantity: 30,
        englishunittype: "masks",
        swedishunittype: "masker"
      },
      {
        englishname: "Internal Hydration Mix",
        swedishname: "Intern Hydrerings Mix",
        englishdescription: "An electrolyte and hyaluronic acid powder in single-serving sachets",
        swedishdescription: "Ett elektrolyt- och hyaluronsyrapulver i portionsförpackningar",
        quantity: 90,
        englishunittype: "servings",
        swedishunittype: "portioner"
      },
      {
        englishname: "Deep Tissue Recovery Balm",
        swedishname: "Djupvävnads Återhämtningsbalsam",
        englishdescription: "A potent topical balm with Menthol, Camphor, and high-potency Arnica Montana extract",
        swedishdescription: "En potent topisk balsam med Mentol, Kamfer och högpotent Arnica Montana extrakt",
        quantity: 100,
        englishunittype: "ml jar",
        swedishunittype: "ml burk"
      }
    ],
    details: {
      productId: "88819p4",
      size: "90-dagars förbrukning",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/systemic-dryness-protocol-apex-coa.pdf"
    }
  }
];