/**
 * Country data with tax rates and shipping costs
 */

export interface CountryData {
  code: string;
  name: string;
  taxRate: number; // as decimal (e.g., 0.25 for 25%)
  shippingCost: number; // in SEK
  currency: string;
  region: string;
}

export const countries: CountryData[] = [
  // Nordic Countries
  {
    code: 'SE',
    name: 'Sverige',
    taxRate: 0.25, // 25% VAT
    shippingCost: 49, // Domestic shipping
    currency: 'SEK',
    region: 'Nordic'
  },
  {
    code: 'NO',
    name: 'Norge',
    taxRate: 0.25, // 25% VAT
    shippingCost: 89,
    currency: 'NOK',
    region: 'Nordic'
  },
  {
    code: 'DK',
    name: 'Danmark',
    taxRate: 0.25, // 25% VAT
    shippingCost: 79,
    currency: 'DKK',
    region: 'Nordic'
  },
  {
    code: 'FI',
    name: 'Finland',
    taxRate: 0.24, // 24% VAT
    shippingCost: 79,
    currency: 'EUR',
    region: 'Nordic'
  },
  
  // Other European Countries
  {
    code: 'DE',
    name: 'Tyskland',
    taxRate: 0.19, // 19% VAT
    shippingCost: 99,
    currency: 'EUR',
    region: 'Europe'
  },
  {
    code: 'NL',
    name: 'Nederländerna',
    taxRate: 0.21, // 21% VAT
    shippingCost: 99,
    currency: 'EUR',
    region: 'Europe'
  },
  {
    code: 'FR',
    name: 'Frankrike',
    taxRate: 0.20, // 20% VAT
    shippingCost: 109,
    currency: 'EUR',
    region: 'Europe'
  },
  {
    code: 'GB',
    name: 'Storbritannien',
    taxRate: 0.20, // 20% VAT
    shippingCost: 119,
    currency: 'GBP',
    region: 'Europe'
  },
  
  // North America
  {
    code: 'US',
    name: 'USA',
    taxRate: 0.08, // Average state sales tax
    shippingCost: 149,
    currency: 'USD',
    region: 'North America'
  },
  {
    code: 'CA',
    name: 'Kanada',
    taxRate: 0.13, // Average combined tax (GST + PST)
    shippingCost: 139,
    currency: 'CAD',
    region: 'North America'
  },
  {
    code: 'MX',
    name: 'Mexiko',
    taxRate: 0.16, // 16% IVA
    shippingCost: 179,
    currency: 'MXN',
    region: 'North America'
  }
];

/**
 * Get country data by country code
 */
export function getCountryByCode(code: string): CountryData | undefined {
  return countries.find(country => country.code === code);
}

/**
 * Get countries grouped by region
 */
export function getCountriesByRegion(): Record<string, CountryData[]> {
  return countries.reduce((acc, country) => {
    if (!acc[country.region]) {
      acc[country.region] = [];
    }
    acc[country.region].push(country);
    return acc;
  }, {} as Record<string, CountryData[]>);
}

/**
 * Calculate total cost including tax and shipping for a country
 */
export function calculateTotalCost(
  subtotal: number, 
  countryCode: string
): {
  subtotal: number;
  taxAmount: number;
  shippingCost: number;
  total: number;
  country: CountryData | null;
} {
  const country = getCountryByCode(countryCode);
  
  if (!country) {
    return {
      subtotal,
      taxAmount: 0,
      shippingCost: 0,
      total: subtotal,
      country: null
    };
  }
  
  const taxAmount = subtotal * country.taxRate;
  const total = subtotal + taxAmount + country.shippingCost;
  
  return {
    subtotal,
    taxAmount,
    shippingCost: country.shippingCost,
    total,
    country
  };
}
