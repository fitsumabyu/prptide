import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useShippingCountry } from "@/context/ShippingCountryContext";
import { toast } from "@/components/ui/use-toast";
import { useCountry } from "@/components/shipping/CountrySelector";
import { allCountries } from "@/components/shipping/CountrySelector";

// List of US states we ship to
const allowedStates = [
  "CA", // California
  "NY", // New York
  "TX", // Texas
  "FL", // Florida
  "IL", // Illinois
  "WA", // Washington
  "CO", // Colorado
  "MA", // Massachusetts
  "PA", // Pennsylvania
  "MI"  // Michigan
];

// All non-US countries are restricted
const restrictedCountries = [
  "GB", "CA", "DE", "NL", "SE", "DK", "FI", "NO", "IE", "NZ", 
  "AU", "FR", "IT", "ES", "JP", "KR", "SG", "AE", "IR", "KP", "SY", "CU"
];

interface HeroSectionProps {
  fullHeight?: boolean;
}

const HeroSection = ({ fullHeight = false }: HeroSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [loadingStage, setLoadingStage] = useState(1);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setCountry } = useShippingCountry();
  const { setSelectedCountry } = useCountry();
  const [locationLoading, setLocationLoading] = useState(false);

  // Set video source and start loading process
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        
        // Set the appropriate video source based on device
        setVideoSrc(mobile 
          ? "/lab.mp4" 
          : "/lab.mp4");
      };
      
      // Initial check
      checkIfMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkIfMobile);
      
      // Always show content after a timeout in case video fails to trigger events
      const timer = setTimeout(() => {
        setVideoLoaded(true);
        setIsLoading(false);
        setLoadingStage(3);
      }, 3000);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', checkIfMobile);
        clearTimeout(timer);
      };
    }
  }, []);

  // Handle video load events
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      const handleCanPlay = () => {
        setIsLoading(false);
      };
      
      const handleLoadedData = () => {
        setVideoLoaded(true);
        setLoadingStage(2);
        
        // Move to stage 3 after a short delay
        setTimeout(() => {
          setLoadingStage(3);
        }, 100);
      };
      
      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [videoRef.current]);

  // Function to detect user's location and set shipping country
  const detectUserLocation = async () => {
    setLocationLoading(true);
    try {
      // Use IP-based geolocation API
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data && data.country_code) {
        const countryCode = data.country_code;
        // Find the country name from our allCountries list
        const countryObject = allCountries.find(c => c.id === countryCode);
        
        if (countryObject) {
          // Set the country code in ShippingCountryContext
          setCountry(countryCode);
          
          // Set the country name in CountryContext (which also triggers warning messages)
          setSelectedCountry(countryObject.name);
          
          // Check if shipping is available to this country
          const isUSLocation = countryCode === "US";
          const isInternational = !isUSLocation;
          
          let toastVariant = "default";
          let toastTitle = "Domestic Shipping Available";
          let toastDescription = `We can ship to your location in the United States.`;
          
          if (isInternational) {
            toastVariant = "destructive";
            toastTitle = "International Shipping Unavailable";
            toastDescription = `Sorry, we currently only ship within the United States.`;
          }
          
          toast({
            title: toastTitle,
            description: toastDescription,
            variant: toastVariant as any,
          });
        } else {
          throw new Error(`Country code ${countryCode} not found in our database`);
        }
      } else {
        throw new Error("Couldn't determine your location");
      }
    } catch (error) {
      console.error("Error detecting location:", error);
      toast({
        title: "Location Detection Failed",
        description: "We couldn't detect your location. Please select your country manually.",
        variant: "destructive",
      });
    } finally {
      setLocationLoading(false);
    }
  };

  return (
    <div className={cn(
      "relative overflow-hidden",
      fullHeight ? "h-[80vh] -mt-[63px] -mb-[1px] pt-[60px]" : "h-[80vh]"
    )}>
      <div className="absolute inset-0 z-10">
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/70 z-5">
            <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-peptide-purple border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 bg-black/1 z-10"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
            }}
          ></div>
          
          {/* Video background */}
          {videoSrc && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover relative z-0"
            >
              <source
                src={videoSrc}
                type="video/mp4"
              />
            </video>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 [text-shadow:_0_1px_10px_rgba(0,0,0,0.9)]">
              Research-Grade Laboratory Reagents for Laboratory Use Only
            </h1>
            <p className="text-xl text-gray-100 mb-6 [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]">
              Premium quality chemical reference materials with high purity for scientific research. 
              <span className="font-semibold text-red-400"> Strictly for research purposes. Not for human consumption.</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-peptide-purple hover:bg-peptide-dark-purple">
                <Link to="/products" className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Browse Products
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white/20">
                <Link to="/about">Learn More</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white hover:bg-white/20 flex items-center"
                onClick={detectUserLocation}
                disabled={locationLoading}
              >
                <Globe className="mr-2 h-5 w-5" />
                {locationLoading ? "Detecting Location..." : "Check Shipping Availability"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
