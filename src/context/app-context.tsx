"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { medicines as seedMedicines, pharmacies as seedPharmacies } from "@/lib/data";
import { getDiscountPercent, normalizeRating } from "@/lib/format";
import { Dictionary, dictionary } from "@/lib/i18n";
import {
  EMPTY_OWNER_STORAGE,
  LANGUAGE_KEY,
  LEGACY_OWNER_MEDICINES_KEY,
  LEGACY_OWNER_PHARMACY_KEY,
  OWNER_STORAGE_EVENT,
  OWNER_STORAGE_KEY,
  PREFERENCES_EVENT,
  STORAGE_VERSION,
  THEME_KEY,
  normalizeOwnerStorage,
  parseJson,
  parseTheme,
} from "@/lib/storage";
import { Language, LocalizedText, Medicine, Pharmacy, Theme } from "@/types";

const OWNER_PHARMACY_ID = "owner-pharmacy";
const DEFAULT_THEME: Theme = "light";
const DEFAULT_LANGUAGE: Language = "uz";
const EMPTY_MEDICINES: Medicine[] = [];

type PharmacyInput = {
  name: string;
  address: string;
  district: string;
  description: string;
  phone: string;
  rating: number;
  hasDelivery: boolean;
  is24x7: boolean;
  openTime: string;
  closeTime: string;
  lat: number;
  lng: number;
  images: string[];
};

type MedicineInput = {
  pharmacyId: string;
  name: string;
  description: string;
  category: string;
  price: number;
  oldPrice: number | null;
  discountPercent: number;
  isAvailable: boolean;
  stockCount: number;
  manufacturer: string;
  dosage: string;
  expiryDate: string;
  prescriptionRequired: boolean;
  tags: string[];
  image?: string;
};

type AppContextValue = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  pharmacyQuery: string;
  setPharmacyQuery: Dispatch<SetStateAction<string>>;
  medicineQuery: string;
  setMedicineQuery: Dispatch<SetStateAction<string>>;
  pharmaciesData: Pharmacy[];
  medicinesData: Medicine[];
  ownerPharmacy: Pharmacy | null;
  ownerMedicines: Medicine[];
  getPharmacyById: (id: string) => Pharmacy | undefined;
  getMedicineById: (id: string) => Medicine | undefined;
  getMedicinesByPharmacy: (pharmacyId: string) => Medicine[];
  getOwnerMedicineById: (id: string) => Medicine | undefined;
  createOwnerPharmacy: (input: PharmacyInput) => Pharmacy;
  updateOwnerPharmacy: (input: PharmacyInput) => Pharmacy | null;
  addOwnerMedicine: (input: MedicineInput) => Medicine | null;
  updateOwnerMedicine: (id: string, input: MedicineInput) => Medicine | null;
  resetOwnerData: () => void;
  exportOwnerData: () => string | null;
  importOwnerData: (payload: string) => boolean;
  t: Dictionary;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

let themeCacheRaw: string | null | undefined;
let themeCacheValue: Theme = DEFAULT_THEME;
let languageCacheRaw: string | null | undefined;
let languageCacheValue: Language = DEFAULT_LANGUAGE;

const toLocalizedText = (value: string): LocalizedText => {
  const trimmed = value.trim();
  return {
    uz: trimmed,
    ru: trimmed,
    en: trimmed,
    tr: trimmed,
  };
};

const parseLanguage = (value: string | null): Language => {
  if (value === "uz" || value === "ru" || value === "en" || value === "tr") {
    return value;
  }
  return DEFAULT_LANGUAGE;
};

const getStoredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }
  const raw = localStorage.getItem(THEME_KEY);
  if (raw === themeCacheRaw) {
    return themeCacheValue;
  }

  themeCacheRaw = raw;
  themeCacheValue = parseTheme(raw);
  return themeCacheValue;
};

const getStoredLanguage = (): Language => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }
  const raw = localStorage.getItem(LANGUAGE_KEY);
  if (raw === languageCacheRaw) {
    return languageCacheValue;
  }

  languageCacheRaw = raw;
  languageCacheValue = parseLanguage(raw);
  return languageCacheValue;
};

const getStoredOwnerSnapshot = () => {
  if (typeof window === "undefined") {
    return EMPTY_OWNER_STORAGE;
  }

  const raw = localStorage.getItem(OWNER_STORAGE_KEY);
  const legacyPharmacyRaw = localStorage.getItem(LEGACY_OWNER_PHARMACY_KEY);
  const legacyMedicinesRaw = localStorage.getItem(LEGACY_OWNER_MEDICINES_KEY);
  const parsed = parseJson<unknown>(raw);
  return normalizeOwnerStorage(parsed, legacyPharmacyRaw, legacyMedicinesRaw);
};

