import { PrismaClient } from '@prisma/client';
import { ShippingDestination } from "@/components/shipping/PreferredDestinations";

const prisma = new PrismaClient();

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

// Function to fetch products from database
export async function getProducts(): Promise<Product[]> {
  try {
    const protidelabProducts = await prisma.protidelabProduct.findMany({
      include: {
        swedishProduct: true,
        contents: true,
        details: true,
        shippingDestinations: true
      }
    });

    return protidelabProducts.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      swedishdescription: product.swedishdescription,
      purity: product.purity,
      price: `${product.swedishProduct.price} kr`, // Use price from Swedish product
      image: product.image,
      category: product.category,
      correlatesto: product.correlatesto,
      imagedescription: product.imagedescription,
      contents: product.contents.map(content => ({
        englishname: content.englishname,
        swedishname: content.swedishname,
        englishdescription: content.englishdescription,
        swedishdescription: content.swedishdescription,
        quantity: content.quantity || undefined,
        englishunittype: content.englishunittype || undefined,
        swedishunittype: content.swedishunittype || undefined
      })),
      details: product.details ? {
        productId: product.details.productId,
        size: product.details.size,
        storage: product.details.storage,
        coaLink: product.details.coaLink
      } : {
        productId: product.id,
        size: "Standard",
        storage: "Förvara vid rumstemperatur",
        coaLink: "/certificates/default-coa.pdf"
      },
      shippingDestinations: product.shippingDestinations.length > 0 
        ? product.shippingDestinations.map(dest => ({
            id: parseInt(dest.id),
            name: dest.name,
            description: dest.description,
            productSpecific: dest.productSpecific
          }))
        : usaStates // Default shipping destinations
    }));
  } catch (error) {
    console.error('Error fetching products from database:', error);
    // Return empty array if database is not available
    return [];
  }
}

// Function to get a single product by ID
export async function getProductById(id: string): Promise<Product | null> {
  try {
    const product = await prisma.protidelabProduct.findUnique({
      where: { id },
      include: {
        swedishProduct: true,
        contents: true,
        details: true,
        shippingDestinations: true
      }
    });

    if (!product) return null;

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      swedishdescription: product.swedishdescription,
      purity: product.purity,
      price: `${product.swedishProduct.price} kr`,
      image: product.image,
      category: product.category,
      correlatesto: product.correlatesto,
      imagedescription: product.imagedescription,
      contents: product.contents.map(content => ({
        englishname: content.englishname,
        swedishname: content.swedishname,
        englishdescription: content.englishdescription,
        swedishdescription: content.swedishdescription,
        quantity: content.quantity || undefined,
        englishunittype: content.englishunittype || undefined,
        swedishunittype: content.swedishunittype || undefined
      })),
      details: product.details ? {
        productId: product.details.productId,
        size: product.details.size,
        storage: product.details.storage,
        coaLink: product.details.coaLink
      } : {
        productId: product.id,
        size: "Standard",
        storage: "Förvara vid rumstemperatur",
        coaLink: "/certificates/default-coa.pdf"
      },
      shippingDestinations: product.shippingDestinations.length > 0 
        ? product.shippingDestinations.map(dest => ({
            id: parseInt(dest.id),
            name: dest.name,
            description: dest.description,
            productSpecific: dest.productSpecific
          }))
        : usaStates
    };
  } catch (error) {
    console.error('Error fetching product by ID from database:', error);
    return null;
  }
}

// Function to get products by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const protidelabProducts = await prisma.protidelabProduct.findMany({
      where: { category },
      include: {
        swedishProduct: true,
        contents: true,
        details: true,
        shippingDestinations: true
      }
    });

    return protidelabProducts.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      swedishdescription: product.swedishdescription,
      purity: product.purity,
      price: `${product.swedishProduct.price} kr`,
      image: product.image,
      category: product.category,
      correlatesto: product.correlatesto,
      imagedescription: product.imagedescription,
      contents: product.contents.map(content => ({
        englishname: content.englishname,
        swedishname: content.swedishname,
        englishdescription: content.englishdescription,
        swedishdescription: content.swedishdescription,
        quantity: content.quantity || undefined,
        englishunittype: content.englishunittype || undefined,
        swedishunittype: content.swedishunittype || undefined
      })),
      details: product.details ? {
        productId: product.details.productId,
        size: product.details.size,
        storage: product.details.storage,
        coaLink: product.details.coaLink
      } : {
        productId: product.id,
        size: "Standard",
        storage: "Förvara vid rumstemperatur",
        coaLink: "/certificates/default-coa.pdf"
      },
      shippingDestinations: product.shippingDestinations.length > 0 
        ? product.shippingDestinations.map(dest => ({
            id: parseInt(dest.id),
            name: dest.name,
            description: dest.description,
            productSpecific: dest.productSpecific
          }))
        : usaStates
    }));
  } catch (error) {
    console.error('Error fetching products by category from database:', error);
    return [];
  }
}

// Function to get Swedish products
export async function getSwedishProducts() {
  try {
    return await prisma.swedishProduct.findMany();
  } catch (error) {
    console.error('Error fetching Swedish products from database:', error);
    return [];
  }
}

// Close the Prisma client when done
export async function closePrismaClient() {
  await prisma.$disconnect();
}
