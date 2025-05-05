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
  // Category 1: Research Compounds
  {
    id: "selank",
    name: "Selank",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for in vitro experiments. Not for human or veterinary use.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "https://m.media-amazon.com/images/I/61kQIifOGlL.jpg",
    category: "Research Compounds",
    details: {
      cas: "129954-34-3",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "semax",
    name: "Semax",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for neurological research. For use in controlled scientific environments only.",
    purity: "≥99% purity",
    price: "$89.99",
    image: "https://swisschems.is/wp-content/uploads/2024/10/SC-Peptides-2023-Semax-2.jpg",
    category: "Research Compounds",
    details: {
      cas: "80714-61-0",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    description: "Research compound for laboratory use only. Synthetic analog used as a reference material for metabolic research in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$129.99",
    image: "https://empower-images.s3.dualstack.us-east-1.amazonaws.com/images/%282025%29%20Website%20Images/503A/Injectables/2025-empower-pharmacy-tirzepatide-niacinamide-injection-17-2-mg-mL-4-mL-294x490.jpg",
    category: "Research Compounds",
    details: {
      cas: "2023148-47-6",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "semaglutide",
    name: "Semaglutide",
    description: "Research compound for laboratory use only. Synthetic analog used as a reference material for metabolic studies in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$119.99",
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/6/428127410/BG/IO/WP/61446284/product-jpeg-500x500.jpg",
    category: "Research Compounds",
    details: {
      cas: "910463-68-2",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "retatrutide",
    name: "Retatrutide",
    description: "Research compound for laboratory use only. Novel synthetic compound for use as reference material in biochemical research applications.",
    purity: "≥99% purity",
    price: "$149.99",
    image: "https://aminos-research.com/wp-content/uploads/2023/07/Retatrutide_RUO.png",
    category: "Research Compounds",
    details: {
      cas: "N/A",
      size: "4mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    },
    shippingDestinations: [...usaStates]
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2",
    description: "Research compound for laboratory use only. Synthetic analog designed for melanocortin receptor studies in controlled laboratory conditions.",
    purity: "≥99% purity",
    price: "$89.99",
    image: "https://rejuve.com/wp-content/uploads/2024/07/Group-1073714027-14-1.webp",
    category: "Research Compounds",
    details: {
      cas: "121062-08-6",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "bpc-157",
    name: "BPC-157",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for in vitro experiments. Not for human or veterinary use.",
    purity: "≥99% purity",
    price: "$94.99",
    image: "https://m.media-amazon.com/images/I/71DL69TL3VL.jpg",
    category: "Research Compounds",
    details: {
      cas: "137525-51-0",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    description: "Research compound for laboratory use only. Copper complex used as a reference material for cellular studies in controlled laboratory conditions.",
    purity: "≥98% purity",
    price: "$79.99",
    image: "https://neuroganhealth.com/cdn/shop/files/GHK-Cu_Tablets_Front_Shadow.jpg?v=1718836499",
    category: "Research Compounds",
    details: {
      cas: "49557-75-7",
      size: "50mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "gonadorelin",
    name: "Gonadorelin",
    description: "Research compound for laboratory use only. Synthetic analog used as a reference material for endocrinology research in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "https://empower-images.s3.dualstack.us-east-1.amazonaws.com/images/%282025%29%20Website%20Images/503A/Injectables/2025-empower-pharmacy-gonadorelin-acetate-injection-1mgml-5ml-294x490.jpg",
    category: "Research Compounds",
    details: {
      cas: "33515-09-2",
      size: "2mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "bac-water",
    name: "BAC-water",
    description: "Bacteriostatic water for laboratory use only. Used for preparation of solutions for in vitro research applications.",
    purity: "USP Grade",
    price: "$9.99",
    image: "https://www.bacteriostaticwater.com/cdn/shop/products/bacteriostaticwater_1.png?v=1569522841",
    category: "Research Compounds",
    details: {
      cas: "N/A",
      size: "10ml",
      storage: "Store at room temperature",
      coaLink: "#"
    }
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    description: "Research compound for laboratory use only. Synthetic compound used as a chemical reference material in receptor studies.",
    purity: "≥99% purity",
    price: "$89.99",
    image: "https://peptidesworld.com/wp-content/uploads/2020/12/15.jpg",
    category: "Research Compounds",
    details: {
      cas: "170851-70-4",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "kisspeptin",
    name: "Kisspeptin",
    description: "Research compound for laboratory use only. Synthetic analog used as a reference material for endocrinology research in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$94.99",
    image: "https://www.gentsdoctor.com/wp-content/uploads/2024/10/Showing-a-vial-of-Kisspeptin-10-peptide-ready-for-reconstitution.webp",
    category: "Research Compounds",
    details: {
      cas: "341867-30-5",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "mots-c",
    name: "MOTS-c",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for mitochondrial studies in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$99.99",
    image: "https://www.corepeptides.com/wp-content/uploads/2022/12/Mots-C-10MG.jpg",
    category: "Research Compounds",
    details: {
      cas: "N/A",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "pt-141",
    name: "PT-141",
    description: "Research compound for laboratory use only. Synthetic analog designed for melanocortin receptor studies in controlled laboratory conditions.",
    purity: "≥99% purity",
    price: "$99.99",
    image: "https://innerbody.imgix.net/pt-141-social-image.jpeg",
    category: "Research Compounds",
    details: {
      cas: "189691-06-3",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "s-23",
    name: "S-23",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for in vitro receptor studies. Not for human or veterinary use.",
    purity: "≥99% purity",
    price: "$79.99",
    image: "https://paradigmpeptides.com/wp-content/uploads/2021/01/SC-bottle-2023-S23.png",
    category: "Research Compounds",
    details: {
      cas: "1010396-29-8",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "tb-500",
    name: "TB-500",
    description: "Research compound for laboratory use only. Synthetic derivative used as chemical reference material for cell regulation studies in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$94.99",
    image: "https://dinespower.com/wp-content/uploads/2023/07/24_TB-1-2000x2000-1.png",
    category: "Research Compounds",
    details: {
      cas: "77591-33-4",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "thymosin-a1",
    name: "Thymosin A1",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for immunological studies in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$99.99",
    image: "https://australia.pharmalabglobal.com/wp-content/uploads/2022/09/Thymosin-Alpha-1-Peptide-Vial-10mg.jpeg",
    category: "Research Compounds",
    details: {
      cas: "62304-98-7",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  
  // Category 2: Experimental Compounds
  {
    id: "s-23-cat2",
    name: "S-23",
    description: "Research compound for laboratory use only. Synthetic compound for in vitro studies in biochemistry and molecular biology research applications.",
    purity: "≥99% purity",
    price: "$79.99",
    image: "https://elitelabspeptides.com/wp-content/uploads/2019/08/S-23.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "1010396-29-8",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "yk-11",
    name: "YK-11",
    description: "Research compound for laboratory use only. Synthetic compound for use as reference material in biochemical research applications.",
    purity: "≥98% purity",
    price: "$89.99",
    image: "https://cdn03.ciceksepeti.com/cicek/kcm72860952-1/XL/sp-sarms-yk-11-myostatin-10-mg-30-ml-kcm72860952-1-04213879c9234236b0415e6a2bb70be4.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "431579-34-9",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "rad-140",
    name: "RAD-140",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for receptor-based studies in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "https://www.affordablenutrition.co.uk/wp-content/uploads/2021/03/MK677-RAD140-0-1.webp",
    category: "Experimental Compounds",
    details: {
      cas: "1182367-47-0",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "lgd-4033",
    name: "LGD-4033",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for nuclear receptor studies in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$79.99",
    image: "https://dutchsarms.nl/cdn/shop/products/ligandrol-lgd-4033-vloeibaar-300mgdutchsarms-560759.jpg?v=1702926232",
    category: "Experimental Compounds",
    details: {
      cas: "1165910-22-4",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "gw-501516",
    name: "GW-501516",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for metabolic research applications.",
    purity: "≥99% purity",
    price: "$84.99",
    image: "https://power-zone.store/791-large_default/cardarine-gw-501516-.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "317318-70-0",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "mk-2866",
    name: "MK-2866",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for protein research in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$79.99",
    image: "https://cdn03.ciceksepeti.com/cicek/kcm30437367-1/XL/vpx-pharm-sarms-ostarine-mk-2866-20mg-60-tablet-kcm30437367-1-c2366b7ad365485593e6dd7abdde5e00.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "841205-47-8",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "s-4",
    name: "S-4",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for receptor studies in controlled scientific research.",
    purity: "≥99% purity",
    price: "$79.99",
    image: "https://elitelabspeptides.com/wp-content/uploads/2019/08/S-4.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "434-07-1",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "mk-677",
    name: "MK-677",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for growth hormone secretagogue receptor studies.",
    purity: "≥98% purity",
    price: "$84.99",
    image: "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-MK-677.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "159752-10-0",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "otr-ac",
    name: "OTR-AC",
    description: "Research compound for laboratory use only. Novel synthetic compound for biochemical research applications in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$89.99",
    image: "https://receptorchem.co.uk/javascripts4/2020/09/OSTA-OTR-B.jpg",
    category: "Experimental Compounds",
    details: {
      cas: "N/A",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  
  // Category 3: Pharmaceutical Research
  {
    id: "tesofensine",
    name: "Tesofensine",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for neuroscience research in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$119.99",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/11/465501347/FX/BQ/CZ/234785810/sc-bottle-2023-tesofensine60-500x500.jpg",
    category: "Pharmaceutical Research",
    details: {
      cas: "195814-47-6",
      size: "500mcg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "slu-pp-332",
    name: "SLU-PP-332",
    description: "Research compound for laboratory use only. Novel synthetic compound for biochemical research applications in controlled laboratory settings.",
    purity: "≥98% purity",
    price: "$129.99",
    image: "https://swisschems.is/wp-content/uploads/2024/10/SLU-PP-332-1.jpg",
    category: "Pharmaceutical Research",
    details: {
      cas: "N/A",
      size: "250mcg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "isotretinoin",
    name: "Isotretinoin",
    description: "Research compound for laboratory use only. Reference compound for dermatological research in controlled laboratory settings.",
    purity: "≥99% purity",
    price: "$69.99",
    image: "https://www.anberryhospital.com/images/isotretinoin-1.png",
    category: "Pharmaceutical Research",
    details: {
      cas: "4759-48-2",
      size: "20mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "tadalafil",
    name: "Tadalafil",
    description: "Research compound for laboratory use only. Synthetic compound used as a reference material for enzyme inhibition studies in biochemical research.",
    purity: "≥99% purity",
    price: "$59.99",
    image: "https://www.solcohealthcare.com/wp-content/uploads/2022/11/Tadalafil-PAH-Bottle-20mg60ct.jpg",
    category: "Pharmaceutical Research",
    details: {
      cas: "171596-29-5",
      size: "30mg",
      storage: "Store at room temperature, away from light",
      coaLink: "#"
    }
  },
  {
    id: "liquid-tadalafil",
    name: "Liquid Tadalafil",
    description: "Research compound for laboratory use only. Liquid formulation for use as reference material in bioavailability and pharmacokinetic studies.",
    purity: "≥98% purity",
    price: "$64.99",
    image: "https://www.melanotanexpress.com/wp-content/uploads/2018/12/Yohimbine-Liquid-research-chemical-bottle-made-in-the-USA-600x600.jpg",
    category: "Pharmaceutical Research",
    details: {
      cas: "171596-29-5",
      size: "2mg",
      storage: "Store at 2-8°C, away from light",
      coaLink: "#"
    }
  }
];
