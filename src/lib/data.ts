import { Medicine, Pharmacy } from "@/types";

export const pharmacies: Pharmacy[] = [
  {
    id: "mehr-shifo",
    name: {
      uz: "Mehr Shifo Dorixonasi",
      ru: "Аптека Mehr Shifo",
      en: "Mehr Shifo Pharmacy",
    },
    address: {
      uz: "Toshkent shahri, Amir Temur ko'chasi 108",
      ru: "г. Ташкент, улица Амира Темура 108",
      en: "108 Amir Temur Street, Tashkent",
    },
    description: {
      uz: "24/7 ishlovchi markaziy dorixona. Retsept bo'yicha dorilar mavjud.",
      ru: "Центральная аптека, работающая 24/7. Есть рецептурные препараты.",
      en: "Central 24/7 pharmacy with both OTC and prescription medicines.",
    },
    phone: "+998 90 100 11 22",
    image: "/images/pharmacy-placeholder.svg",
    location: { lat: 41.3111, lng: 69.2797 },
  },
  {
    id: "sihat-farm",
    name: {
      uz: "Sihat Farm",
      ru: "Sihat Farm",
      en: "Sihat Farm",
    },
    address: {
      uz: "Samarqand shahri, Registon ko'chasi 21",
      ru: "г. Самарканд, улица Регистан 21",
      en: "21 Registan Street, Samarkand",
    },
    description: {
      uz: "Oilaviy dorixona, bolalar dorilari va vitaminlar assortimenti keng.",
      ru: "Семейная аптека с широким выбором детских лекарств и витаминов.",
      en: "Family pharmacy with a wide range of pediatric medicines and vitamins.",
    },
    phone: "+998 91 345 88 90",
    image: "/images/pharmacy-placeholder.svg",
    location: { lat: 39.6542, lng: 66.9597 },
  },
  {
    id: "navo-med",
    name: {
      uz: "Navo Med",
      ru: "Navo Med",
      en: "Navo Med",
    },
    address: {
      uz: "Buxoro shahri, Mustaqillik ko'chasi 44",
      ru: "г. Бухара, улица Мустакиллик 44",
      en: "44 Mustaqillik Street, Bukhara",
    },
    description: {
      uz: "Og'riq qoldiruvchi va antibiotiklar bo'yicha to'liq ta'minot.",
      ru: "Полный ассортимент обезболивающих и антибиотиков.",
      en: "Well-stocked pharmacy for pain relief and antibiotic medicines.",
    },
    phone: "+998 93 667 70 71",
    image: "/images/pharmacy-placeholder.svg",
    location: { lat: 39.7681, lng: 64.4556 },
  },
  {
    id: "care-24",
    name: {
      uz: "Care 24",
      ru: "Care 24",
      en: "Care 24",
    },
    address: {
      uz: "Farg'ona shahri, Alisher Navoiy ko'chasi 12",
      ru: "г. Фергана, улица Алишера Навои 12",
      en: "12 Alisher Navoi Street, Fergana",
    },
    description: {
      uz: "Tezkor xizmat, onlayn buyurtma qabul qilinadi.",
      ru: "Быстрое обслуживание, принимаются онлайн-заказы.",
      en: "Fast service with support for online medicine orders.",
    },
    phone: "+998 94 820 56 78",
    image: "/images/pharmacy-placeholder.svg",
    location: { lat: 40.3894, lng: 71.7878 },
  },
];

