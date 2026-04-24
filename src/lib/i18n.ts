import { Language } from "@/types";

export type Dictionary = {
  projectName: string;
  language: string;
  langUz: string;
  langRu: string;
  langEn: string;
  langZh: string;
  langTr: string;
  openSearch: string;
  closeSearch: string;
  themeDark: string;
  themeLight: string;
  dashboard: string;
  pharmaciesTitle: string;
  pharmaciesSubtitle: string;
  totalPharmacies: string;
  totalMedicines: string;
  visibleResults: string;
  openPharmaciesNow: string;
  searchPharmacy: string;
  searchMedicine: string;
  filtersTitle: string;
  openNow: string;
  only24x7: string;
  minRating: string;
  district: string;
  hasDelivery: string;
  hasSelectedMedicine: string;
  sortBy: string;
  sortName: string;
  sortRating: string;
  sortNewest: string;
  resetFilters: string;
  allDistricts: string;
  allMedicinesOption: string;
  noPharmacyFoundTitle: string;
  noPharmacyFoundText: string;
  details: string;
  update: string;
  phone: string;
  location: string;
  description: string;
  price: string;
  oldPrice: string;
  category: string;
  availability: string;
  inStock: string;
  outOfStock: string;
  stock: string;
  manufacturer: string;
  dosage: string;
  expiryDate: string;
  prescriptionRequired: string;
  yes: string;
  no: string;
  tags: string;
  rating: string;
  workingHours: string;
  delivery: string;
  deliveryYes: string;
  deliveryNo: string;
  openNowLabel: string;
  closedNowLabel: string;
  viewDetails: string;
  call: string;
  openMap: string;
  allMedicines: string;
  availableMedicines: string;
  showPharmacy: string;
  backHome: string;
  back: string;
  notFoundTitle: string;
  notFoundText: string;
  medicinesOfPharmacy: string;
  medicinesCount: string;
  pharmacyInfo: string;
  medicineSearchInPharmacy: string;
  medicineCategory: string;
  allCategories: string;
  availabilityOnly: string;
  similarPharmacies: string;
  noSimilarPharmacies: string;
  addPharmacy: string;
  ownerPharmacy: string;
  ownerUpdate: string;
  ownerMedicines: string;
  ownerDashboard: string;
  totalOwnerPharmacies: string;
  totalOwnerMedicines: string;
  lowStockCount: string;
  expiringSoonCount: string;
  expiredCount: string;
  recentItems: string;
  quickActions: string;
  exportData: string;
  importData: string;
  resetData: string;
  importSuccess: string;
  importFailed: string;
  invalidJson: string;
  chooseJsonFile: string;
  pharmacyFormTitleCreate: string;
  pharmacyFormTitleUpdate: string;
  medicineFormTitleCreate: string;
  medicineFormTitleUpdate: string;
  pharmacyName: string;
  pharmacyAddress: string;
  pharmacyDescription: string;
  pharmacyPhone: string;
  districtField: string;
  ratingField: string;
  hasDeliveryField: string;
  is24x7Field: string;
  openTime: string;
  closeTime: string;
  medicineName: string;
  medicineDescription: string;
  categoryField: string;
  selectPharmacy: string;
  stockCountField: string;
  oldPriceField: string;
  discountField: string;
  expiryField: string;
  manufacturerField: string;
  dosageField: string;
  prescriptionField: string;
  availabilityField: string;
  tagsField: string;
  chooseLocation: string;
  mapHelp: string;
  selectedPoint: string;
  selectedAddress: string;
  useCurrentLocation: string;
  geolocationNotSupported: string;
  geolocationDenied: string;
  geolocationLoading: string;
  geolocationFailed: string;
  invalidCoordinates: string;
  pharmacyImages: string;
  maxFiveImages: string;
  remove: string;
  imageUrl: string;
  saveChanges: string;
  createPharmacy: string;
  createMedicine: string;
  updateMedicine: string;
  noOwnerPharmacyTitle: string;
  noOwnerPharmacyText: string;
  ownerPharmacyExists: string;
  noOwnerMedicineTitle: string;
  noOwnerMedicineText: string;
  medicineList: string;
  goToPharmacy: string;
  selectedFileCount: string;
  requiredField: string;
  invalidPhone: string;
  invalidRating: string;
  invalidPrice: string;
  invalidStock: string;
  invalidOldPrice: string;
  invalidDiscount: string;
  discountCalculated: string;
};

