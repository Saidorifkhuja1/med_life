export type Language = "uz" | "ru" | "en";

export type Theme = "light" | "dark";

export type LocalizedText = {
  uz: string;
  ru: string;
  en: string;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export type Pharmacy = {
  id: string;
  name: LocalizedText;
  address: LocalizedText;
  description: LocalizedText;
  phone: string;
  image: string;
  location: Coordinates;
};

export type Medicine = {
  id: string;
  pharmacyId: string;
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  image: string;
};
