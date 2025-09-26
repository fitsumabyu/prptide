import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sv'); // Keep Swedish as primary, English as subtitle

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface BilingualTextProps {
  english: string;
  swedish: string;
  className?: string;
  showBoth?: boolean;
  englishFirst?: boolean;
  inline?: boolean; // New prop to control inline vs block display
}

const BilingualText: React.FC<BilingualTextProps> = ({ 
  english, 
  swedish, 
  className = '',
  showBoth = true, // Default to showing both for payment processor compliance
  englishFirst = false,
  inline = false // Default to block display unless specified
}) => {
  const { language } = useLanguage();

  if (showBoth) {
    if (inline) {
      // Use spans for inline content (when inside p tags)
      return (
        <span className={className}>
          {englishFirst ? (
            <>
              <span className="font-medium">{english}</span>
              <span className="text-sm text-gray-600 italic ml-1">({swedish})</span>
            </>
          ) : (
            <>
              <span className="font-medium">{swedish}</span>
              <span className="text-sm text-gray-600 italic ml-1">({english})</span>
            </>
          )}
        </span>
      );
    } else {
      // Use divs for block content
      return (
        <div className={className}>
          {englishFirst ? (
            <>
              <div className="font-medium">{english}</div>
              <div className="text-sm text-gray-600 italic">{swedish}</div>
            </>
          ) : (
            <>
              <div className="font-medium">{swedish}</div>
              <div className="text-sm text-gray-600 italic">{english}</div>
            </>
          )}
        </div>
      );
    }
  }

  return (
    <span className={className}>
      {language === 'en' ? english : swedish}
    </span>
  );
};

export default BilingualText;

// Language toggle component
export const LanguageToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="text-sm text-gray-600">Language:</span>
      <button
        onClick={() => setLanguage(language === 'en' ? 'sv' : 'en')}
        className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
      >
        <span className="text-sm font-medium">
          {language === 'en' ? '🇺🇸 EN' : '🇸🇪 SV'}
        </span>
      </button>
    </div>
  );
};