const en: Dictionary = {
  projectName: "Dorichi",
  language: "Language",
  langUz: "Uzbek",
  langRu: "Russian",
  langEn: "English",
  langZh: "Chinese",
  langTr: "Turkish",
  openSearch: "Open search",
  closeSearch: "Close search",
  themeDark: "Switch to dark theme",
  themeLight: "Switch to light theme",
  dashboard: "Dashboard",
  pharmaciesTitle: "Find pharmacies and medicines faster",
  pharmaciesSubtitle:
    "Discover nearby pharmacies, compare medicine availability, and manage your own pharmacy in one place.",
  totalPharmacies: "Pharmacies",
  totalMedicines: "Medicines",
  visibleResults: "Visible results",
  openPharmaciesNow: "Open now",
  searchPharmacy: "Search by pharmacy, district, address, or medicine name...",
  searchMedicine: "Search medicine name...",
  filtersTitle: "Filters",
  openNow: "Open now",
  only24x7: "24/7 only",
  minRating: "Minimum rating",
  district: "District",
  hasDelivery: "Has delivery",
  hasSelectedMedicine: "Contains selected medicine",
  sortBy: "Sort by",
  sortName: "Name",
  sortRating: "Rating",
  sortNewest: "Newest",
  resetFilters: "Reset filters",
  allDistricts: "All districts",
  allMedicinesOption: "All medicines",
  noPharmacyFoundTitle: "No pharmacies matched your filters",
  noPharmacyFoundText: "Try changing filters or search text.",
  details: "Details",
  update: "Update",
  phone: "Phone",
  location: "Location",
  description: "Description",
  price: "Price",
  oldPrice: "Old price",
  category: "Category",
  availability: "Availability",
  inStock: "In stock",
  outOfStock: "Out of stock",
  stock: "Stock",
  manufacturer: "Manufacturer",
  dosage: "Dosage",
  expiryDate: "Expiry date",
  prescriptionRequired: "Prescription required",
  yes: "Yes",
  no: "No",
  tags: "Tags",
  rating: "Rating",
  workingHours: "Working hours",
  delivery: "Delivery",
  deliveryYes: "Available",
  deliveryNo: "Not available",
  openNowLabel: "Open",
  closedNowLabel: "Closed",
  viewDetails: "View details",
  call: "Call",
  openMap: "Open in map",
  allMedicines: "All medicines",
  availableMedicines: "Available medicines",
  showPharmacy: "Show pharmacy",
  backHome: "Back to home",
  back: "Back",
  notFoundTitle: "Not found",
  notFoundText: "Requested data was not found.",
  medicinesOfPharmacy: "medicines in this pharmacy",
  medicinesCount: "medicines",
  pharmacyInfo: "Pharmacy info",
  medicineSearchInPharmacy: "Search medicine in this pharmacy",
  medicineCategory: "Medicine category",
  allCategories: "All categories",
  availabilityOnly: "Only available medicines",
  similarPharmacies: "Similar pharmacies",
  noSimilarPharmacies: "No similar pharmacies found",
  addPharmacy: "Add pharmacy",
  ownerPharmacy: "My pharmacy",
  ownerUpdate: "Update pharmacy",
  ownerMedicines: "Manage medicines",
  ownerDashboard: "Owner dashboard",
  totalOwnerPharmacies: "My pharmacies",
  totalOwnerMedicines: "My medicines",
  lowStockCount: "Low stock",
  expiringSoonCount: "Expiring soon",
  expiredCount: "Expired",
  recentItems: "Recently added",
  quickActions: "Quick actions",
  exportData: "Export data",
  importData: "Import data",
  resetData: "Reset demo data",
  importSuccess: "Import completed successfully",
  importFailed: "Import failed",
  invalidJson: "Invalid JSON",
  chooseJsonFile: "Choose JSON file",
  pharmacyFormTitleCreate: "Create pharmacy",
  pharmacyFormTitleUpdate: "Update pharmacy",
  medicineFormTitleCreate: "Create medicine",
  medicineFormTitleUpdate: "Update medicine",
  pharmacyName: "Pharmacy name",
  pharmacyAddress: "Address",
  pharmacyDescription: "Description",
  pharmacyPhone: "Phone",
  districtField: "District",
  ratingField: "Rating (0-5)",
  hasDeliveryField: "Has delivery service",
  is24x7Field: "Open 24/7",
  openTime: "Open time",
  closeTime: "Close time",
  medicineName: "Medicine name",
  medicineDescription: "Medicine description",
  categoryField: "Category",
  selectPharmacy: "Select pharmacy",
  stockCountField: "Stock count",
  oldPriceField: "Old price",
  discountField: "Discount %",
  expiryField: "Expiry date",
  manufacturerField: "Manufacturer",
  dosageField: "Dosage",
  prescriptionField: "Prescription required",
  availabilityField: "Availability",
  tagsField: "Tags (comma separated)",
  chooseLocation: "Choose location on OpenStreetMap",
  mapHelp: "Click map to select coordinates, or use your current location.",
  selectedPoint: "Selected coordinates",
  selectedAddress: "Selected address",
  useCurrentLocation: "Use current location",
  geolocationNotSupported: "Geolocation is not supported in this browser.",
  geolocationDenied: "Permission denied for geolocation.",
  geolocationLoading: "Getting your location...",
  geolocationFailed: "Could not get your location.",
  invalidCoordinates: "Please select a valid location on map.",
  pharmacyImages: "Pharmacy images",
  maxFiveImages: "Upload up to 5 images",
  remove: "Remove",
  imageUrl: "Image URL (optional)",
  saveChanges: "Save changes",
  createPharmacy: "Create pharmacy",
  createMedicine: "Create medicine",
  updateMedicine: "Update medicine",
  noOwnerPharmacyTitle: "No pharmacy yet",
  noOwnerPharmacyText: "Create your pharmacy first, then add medicines.",
  ownerPharmacyExists: "Your pharmacy already exists.",
  noOwnerMedicineTitle: "No medicines yet",
  noOwnerMedicineText: "Add your first medicine to start managing stock.",
  medicineList: "Medicine list",
  goToPharmacy: "Go to pharmacy",
  selectedFileCount: "Selected files",
  requiredField: "This field is required.",
  invalidPhone: "Please enter a valid phone number.",
  invalidRating: "Rating must be between 0 and 5.",
  invalidPrice: "Price must be 0 or higher.",
  invalidStock: "Stock must be 0 or higher.",
  invalidOldPrice: "Old price must be greater than current price.",
  invalidDiscount: "Discount must be between 0 and 95.",
  discountCalculated: "Discount will be calculated from old and current price.",
};