const persistOwnerStorage = (nextStorage: {
  ownerPharmacy: Pharmacy | null;
  ownerMedicines: Medicine[];
}) => {
  if (typeof window === "undefined") {
    return;
  }

  const next = {
    version: STORAGE_VERSION,
    ownerPharmacy: nextStorage.ownerPharmacy,
    ownerMedicines: nextStorage.ownerMedicines,
  };

  localStorage.setItem(OWNER_STORAGE_KEY, JSON.stringify(next));
  localStorage.removeItem(LEGACY_OWNER_PHARMACY_KEY);
  localStorage.removeItem(LEGACY_OWNER_MEDICINES_KEY);
  window.dispatchEvent(new Event(OWNER_STORAGE_EVENT));
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [pharmacyQuery, setPharmacyQuery] = useState("");
  const [medicineQuery, setMedicineQuery] = useState("");
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [ownerStorage, setOwnerStorage] = useState(EMPTY_OWNER_STORAGE);

  const ownerPharmacy = ownerStorage.ownerPharmacy;
  const ownerMedicines = ownerStorage.ownerMedicines;

  const pharmaciesData = ownerPharmacy ? [...seedPharmacies, ownerPharmacy] : seedPharmacies;
  const medicinesData = ownerMedicines.length > 0 ? [...seedMedicines, ...ownerMedicines] : seedMedicines;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncFromStorage = () => {
      setThemeState(getStoredTheme());
      setLanguageState(getStoredLanguage());
      setOwnerStorage(getStoredOwnerSnapshot());
    };

    syncFromStorage();
    window.addEventListener("storage", syncFromStorage);
    window.addEventListener(PREFERENCES_EVENT, syncFromStorage);
    window.addEventListener(OWNER_STORAGE_EVENT, syncFromStorage);

    return () => {
      window.removeEventListener("storage", syncFromStorage);
      window.removeEventListener(PREFERENCES_EVENT, syncFromStorage);
      window.removeEventListener(OWNER_STORAGE_EVENT, syncFromStorage);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    document.documentElement.lang = language;
  }, [language]);

  const setTheme: Dispatch<SetStateAction<Theme>> = (value) => {
    if (typeof window === "undefined") {
      return;
    }

    const currentTheme = getStoredTheme();
    const nextTheme = typeof value === "function" ? value(currentTheme) : value;
    localStorage.setItem(THEME_KEY, nextTheme);
    setThemeState(nextTheme);
    window.dispatchEvent(new Event(PREFERENCES_EVENT));
  };

  const setLanguage: Dispatch<SetStateAction<Language>> = (value) => {
    if (typeof window === "undefined") {
      return;
    }

    const currentLanguage = getStoredLanguage();
    const nextLanguage = typeof value === "function" ? value(currentLanguage) : value;
    localStorage.setItem(LANGUAGE_KEY, nextLanguage);
    setLanguageState(nextLanguage);
    window.dispatchEvent(new Event(PREFERENCES_EVENT));
  };

  const createOwnerPharmacy = (input: PharmacyInput) => {
    const normalizedImages =
      input.images.length > 0
        ? input.images.slice(0, 5)
        : [ownerPharmacy?.image ?? "/images/pharmacy-placeholder.svg"];
    const createdAt = ownerPharmacy?.createdAt ?? new Date().toISOString();
    const is24x7 = input.is24x7;

    const nextPharmacy: Pharmacy = {
      id: OWNER_PHARMACY_ID,
      name: toLocalizedText(input.name),
      address: toLocalizedText(input.address),
      district: toLocalizedText(input.district),
      description: toLocalizedText(input.description),
      phone: input.phone.trim(),
      image: normalizedImages[0] ?? "/images/pharmacy-placeholder.svg",
      images: normalizedImages,
      rating: normalizeRating(input.rating),
      hasDelivery: input.hasDelivery,
      workingHours: {
        is24x7,
        open: is24x7 ? "00:00" : input.openTime,
        close: is24x7 ? "23:59" : input.closeTime,
      },
      createdAt,
      location: {
        lat: input.lat,
        lng: input.lng,
      },
    };

    persistOwnerStorage({
      ownerPharmacy: nextPharmacy,
      ownerMedicines: ownerMedicines.map((item) => ({
        ...item,
        pharmacyId: OWNER_PHARMACY_ID,
      })),
    });

    return nextPharmacy;
  };

  const updateOwnerPharmacy = (input: PharmacyInput) => {
    if (!ownerPharmacy) {
      return null;
    }

    return createOwnerPharmacy(input);
  };

  const addOwnerMedicine = (input: MedicineInput): Medicine | null => {
    if (!ownerPharmacy) {
      return null;
    }

    const oldPrice = input.oldPrice && input.oldPrice > input.price ? input.oldPrice : null;
    const discountPercent =
      input.discountPercent > 0
        ? Math.round(input.discountPercent)
        : getDiscountPercent(input.price, oldPrice);

    const nextMedicine: Medicine = {
      id: `owner-med-${globalThis.crypto?.randomUUID?.() ?? Date.now().toString(36)}`,
      pharmacyId: input.pharmacyId || OWNER_PHARMACY_ID,
      name: toLocalizedText(input.name),
      description: toLocalizedText(input.description),
      category: toLocalizedText(input.category),
      price: Math.max(0, input.price),
      oldPrice,
      discountPercent: Math.min(95, Math.max(0, discountPercent)),
      isAvailable: input.isAvailable && input.stockCount > 0,
      stockCount: Math.max(0, Math.round(input.stockCount)),
      manufacturer: toLocalizedText(input.manufacturer),
      dosage: toLocalizedText(input.dosage),
      expiryDate: input.expiryDate,
      prescriptionRequired: input.prescriptionRequired,
      tags: input.tags.map((item) => item.trim()).filter(Boolean),
      image: input.image?.trim() || "/images/medicine-placeholder.svg",
      createdAt: new Date().toISOString(),
    };

    persistOwnerStorage({
      ownerPharmacy,
      ownerMedicines: [...ownerMedicines, nextMedicine],
    });

    return nextMedicine;
  };

  const updateOwnerMedicine = (id: string, input: MedicineInput): Medicine | null => {
    if (!ownerPharmacy) {
      return null;
    }

    let updatedMedicine: Medicine | null = null;
    const nextMedicines = ownerMedicines.map((item) => {
      if (item.id !== id) {
        return item;
      }

      const oldPrice = input.oldPrice && input.oldPrice > input.price ? input.oldPrice : null;
      const discountPercent =
        input.discountPercent > 0
          ? Math.round(input.discountPercent)
          : getDiscountPercent(input.price, oldPrice);

      updatedMedicine = {
        ...item,
        pharmacyId: input.pharmacyId || item.pharmacyId,
        name: toLocalizedText(input.name),
        description: toLocalizedText(input.description),
        category: toLocalizedText(input.category),
        price: Math.max(0, input.price),
        oldPrice,
        discountPercent: Math.min(95, Math.max(0, discountPercent)),
        isAvailable: input.isAvailable && input.stockCount > 0,
        stockCount: Math.max(0, Math.round(input.stockCount)),
        manufacturer: toLocalizedText(input.manufacturer),
        dosage: toLocalizedText(input.dosage),
        expiryDate: input.expiryDate,
        prescriptionRequired: input.prescriptionRequired,
        tags: input.tags.map((tag) => tag.trim()).filter(Boolean),
        image: input.image?.trim() || item.image || "/images/medicine-placeholder.svg",
      };

      return updatedMedicine;
    });

    persistOwnerStorage({
      ownerPharmacy,
      ownerMedicines: nextMedicines,
    });

    return updatedMedicine;
  };

  const resetOwnerData = () => {
    persistOwnerStorage({
      ownerPharmacy: null,
      ownerMedicines: EMPTY_MEDICINES,
    });
  };

  const exportOwnerData = () => {
    if (typeof window === "undefined") {
      return null;
    }

    const snapshot = getStoredOwnerSnapshot();
    return JSON.stringify(snapshot, null, 2);
  };

  const importOwnerData = (payload: string) => {
    const parsed = parseJson<unknown>(payload);
    if (!parsed) {
      return false;
    }

    const normalized = normalizeOwnerStorage(parsed);
    persistOwnerStorage({
      ownerPharmacy: normalized.ownerPharmacy,
      ownerMedicines: normalized.ownerMedicines,
    });
    return true;
  };

  const getPharmacyById = (id: string) => pharmaciesData.find((item) => item.id === id);
  const getMedicineById = (id: string) => medicinesData.find((item) => item.id === id);
  const getMedicinesByPharmacy = (pharmacyId: string) =>
    medicinesData.filter((item) => item.pharmacyId === pharmacyId);
  const getOwnerMedicineById = (id: string) => ownerMedicines.find((item) => item.id === id);

  const value: AppContextValue = {
    theme,
    setTheme,
    language,
    setLanguage,
    pharmacyQuery,
    setPharmacyQuery,
    medicineQuery,
    setMedicineQuery,
    pharmaciesData,
    medicinesData,
    ownerPharmacy,
    ownerMedicines,
    getPharmacyById,
    getMedicineById,
    getMedicinesByPharmacy,
    getOwnerMedicineById,
    createOwnerPharmacy,
    updateOwnerPharmacy,
    addOwnerMedicine,
    updateOwnerMedicine,
    resetOwnerData,
    exportOwnerData,
    importOwnerData,
    t: dictionary[language],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
};
