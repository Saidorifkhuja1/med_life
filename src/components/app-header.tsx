"use client";

import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import { Language } from "@/types";
import { useState } from "react";

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

  const [showSearch, setShowSearch] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-link">
          <span className="brand-mark">D</span>
          <span className="brand-name">{t.projectName}</span>
        </Link>

        {showSearch && (
          <div className="header-search">
            <input
              className="input search-input"
              value={pharmacyQuery}
              onChange={(event) => setPharmacyQuery(event.target.value)}
              placeholder={t.searchPharmacy}
              aria-label={t.searchPharmacy}
              autoFocus
            />
            <input
              className="input search-input"
              value={medicineQuery}
              onChange={(event) => setMedicineQuery(event.target.value)}
              placeholder={t.searchMedicine}
              aria-label={t.searchMedicine}
            />
          </div>
        )}

        <div className="header-controls">
          <button
            type="button"
            className="circular-button search-button"
            onClick={() => setShowSearch(!showSearch)}
            title="Search"
            aria-label="Search"
          >
            🔍
          </button>

          <button
            type="button"
            className="circular-button theme-button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            title={theme === "light" ? t.themeDark : t.themeLight}
            aria-label={theme === "light" ? t.themeDark : t.themeLight}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            type="button"
            className="circular-button language-button"
            onClick={() => setShowLanguage(!showLanguage)}
            title={t.language}
            aria-label={t.language}
          >
            🌐
          </button>

          {showLanguage && (
            <div className="language-dropdown">
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  className={`language-option ${language === option.value ? "active" : ""}`}
                  onClick={() => {
                    setLanguage(option.value as Language);
                    setShowLanguage(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
