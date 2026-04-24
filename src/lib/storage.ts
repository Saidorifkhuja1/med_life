import { LocalizedText, Medicine, Pharmacy, Theme, WorkingHours } from "@/types";
import { getDiscountPercent, normalizeRating } from "@/lib/format";

export const THEME_KEY = "dorichi-theme";
export const LANGUAGE_KEY = "dorichi-language";
export const OWNER_STORAGE_KEY = "dorichi-owner-storage";
export const OWNER_STORAGE_EVENT = "dorichi-owner-storage-change";
export const PREFERENCES_EVENT = "dorichi-preferences-change";
export const LEGACY_OWNER_PHARMACY_KEY = "dorichi-owner-pharmacy";
export const LEGACY_OWNER_MEDICINES_KEY = "dorichi-owner-medicines";
export const STORAGE_VERSION = 2;
const FALLBACK_DATE = "2026-01-01T00:00:00.000Z";

export type OwnerStorage = {
  version: number;
  ownerPharmacy: Pharmacy | null;
  ownerMedicines: Medicine[];
};

const FALLBACK_THEME: Theme = "light";
const EMPTY_OWNER_MEDICINES: Medicine[] = [];

export const EMPTY_OWNER_STORAGE: OwnerStorage = {
  version: STORAGE_VERSION,
  ownerPharmacy: null,
  ownerMedicines: EMPTY_OWNER_MEDICINES,
};

type UnknownRecord = Record<string, unknown>;

export const parseTheme = (value: string | null): Theme => {
  if (value === "dark" || value === "light") {
    return value;
  }
  return FALLBACK_THEME;
};

export const parseJson = <T>(raw: string | null): T | null => {
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

const toLocalized = (value: unknown, fallback: string): LocalizedText => {
  if (isRecord(value)) {
    return {
      uz: toString(value.uz, fallback),
      ru: toString(value.ru, fallback),
      en: toString(value.en, fallback),
      tr: toString(value.tr, fallback),
    };
  }

  const normalized = toString(value, fallback);
  return {
    uz: normalized,
    ru: normalized,
    en: normalized,
    tr: normalized,
  };
};

const toString = (value: unknown, fallback = ""): string => {
  return typeof value === "string" ? value : fallback;
};

const toNumber = (value: unknown, fallback = 0): number => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string") {
    const parsed = Number.parseFloat(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  return fallback;
};

const toBoolean = (value: unknown, fallback = false): boolean => {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "string") {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
  }
  return fallback;
};

const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null;

const normalizeDate = (value: unknown): string => {
  if (typeof value !== "string") {
    return FALLBACK_DATE;
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return FALLBACK_DATE;
  }

  return value;
};

const normalizeWorkingHours = (value: unknown): WorkingHours => {
  if (!isRecord(value)) {
    return {
      is24x7: false,
      open: "08:00",
      close: "22:00",
    };
  }

  return {
    is24x7: toBoolean(value.is24x7, false),
    open: normalizeTime(toString(value.open, "08:00")),
    close: normalizeTime(toString(value.close, "22:00")),
  };
};

const normalizeTime = (value: string): string => {
  const parts = value.split(":");
  if (parts.length !== 2) {
    return "08:00";
  }

  const hours = Number.parseInt(parts[0] ?? "", 10);
  const minutes = Number.parseInt(parts[1] ?? "", 10);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) {
    return "08:00";
  }

  const clampedHours = Math.min(23, Math.max(0, hours));
  const clampedMinutes = Math.min(59, Math.max(0, minutes));
  return `${String(clampedHours).padStart(2, "0")}:${String(clampedMinutes).padStart(2, "0")}`;
};

const normalizeImages = (value: unknown, fallbackImage: string): string[] => {
  if (Array.isArray(value)) {
    const onlyStrings = value.filter((item): item is string => typeof item === "string");
    if (onlyStrings.length > 0) {
      return onlyStrings.slice(0, 5);
    }
  }

  return [fallbackImage];
};