const uz: Partial<Dictionary> = {
  language: "Til",
  langUz: "O'zbek",
  langRu: "Rus",
  langEn: "Ingliz",
  langZh: "Xitoy",
  langTr: "Turk",
  themeDark: "Tungi rejim",
  themeLight: "Yorug' rejim",
  dashboard: "Boshqaruv",
  pharmaciesTitle: "Dorixona va dori qidiruv platformasi",
  pharmaciesSubtitle:
    "Yaqin dorixonalarni toping, dori mavjudligini solishtiring va o'z dorixonangizni boshqaring.",
  totalPharmacies: "Dorixonalar",
  totalMedicines: "Dorilar",
  visibleResults: "Ko'rinayotgan natijalar",
  openPharmaciesNow: "Hozir ochiq",
  searchPharmacy: "Dorixona, tuman, manzil yoki dori bo'yicha qidiring...",
  searchMedicine: "Dori nomi bo'yicha qidiring...",
  filtersTitle: "Filtrlar",
  openNow: "Hozir ochiq",
  only24x7: "Faqat 24/7",
  minRating: "Minimal reyting",
  district: "Tuman",
  hasDelivery: "Yetkazib berish bor",
  hasSelectedMedicine: "Tanlangan dori bor",
  sortBy: "Saralash",
  sortName: "Nomi bo'yicha",
  sortRating: "Reyting bo'yicha",
  sortNewest: "Yangi qo'shilgan",
  resetFilters: "Filtrlarni tozalash",
  allDistricts: "Barcha tumanlar",
  allMedicinesOption: "Barcha dorilar",
  noPharmacyFoundTitle: "Mos dorixona topilmadi",
  noPharmacyFoundText: "Filtr yoki qidiruv so'zini o'zgartirib qayta urinib ko'ring.",
  details: "Batafsil",
  update: "Yangilash",
  phone: "Telefon",
  location: "Manzil",
  description: "Tavsif",
  price: "Narx",
  oldPrice: "Eski narx",
  category: "Kategoriya",
  availability: "Mavjudlik",
  inStock: "Mavjud",
  outOfStock: "Tugagan",
  stock: "Zaxira",
  manufacturer: "Ishlab chiqaruvchi",
  dosage: "Doza",
  expiryDate: "Yaroqlilik muddati",
  prescriptionRequired: "Retsept talab qilinadi",
  yes: "Ha",
  no: "Yo'q",
  tags: "Teglar",
  rating: "Reyting",
  workingHours: "Ish vaqti",
  delivery: "Yetkazib berish",
  deliveryYes: "Bor",
  deliveryNo: "Yo'q",
  openNowLabel: "Ochiq",
  closedNowLabel: "Yopiq",
  viewDetails: "Ko'rish",
  call: "Qo'ng'iroq",
  openMap: "Xaritada ochish",
  allMedicines: "Barcha dorilar",
  availableMedicines: "Mavjud dorilar",
  showPharmacy: "Dorixonani ko'rish",
  backHome: "Bosh sahifa",
  back: "Orqaga",
  notFoundTitle: "Topilmadi",
  notFoundText: "So'ralgan ma'lumot topilmadi.",
  medicinesOfPharmacy: "shu dorixonadagi dorilar",
  medicinesCount: "dori",
  pharmacyInfo: "Dorixona ma'lumoti",
  medicineSearchInPharmacy: "Dorixona ichida dori qidirish",
  medicineCategory: "Dori kategoriyasi",
  allCategories: "Barcha kategoriyalar",
  availabilityOnly: "Faqat mavjud dorilar",
  similarPharmacies: "O'xshash dorixonalar",
  noSimilarPharmacies: "O'xshash dorixona topilmadi",
  addPharmacy: "Dorixona qo'shish",
  ownerPharmacy: "Dorixonam",
  ownerUpdate: "Dorixonani yangilash",
  ownerMedicines: "Dorilarni boshqarish",
  ownerDashboard: "Owner panel",
  totalOwnerPharmacies: "Mening dorixonalarim",
  totalOwnerMedicines: "Mening dorilarim",
  lowStockCount: "Kam zaxira",
  expiringSoonCount: "Tez orada muddati tugaydi",
  expiredCount: "Muddati o'tgan",
  recentItems: "Yangi qo'shilganlar",
  quickActions: "Tezkor amallar",
  exportData: "Ma'lumotni eksport qilish",
  importData: "Ma'lumotni import qilish",
  resetData: "Demo ma'lumotni tiklash",
  importSuccess: "Import muvaffaqiyatli",
  importFailed: "Import muvaffaqiyatsiz",
  invalidJson: "JSON noto'g'ri",
  chooseJsonFile: "JSON fayl tanlang",
  pharmacyFormTitleCreate: "Yangi dorixona",
  pharmacyFormTitleUpdate: "Dorixonani yangilash",
  medicineFormTitleCreate: "Yangi dori",
  medicineFormTitleUpdate: "Dorini yangilash",
  pharmacyName: "Dorixona nomi",
  pharmacyAddress: "Manzil",
  pharmacyDescription: "Tavsif",
  pharmacyPhone: "Telefon",
  districtField: "Tuman",
  ratingField: "Reyting (0-5)",
  hasDeliveryField: "Yetkazib berish xizmati",
  is24x7Field: "24/7 ishlaydi",
  openTime: "Ochilish vaqti",
  closeTime: "Yopilish vaqti",
  medicineName: "Dori nomi",
  medicineDescription: "Dori tavsifi",
  categoryField: "Kategoriya",
  selectPharmacy: "Dorixonani tanlang",
  stockCountField: "Zaxira soni",
  oldPriceField: "Eski narx",
  discountField: "Chegirma foizi",
  expiryField: "Yaroqlilik muddati",
  manufacturerField: "Ishlab chiqaruvchi",
  dosageField: "Doza",
  prescriptionField: "Retsept talab qilinadi",
  availabilityField: "Mavjudlik holati",
  tagsField: "Teglar (vergul bilan)",
  chooseLocation: "OpenStreetMap orqali joy tanlang",
  mapHelp: "Xaritadan nuqta tanlang yoki joriy joylashuvni oling.",
  selectedPoint: "Tanlangan koordinatalar",
  selectedAddress: "Tanlangan manzil",
  useCurrentLocation: "Joriy joylashuvni olish",
  geolocationNotSupported: "Brauzer geolokatsiyani qo'llab-quvvatlamaydi.",
  geolocationDenied: "Geolokatsiya uchun ruxsat berilmadi.",
  geolocationLoading: "Joylashuv olinmoqda...",
  geolocationFailed: "Joylashuvni olishda xatolik.",
  invalidCoordinates: "Xaritadan to'g'ri joy tanlang.",
  pharmacyImages: "Dorixona rasmlari",
  maxFiveImages: "Maksimal 5 ta rasm yuklang",
  remove: "O'chirish",
  imageUrl: "Rasm URL (ixtiyoriy)",
  saveChanges: "Saqlash",
  createPharmacy: "Dorixonani yaratish",
  createMedicine: "Dori qo'shish",
  updateMedicine: "Dorini yangilash",
  noOwnerPharmacyTitle: "Sizda hali dorixona yo'q",
  noOwnerPharmacyText: "Avval dorixona qo'shing, keyin dorilarni boshqaring.",
  ownerPharmacyExists: "Dorixonangiz allaqachon yaratilgan.",
  noOwnerMedicineTitle: "Hali dori qo'shilmagan",
  noOwnerMedicineText: "Birinchi dorini qo'shing va ro'yxatni boshqaring.",
  medicineList: "Dorilar ro'yxati",
  goToPharmacy: "Dorixonaga o'tish",
  selectedFileCount: "Tanlangan fayllar",
  requiredField: "Bu maydon majburiy.",
  invalidPhone: "Telefon raqami noto'g'ri.",
  invalidRating: "Reyting 0 dan 5 gacha bo'lishi kerak.",
  invalidPrice: "Narx 0 dan kichik bo'lmasligi kerak.",
  invalidStock: "Zaxira 0 dan kichik bo'lmasligi kerak.",
  invalidOldPrice: "Eski narx joriy narxdan katta bo'lishi kerak.",
  invalidDiscount: "Chegirma 0 dan 95 gacha bo'lishi kerak.",
  discountCalculated: "Chegirma eski va joriy narxdan avtomatik hisoblanadi.",
};

