import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy, Clock } from "lucide-react";
import { toast } from "sonner";
import QRCode from "qrcode";
import { getCachedPrices, formatCryptoAmount, formatCurrency, type PriceData } from "@/lib/price-converter";

interface CryptoPaymentFormProps {
  paymentMethod: string;
  totalAmount: number;
  onPaymentComplete: () => void;
  onBack: () => void;
}

/**
 * Generate a simple random Ethereum-style address
 */
const generateRandomAddress = (): string => {
  const chars = '0123456789abcdef';
  let address = '0x';
  for (let i = 0; i < 40; i++) {
    address += chars[Math.floor(Math.random() * chars.length)];
  }
  return address;
};

// Real-time conversion rates will be fetched from APIs

const CryptoPaymentForm: React.FC<CryptoPaymentFormProps> = ({
  paymentMethod,
  totalAmount,
  onPaymentComplete,
  onBack,
}) => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loadingPrices, setLoadingPrices] = useState(true);
  const [priceError, setPriceError] = useState<string | null>(null);
  const [cryptoAddress] = useState(() => generateRandomAddress());
  
  // Calculate crypto amount based on real-time prices
  const getCryptoAmount = () => {
    if (!priceData) return 0;
    
    const usdAmount = totalAmount * priceData.sekToUsd;
    
    switch (paymentMethod) {
      case 'ethereum':
        return usdAmount / priceData.ethUsd;
      case 'polygon':
        return usdAmount / priceData.maticUsd;
      case 'bitcoin':
        // For now, we'll use ETH price as placeholder since we don't have BTC in our API
        return usdAmount / priceData.ethUsd;
      default:
        return 0;
    }
  };
  
  const cryptoAmount = getCryptoAmount();

  // Fetch price data when component mounts
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoadingPrices(true);
        setPriceError(null);
        const prices = await getCachedPrices();
        setPriceData(prices);
      } catch (error) {
        console.error('Failed to fetch crypto prices:', error);
        setPriceError('Kunde inte hämta valutakurser. Försök igen senare.');
        toast.error('Kunde inte hämta aktuella valutakurser');
      } finally {
        setLoadingPrices(false);
      }
    };

    fetchPrices();
  }, []);

  // Generate QR code when component mounts
  useEffect(() => {
    const generateQRCode = async () => {
      try {
        // Create a payment URI with amount for better wallet compatibility
        let qrContent = cryptoAddress;
        
        // For Ethereum and Polygon, we can include the amount in the URI
        if (paymentMethod === 'ethereum' || paymentMethod === 'polygon') {
          qrContent = `${cryptoAddress}?value=${cryptoAmount}`;
        }
        
        const qrDataUrl = await QRCode.toDataURL(qrContent, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeDataUrl(qrDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    if (priceData && cryptoAmount > 0) {
      generateQRCode();
    }
  }, [cryptoAddress, cryptoAmount, paymentMethod, priceData]);

  useEffect(() => {
    if (timeLeft > 0 && !paymentConfirmed) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsExpired(true);
    }
  }, [timeLeft, paymentConfirmed]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAddress(true);
      toast.success("Adress kopierad till urklipp!");
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      toast.error("Misslyckades att kopiera adress");
    }
  };

  const handlePaymentComplete = () => {
    setPaymentConfirmed(true);
    toast.success("Betalning bekräftad! Bearbetar din beställning...");
    setTimeout(() => {
      onPaymentComplete();
    }, 2000);
  };

  const refreshPrices = async () => {
    try {
      setLoadingPrices(true);
      setPriceError(null);
      const prices = await getCachedPrices();
      setPriceData(prices);
      toast.success("Valutakurser uppdaterade!");
    } catch (error) {
      console.error('Failed to refresh prices:', error);
      setPriceError('Kunde inte uppdatera valutakurser.');
      toast.error('Kunde inte uppdatera valutakurser');
    } finally {
      setLoadingPrices(false);
    }
  };

  const getCryptoName = () => {
    switch (paymentMethod) {
      case 'bitcoin': return 'Bitcoin (BTC)';
      case 'ethereum': return 'Ethereum (ETH)';
      case 'polygon': return 'Polygon (MATIC)';
      default: return 'Cryptocurrency';
    }
  };

  const getNetworkInfo = () => {
    switch (paymentMethod) {
      case 'bitcoin': return 'Bitcoin Network';
      case 'ethereum': return 'Ethereum Network (ERC-20)';
      case 'polygon': return 'Polygon Network (ERC-20)';
      default: return 'Crypto Network';
    }
  };

  if (paymentConfirmed) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <CardTitle className="text-2xl text-green-600">Betalning bekräftad!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            Din {getCryptoName()} betalning har bekräftats och bearbetas.
          </p>
          <p className="text-sm text-gray-500">
            Du kommer att få en bekräftelse via e-post inom kort.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isExpired) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <CardTitle className="text-2xl text-red-600">Betalning löpt ut</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            Betalningsfönstret har löpt ut. Vänligen starta en ny betalningsprocess.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={onBack}>
              Tillbaka till kassan
            </Button>
            <Button onClick={() => window.location.reload()}>
              Starta ny betalning
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Slutför din {getCryptoName()} betalning</h3>
        <p className="text-gray-600">Skicka exakt belopp till adressen nedan</p>
      </div>

      {/* Timer */}
      <Alert className="border-orange-200 bg-orange-50">
        <Clock className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800">
          <strong>Återstående tid: {formatTime(timeLeft)}</strong>
          <br />
          Slutför din betalning inom denna tid för att undvika att den löper ut.
        </AlertDescription>
      </Alert>

      {/* Price Loading/Error States */}
      {loadingPrices && (
        <Alert className="border-blue-200 bg-blue-50">
          <AlertDescription className="text-blue-800">
            🔄 Hämtar aktuella valutakurser...
          </AlertDescription>
        </Alert>
      )}

      {priceError && (
        <Alert className="border-red-200 bg-red-50">
          <AlertDescription className="text-red-800 flex items-center justify-between">
            <span>❌ {priceError}</span>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={refreshPrices}
              disabled={loadingPrices}
              className="ml-2"
            >
              🔄 Försök igen
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Exchange Rates Display */}
      {priceData && !loadingPrices && (
        <Alert className="border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">
            <div className="flex items-center justify-between">
              <div>
                <strong>Aktuella valutakurser:</strong>
                <div className="text-sm mt-1">
                  1 SEK = {formatCurrency(priceData.sekToUsd, 'USD')} • 
                  1 ETH = {formatCurrency(priceData.ethUsd, 'USD')} • 
                  1 MATIC = {formatCurrency(priceData.maticUsd, 'USD')}
                </div>
                <div className="text-xs text-green-600 mt-1">
                  Uppdaterad: {new Date(priceData.timestamp).toLocaleString('sv-SE')}
                </div>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={refreshPrices}
                disabled={loadingPrices}
                className="bg-white hover:bg-green-100"
              >
                🔄 Uppdatera
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Payment Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📱 Betalningsinformation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-500">Belopp att betala</Label>
              <div className="text-2xl font-bold text-green-600">
                {priceData && cryptoAmount > 0 ? formatCryptoAmount(cryptoAmount, paymentMethod.toUpperCase()) : 'Laddar...'}
              </div>
              <div className="text-sm text-gray-500">
                ≈ {formatCurrency(totalAmount, 'SEK')}
              </div>
              {priceData && (
                <div className="text-xs text-gray-400 mt-1">
                  ≈ {formatCurrency(totalAmount * priceData.sekToUsd, 'USD')}
                </div>
              )}
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-500">Nätverk</Label>
              <div className="text-lg font-medium">
                {getNetworkInfo()}
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-500">Betalningsadress</Label>
            <div className="flex items-center gap-2 mt-1">
              <Input
                value={cryptoAddress}
                readOnly
                className="font-mono text-sm"
              />
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(cryptoAddress)}
                className={copiedAddress ? "bg-green-50 border-green-200" : ""}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-white p-4">
              {qrCodeDataUrl ? (
                <img 
                  src={qrCodeDataUrl} 
                  alt="QR-kod för betalning" 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="text-4xl text-gray-400 mb-2">📱</div>
                  <p className="text-sm text-gray-500">Genererar QR-kod...</p>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center max-w-xs">
              Skanna QR-koden med din kryptoplånbok för att betala automatiskt
            </p>
          </div>

          {/* Important Notes */}
          <Alert>
            <AlertDescription>
              <strong>⚠️ Viktigt:</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Skicka exakt {priceData && cryptoAmount > 0 ? formatCryptoAmount(cryptoAmount, paymentMethod.toUpperCase()) : 'beräknas...'}</li>
                <li>• Använd endast {getNetworkInfo()}</li>
                <li>• Skicka inte från en börsplånbok</li>
                <li>• Betalningen bekräftas automatiskt</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button variant="outline" onClick={onBack}>
          Tillbaka till kassan
        </Button>
      </div>

      {/* Mock Payment Status */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Väntar på betalningsbekräftelse...
        </p>
        <div className="flex justify-center mt-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPaymentForm;
