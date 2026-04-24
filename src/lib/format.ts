import { Language, LocalizedText, Pharmacy, WorkingHours } from "@/types";

const decimalSeparatorMap: Record<Language, string> = {
  uz: ".",
  ru: ",",
  en: ".",
  tr: ",",
};

const groupSeparatorMap: Record<Language, string> = {
  uz: " ",
  ru: " ",
  en: ",",
  tr: ".",
};

const hasBrokenEncoding = (value: string) =>
  /[ЂЃЄЅІЇЈЉЊЋЏђѓєѕіїјљњћџҐґ]/.test(value) || /Г[§ј±]|Еџ/.test(value);

export const localizeText = (text: LocalizedText, language: Language) => {
  const localized = text[language];
  if (localized && !hasBrokenEncoding(localized)) {
    return localized;
  }

  if (text.en && !hasBrokenEncoding(text.en)) {
    return text.en;
  }

  return text.uz || text.ru || text.tr || text.en;
};

export const formatPrice = (price: number, language: Language) => {
  const safePrice = Number.isFinite(price) ? Math.round(price) : 0;
  const formatted = safePrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparatorMap[language]);
  return `${formatted} so'm`;
};

export const formatRating = (rating: number, language: Language) => {
  const safeRating = Number.isFinite(rating) ? rating : 0;
  return safeRating.toFixed(1).replace(".", decimalSeparatorMap[language]);
};

export const getSingleParam = (value: string | string[] | undefined) => {
  if (!value) {
    return "";
  }
  return Array.isArray(value) ? value[0] ?? "" : value;
};

export const getFinalPrice = (price: number, discountPercent: number) => {
  if (discountPercent <= 0) {
    return price;
  }

  const discounted = Math.round(price * (1 - discountPercent / 100));
  return Math.max(discounted, 0);
};

export const formatWorkingHours = (hours: WorkingHours) => {
  if (hours.is24x7) {
    return "24/7";
  }
  return `${hours.open} - ${hours.close}`;
};

export const buildOpenStreetMapUrl = (lat: number, lng: number, zoom = 16) =>
  `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`;

export const normalizePhoneForTel = (phone: string) => phone.replace(/[^\d+]/g, "");

export const getDiscountPercent = (price: number, oldPrice: number | null) => {
  if (!oldPrice || oldPrice <= price || oldPrice <= 0) {
    return 0;
  }

  return Math.round(((oldPrice - price) / oldPrice) * 100);
};

export const normalizeRating = (rating: number) => {
  if (!Number.isFinite(rating)) {
    return 0;
  }
  return Math.min(5, Math.max(0, Number(rating.toFixed(1))));
};

export const isValidCoordinates = (lat: number, lng: number) =>
  Number.isFinite(lat) &&
  Number.isFinite(lng) &&
  lat >= -90 &&
  lat <= 90 &&
  lng >= -180 &&
  lng <= 180;

export const isPharmacyOpenNow = (pharmacy: Pharmacy, date = new Date()) => {
  return isOpenByHours(pharmacy.workingHours, date);
};

export const isOpenByHours = (hours: WorkingHours, date = new Date()) => {
  if (hours.is24x7) {
    return true;
  }

  const [openHour, openMinute] = parseTime(hours.open);
  const [closeHour, closeMinute] = parseTime(hours.close);
  const currentMinutes = date.getHours() * 60 + date.getMinutes();
  const openMinutes = openHour * 60 + openMinute;
  const closeMinutes = closeHour * 60 + closeMinute;

  if (closeMinutes >= openMinutes) {
    return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
  }

  return currentMinutes >= openMinutes || currentMinutes <= closeMinutes;
};

const parseTime = (value: string): [number, number] => {
  const [hourRaw, minuteRaw] = value.split(":");
  const hour = Number.parseInt(hourRaw ?? "0", 10);
  const minute = Number.parseInt(minuteRaw ?? "0", 10);
  return [Number.isFinite(hour) ? hour : 0, Number.isFinite(minute) ? minute : 0];
};

export const isMedicineExpiringSoon = (dateString: string, days = 30) => {
  const expiry = new Date(dateString);
  if (Number.isNaN(expiry.getTime())) {
    return false;
  }

  const now = new Date();
  const msDiff = expiry.getTime() - now.getTime();
  const daysDiff = msDiff / (1000 * 60 * 60 * 24);
  return daysDiff >= 0 && daysDiff <= days;
};

export const isMedicineExpired = (dateString: string) => {
  const expiry = new Date(dateString);
  if (Number.isNaN(expiry.getTime())) {
    return false;
  }

  return expiry.getTime() < Date.now();
};