const normalizePharmacy = (value: unknown): Pharmacy | null => {
  if (!isRecord(value)) {
    return null;
  }

  const lat =
    isRecord(value.location) && Number.isFinite(value.location.lat)
      ? toNumber(value.location.lat)
      : toNumber(value.lat, 41.3111);
  const lng =
    isRecord(value.location) && Number.isFinite(value.location.lng)
      ? toNumber(value.location.lng)
      : toNumber(value.lng, 69.2797);

  const baseImage = toString(value.image, "/images/pharmacy-placeholder.svg");
  const images = normalizeImages(value.images, baseImage);

  return {
    id: toString(value.id, "owner-pharmacy"),
    name: toLocalized(value.name, "Owner Pharmacy"),
    address: toLocalized(value.address, "Address"),
    district: toLocalized(value.district, "District"),
    description: toLocalized(value.description, "Description"),
    phone: toString(value.phone, ""),
    image: images[0] ?? "/images/pharmacy-placeholder.svg",
    images,
    rating: normalizeRating(toNumber(value.rating, 0)),
    hasDelivery: toBoolean(value.hasDelivery, false),
    workingHours: normalizeWorkingHours(value.workingHours),
    createdAt: normalizeDate(value.createdAt),
    location: {
      lat,
      lng,
    },
  };
};

const normalizeMedicine = (value: unknown): Medicine | null => {
  if (!isRecord(value)) {
    return null;
  }

  const price = Math.max(0, toNumber(value.price, 0));
  const oldPriceRaw = toNumber(value.oldPrice, 0);
  const oldPrice = oldPriceRaw > 0 ? oldPriceRaw : null;
  const discountPercentFromPrices = getDiscountPercent(price, oldPrice);
  const discountPercent = Math.max(
    0,
    Math.min(95, Math.round(toNumber(value.discountPercent, discountPercentFromPrices))),
  );
  const stockCount = Math.max(0, Math.round(toNumber(value.stockCount, 0)));

  return {
    id: toString(value.id, "owner-med-unknown"),
    pharmacyId: toString(value.pharmacyId, "owner-pharmacy"),
    name: toLocalized(value.name, "Medicine"),
    description: toLocalized(value.description, "Description"),
    category: toLocalized(value.category, "General"),
    price,
    oldPrice,
    discountPercent,
    isAvailable: toBoolean(value.isAvailable, stockCount > 0),
    stockCount,
    manufacturer: toLocalized(value.manufacturer, "Unknown"),
    dosage: toLocalized(value.dosage, "-"),
    expiryDate: toString(value.expiryDate, "2027-01-01"),
    prescriptionRequired: toBoolean(value.prescriptionRequired, false),
    tags: Array.isArray(value.tags)
      ? value.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    image: toString(value.image, "/images/medicine-placeholder.svg"),
    createdAt: normalizeDate(value.createdAt),
  };
};

const fromLegacy = (
  legacyPharmacyRaw: string | null,
  legacyMedicinesRaw: string | null,
): OwnerStorage => {
  const legacyPharmacy = normalizePharmacy(parseJson(legacyPharmacyRaw));
  const legacyMedicinesParsed = parseJson<unknown[]>(legacyMedicinesRaw);
  const legacyMedicines =
    Array.isArray(legacyMedicinesParsed)
      ? legacyMedicinesParsed
          .map((item) => normalizeMedicine(item))
          .filter((item): item is Medicine => item !== null)
      : EMPTY_OWNER_MEDICINES;

  return {
    version: STORAGE_VERSION,
    ownerPharmacy: legacyPharmacy,
    ownerMedicines: legacyMedicines,
  };
};

export const normalizeOwnerStorage = (
  storageRaw: unknown,
  legacyPharmacyRaw: string | null = null,
  legacyMedicinesRaw: string | null = null,
): OwnerStorage => {
  if (!isRecord(storageRaw)) {
    return fromLegacy(legacyPharmacyRaw, legacyMedicinesRaw);
  }

  const parsedPharmacy = normalizePharmacy(storageRaw.ownerPharmacy ?? storageRaw.pharmacy ?? null);
  const medicinesRaw = storageRaw.ownerMedicines ?? storageRaw.medicines;
  const parsedMedicines = Array.isArray(medicinesRaw)
    ? medicinesRaw
        .map((item) => normalizeMedicine(item))
        .filter((item): item is Medicine => item !== null)
    : EMPTY_OWNER_MEDICINES;

  return {
    version: STORAGE_VERSION,
    ownerPharmacy: parsedPharmacy,
    ownerMedicines: parsedMedicines,
  };
};
