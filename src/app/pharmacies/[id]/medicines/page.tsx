"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { MedicineCard } from "@/components/medicine-card";
import { NotFoundView } from "@/components/not-found-view";
import { useAppContext } from "@/context/app-context";
import { getSingleParam, localizeText } from "@/lib/format";

export default function PharmacyMedicinesPage() {
  const { id } = useParams<{ id: string | string[] }>();
  const { language, t, getPharmacyById, getMedicinesByPharmacy } = useAppContext();
  const pharmacyId = getSingleParam(id);
  const pharmacy = getPharmacyById(pharmacyId);

  if (!pharmacy) {
    return <NotFoundView t={t} />;
  }

  const pharmacyMedicines = getMedicinesByPharmacy(pharmacy.id);

  return (
    <div className="details-layout">
      <section className="hero">
        <p className="hero-caption">{t.allMedicines}</p>
        <h1>{localizeText(pharmacy.name, language)}</h1>
        <p>
          {pharmacyMedicines.length} {t.medicinesCount}
        </p>
        <div className="detail-actions">
          <Link href={`/pharmacies/${pharmacy.id}`} className="secondary-button">
            {t.details}
          </Link>
          <Link href="/" className="secondary-button">
            {t.backHome}
          </Link>
        </div>
      </section>

      <section className="card-grid">
        {pharmacyMedicines.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </section>
    </div>
  );
}
