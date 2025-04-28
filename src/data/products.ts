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
    coaLink: string;
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
  {
    id: "bpc-157",
    name: "BPC-157",
    description: "Research compound for laboratory use only. Synthetic pentadecapeptide compound used as a reference material for in vitro experiments. Not for human or veterinary use.",
    purity: "≥99% purity",
    price: "$89.99",
    image: "https://m.media-amazon.com/images/I/71DL69TL3VL.jpg",
    category: "Reference Material",
    details: {
      cas: "137525-51-0",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    },
    // Example of product with USA states shipping
    shippingDestinations: [...usaStates]
  },
  {
    id: "tb-500",
    name: "TB-500",
    description: "Research compound for laboratory use only. Synthetic derivative of thymosin β4 used as chemical reference material for actin regulation studies in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$94.99",
    image: "https://dinespower.com/wp-content/uploads/2023/07/24_TB-1-2000x2000-1.png",
    category: "Reference Material",
    details: {
      cas: "77591-33-4",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
    // No specific destinations - uses the default list
  },
  {
    id: "cjc-1295",
    name: "CJC-1295",
    description: "Research compound for laboratory use only. Synthetic growth hormone releasing hormone (GHRH) analog intended for controlled scientific research in biochemistry and cell biology.",
    purity: "≥98% purity",
    price: "$89.99",
    image: "https://selectspineandsports.com/wp-content/uploads/2024/03/cjc-ipamorelin-new.png",
    category: "Academic Research Supply",
    details: {
      cas: "863288-34-0",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    description: "Research compound for laboratory use only. Synthetic pentapeptide used as a chemical reference material in growth hormone secretagogue receptor studies.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "https://peptidesworld.com/wp-content/uploads/2020/12/15.jpg",
    category: "Academic Research Supply",
    details: {
      cas: "170851-70-4",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    description: "Research compound for laboratory use only. Synthetic analog of GHRH intended for in vitro research applications. For use in controlled scientific environments only.",
    purity: "≥98% purity",
    price: "$79.99",
    image: "https://www.corepeptides.com/wp-content/uploads/2020/04/Sermorelin-5mg.jpg",
    category: "Academic Research Supply",
    details: {
      cas: "86168-78-7",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "pt-141",
    name: "PT-141 (Bremelanotide)",
    description: "Research compound for laboratory use only. Synthetic analog designed for melanocortin receptor studies in controlled laboratory conditions.",
    purity: "≥99% purity",
    price: "$99.99",
    image: "https://innerbody.imgix.net/pt-141-social-image.jpeg",
    category: "Reference Material",
    details: {
      cas: "189691-06-3",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    },
    // Another example with specific destinations
    shippingDestinations: [
      { 
        id: 110, 
        name: "Australia", 
        description: "Research facilities only with proper import documentation.",
        productSpecific: true
      }
    ]
  },
  {
    id: "aod-9604",
    name: "AOD-9604",
    description: "Research compound for laboratory use only. Modified fragment of human growth hormone intended as a chemical reference material for academic and industrial research settings.",
    purity: "≥98% purity",
    price: "$89.99",
    image: "https://elive-health.com/wp-content/uploads/2024/09/AOD-9604.png",
    category: "Laboratory Reagent",
    details: {
      cas: "221231-10-3",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  }
];
