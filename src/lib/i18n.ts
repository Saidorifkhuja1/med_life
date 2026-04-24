import { Language } from "@/types";

export type Dictionary = {
  projectName: string;
  language: string;
  langUz: string;
  langRu: string;
  langEn: string;
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
  medicineImage: string;
  maxFiveImages: string;
  singleImageUpload: string;
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
  medicineImage: "Medicine image",
  maxFiveImages: "Upload up to 5 images",
  singleImageUpload: "Upload 1 image from your device",
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
  langRu: "Rus tili",
  langEn: "Ingliz tili",
  langTr: "Turk tili",
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
  ownerDashboard: "Egasi paneli",
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
  medicineImage: "Dori rasmi",
  maxFiveImages: "Maksimal 5 ta rasm yuklang",
  singleImageUpload: "Qurilmadan 1 ta rasm yuklang",
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
  langTr: "Турецкий",
  openSearch: "Открыть поиск",
  closeSearch: "Закрыть поиск",
  themeDark: "Включить темную тему",
  themeLight: "Включить светлую тему",
  dashboard: "Панель",
  pharmaciesTitle: "Ищите аптеки и лекарства быстрее",
  pharmaciesSubtitle: "Находите ближайшие аптеки, сравнивайте наличие лекарств и управляйте своей аптекой в одном месте.",
  totalPharmacies: "Аптеки",
  totalMedicines: "Лекарства",
  visibleResults: "Найдено",
  openPharmaciesNow: "Сейчас открыто",
  searchPharmacy: "Поиск по аптеке, району, адресу или названию лекарства...",
  searchMedicine: "Поиск по названию лекарства...",
  filtersTitle: "Фильтры",
  openNow: "Сейчас открыто",
  only24x7: "Только 24/7",
  minRating: "Минимальный рейтинг",
  district: "Район",
  hasDelivery: "Есть доставка",
  hasSelectedMedicine: "Есть выбранное лекарство",
  sortBy: "Сортировка",
  sortName: "По названию",
  sortRating: "По рейтингу",
  sortNewest: "Новые",
  resetFilters: "Сбросить фильтры",
  allDistricts: "Все районы",
  allMedicinesOption: "Все лекарства",
  noPharmacyFoundTitle: "Подходящие аптеки не найдены",
  noPharmacyFoundText: "Попробуйте изменить фильтры или поисковый запрос.",
  details: "Подробнее",
  update: "Обновить",
  phone: "Телефон",
  location: "Адрес",
  description: "Описание",
  price: "Цена",
  oldPrice: "Старая цена",
  category: "Категория",
  availability: "Наличие",
  inStock: "В наличии",
  outOfStock: "Нет в наличии",
  stock: "Остаток",
  manufacturer: "Производитель",
  dosage: "Дозировка",
  expiryDate: "Срок годности",
  prescriptionRequired: "Требуется рецепт",
  yes: "Да",
  no: "Нет",
  tags: "Теги",
  rating: "Рейтинг",
  workingHours: "Часы работы",
  delivery: "Доставка",
  deliveryYes: "Есть",
  deliveryNo: "Нет",
  openNowLabel: "Открыто",
  closedNowLabel: "Закрыто",
  viewDetails: "Смотреть",
  call: "Позвонить",
  openMap: "Открыть на карте",
  allMedicines: "Все лекарства",
  availableMedicines: "Доступные лекарства",
  showPharmacy: "Показать аптеку",
  backHome: "На главную",
  back: "Назад",
  notFoundTitle: "Не найдено",
  notFoundText: "Запрошенные данные не найдены.",
  medicinesOfPharmacy: "лекарств в этой аптеке",
  medicinesCount: "лекарств",
  pharmacyInfo: "Информация об аптеке",
  medicineSearchInPharmacy: "Поиск лекарства в этой аптеке",
  medicineCategory: "Категория лекарства",
  allCategories: "Все категории",
  availabilityOnly: "Только доступные лекарства",
  similarPharmacies: "Похожие аптеки",
  noSimilarPharmacies: "Похожие аптеки не найдены",
  addPharmacy: "Добавить аптеку",
  ownerPharmacy: "Моя аптека",
  ownerUpdate: "Редактировать аптеку",
  ownerMedicines: "Управление лекарствами",
  ownerDashboard: "Панель владельца",
  totalOwnerPharmacies: "Мои аптеки",
  totalOwnerMedicines: "Мои лекарства",
  lowStockCount: "Мало на складе",
  expiringSoonCount: "Скоро истекает",
  expiredCount: "Просрочено",
  recentItems: "Недавно добавленные",
  quickActions: "Быстрые действия",
  exportData: "Экспорт данных",
  importData: "Импорт данных",
  resetData: "Сбросить демо-данные",
  importSuccess: "Импорт успешно завершен",
  importFailed: "Импорт не удался",
  invalidJson: "Неверный JSON",
  chooseJsonFile: "Выберите JSON-файл",
  pharmacyFormTitleCreate: "Создать аптеку",
  pharmacyFormTitleUpdate: "Обновить аптеку",
  medicineFormTitleCreate: "Добавить лекарство",
  medicineFormTitleUpdate: "Обновить лекарство",
  pharmacyName: "Название аптеки",
  pharmacyAddress: "Адрес",
  pharmacyDescription: "Описание",
  pharmacyPhone: "Телефон",
  districtField: "Район",
  ratingField: "Рейтинг (0-5)",
  hasDeliveryField: "Есть доставка",
  is24x7Field: "Работает 24/7",
  openTime: "Время открытия",
  closeTime: "Время закрытия",
  medicineName: "Название лекарства",
  medicineDescription: "Описание лекарства",
  categoryField: "Категория",
  selectPharmacy: "Выберите аптеку",
  stockCountField: "Количество на складе",
  oldPriceField: "Старая цена",
  discountField: "Скидка %",
  expiryField: "Срок годности",
  manufacturerField: "Производитель",
  dosageField: "Дозировка",
  prescriptionField: "Требуется рецепт",
  availabilityField: "Доступно",
  tagsField: "Теги (через запятую)",
  chooseLocation: "Выберите местоположение через OpenStreetMap",
  mapHelp: "Нажмите на карту, чтобы выбрать координаты, или используйте текущее местоположение.",
  selectedPoint: "Выбранные координаты",
  selectedAddress: "Выбранный адрес",
  useCurrentLocation: "Использовать текущее местоположение",
  geolocationNotSupported: "Геолокация не поддерживается этим браузером.",
  geolocationDenied: "Доступ к геолокации запрещен.",
  geolocationLoading: "Определяем ваше местоположение...",
  geolocationFailed: "Не удалось определить местоположение.",
  invalidCoordinates: "Пожалуйста, выберите корректную точку на карте.",
  pharmacyImages: "Фотографии аптеки",
  medicineImage: "Изображение лекарства",
  maxFiveImages: "Загрузите до 5 изображений",
  singleImageUpload: "Загрузите 1 изображение с устройства",
  remove: "Удалить",
  imageUrl: "URL изображения (необязательно)",
  saveChanges: "Сохранить изменения",
  createPharmacy: "Создать аптеку",
  createMedicine: "Добавить лекарство",
  updateMedicine: "Обновить лекарство",
  noOwnerPharmacyTitle: "Аптека еще не создана",
  noOwnerPharmacyText: "Сначала создайте аптеку, затем добавляйте лекарства.",
  ownerPharmacyExists: "Ваша аптека уже создана.",
  noOwnerMedicineTitle: "Лекарств пока нет",
  noOwnerMedicineText: "Добавьте первое лекарство, чтобы начать управление остатками.",
  medicineList: "Список лекарств",
  goToPharmacy: "Перейти к аптеке",
  selectedFileCount: "Выбранные файлы",
  requiredField: "Это поле обязательно.",
  invalidPhone: "Введите корректный номер телефона.",
  invalidRating: "Рейтинг должен быть от 0 до 5.",
  invalidPrice: "Цена должна быть не меньше 0.",
  invalidStock: "Остаток должен быть не меньше 0.",
  invalidOldPrice: "Старая цена должна быть выше текущей.",
  invalidDiscount: "Скидка должна быть от 0 до 95.",
  discountCalculated: "Скидка будет рассчитана автоматически по старой и текущей цене.",
};


