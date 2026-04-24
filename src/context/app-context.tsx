"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Dictionary, dictionary } from "@/lib/i18n";
import { Language, Theme } from "@/types";

type AppContextValue = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  pharmacyQuery: string;
  setPharmacyQuery: Dispatch<SetStateAction<string>>;
  medicineQuery: string;
  setMedicineQuery: Dispatch<SetStateAction<string>>;
  t: Dictionary;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

const THEME_KEY = "dorichi-theme";
const LANGUAGE_KEY = "dorichi-language";

const getStoredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }
  const value = localStorage.getItem(THEME_KEY);
  return value === "dark" || value === "light" ? value : "light";
};

const getStoredLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "uz";
  }
  const value = localStorage.getItem(LANGUAGE_KEY);
  return value === "uz" || value === "ru" || value === "en" ? value : "uz";
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);
  const [language, setLanguage] = useState<Language>(getStoredLanguage);
  const [pharmacyQuery, setPharmacyQuery] = useState("");
  const [medicineQuery, setMedicineQuery] = useState("");

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      language,
      setLanguage,
      pharmacyQuery,
      setPharmacyQuery,
      medicineQuery,
      setMedicineQuery,
      t: dictionary[language],
    }),
    [language, medicineQuery, pharmacyQuery, theme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
};
