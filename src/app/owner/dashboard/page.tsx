"use client";

import Link from "next/link";
import { ChangeEvent, useMemo, useState } from "react";
import { useAppContext } from "@/context/app-context";
import { isMedicineExpired, isMedicineExpiringSoon, localizeText } from "@/lib/format";

export default function OwnerDashboardPage() {
  const {
    language,
    t,
    ownerPharmacy,
    ownerMedicines,
    exportOwnerData,
    importOwnerData,
    resetOwnerData,
  } = useAppContext();
  const [message, setMessage] = useState("");

  const lowStockCount = useMemo(
    () => ownerMedicines.filter((item) => item.stockCount > 0 && item.stockCount <= 10).length,
    [ownerMedicines],
  );
  const expiringSoonCount = useMemo(
    () => ownerMedicines.filter((item) => isMedicineExpiringSoon(item.expiryDate)).length,
    [ownerMedicines],
  );
  const expiredCount = useMemo(
    () => ownerMedicines.filter((item) => isMedicineExpired(item.expiryDate)).length,
    [ownerMedicines],
  );
  const recentItems = useMemo(
    () =>
      [...ownerMedicines]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5),
    [ownerMedicines],
  );

  const onExport = () => {
    const payload = exportOwnerData();
    if (!payload) {
      return;
    }

    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "dorichi-owner-data.json";
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const onImport = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const payload = String(reader.result ?? "");
      const success = importOwnerData(payload);
      setMessage(success ? t.importSuccess : t.importFailed);
    };
    reader.onerror = () => setMessage(t.importFailed);
    reader.readAsText(file);
    event.currentTarget.value = "";
  };

  if (!ownerPharmacy) {
    return (
      <section className="hero">
        <p className="hero-caption">{t.ownerDashboard}</p>
        <h1>{t.noOwnerPharmacyTitle}</h1>
        <p>{t.noOwnerPharmacyText}</p>
        <div className="detail-actions">
          <Link href="/owner/pharmacy/new" className="primary-button">
            {t.addPharmacy}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="details-layout">
      <section className="hero">
        <p className="hero-caption">{t.ownerDashboard}</p>
        <h1>{localizeText(ownerPharmacy.name, language)}</h1>
        <p>{t.quickActions}</p>
        <div className="detail-actions">
          <Link href="/owner/pharmacy/edit" className="secondary-button">
            {t.ownerUpdate}
          </Link>
          <Link href="/owner/medicines/new" className="primary-button">
            {t.createMedicine}
          </Link>
        </div>
      </section>

      <section className="stats-grid owner-stats-grid">
        <article className="stat-card">
          <p className="stat-value">1</p>
          <p className="stat-label">{t.totalOwnerPharmacies}</p>
        </article>
        <article className="stat-card">
          <p className="stat-value">{ownerMedicines.length}</p>
          <p className="stat-label">{t.totalOwnerMedicines}</p>
        </article>
        <article className="stat-card">
          <p className="stat-value">{lowStockCount}</p>
          <p className="stat-label">{t.lowStockCount}</p>
        </article>
        <article className="stat-card">
          <p className="stat-value">{expiringSoonCount}</p>
          <p className="stat-label">{t.expiringSoonCount}</p>
        </article>
        <article className="stat-card">
          <p className="stat-value">{expiredCount}</p>
          <p className="stat-label">{t.expiredCount}</p>
        </article>
      </section>

      <section className="details-panel owner-list-panel">
        <h2 className="section-title">{t.quickActions}</h2>
        <div className="detail-actions">
          <button type="button" className="secondary-button" onClick={onExport}>
            {t.exportData}
          </button>
          <label className="secondary-button import-button">
            {t.importData}
            <input type="file" accept="application/json" onChange={onImport} className="hidden-input" />
          </label>
          <button type="button" className="secondary-button danger-button" onClick={resetOwnerData}>
            {t.resetData}
          </button>
        </div>
        <p className="owner-list-text">{t.chooseJsonFile}</p>
        {message ? <p className="owner-list-text">{message}</p> : null}
      </section>

      <section className="details-panel owner-list-panel">
        <h2 className="section-title">{t.recentItems}</h2>
        {recentItems.length > 0 ? (
          <div className="owner-list">
            {recentItems.map((medicine) => (
              <Link key={medicine.id} href={`/owner/medicines/${medicine.id}`} className="owner-list-item">
                <div>
                  <p className="owner-list-title">{localizeText(medicine.name, language)}</p>
                  <p className="owner-list-text">
                    {localizeText(medicine.category, language)} | {medicine.expiryDate}
                  </p>
                </div>
                <p className="owner-list-price">{medicine.stockCount}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>{t.noOwnerMedicineText}</p>
          </div>
        )}
      </section>
    </div>
  );
}
