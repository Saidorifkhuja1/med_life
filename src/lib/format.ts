import { Language, LocalizedText } from "@/types";

const localeMap: Record<Language, string> = {
  uz: "uz-UZ",
  ru: "ru-RU",
  en: "en-US",
};

export const localizeText = (text: LocalizedText, language: Language) => text[language];

export const formatPrice = (price: number, language: Language) => {
  const formatted = new Intl.NumberFormat(localeMap[language]).format(price);
  return `${formatted} so'm`;
};

export const getSingleParam = (value: string | string[] | undefined) => {
  if (!value) {
    return "";
  }
  return Array.isArray(value) ? value[0] ?? "" : value;
};
