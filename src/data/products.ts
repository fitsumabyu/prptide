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
    description: "Body Protection Compound-157 is a synthetic pentadecapeptide derived from a protective protein found in gastric juice. It has been studied for potential tissue protective properties in laboratory settings.",
    purity: "≥99% purity",
    price: "$89.99",
    image: "https://m.media-amazon.com/images/I/71DL69TL3VL.jpg",
    category: "Tissue Healing",
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
    description: "Thymosin Beta-4 is a synthetic peptide segment of the protein thymosin β4, which is found in nearly all mammalian cells. It has been researched for its role in actin regulation in laboratory studies.",
    purity: "≥98% purity",
    price: "$94.99",
    image: "https://dinespower.com/wp-content/uploads/2023/07/24_TB-1-2000x2000-1.png",
    category: "Tissue Healing",
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
    description: "CJC-1295 is a synthetic growth hormone releasing hormone (GHRH) analog that has been studied for its potential to increase growth hormone and IGF-1 levels in laboratory settings.",
    purity: "≥98% purity",
    price: "$89.99",
    image: "https://selectspineandsports.com/wp-content/uploads/2024/03/cjc-ipamorelin-new.png",
    category: "Growth Hormone",
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
    description: "Ipamorelin is a synthetic pentapeptide and growth hormone secretagogue that has been studied for its selective stimulation of growth hormone release in laboratory research.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "https://peptidesworld.com/wp-content/uploads/2020/12/15.jpg",
    category: "Growth Hormone",
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
    description: "Sermorelin is a synthetic analog of growth hormone-releasing hormone (GHRH) that has been studied for its potential to stimulate the pituitary gland to produce and release growth hormone.",
    purity: "≥98% purity",
    price: "$79.99",
    image: "https://www.corepeptides.com/wp-content/uploads/2020/04/Sermorelin-5mg.jpg",
    category: "Growth Hormone",
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
    description: "PT-141, also known as Bremelanotide, is a synthetic peptide analog of alpha-melanocyte stimulating hormone (α-MSH). It has been studied in laboratory research on melanocortin receptors.",
    purity: "≥99% purity",
    price: "$99.99",
    image: "https://innerbody.imgix.net/pt-141-social-image.jpeg",
    category: "Melanocortin",
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
    description: "AOD-9604 is a modified fragment of human growth hormone that has been researched for its potential metabolic effects in laboratory settings without affecting growth or insulin resistance.",
    purity: "≥98% purity",
    price: "$89.99",
    image: "https://elive-health.com/wp-content/uploads/2024/09/AOD-9604.png",
    category: "Modified Growth Hormone",
    details: {
      cas: "221231-10-3",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  }
];
