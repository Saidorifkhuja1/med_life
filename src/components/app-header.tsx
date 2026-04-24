"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useAppContext } from "@/context/app-context";
import { localizeText } from "@/lib/format";
import { Language } from "@/types";
import { GlobeIcon, MoonIcon, SearchIcon, SunIcon } from "@/components/icons";

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
    ownerPharmacy,
    t,
  } = useAppContext();

  const languageOptions = useMemo(
    () =>
      [
        { value: "uz", label: "UZ", title: t.langUz },
        { value: "ru", label: "RU", title: t.langRu },
        { value: "en", label: "EN", title: t.langEn },
        { value: "zh", label: "ZH", title: t.langZh },
        { value: "tr", label: "TR", title: t.langTr },
      ] as const,
    [t.langEn, t.langRu, t.langTr, t.langUz, t.langZh],
  );

  const [showSearch, setShowSearch] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showOwnerMenu, setShowOwnerMenu] = useState(false);
  const languageRef = useRef<HTMLDivElement | null>(null);
  const ownerMenuRef = useRef<HTMLDivElement | null>(null);

  const ownerInitial = useMemo(() => {
    if (!ownerPharmacy) {
      return "";
    }

    const name = localizeText(ownerPharmacy.name, language).trim();
    return name ? name.charAt(0).toUpperCase() : "D";
  }, [language, ownerPharmacy]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (showLanguage && languageRef.current && !languageRef.current.contains(target)) {
        setShowLanguage(false);
      }

      if (showOwnerMenu && ownerMenuRef.current && !ownerMenuRef.current.contains(target)) {
        setShowOwnerMenu(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowLanguage(false);
        setShowSearch(false);
        setShowOwnerMenu(false);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showLanguage, showOwnerMenu]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-link">
          <span className="brand-mark">D</span>
          <span className="brand-name">{t.projectName}</span>
        </Link>

        {showSearch ? (
          <div className="header-search" id="header-search-panel">
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
        ) : null}

        <div className="header-controls">
          <button
            type="button"
            className="icon-button search-button"
            onClick={() => setShowSearch((prev) => !prev)}
            title={showSearch ? t.closeSearch : t.openSearch}
            aria-label={showSearch ? t.closeSearch : t.openSearch}
            aria-expanded={showSearch}
            aria-controls="header-search-panel"
          >
            <SearchIcon className="button-icon" />
          </button>

          <button
            type="button"
            className="icon-button theme-button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            title={theme === "light" ? t.themeDark : t.themeLight}
            aria-label={theme === "light" ? t.themeDark : t.themeLight}
            aria-pressed={theme === "dark"}
          >
            {theme === "light" ? <MoonIcon className="button-icon" /> : <SunIcon className="button-icon" />}
          </button>

          <div className="language-shell" ref={languageRef}>
            <button
              type="button"
              className="icon-button language-button"
              onClick={() => {
                setShowLanguage((prev) => !prev);
                setShowOwnerMenu(false);
              }}
              title={t.language}
              aria-label={t.language}
              aria-haspopup="menu"
              aria-expanded={showLanguage}
            >
              <GlobeIcon className="button-icon" />
            </button>

            {showLanguage ? (
              <div className="language-dropdown" role="menu">
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`language-option ${language === option.value ? "active" : ""}`}
                    onClick={() => {
                      setLanguage(option.value as Language);
                      setShowLanguage(false);
                    }}
                    role="menuitemradio"
                    aria-checked={language === option.value}
                    title={option.title}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {!ownerPharmacy ? (
            <Link href="/owner/pharmacy/new" className="owner-add-button">
              {t.addPharmacy}
            </Link>
          ) : (
            <div className="owner-shell" ref={ownerMenuRef}>
              <button
                type="button"
                className="owner-avatar-button"
                onClick={() => {
                  setShowOwnerMenu((prev) => !prev);
                  setShowLanguage(false);
                }}
                aria-haspopup="menu"
                aria-expanded={showOwnerMenu}
                title={localizeText(ownerPharmacy.name, language)}
                aria-label={localizeText(ownerPharmacy.name, language)}
              >
                {ownerInitial}
              </button>

              {showOwnerMenu ? (
                <div className="owner-dropdown" role="menu">
                  <Link href="/owner/dashboard" className="owner-dropdown-item" onClick={() => setShowOwnerMenu(false)}>
                    {t.ownerDashboard}
                  </Link>
                  <Link href="/owner/pharmacy" className="owner-dropdown-item" onClick={() => setShowOwnerMenu(false)}>
                    {t.ownerPharmacy}
                  </Link>
                  <Link href="/owner/pharmacy/edit" className="owner-dropdown-item" onClick={() => setShowOwnerMenu(false)}>
                    {t.ownerUpdate}
                  </Link>
                  <Link href="/owner/medicines" className="owner-dropdown-item" onClick={() => setShowOwnerMenu(false)}>
                    {t.ownerMedicines}
                  </Link>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
