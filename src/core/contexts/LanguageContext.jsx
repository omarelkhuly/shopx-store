import { createContext, useState } from "react";

import en from "../../i18n/en.json";
import ar from "../../i18n/ar.json";

export const LanguageContext = createContext();

const translations = { en, ar };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const t = (path) => {
    const keys = path.split(".");
    let value = translations[language];

    keys.forEach((k) => {
      value = value?.[k];
    });

    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}