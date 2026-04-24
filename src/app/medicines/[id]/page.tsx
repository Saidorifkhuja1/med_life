"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MapFrame } from "@/components/map-frame";
import { NotFoundView } from "@/components/not-found-view";
import { useAppContext } from "@/context/app-context";
import { getMedicineById, getPharmacyById } from "@/lib/data";
import { formatPrice, getSingleParam, localizeText } from "@/lib/format";

export default function MedicineDetailsPage() {
  const { id } = useParams<{ id: string | string[] }>();
  const { language, t } = useAppContext();
  const medicineId = getSingleParam(id);
  const medicine = getMedicineById(medicineId);

  if (!medicine) {
    return <NotFoundView t={t} />;
  }

  const pharmacy = getPharmacyById(medicine.pharmacyId);

  if (!pharmacy) {
    return <NotFoundView t={t} />;
  }

  return (
    <div className="details-layout">
      <section className="details-panel">
        <div className="card-image-wrap">
          <Image
            src={medicine.image}
            alt={localizeText(medicine.name, language)}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="card-image"
          />
        </div>

        <div className="details-main">
          <h1>{localizeText(medicine.name, language)}</h1>
          <div className="details-meta">
            <p className="details-line">
              <strong>{t.price}:</strong> {formatPrice(medicine.price, language)}
            </p>
            <p className="details-line">
              <strong>{t.phone}:</strong> {pharmacy.phone}
            </p>
            <p className="details-line">
              <strong>{t.location}:</strong> {localizeText(pharmacy.address, language)}
            </p>
            <p className="details-line">
              <strong>{t.description}:</strong> {localizeText(medicine.description, language)}
            </p>
          </div>
        </div>

        <div className="detail-actions">
          <Link href={`/pharmacies/${pharmacy.id}`} className="primary-button">
            {t.showPharmacy}
          </Link>
          <Link href={`/pharmacies/${pharmacy.id}/medicines`} className="secondary-button">
            {t.allMedicines}
          </Link>
        </div>

        <MapFrame lat={pharmacy.location.lat} lng={pharmacy.location.lng} linkLabel={t.openMap} />
      </section>
    </div>
  );
}