const tr: Partial<Dictionary> = {
  language: "Dil",
  langUz: "Ozbek dili",
  langRu: "Rusca",
  langEn: "Ingilizce",
  langTr: "Turkce",
  openSearch: "Aramayi ac",
  closeSearch: "Aramayi kapat",
  themeDark: "Koyu temaya gec",
  themeLight: "Acik temaya gec",
  dashboard: "Panel",
  pharmaciesTitle: "Eczane ve ilaclari daha hizli bulun",
  pharmaciesSubtitle: "Yakin eczaneleri bulun, ilac durumlarini karsilastirin ve kendi eczanenizi tek yerden yonetin.",
  totalPharmacies: "Eczaneler",
  totalMedicines: "Ilaclar",
  visibleResults: "Gorunen sonuc",
  openPharmaciesNow: "Su an acik",
  searchPharmacy: "Eczane, ilce, adres veya ilac adina gore arayin...",
  searchMedicine: "Ilac adina gore arayin...",
  filtersTitle: "Filtreler",
  openNow: "Simdi acik",
  only24x7: "Sadece 24/7",
  minRating: "Minimum puan",
  district: "Bolge",
  hasDelivery: "Teslimat var",
  hasSelectedMedicine: "Secilen ilac var",
  sortBy: "Siralama",
  sortName: "Ada gore",
  sortRating: "Puana gore",
  sortNewest: "En yeni",
  resetFilters: "Filtreleri sifirla",
  allDistricts: "Tum bolgeler",
  allMedicinesOption: "Tum ilaclar",
  noPharmacyFoundTitle: "Uygun eczane bulunamadi",
  noPharmacyFoundText: "Filtreleri veya arama metnini degistirmeyi deneyin.",
  details: "Detaylar",
  update: "Guncelle",
  phone: "Telefon",
  location: "Konum",
  description: "Aciklama",
  price: "Fiyat",
  oldPrice: "Eski fiyat",
  category: "Kategori",
  availability: "Durum",
  inStock: "Stokta var",
  outOfStock: "Tukendi",
  stock: "Stok",
  manufacturer: "Uretici",
  dosage: "Doz",
  expiryDate: "Son kullanma tarihi",
  prescriptionRequired: "Recete gerekli",
  yes: "Evet",
  no: "Hayir",
  tags: "Etiketler",
  rating: "Puan",
  workingHours: "Calisma saatleri",
  delivery: "Teslimat",
  deliveryYes: "Var",
  deliveryNo: "Yok",
  openNowLabel: "Acik",
  closedNowLabel: "Kapali",
  viewDetails: "Goruntule",
  call: "Ara",
  openMap: "Haritada ac",
  allMedicines: "Tum ilaclar",
  availableMedicines: "Mevcut ilaclar",
  showPharmacy: "Eczaneyi goster",
  backHome: "Ana sayfaya don",
  back: "Geri",
  notFoundTitle: "Bulunamadi",
  notFoundText: "Istenen veri bulunamadi.",
  medicinesOfPharmacy: "bu eczanedeki ilaclar",
  medicinesCount: "ilac",
  pharmacyInfo: "Eczane bilgisi",
  medicineSearchInPharmacy: "Bu eczanede ilac ara",
  medicineCategory: "Ilac kategorisi",
  allCategories: "Tum kategoriler",
  availabilityOnly: "Sadece mevcut ilaclar",
  similarPharmacies: "Benzer eczaneler",
  noSimilarPharmacies: "Benzer eczane bulunamadi",
  addPharmacy: "Eczane ekle",
  ownerPharmacy: "Eczanem",
  ownerUpdate: "Eczaneyi guncelle",
  ownerMedicines: "Ilaclari yonet",
  ownerDashboard: "Sahip paneli",
  totalOwnerPharmacies: "Eczanelerim",
  totalOwnerMedicines: "Ilaclarim",
  lowStockCount: "Dusuk stok",
  expiringSoonCount: "Suresi yakinda dolacak",
  expiredCount: "Suresi dolmus",
  recentItems: "Son eklenenler",
  quickActions: "Hizli islemler",
  exportData: "Verileri disa aktar",
  importData: "Veri ice aktar",
  resetData: "Demo verisini sifirla",
  importSuccess: "Ice aktarma basarili",
  importFailed: "Ice aktarma basarisiz",
  invalidJson: "Gecersiz JSON",
  chooseJsonFile: "JSON dosyasi secin",
  pharmacyFormTitleCreate: "Eczane olustur",
  pharmacyFormTitleUpdate: "Eczaneyi guncelle",
  medicineFormTitleCreate: "Ilac ekle",
  medicineFormTitleUpdate: "Ilaci guncelle",
  pharmacyName: "Eczane adi",
  pharmacyAddress: "Adres",
  pharmacyDescription: "Aciklama",
  pharmacyPhone: "Telefon",
  districtField: "Bolge",
  ratingField: "Puan (0-5)",
  hasDeliveryField: "Teslimat hizmeti var",
  is24x7Field: "24/7 acik",
  openTime: "Acilis saati",
  closeTime: "Kapanis saati",
  medicineName: "Ilac adi",
  medicineDescription: "Ilac aciklamasi",
  categoryField: "Kategori",
  selectPharmacy: "Eczane secin",
  stockCountField: "Stok adedi",
  oldPriceField: "Eski fiyat",
  discountField: "Indirim %",
  expiryField: "Son kullanma tarihi",
  manufacturerField: "Uretici",
  dosageField: "Doz",
  prescriptionField: "Recete gerekli",
  availabilityField: "Mevcutluk",
  tagsField: "Etiketler (virgulle ayirin)",
  chooseLocation: "OpenStreetMap uzerinden konum secin",
  mapHelp: "Koordinat secmek icin haritaya tiklayin veya mevcut konumunuzu kullanin.",
  selectedPoint: "Secilen koordinatlar",
  selectedAddress: "Secilen adres",
  useCurrentLocation: "Mevcut konumu kullan",
  geolocationNotSupported: "Bu tarayici geolokasyonu desteklemiyor.",
  geolocationDenied: "Konum izni reddedildi.",
  geolocationLoading: "Konumunuz aliniyor...",
  geolocationFailed: "Konum alinamadi.",
  invalidCoordinates: "Lutfen haritada gecerli bir nokta secin.",
  pharmacyImages: "Eczane gorselleri",
  medicineImage: "Ilac gorseli",
  maxFiveImages: "En fazla 5 gorsel yukleyin",
  singleImageUpload: "Cihazinizdan 1 gorsel yukleyin",
  remove: "Kaldir",
  imageUrl: "Gorsel URL'si (istege bagli)",
  saveChanges: "Degisiklikleri kaydet",
  createPharmacy: "Eczane olustur",
  createMedicine: "Ilac ekle",
  updateMedicine: "Ilaci guncelle",
  noOwnerPharmacyTitle: "Henuz eczane yok",
  noOwnerPharmacyText: "Once eczanenizi olusturun, sonra ilac ekleyin.",
  ownerPharmacyExists: "Eczaneniz zaten mevcut.",
  noOwnerMedicineTitle: "Henuz ilac yok",
  noOwnerMedicineText: "Stok yonetimine baslamak icin ilk ilacinizi ekleyin.",
  medicineList: "Ilac listesi",
  goToPharmacy: "Eczaneye git",
  selectedFileCount: "Secilen dosyalar",
  requiredField: "Bu alan zorunludur.",
  invalidPhone: "Lutfen gecerli bir telefon numarasi girin.",
  invalidRating: "Puan 0 ile 5 arasynda olmali.",
  invalidPrice: "Fiyat 0 veya daha buyuk olmali.",
  invalidStock: "Stok 0 veya daha buyuk olmali.",
  invalidOldPrice: "Eski fiyat guncel fiyattan buyuk olmali.",
  invalidDiscount: "Indirim 0 ile 95 arasynda olmali.",
  discountCalculated: "Indirim eski ve guncel fiyata gore otomatik hesaplanir.",
};

const mergeDictionary = (partial: Partial<Dictionary>): Dictionary => ({
  ...en,
  ...partial,
});

export const dictionary: Record<Language, Dictionary> = {
  uz: mergeDictionary(uz),
  ru: mergeDictionary(ru),
  en,
  tr: mergeDictionary(tr),
};