const ru: Partial<Dictionary> = {
  language: "Язык",
  langUz: "Узбекский",
  langRu: "Русский",
  langEn: "Английский",
  langZh: "Китайский",
  langTr: "Турецкий",
  addPharmacy: "Добавить аптеку",
  ownerDashboard: "Панель владельца",
};

const zh: Partial<Dictionary> = {
  language: "语言",
  langUz: "乌兹别克语",
  langRu: "俄语",
  langEn: "英语",
  langZh: "中文",
  langTr: "土耳其语",
  addPharmacy: "添加药房",
  ownerDashboard: "店主管理面板",
};

const tr: Partial<Dictionary> = {
  language: "Dil",
  langUz: "Ozbekce",
  langRu: "Rusca",
  langEn: "Ingilizce",
  langZh: "Cince",
  langTr: "Turkce",
  addPharmacy: "Eczane ekle",
  ownerDashboard: "Sahip paneli",
};

const mergeDictionary = (partial: Partial<Dictionary>): Dictionary => ({
  ...en,
  ...partial,
});

export const dictionary: Record<Language, Dictionary> = {
  uz: mergeDictionary(uz),
  ru: mergeDictionary(ru),
  en,
  zh: mergeDictionary(zh),
  tr: mergeDictionary(tr),
};
