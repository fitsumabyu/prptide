import React, { useEffect, useState } from 'react';
import { PriceData, getCachedPrices } from '@/lib/price-converter';

interface ExchangeRateDisplayProps {
  className?: string;
}

const ExchangeRateDisplay: React.FC<ExchangeRateDisplayProps> = ({ className = '' }) => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setLoading(true);
        setError(null);
        const priceData: PriceData = await getCachedPrices();
        setExchangeRate(priceData.sekToUsd);
        setLastUpdated(new Date(priceData.timestamp));
      } catch (err) {
        console.error('Failed to fetch exchange rate:', err);
        setError('Unable to fetch exchange rate');
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
    
    // Update every 5 minutes
    const interval = setInterval(fetchExchangeRate, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className={`text-sm text-gray-600 ${className}`}>
        <span className="animate-pulse">Loading exchange rate...</span>
      </div>
    );
  }

  if (error || !exchangeRate) {
    return (
      <div className={`text-sm text-red-600 ${className}`}>
        {error || 'Exchange rate unavailable'}
      </div>
    );
  }

  return (
    <div className={`text-sm text-gray-700 ${className}`}>
      <div className="flex items-center space-x-2">
        <span className="font-medium">USD/SEK:</span>
        <span className="font-mono bg-green-50 px-2 py-1 rounded border">
          ${(1 / exchangeRate).toFixed(4)}
        </span>
        {lastUpdated && (
          <span className="text-xs text-gray-500">
            Updated: {lastUpdated.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        )}
      </div>
      <div className="text-xs text-gray-500 mt-1">
        1 USD = {(1 / exchangeRate).toFixed(2)} SEK | 1 SEK = ${exchangeRate.toFixed(4)} USD
      </div>
    </div>
  );
};

export default ExchangeRateDisplay;
