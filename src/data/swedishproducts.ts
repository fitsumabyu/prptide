export interface SwedishProduct {
  id: string;
  name: string;
  size: string;
  price: number; // in SEK
  compound: string; // base compound name
}

export const swedishProducts: SwedishProduct[] = [
  // Semaglutide variants - Base ID: 88815
  {
    id: "88815p1",
    name: "Semaglutide",
    size: "5mg",
    price: 1500,
    compound: "semaglutide"
  },
  {
    id: "88815p2",
    name: "Semaglutide",
    size: "10mg",
    price: 2500,
    compound: "semaglutide"
  },
  {
    id: "88815p3",
    name: "Semaglutide",
    size: "20mg",
    price: 4500,
    compound: "semaglutide"
  },
  {
    id: "88815p4",
    name: "Semaglutide",
    size: "40mg",
    price: 8500,
    compound: "semaglutide"
  },
  
  // Tirzepatide variants - Base ID: 88816
  {
    id: "88816p1",
    name: "Tirzepatide",
    size: "5mg",
    price: 699,
    compound: "tirzepatide"
  },
  {
    id: "88816p2",
    name: "Tirzepatide",
    size: "10mg",
    price: 1398,
    compound: "tirzepatide"
  },
  {
    id: "88816p3",
    name: "Tirzepatide",
    size: "20mg",
    price: 2796,
    compound: "tirzepatide"
  },
  {
    id: "88816p4",
    name: "Tirzepatide",
    size: "40mg",
    price: 5592,
    compound: "tirzepatide"
  },
  
  // Retatrutide variants - Base ID: 88817
  {
    id: "88817p1",
    name: "Retatrutide",
    size: "4mg",
    price: 1000,
    compound: "retatrutide"
  },
  {
    id: "88817p2",
    name: "Retatrutide",
    size: "8mg",
    price: 1800,
    compound: "retatrutide"
  },
  {
    id: "88817p3",
    name: "Retatrutide",
    size: "20mg",
    price: 5000,
    compound: "retatrutide"
  },
  {
    id: "88817p4",
    name: "Retatrutide",
    size: "40mg",
    price: 9000,
    compound: "retatrutide"
  },
  
  // GHK-Cu variants - Base ID: 88818
  {
    id: "88818p1",
    name: "GHK-Cu",
    size: "50mg",
    price: 600,
    compound: "ghk-cu"
  },
  {
    id: "88818p2",
    name: "GHK-Cu",
    size: "100mg",
    price: 1000,
    compound: "ghk-cu"
  },
  {
    id: "88818p3",
    name: "GHK-Cu",
    size: "200mg",
    price: 1900,
    compound: "ghk-cu"
  },
  {
    id: "88818p4",
    name: "GHK-Cu",
    size: "400mg",
    price: 3600,
    compound: "ghk-cu"
  },
  
  // Roaccutan (Isotretinoin) variants - Base ID: 88819
  {
    id: "88819p1",
    name: "Roaccutan",
    size: "1000mg",
    price: 700,
    compound: "isotretinoin"
  },
  {
    id: "88819p2",
    name: "Roaccutan",
    size: "2000mg",
    price: 1200,
    compound: "isotretinoin"
  },
  {
    id: "88819p3",
    name: "Roaccutan",
    size: "4000mg",
    price: 2000,
    compound: "isotretinoin"
  },
  {
    id: "88819p4",
    name: "Roaccutan",
    size: "8000mg",
    price: 3700,
    compound: "isotretinoin"
  }
];