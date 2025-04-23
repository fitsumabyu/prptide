import React from "react";
import { Button } from "@/components/ui/button";

interface AgeVerificationProps {
  onVerify: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Age Verification</h2>
        
        <div className="mb-6 text-center">
          <p className="text-gray-700 mb-4">
            This website contains content restricted to individuals 21 years of age or older.
          </p>
          <p className="text-gray-700 mb-4">
            By clicking "I am 21 or older" you confirm that you are at least 21 years old and agree to our terms and conditions.
          </p>
          <p className="text-red-600 font-semibold">
            You must be at least 21 years old to enter this website.
          </p>
        </div>
        
        <div className="flex flex-col space-y-3">
          <Button 
            onClick={onVerify}
            className="w-full bg-peptide-purple hover:bg-peptide-dark-purple"
          >
            I am 21 or older
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => window.location.href = "https://www.google.com"}
            className="w-full"
          >
            I am under 21
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification; 