// src/core/contexts/LanguageContext.jsx
import { createContext, useState, useEffect } from "react";

import en from "../../i18n/en.json";
import ar from "../../i18n/ar.json";

export const LanguageContext = createContext();

const translations = { en, ar };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const isRTL = language === "ar";

  // 🔥 مهم جدًا: ربط الـ HTML direction
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  const t = (path) => {
    const keys = path.split(".");
    let value = translations[language];

    for (let k of keys) {
      value = value?.[k];
    }

    return value || path;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRTL,
        dir: isRTL ? "rtl" : "ltr",
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}