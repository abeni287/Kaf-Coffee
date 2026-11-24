import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, readLanguage, LANGUAGE_KEY, type Language } from "@/lib/translations";
const LanguageContext = createContext({
  language: "en" as Language,
  t: translations.en,
  setLanguage: (_value: Language) => {},
});
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    try {
      setLanguageState(readLanguage(localStorage.getItem(LANGUAGE_KEY)));
    } catch {
      // Ignore storage access errors
    }
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const setLanguage = (value: Language) => {
    setLanguageState(value);
    try {
      localStorage.setItem(LANGUAGE_KEY, value);
    } catch {
      // Ignore storage access errors
    }
  };
  return (
    <LanguageContext.Provider value={{ language, t: translations[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
export const useLanguage = () => useContext(LanguageContext);
