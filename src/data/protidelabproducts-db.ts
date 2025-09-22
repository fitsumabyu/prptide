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
  swedishname: string;
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

// Function to generate Swedish name from English name
function generateSwedishName(englishName: string): string {
  const nameMap: { [key: string]: string } = {
    'Anti-Swell Facial Remedy 1': 'Anti-Svullnad Ansiktsbehandling 1',
    'Anti-Swell Facial Remedy 2': 'Anti-Svullnad Ansiktsbehandling 2', 
    'Anti-Swell Facial Remedy 3': 'Anti-Svullnad Ansiktsbehandling 3',
    'Anti-Swell Facial Remedy 4': 'Anti-Svullnad Ansiktsbehandling 4',
    'Facial Hydro Focus 1': 'Ansikts Hydro Fokus 1',
    'Facial Hydro Focus 2': 'Ansikts Hydro Fokus 2',
    'Facial Hydro Focus 3': 'Ansikts Hydro Fokus 3', 
    'Facial Hydro Focus 4': 'Ansikts Hydro Fokus 4',
    'Destressing Recovery 1': 'Avstressa Återhämtning 1',
    'Destressing Recovery 2': 'Avstressa Återhämtning 2',
    'Destressing Recovery 3': 'Avstressa Återhämtning 3',
    'Destressing Recovery 4': 'Avstressa Återhämtning 4',
    'Skin Revival Recovery 1': 'Hud Återupplivning 1',
    'Skin Revival Recovery 2': 'Hud Återupplivning 2',
    'Skin Revival Recovery 3': 'Hud Återupplivning 3',
    'Skin Revival Recovery 4': 'Hud Återupplivning 4',
    'Electrolyte Salt GI Biome Complex 1': 'Elektrolyt Salt GI Biom Komplex 1',
    'Electrolyte Salt GI Biome Complex 2': 'Elektrolyt Salt GI Biom Komplex 2',
    'Electrolyte Salt GI Biome Complex 3': 'Elektrolyt Salt GI Biom Komplex 3',
    'Electrolyte Salt GI Biome Complex 4': 'Elektrolyt Salt GI Biom Komplex 4'
  };
  
  return nameMap[englishName] || englishName;
}

// Function to fetch products from database
export async function getProducts(): Promise<Product[]> {
  try {
    const orderableProductBundles = await prisma.orderableProductBundle.findMany({
      include: {
        bundleItems: {
          include: {
            individualProduct: true
          }
        },
        shippingDestinations: true
      }
    });

    return orderableProductBundles.map(bundle => ({
      id: bundle.id,
      name: bundle.name,
      swedishname: bundle.swedishname,
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
        swedishname: item.individualProduct.swedishname,
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
    const bundle = await prisma.orderableProductBundle.findUnique({
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
      swedishname: bundle.swedishname,
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
        swedishname: item.individualProduct.swedishname,
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
    const orderableProductBundles = await prisma.orderableProductBundle.findMany({
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

    return orderableProductBundles.map(bundle => ({
      id: bundle.id,
      name: bundle.name,
      swedishname: bundle.swedishname,
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
        swedishname: item.individualProduct.swedishname,
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
