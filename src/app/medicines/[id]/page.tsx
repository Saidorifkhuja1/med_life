"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MapFrame } from "@/components/map-frame";
import { NotFoundView } from "@/components/not-found-view";
import { useAppContext } from "@/context/app-context";
import {
  formatPrice,
  getSingleParam,
  localizeText,
} from "@/lib/format";

export default function MedicineDetailsPage() {
  const { id } = useParams<{ id: string | string[] }>();
  const { language, t, getMedicineById, getPharmacyById } = useAppContext();
  const medicineId = getSingleParam(id);
  const medicine = getMedicineById(medicineId);

  if (!medicine) {
    return <NotFoundView t={t} />;
  }

  const pharmacy = getPharmacyById(medicine.pharmacyId);
  if (!pharmacy) {
    return <NotFoundView t={t} />;
  }

  const medicineImage = medicine.image || "/images/medicine-placeholder.svg";

  return (
    <div className="details-layout">
      <section className="details-panel">
        <div className="card-image-wrap">
          <Image
            src={medicineImage}
            alt={localizeText(medicine.name, language)}
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="card-image"
            unoptimized={medicineImage.startsWith("data:")}
          />
        </div>

        <div className="details-main">
          <h1>{localizeText(medicine.name, language)}</h1>
          <div className="details-meta medicine-meta-grid">
            <p className="details-line">
              <strong>{t.price}:</strong> {formatPrice(medicine.price, language)}
            </p>
            {medicine.oldPrice ? (
              <p className="details-line">
                <strong>{t.oldPrice}:</strong> {formatPrice(medicine.oldPrice, language)}
              </p>
            ) : null}
            <p className="details-line">
              <strong>{t.category}:</strong> {localizeText(medicine.category, language)}
            </p>
            <p className="details-line">
              <strong>{t.availability}:</strong> {medicine.isAvailable ? t.inStock : t.outOfStock}
            </p>
            <p className="details-line">
              <strong>{t.stock}:</strong> {medicine.stockCount}
            </p>
            <p className="details-line">
              <strong>{t.manufacturer}:</strong> {localizeText(medicine.manufacturer, language)}
            </p>
            <p className="details-line">
              <strong>{t.dosage}:</strong> {localizeText(medicine.dosage, language)}
            </p>
            <p className="details-line">
              <strong>{t.expiryDate}:</strong> {medicine.expiryDate}
            </p>
            <p className="details-line">
              <strong>{t.prescriptionRequired}:</strong> {medicine.prescriptionRequired ? t.yes : t.no}
            </p>
            <p className="details-line">
              <strong>{t.tags}:</strong> {medicine.tags.join(", ") || "-"}
            </p>
            <p className="details-line">
              <strong>{t.description}:</strong> {localizeText(medicine.description, language)}
            </p>
            <p className="details-line">
              <strong>{t.showPharmacy}:</strong> {localizeText(pharmacy.name, language)}
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

        <MapFrame
          lat={pharmacy.location.lat}
          lng={pharmacy.location.lng}
          linkLabel={t.openMap}
          title={`${localizeText(pharmacy.name, language)} - ${t.openMap}`}
        />
      </section>
    </div>
  );
}