export const medicines: Medicine[] = [
  {
    id: "paracetamol-500",
    pharmacyId: "mehr-shifo",
    name: {
      uz: "Paratsetamol 500mg",
      ru: "Парацетамол 500мг",
      en: "Paracetamol 500mg",
    },
    description: {
      uz: "Isitma tushiruvchi va og'riq qoldiruvchi tabletka.",
      ru: "Жаропонижающее и обезболивающее средство в таблетках.",
      en: "Tablet for fever and mild pain relief.",
    },
    price: 12000,
    image: "/images/medicine-placeholder.svg",
  },
  {
    id: "nurofen",
    pharmacyId: "mehr-shifo",
    name: {
      uz: "Nurofen",
      ru: "Нурофен",
      en: "Nurofen",
    },
    description: {
      uz: "Yallig'lanishga qarshi va og'riqni kamaytiruvchi dori.",
      ru: "Противовоспалительный препарат и обезболивающее.",
      en: "Anti-inflammatory medicine with pain relief effect.",
    },
    price: 36000,
    image: "/images/medicine-placeholder.svg",
  },
  {
    id: "amoxicillin",
    pharmacyId: "navo-med",
    name: {
      uz: "Amoksitsillin 500mg",
      ru: "Амоксициллин 500мг",
      en: "Amoxicillin 500mg",
    },
    description: {
      uz: "Bakterial infeksiyalar uchun antibiotik kapsula.",
      ru: "Антибиотик в капсулах для бактериальных инфекций.",
      en: "Antibiotic capsules for bacterial infections.",
    },
    price: 48000,
    image: "/images/medicine-placeholder.svg",
  },
  {
    id: "vitamin-c",
    pharmacyId: "sihat-farm",
    name: {
      uz: "Vitamin C",
      ru: "Витамин C",
      en: "Vitamin C",
    },
    description: {
      uz: "Immunitetni qo'llab-quvvatlash uchun qo'shimcha.",
      ru: "Добавка для поддержки иммунитета.",
      en: "Supplement for immune system support.",
    },
    price: 19000,
    image: "/images/medicine-placeholder.svg",
  },
  {
    id: "ibuprofen",
    pharmacyId: "sihat-farm",
    name: {
      uz: "Ibuprofen",
      ru: "Ибупрофен",
      en: "Ibuprofen",
    },
    description: {
      uz: "Tana og'riqlari va yallig'lanishda qo'llaniladi.",
      ru: "Применяется при болях и воспалениях.",
      en: "Used for pain, swelling, and inflammation.",
    },
    price: 24000,
    image: "/images/medicine-placeholder.svg",
  },
  {
    id: "loratadine",
    pharmacyId: "care-24",
    name: {
      uz: "Loratadin",
      ru: "Лоратадин",
      en: "Loratadine",
    },
    description: {
      uz: "Allergiya alomatlarini kamaytiruvchi antihistamin dori.",
      ru: "Антигистаминный препарат от симптомов аллергии.",
      en: "Antihistamine for allergy symptoms.",
    },
    price: 21000,
    image: "/images/medicine-placeholder.svg",
  },
  {
    id: "omeprazole",
    pharmacyId: "care-24",
    name: {
      uz: "Omeprazol",
      ru: "Омепразол",
      en: "Omeprazole",
    },
    description: {
      uz: "Oshqozon kislotaliligini kamaytiruvchi kapsula.",
      ru: "Капсулы для снижения кислотности желудка.",
      en: "Capsules that reduce stomach acid production.",
    },
    price: 27000,
    image: "/images/medicine-placeholder.svg",
  },
  {
    id: "no-shpa",
    pharmacyId: "navo-med",
    name: {
      uz: "No-Spa",
      ru: "Но-шпа",
      en: "No-Spa",
    },
    description: {
      uz: "Mushak spazmlarini kamaytiruvchi dori.",
      ru: "Препарат для снятия мышечных спазмов.",
      en: "Medicine for relieving muscle spasms.",
    },
    price: 33000,
    image: "/images/medicine-placeholder.svg",
  },
];

export const getPharmacyById = (id: string) => pharmacies.find((item) => item.id === id);

export const getMedicineById = (id: string) => medicines.find((item) => item.id === id);

export const getMedicinesByPharmacy = (pharmacyId: string) =>
  medicines.filter((item) => item.pharmacyId === pharmacyId);
