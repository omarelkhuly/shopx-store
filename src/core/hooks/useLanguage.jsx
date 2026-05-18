import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function useLanguage() {
  const { language, setLanguage, t } = useContext(LanguageContext);

  return {
    language,
    setLanguage,
    t
  };
}