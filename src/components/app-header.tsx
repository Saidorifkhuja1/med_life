"use client";

import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import { Language } from "@/types";

const languageOptions = [
  { value: "uz", label: "UZ" },
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
] as const;

export function AppHeader() {
  const {
    theme,
    setTheme,
    language,
    setLanguage,
    pharmacyQuery,
    setPharmacyQuery,
    medicineQuery,
    setMedicineQuery,
    t,
  } = useAppContext();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-link">
          <span className="brand-mark">D</span>
          <span className="brand-name">{t.projectName}</span>
        </Link>

        <div className="header-controls">
          <input
            className="input"
            value={pharmacyQuery}
            onChange={(event) => setPharmacyQuery(event.target.value)}
            placeholder={t.searchPharmacy}
            aria-label={t.searchPharmacy}
          />
          <input
            className="input"
            value={medicineQuery}
            onChange={(event) => setMedicineQuery(event.target.value)}
            placeholder={t.searchMedicine}
            aria-label={t.searchMedicine}
          />
          <button
            type="button"
            className="theme-button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? t.themeDark : t.themeLight}
          </button>
          <select
            className="select"
            value={language}
            onChange={(event) => setLanguage(event.target.value as Language)}
            aria-label={t.language}
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
