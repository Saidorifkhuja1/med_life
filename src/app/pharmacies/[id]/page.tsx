"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MedicineCard } from "@/components/medicine-card";
import { MapFrame } from "@/components/map-frame";
import { NotFoundView } from "@/components/not-found-view";
import { useAppContext } from "@/context/app-context";
import { getMedicinesByPharmacy, getPharmacyById } from "@/lib/data";
import { getSingleParam, localizeText } from "@/lib/format";

export default function PharmacyDetailsPage() {
  const { id } = useParams<{ id: string | string[] }>();
  const { language, t } = useAppContext();
  const pharmacyId = getSingleParam(id);
  const pharmacy = getPharmacyById(pharmacyId);

  if (!pharmacy) {
    return <NotFoundView t={t} />;
  }

  const pharmacyMedicines = getMedicinesByPharmacy(pharmacy.id);

  return (
    <div className="details-layout">
      <section className="details-panel">
        <div className="card-image-wrap">
          <Image
            src={pharmacy.image}
            alt={localizeText(pharmacy.name, language)}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="card-image"
          />
        </div>

        <div className="details-main">
          <h1>{localizeText(pharmacy.name, language)}</h1>
          <div className="details-meta">
            <p className="details-line">
              <strong>{t.phone}:</strong> {pharmacy.phone}
            </p>
            <p className="details-line">
              <strong>{t.location}:</strong> {localizeText(pharmacy.address, language)}
            </p>
            <p className="details-line">
              <strong>{t.description}:</strong> {localizeText(pharmacy.description, language)}
            </p>
          </div>
        </div>

        <div className="detail-actions">
          <Link href={`/pharmacies/${pharmacy.id}/medicines`} className="primary-button">
            {t.allMedicines}
          </Link>
        </div>

        <MapFrame lat={pharmacy.location.lat} lng={pharmacy.location.lng} linkLabel={t.openMap} />
      </section>

      <section>
        <h2 className="section-title">{t.availableMedicines}</h2>
        <div className="card-grid">
          {pharmacyMedicines.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      </section>
    </div>
  );
}
