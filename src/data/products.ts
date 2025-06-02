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
  // Category 1: Research Compounds
  {
    id: "selank",
    name: "Selank",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for in vitro experiments. Not for human or veterinary use.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "/sel.jpg",
    category: "Research Compounds",
    details: {
      cas: "129954-34-3",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/selank-coa.pdf"
    }
  },
  {
    id: "semax",
    name: "Semax",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for neurological research. For use in controlled scientific environments only.",
    purity: "≥99% purity",
    price: "$89.99",
    image: "/sem.jpg",
    category: "Research Compounds",
    details: {
      cas: "80714-61-0",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/semax-coa.pdf"
    }
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    description: "Research compound for laboratory use only. Synthetic analog used as a reference material for metabolic research in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$129.99",
    image: "/tri.jpg",
    category: "Research Compounds",
    details: {
      cas: "2023148-47-6",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/tirzepatide-coa.pdf"
    }
  },
  {
    id: "semaglutide",
    name: "Semaglutide",
    description: "Research compound for laboratory use only. Synthetic analog used as a reference material for metabolic studies in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$119.99",
    image: "/seg.jpg",
    category: "Research Compounds",
    details: {
      cas: "910463-68-2",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/semaglutide-coa.pdf"
    }
  },
  {
    id: "retatrutide",
    name: "Retatrutide",
    description: "Research compound for laboratory use only. Novel synthetic compound for use as reference material in biochemical research applications.",
    purity: "≥99% purity",
    price: "$149.99",
    image: "/ret.jpg",
    category: "Research Compounds",
    details: {
      cas: "N/A",
      size: "4mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/retatrutide-coa.pdf"
    },
    shippingDestinations: [...usaStates]
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2",
    description: "Research compound for laboratory use only. Synthetic analog designed for melanocortin receptor studies in controlled laboratory conditions.",
    purity: "≥99% purity",
    price: "$89.99",
    image: "/mel2.jpg",
    category: "Research Compounds",
    details: {
      cas: "121062-08-6",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/melanotan-2-coa.pdf"
    }
  },
  {
    id: "bpc-157",
    name: "BPC-157",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for in vitro experiments. Not for human or veterinary use.",
    purity: "≥99% purity",
    price: "$94.99",
    image: "/bpc.jpg",
    category: "Research Compounds",
    details: {
      cas: "137525-51-0",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/bpc-157-coa.pdf"
    }
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    description: "Research compound for laboratory use only. Copper complex used as a reference material for cellular studies in controlled laboratory conditions.",
    purity: "≥98% purity",
    price: "$79.99",
    image: "/ghk.jpg",
    category: "Research Compounds",
    details: {
      cas: "49557-75-7",
      size: "50mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/ghk-cu-coa.pdf"
    }
  },
  {
    id: "gonadorelin",
    name: "Gonadorelin",
    description: "Research compound for laboratory use only. Synthetic analog used as a reference material for endocrinology research in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "/gon.jpg",
    category: "Research Compounds",
    details: {
      cas: "33515-09-2",
      size: "2mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/gonadorelin-coa.pdf"
    }
  },
  {
    id: "bac-water",
    name: "BAC-water",
    description: "Bacteriostatic water for laboratory use only. Used for preparation of solutions for in vitro research applications.",
    purity: "USP Grade",
    price: "$9.99",
    image: "/bac.jpg",
    category: "Research Compounds",
    details: {
      cas: "N/A",
      size: "10ml",
      storage: "Store at room temperature",
      coaLink: "/certificates/bac-water-coa.pdf"
    }
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    description: "Research compound for laboratory use only. Synthetic compound used as a chemical reference material in receptor studies.",
    purity: "≥99% purity",
    price: "$89.99",
    image: "/ipa.jpg",
    category: "Research Compounds",
    details: {
      cas: "170851-70-4",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/ipamorelin-coa.pdf"
    }
  },
  {
    id: "kisspeptin",
    name: "Kisspeptin",
    description: "Research compound for laboratory use only. Synthetic analog used as a reference material for endocrinology research in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$94.99",
    image: "/kis.jpg",
    category: "Research Compounds",
    details: {
      cas: "341867-30-5",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/kisspeptin-coa.pdf"
    }
  },
  {
    id: "mots-c",
    name: "MOTS-c",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for mitochondrial studies in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$99.99",
    image: "/mots.jpg",
    category: "Research Compounds",
    details: {
      cas: "N/A",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/mots-c-coa.pdf"
    }
  },
  {
    id: "pt-141",
    name: "PT-141",
    description: "Research compound for laboratory use only. Synthetic analog designed for melanocortin receptor studies in controlled laboratory conditions.",
    purity: "≥99% purity",
    price: "$99.99",
    image: "/pt1.jpg",
    category: "Research Compounds",
    details: {
      cas: "189691-06-3",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/pt-141-coa.pdf"
    }
  },
  {
    id: "s-23",
    name: "S-23",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for in vitro receptor studies. Not for human or veterinary use.",
    purity: "≥99% purity",
    price: "$79.99",
    image: "/s23.jpg",
    category: "Research Compounds",
    details: {
      cas: "1010396-29-8",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/s-23-coa.pdf"
    }
  },
  {
    id: "tb-500",
    name: "TB-500",
    description: "Research compound for laboratory use only. Synthetic derivative used as chemical reference material for cell regulation studies in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$94.99",
    image: "/tb5.jpg",
    category: "Research Compounds",
    details: {
      cas: "77591-33-4",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/tb-500-coa.pdf"
    }
  },
  {
    id: "thymosin-a1",
    name: "Thymosin A1",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for immunological studies in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$99.99",
    image: "/thy.jpg",
    category: "Research Compounds",
    details: {
      cas: "62304-98-7",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/thymosin-a1-coa.pdf"
    }
  },
  
  // Category 2: Experimental Compounds
  {
    id: "s-23-cat2",
    name: "S-23",
    description: "Research compound for laboratory use only. Synthetic compound for in vitro studies in biochemistry and molecular biology research applications.",
    purity: "≥99% purity",
    price: "$79.99",
    image: "/s23.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "1010396-29-8",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/s-23-cat2-coa.pdf"
    }
  },
  {
    id: "yk-11",
    name: "YK-11",
    description: "Research compound for laboratory use only. Synthetic compound for use as reference material in biochemical research applications.",
    purity: "≥98% purity",
    price: "$89.99",
    image: "/yk.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "431579-34-9",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/yk-11-coa.pdf"
    }
  },
  {
    id: "rad-140",
    name: "RAD-140",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for receptor-based studies in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "/rad.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "1182367-47-0",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/rad-140-coa.pdf"
    }
  },
  {
    id: "lgd-4033",
    name: "LGD-4033",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for nuclear receptor studies in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$79.99",
    image: "/lgd.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "1165910-22-4",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/lgd-4033-coa.pdf"
    }
  },
  {
    id: "gw-501516",
    name: "GW-501516",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for metabolic research applications.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "/Gw.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "317318-70-0",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/gw-501516-coa.pdf"
    }
  },
  {
    id: "mk-2866",
    name: "MK-2866",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for protein research in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$79.99",
    image: "/mk.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "841205-47-8",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/mk-2866-coa.pdf"
    }
  },
  {
    id: "s-4",
    name: "S-4",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for receptor studies in controlled scientific research.",
    purity: "≥99% purity",
    price: "$79.99",
    image: "/s4.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "434-07-1",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/s-4-coa.pdf"
    }
  },
  {
    id: "mk-677",
    name: "MK-677",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for growth hormone secretagogue receptor studies.",
    purity: "≥98% purity",
    price: "$84.99",
    image: "/mk6.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "159752-10-0",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/mk-677-coa.pdf"
    }
  },
  {
    id: "otr-ac",
    name: "OTR-AC",
    description: "Research compound for laboratory use only. Novel synthetic compound for biochemical research applications in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$89.99",
    image: "/otr.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "N/A",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/otr-ac-coa.pdf"
    }
  },
  
  // Category 3: Pharmaceutical Research
  {
    id: "tesofensine",
    name: "Tesofensine",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for neuroscience research in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$119.99",
    image: "/tes.jpg",
    category: "Pharmaceutical Research",
    details: {
      cas: "195814-47-6",
      size: "500mcg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/tesofensine-coa.pdf"
    }
  },
  {
    id: "slu-pp-332",
    name: "SLU-PP-332",
    description: "Research compound for laboratory use only. Novel synthetic compound for biochemical research applications in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$129.99",
    image: "/slu.jpg",
    category: "Pharmaceutical Research",
    details: {
      cas: "N/A",
      size: "250mcg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/slu-pp-332-coa.pdf"
    }
  },
  {
    id: "isotretinoin",
    name: "Isotretinoin",
    description: "Research compound for laboratory use only. Reference compound for dermatological research in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$69.99",  
    image: "/iso.jpg",
    category: "Pharmaceutical Research",
    details: {
      cas: "4759-48-2",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "/certificates/isotretinoin-coa.pdf"
    }
  },
  {
    id: "tadalafil",
    name: "Tadalafil",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for enzyme inhibition studies in biochemical research.",
    purity: "≥99% purity",
    price: "$59.99",
    image: "/tad.jpg",
    category: "Pharmaceutical Research",
    details: {
      cas: "171596-29-5",
      size: "30mg",
      storage: "Store at room temperature, away from light",
      coaLink: "/certificates/tadalafil-coa.pdf"
    }
  },
  {
    id: "liquid-tadalafil",
    name: "Liquid Tadalafil",
    description: "Research compound for laboratory use only. Liquid formulation for use as reference material in bioavailability and pharmacokinetic studies.",
    purity: "≥98% purity",
    price: "$64.99",
    image: "/lt.jpg",
    category: "Pharmaceutical Research",
    details: {
      cas: "171596-29-5",
      size: "2mg",
      storage: "Store at 2-8°C, away from light",
      coaLink: "/certificates/liquid-tadalafil-coa.pdf"
    }
  }
];
