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
}

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
    }
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
  },
  {
    id: "ghrp-6",
    name: "GHRP-6",
    description: "Growth Hormone Releasing Peptide-6 is a synthetic hexapeptide that has been studied for its effects on growth hormone secretion in laboratory research settings.",
    purity: "≥99% purity",
    price: "$79.99",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/KQ/QQ/IZ/146558672/ghrp-6-5mg-500x500.jpg",
    category: "Growth Hormone",
    details: {
      cas: "87616-84-0",
      size: "5mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "melanotan-ii",
    name: "Melanotan II",
    description: "Melanotan II is a synthetic analog of alpha-melanocyte stimulating hormone (α-MSH). It has been used in laboratory research involving melanocortin receptors.",
    purity: "≥99% purity",
    price: "$69.99",
    image: "https://m.media-amazon.com/images/I/41cj9xidoEL.jpg",
    category: "Melanocortin",
    details: {
      cas: "121062-08-6",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    description: "Glycine-Histidine-Lysine Copper Peptide is a naturally occurring copper complex of the tripeptide GHK found in human plasma. It has been studied for various cellular effects in laboratory settings.",
    purity: "≥98% purity",
    price: "$84.99",
    image: "https://synthagenlabs.com/wp-content/uploads/2024/06/12.png",
    category: "Cosmetic Research",
    details: {
      cas: "89030-95-5",
      size: "10mg",
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
    image: "https://elive-health.com/wp-content/uploads/2024/09/PT-141.png",
    category: "Melanocortin",
    details: {
      cas: "189691-06-3",
      size: "10mg",
      storage: "Store at -20°C, away from light",
      coaLink: "#"
    }
  }
];
