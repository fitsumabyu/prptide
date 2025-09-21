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
    const productBundles = await prisma.productBundle.findMany({
      include: {
        bundleItems: {
          include: {
            individualProduct: true
          }
        },
        shippingDestinations: true
      }
    });

    return productBundles.map(bundle => ({
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
        swedishname: item.individualProduct.name, // Could be enhanced with Swedish names
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
      shippingDestinations: bundle.shippingDestinations.length > 0 
        ? bundle.shippingDestinations.map(dest => ({
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
    const bundle = await prisma.productBundle.findUnique({
      where: { id },
      include: {
        bundleItems: {
          include: {
            individualProduct: true
          }
        },
        shippingDestinations: true
      }
    });

    if (!bundle) return null;

    return {
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
        swedishname: item.individualProduct.name,
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
      shippingDestinations: bundle.shippingDestinations.length > 0 
        ? bundle.shippingDestinations.map(dest => ({
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
    const productBundles = await prisma.productBundle.findMany({
      where: { category },
      include: {
        bundleItems: {
          include: {
            individualProduct: true
          }
        },
        shippingDestinations: true
      }
    });

    return productBundles.map(bundle => ({
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
        swedishname: item.individualProduct.name,
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
      shippingDestinations: bundle.shippingDestinations.length > 0 
        ? bundle.shippingDestinations.map(dest => ({
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
