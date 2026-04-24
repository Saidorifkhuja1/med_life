export type Language = "uz" | "ru" | "en" | "tr";

export type Theme = "light" | "dark";

export type LocalizedText = {
  uz: string;
  ru: string;
  en: string;
  tr: string;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export type WorkingHours = {
  is24x7: boolean;
  open: string;
  close: string;
};

export type Pharmacy = {
  id: string;
  name: LocalizedText;
  address: LocalizedText;
  district: LocalizedText;
  description: LocalizedText;
  phone: string;
  image: string;
  images: string[];
  rating: number;
  hasDelivery: boolean;
  workingHours: WorkingHours;
  createdAt: string;
  location: Coordinates;
};

export type Medicine = {
  id: string;
  pharmacyId: string;
  name: LocalizedText;
  description: LocalizedText;
  category: LocalizedText;
  price: number;
  oldPrice: number | null;
  discountPercent: number;
  isAvailable: boolean;
  stockCount: number;
  manufacturer: LocalizedText;
  dosage: LocalizedText;
  expiryDate: string;
  prescriptionRequired: boolean;
  tags: string[];
  image?: string;
  createdAt: string;
};
