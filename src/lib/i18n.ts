import { Language } from "@/types";

export type Dictionary = {
  projectName: string;
  searchPharmacy: string;
  searchMedicine: string;
  themeDark: string;
  themeLight: string;
  language: string;
  pharmaciesTitle: string;
  pharmaciesSubtitle: string;
  noPharmacyFoundTitle: string;
  noPharmacyFoundText: string;
  details: string;
  allMedicines: string;
  availableMedicines: string;
  phone: string;
  location: string;
  description: string;
  price: string;
  showPharmacy: string;
  openMap: string;
  backHome: string;
  notFoundTitle: string;
  notFoundText: string;
  medicinesOfPharmacy: string;
  medicinesCount: string;
};

export const dictionary: Record<Language, Dictionary> = {
  uz: {
    projectName: "Dorichi",
    searchPharmacy: "Dorixona qidiring...",
    searchMedicine: "Dori qidiring...",
    themeDark: "Dark",
    themeLight: "Light",
    language: "Til",
    pharmaciesTitle: "Yaqin dorixonalar ro'yxati",
    pharmaciesSubtitle: "Dorixonani tanlang va undagi dorilarni ko'ring.",
    noPharmacyFoundTitle: "Mos dorixona topilmadi",
    noPharmacyFoundText: "Qidiruv matnini o'zgartirib qayta urinib ko'ring.",
    details: "Batafsil",
    allMedicines: "Barcha dorilar",
    availableMedicines: "Mavjud dorilar",
    phone: "Telefon",
    location: "Joylashuvi",
    description: "Tafsilot",
    price: "Narx",
    showPharmacy: "Dorixona",
    openMap: "Xaritada ochish",
    backHome: "Bosh sahifa",
    notFoundTitle: "Ma'lumot topilmadi",
    notFoundText: "So'ralgan ma'lumot bazada mavjud emas.",
    medicinesOfPharmacy: "dorixonasidagi dorilar",
    medicinesCount: "ta dori",
  },
  ru: {
    projectName: "Dorichi",
    searchPharmacy: "Поиск аптеки...",
    searchMedicine: "Поиск лекарства...",
    themeDark: "Темная",
    themeLight: "Светлая",
    language: "Язык",
    pharmaciesTitle: "Список доступных аптек",
    pharmaciesSubtitle: "Выберите аптеку и посмотрите список лекарств.",
    noPharmacyFoundTitle: "Аптека не найдена",
    noPharmacyFoundText: "Измените поисковый запрос и попробуйте снова.",
    details: "Подробнее",
    allMedicines: "Все лекарства",
    availableMedicines: "Доступные лекарства",
    phone: "Телефон",
    location: "Адрес",
    description: "Описание",
    price: "Цена",
    showPharmacy: "Аптека",
    openMap: "Открыть на карте",
    backHome: "На главную",
    notFoundTitle: "Данные не найдены",
    notFoundText: "Запрошенные данные отсутствуют в базе.",
    medicinesOfPharmacy: "лекарства в аптеке",
    medicinesCount: "лекарств",
  },
  en: {
    projectName: "Dorichi",
    searchPharmacy: "Search pharmacy...",
    searchMedicine: "Search medicine...",
    themeDark: "Dark",
    themeLight: "Light",
    language: "Language",
    pharmaciesTitle: "Available Pharmacies",
    pharmaciesSubtitle: "Pick a pharmacy and explore the medicines inside.",
    noPharmacyFoundTitle: "No pharmacy found",
    noPharmacyFoundText: "Change your search query and try again.",
    details: "Details",
    allMedicines: "All medicines",
    availableMedicines: "Available medicines",
    phone: "Phone",
    location: "Location",
    description: "Description",
    price: "Price",
    showPharmacy: "Pharmacy",
    openMap: "Open on map",
    backHome: "Back home",
    notFoundTitle: "Data not found",
    notFoundText: "Requested information is not available.",
    medicinesOfPharmacy: "medicines in pharmacy",
    medicinesCount: "medicines",
  },
};
