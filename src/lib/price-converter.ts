/**
 * Price conversion utility for SEK to crypto conversions
 * Supports ETH and MATIC with multiple API fallbacks
 */

export interface PriceData {
  sekToUsd: number;
  ethUsd: number;
  maticUsd: number;
  timestamp: number;
  source: string;
}

export interface ConversionResult {
  sekAmount: number;
  usdAmount: number;
  ethAmount: number;
  maticAmount: number;
  rates: PriceData;
}

class PriceConverterError extends Error {
  constructor(message: string, public source?: string) {
    super(message);
    this.name = 'PriceConverterError';
  }
}

/**
 * Fetch SEK/USD exchange rate from multiple sources with fallback
 */
async function fetchSekUsdRate(): Promise<{ rate: number; source: string }> {
  const sources = [
    {
      name: 'ExchangeRate-API',
      fetcher: async () => {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        if (!data.rates?.SEK) throw new Error('Invalid response format');
        return 1 / data.rates.SEK; // Convert USD/SEK to SEK/USD
      }
    },
    {
      name: 'FreeExchangeRateApi',
      fetcher: async () => {
        const response = await fetch('https://api.freeexchangerateapi.com/latest');
        const data = await response.json();
        if (!data.rates?.SEK) throw new Error('Invalid response format');
        return 1 / data.rates.SEK; // Convert USD/SEK to SEK/USD
      }
    }
  ];

  for (const source of sources) {
    try {
      const rate = await source.fetcher();
      console.log(`✅ SEK/USD rate fetched from ${source.name}: ${rate.toFixed(4)}`);
      return { rate, source: source.name };
    } catch (error) {
      console.warn(`❌ Failed to fetch SEK/USD from ${source.name}:`, error);
    }
  }

  throw new PriceConverterError('Failed to fetch SEK/USD rate from all sources');
}

/**
 * Fetch crypto prices (ETH, MATIC) in USD from multiple sources with fallback
 */
async function fetchCryptoPrices(): Promise<{ ethUsd: number; maticUsd: number; source: string }> {
  const sources = [
    {
      name: 'CoinGecko',
      fetcher: async () => {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,matic-network&vs_currencies=usd');
        const data = await response.json();
        if (!data.ethereum?.usd || !data['matic-network']?.usd) {
          throw new Error('Invalid response format');
        }
        return {
          ethUsd: data.ethereum.usd,
          maticUsd: data['matic-network'].usd
        };
      }
    },
    {
      name: 'DIA',
      fetcher: async () => {
        const [ethResponse, maticResponse] = await Promise.all([
          fetch('https://api.diadata.org/v1/quotation/ETH'),
          fetch('https://api.diadata.org/v1/quotation/MATIC')
        ]);
        
        const ethData = await ethResponse.json();
        const maticData = await maticResponse.json();
        
        if (!ethData.Price || !maticData.Price) {
          throw new Error('Invalid response format');
        }
        
        return {
          ethUsd: ethData.Price,
          maticUsd: maticData.Price
        };
      }
    },
    {
      name: 'CryptoCompare',
      fetcher: async () => {
        const [ethResponse, maticResponse] = await Promise.all([
          fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'),
          fetch('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD')
        ]);
        
        const ethData = await ethResponse.json();
        const maticData = await maticResponse.json();
        
        if (!ethData.USD || !maticData.USD) {
          throw new Error('Invalid response format');
        }
        
        return {
          ethUsd: ethData.USD,
          maticUsd: maticData.USD
        };
      }
    }
  ];

  for (const source of sources) {
    try {
      const prices = await source.fetcher();
      console.log(`✅ Crypto prices fetched from ${source.name}: ETH=$${prices.ethUsd.toFixed(2)}, MATIC=$${prices.maticUsd.toFixed(4)}`);
      return { ...prices, source: source.name };
    } catch (error) {
      console.warn(`❌ Failed to fetch crypto prices from ${source.name}:`, error);
    }
  }

  throw new PriceConverterError('Failed to fetch crypto prices from all sources');
}

/**
 * Get current price data for all conversions
 */
export async function getCurrentPrices(): Promise<PriceData> {
  try {
    const [forexResult, cryptoResult] = await Promise.all([
      fetchSekUsdRate(),
      fetchCryptoPrices()
    ]);

    return {
      sekToUsd: forexResult.rate,
      ethUsd: cryptoResult.ethUsd,
      maticUsd: cryptoResult.maticUsd,
      timestamp: Date.now(),
      source: `Forex: ${forexResult.source}, Crypto: ${cryptoResult.source}`
    };
  } catch (error) {
    console.error('Failed to fetch current prices:', error);
    throw error;
  }
}

/**
 * Convert SEK amount to crypto amounts using current market rates
 */
export async function convertSekToCrypto(sekAmount: number): Promise<ConversionResult> {
  const rates = await getCurrentPrices();
  
  const usdAmount = sekAmount * rates.sekToUsd;
  const ethAmount = usdAmount / rates.ethUsd;
  const maticAmount = usdAmount / rates.maticUsd;

  return {
    sekAmount,
    usdAmount,
    ethAmount,
    maticAmount,
    rates
  };
}

/**
 * Format crypto amount for display with appropriate decimal places
 */
export function formatCryptoAmount(amount: number, symbol: string): string {
  const decimals = symbol === 'ETH' ? 6 : 2; // ETH needs more decimals, MATIC can use 2
  return `${amount.toFixed(decimals)} ${symbol}`;
}

/**
 * Format currency amount for display
 */
export function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: currency === 'USD' ? 2 : 2
  }).format(amount);
}

/**
 * Get cached prices (for development/testing)
 * In production, you'd want to implement proper caching with expiration
 */
let priceCache: { data: PriceData; expiry: number } | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getCachedPrices(): Promise<PriceData> {
  if (priceCache && Date.now() < priceCache.expiry) {
    console.log('📦 Using cached prices');
    return priceCache.data;
  }

  const prices = await getCurrentPrices();
  priceCache = {
    data: prices,
    expiry: Date.now() + CACHE_DURATION
  };

  return prices;
}
