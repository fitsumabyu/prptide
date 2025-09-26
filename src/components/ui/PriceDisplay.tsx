import React, { useEffect, useState } from 'react';
import { PriceData, getCachedPrices, formatCurrency } from '@/lib/price-converter';

interface PriceDisplayProps {
  sekPrice: number | string;
  className?: string;
  showUSDFirst?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ 
  sekPrice, 
  className = '', 
  showUSDFirst = false,
  size = 'md'
}) => {
  const [usdPrice, setUsdPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Parse SEK price - handle both number and string formats
  const parsedSekPrice = typeof sekPrice === 'string' 
    ? parseFloat(sekPrice.replace(/[^\d.]/g, '')) 
    : sekPrice;

  useEffect(() => {
    const fetchUsdPrice = async () => {
      try {
        setLoading(true);
        const priceData: PriceData = await getCachedPrices();
        const converted = parsedSekPrice * priceData.sekToUsd;
        setUsdPrice(converted);
      } catch (err) {
        console.error('Failed to convert price:', err);
        setUsdPrice(null);
      } finally {
        setLoading(false);
      }
    };

    if (parsedSekPrice > 0) {
      fetchUsdPrice();
    }
  }, [parsedSekPrice]);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const sekDisplay = (
    <span className="text-blue-600 font-semibold">
      {parsedSekPrice.toLocaleString('sv-SE')} kr
    </span>
  );

  const usdDisplay = loading ? (
    <span className="text-gray-400 animate-pulse">Loading USD...</span>
  ) : usdPrice ? (
    <span className="text-green-600 font-semibold">
      ${usdPrice.toFixed(2)} USD
    </span>
  ) : (
    <span className="text-gray-400">USD unavailable</span>
  );

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {showUSDFirst ? (
        <div className="space-y-1">
          <div>{usdDisplay}</div>
          <div className="text-sm opacity-75">{sekDisplay}</div>
        </div>
      ) : (
        <div className="space-y-1">
          <div>{sekDisplay}</div>
          <div className="text-sm opacity-75">{usdDisplay}</div>
        </div>
      )}
    </div>
  );
};

export default PriceDisplay;
