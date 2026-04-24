"use client";

import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import { formatPrice, localizeText } from "@/lib/format";

export default function OwnerMedicinesPage() {
  const { ownerPharmacy, ownerMedicines, language, t } = useAppContext();

  if (!ownerPharmacy) {
    return (
      <section className="hero">
        <p className="hero-caption">{t.ownerMedicines}</p>
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
        <p className="hero-caption">{t.ownerMedicines}</p>
        <h1>{t.medicineList}</h1>
        <p>
          {ownerMedicines.length} {t.medicinesCount}
        </p>
        <div className="detail-actions">
          <Link href="/owner/medicines/new" className="primary-button">
            {t.createMedicine}
          </Link>
          <Link href="/owner/dashboard" className="secondary-button">
            {t.ownerDashboard}
          </Link>
        </div>
      </section>

      {ownerMedicines.length === 0 ? (
        <section className="empty-state">
          <h2>{t.noOwnerMedicineTitle}</h2>
          <p>{t.noOwnerMedicineText}</p>
          <Link href="/owner/medicines/new" className="primary-button">
            {t.createMedicine}
          </Link>
        </section>
      ) : (
        <section className="details-panel owner-list-panel">
          <div className="owner-list">
            {ownerMedicines.map((medicine) => (
              <Link key={medicine.id} href={`/owner/medicines/${medicine.id}`} className="owner-list-item">
                <div>
                  <p className="owner-list-title">{localizeText(medicine.name, language)}</p>
                  <p className="owner-list-text">
                    {localizeText(medicine.category, language)} | {medicine.stockCount}
                  </p>
                </div>
                <p className="owner-list-price">{formatPrice(medicine.price, language)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
