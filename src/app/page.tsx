"use client";

import { useMemo } from "react";
import { PharmacyCard } from "@/components/pharmacy-card";
import { useAppContext } from "@/context/app-context";
import { getMedicinesByPharmacy, pharmacies } from "@/lib/data";
import { localizeText } from "@/lib/format";

export default function HomePage() {
  const { language, t, pharmacyQuery, medicineQuery } = useAppContext();

  const filteredPharmacies = useMemo(() => {
    const pharmacyTerm = pharmacyQuery.trim().toLowerCase();
    const medicineTerm = medicineQuery.trim().toLowerCase();

    return pharmacies.filter((pharmacy) => {
      const pharmacyName = localizeText(pharmacy.name, language).toLowerCase();
      const pharmacyAddress = localizeText(pharmacy.address, language).toLowerCase();
      const pharmacyDescription = localizeText(pharmacy.description, language).toLowerCase();

      const matchesPharmacy =
        !pharmacyTerm ||
        pharmacyName.includes(pharmacyTerm) ||
        pharmacyAddress.includes(pharmacyTerm) ||
        pharmacyDescription.includes(pharmacyTerm);

      const pharmacyMedicines = getMedicinesByPharmacy(pharmacy.id);
      const matchesMedicine =
        !medicineTerm ||
        pharmacyMedicines.some((medicine) => {
          const medicineName = localizeText(medicine.name, language).toLowerCase();
          const medicineDescription = localizeText(medicine.description, language).toLowerCase();
          return medicineName.includes(medicineTerm) || medicineDescription.includes(medicineTerm);
        });

      return matchesPharmacy && matchesMedicine;
    });
  }, [language, medicineQuery, pharmacyQuery]);

  return (
    <div className="page-wrap">
      <section className="hero">
        <p className="hero-caption">{t.projectName}</p>
        <h1>{t.pharmaciesTitle}</h1>
        <p>{t.pharmaciesSubtitle}</p>
      </section>

      {filteredPharmacies.length > 0 ? (
        <section className="card-grid">
          {filteredPharmacies.map((pharmacy) => (
            <PharmacyCard
              key={pharmacy.id}
              pharmacy={pharmacy}
              medicineCount={getMedicinesByPharmacy(pharmacy.id).length}
            />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>{t.noPharmacyFoundTitle}</h2>
          <p>{t.noPharmacyFoundText}</p>
        </section>
      )}
    </div>
  );
}
