import { Product } from './protidelabproducts';
import { SwedishProduct, swedishProducts } from './swedishproducts';

export interface ProductMapping {
  // The product ID from the current site (this site)
  currentProductId: string;
  // The Swedish product ID that maps to this current product (1-to-1)
  swedishProductId: string;
  // The compound name that links them (for inventory tracking)
  compoundName: string;
}

/**
 * Mapping between current site products and Swedish site products
 * This enables 1-to-1 relationships where one product on this site
 * maps to one specific variant on the Swedish site
 */
export const productMappings: ProductMapping[] = [
  {
    currentProductId: "88815",
    swedishProductId: "88815p2", // Metabolic Integrity Protocol - Phase II ↔ Semaglutide 10mg
    compoundName: "semaglutide"
  },
  {
    currentProductId: "88816",
    swedishProductId: "88816p1", // Body Recomposition Stack - Foundation ↔ Tirzepatide 5mg
    compoundName: "tirzepatide"
  },
  {
    currentProductId: "88817",
    swedishProductId: "88817p1", // Tri-Factor Metabolic Protocol - I ↔ Retatrutide 4mg
    compoundName: "retatrutide"
  },
  {
    currentProductId: "88818",
    swedishProductId: "88818p1", // Dermal Remodeling Matrix - Foundation ↔ GHK-Cu 50mg
    compoundName: "ghk-cu"
  },
  {
    currentProductId: "88819",
    swedishProductId: "88819p1", // Systemic Dryness Protocol - I ↔ Roaccutan 1000mg
    compoundName: "isotretinoin"
  }
];

/**
 * Helper function to get Swedish product for a given current product ID (1-to-1)
 */
export function getSwedishProductForCurrentProduct(currentProductId: string): SwedishProduct | null {
  const mapping = productMappings.find(m => m.currentProductId === currentProductId);
  if (!mapping) return null;
  
  return swedishProducts.find((product: SwedishProduct) => 
    product.id === mapping.swedishProductId
  ) || null;
}

/**
 * Helper function to get the compound name for inventory tracking
 */
export function getCompoundNameForProduct(productId: string): string | null {
  const mapping = productMappings.find(m => m.currentProductId === productId);
  return mapping ? mapping.compoundName : null;
}

/**
 * Helper function to check if a Swedish product affects inventory for a current product
 */
export function doesSwedishProductAffectInventory(
  swedishProductId: string, 
  currentProductId: string
): boolean {
  const mapping = productMappings.find(m => m.currentProductId === currentProductId);
  return mapping ? mapping.swedishProductId === swedishProductId : false;
}

/**
 * Helper function to extract base product ID from a permutation ID
 * Example: "88815p3" -> "88815"
 */
export function getBaseProductId(permutationId: string): string {
  const match = permutationId.match(/^(\d+)p\d+$/);
  return match ? match[1] : permutationId;
}

/**
 * Helper function to get the mapped Swedish product ID for a base product ID
 * Example: "88815" -> "88815p2"
 */
export function getMappedSwedishProductId(baseProductId: string): string | null {
  const mapping = productMappings.find(m => m.currentProductId === baseProductId);
  return mapping ? mapping.swedishProductId : null;
}

/**
 * Helper function to check if an ID is a permutation (has p# suffix)
 */
export function isPermutationId(productId: string): boolean {
  return /^\d+p\d+$/.test(productId);
}

/**
 * Helper function to get the compound name from any product ID (base or permutation)
 */
export function getCompoundNameFromAnyId(productId: string): string | null {
  const baseId = isPermutationId(productId) ? getBaseProductId(productId) : productId;
  return getCompoundNameForProduct(baseId);
}

/**
 * Helper function to find the current product ID from a Swedish product ID
 * Example: "88815p2" -> "88815"
 */
export function getCurrentProductIdFromSwedishId(swedishProductId: string): string | null {
  const mapping = productMappings.find(m => m.swedishProductId === swedishProductId);
  return mapping ? mapping.currentProductId : null;
}

/**
 * Helper function to get the Swedish product details from a Swedish product ID
 */
export function getSwedishProductById(swedishProductId: string): SwedishProduct | null {
  return swedishProducts.find(product => product.id === swedishProductId) || null;
}
