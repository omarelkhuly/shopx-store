// src/core/hooks/useDirection.js
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function useDirection() {
  const { isRTL, dir } = useContext(LanguageContext);

  return { isRTL, dir };
}