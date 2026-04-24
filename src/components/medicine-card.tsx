"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import { formatPrice, localizeText } from "@/lib/format";
import { Medicine } from "@/types";
import { CalendarIcon, PillIcon, ShieldIcon, TagIcon } from "@/components/icons";

type MedicineCardProps = {
  medicine: Medicine;
};

export function MedicineCard({ medicine }: MedicineCardProps) {
  const { language, t, getPharmacyById } = useAppContext();
  const pharmacy = getPharmacyById(medicine.pharmacyId);
  const medicineImage = medicine.image || "/images/medicine-placeholder.svg";

  return (
    <article className="card medicine-card">
      <div className="card-image-wrap">
        <Image
          src={medicineImage}
          alt={localizeText(medicine.name, language)}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="card-image"
          unoptimized={medicineImage.startsWith("data:")}
        />
      </div>

      <div className="card-body">
        <h3 className="card-title">{localizeText(medicine.name, language)}</h3>
        <p className="card-text clamp-2">{localizeText(medicine.description, language)}</p>
        <p className="card-text">
          <strong>{t.category}:</strong> {localizeText(medicine.category, language)}
        </p>
        <p className="card-text">
          <strong>{t.showPharmacy}:</strong>{" "}
          {pharmacy ? localizeText(pharmacy.name, language) : "-"}
        </p>

        <div className="price-wrap">
          <p className="price with-icon">
            <PillIcon className="price-icon" />
            {formatPrice(medicine.price, language)}
          </p>
          {medicine.oldPrice ? (
            <p className="old-price">{formatPrice(medicine.oldPrice, language)}</p>
          ) : null}
          {medicine.discountPercent > 0 ? (
            <p className="discount-tag">-{medicine.discountPercent}%</p>
          ) : null}
        </div>

        <div className="badge-row">
          <span className="badge">
            <TagIcon className="badge-icon" />
            {medicine.isAvailable ? t.inStock : t.outOfStock}
          </span>
          <span className="badge">
            <ShieldIcon className="badge-icon" />
            {t.stock}: {medicine.stockCount}
          </span>
          <span className="badge">
            <CalendarIcon className="badge-icon" />
            {medicine.expiryDate}
          </span>
        </div>

        <Link href={`/medicines/${medicine.id}`} className="primary-button">
          {t.viewDetails}
        </Link>
      </div>
    </article>
  );
}
