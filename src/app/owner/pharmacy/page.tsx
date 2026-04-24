"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import { formatRating, formatWorkingHours, localizeText } from "@/lib/format";
import { MapFrame } from "@/components/map-frame";

export default function OwnerPharmacyPage() {
  const { ownerPharmacy, language, t } = useAppContext();

  if (!ownerPharmacy) {
    return (
      <section className="hero">
        <p className="hero-caption">{t.ownerPharmacy}</p>
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
      <section className="details-panel">
        <div className="card-image-wrap">
          <Image
            src={ownerPharmacy.image}
            alt={localizeText(ownerPharmacy.name, language)}
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="card-image"
            unoptimized={ownerPharmacy.image.startsWith("data:")}
          />
        </div>

        <div className="details-main">
          <h1>{localizeText(ownerPharmacy.name, language)}</h1>
          <div className="details-meta">
            <p className="details-line">
              <strong>{t.phone}:</strong> {ownerPharmacy.phone}
            </p>
            <p className="details-line">
              <strong>{t.location}:</strong> {localizeText(ownerPharmacy.address, language)}
            </p>
            <p className="details-line">
              <strong>{t.district}:</strong> {localizeText(ownerPharmacy.district, language)}
            </p>
            <p className="details-line">
              <strong>{t.rating}:</strong> {formatRating(ownerPharmacy.rating, language)}
            </p>
            <p className="details-line">
              <strong>{t.workingHours}:</strong> {formatWorkingHours(ownerPharmacy.workingHours)}
            </p>
            <p className="details-line">
              <strong>{t.delivery}:</strong> {ownerPharmacy.hasDelivery ? t.deliveryYes : t.deliveryNo}
            </p>
            <p className="details-line">
              <strong>{t.description}:</strong> {localizeText(ownerPharmacy.description, language)}
            </p>
          </div>
        </div>

        <div className="detail-actions">
          <Link href="/owner/dashboard" className="primary-button">
            {t.ownerDashboard}
          </Link>
          <Link href="/owner/pharmacy/edit" className="secondary-button">
            {t.ownerUpdate}
          </Link>
          <Link href="/owner/medicines" className="secondary-button">
            {t.ownerMedicines}
          </Link>
          <Link href={`/pharmacies/${ownerPharmacy.id}`} className="secondary-button">
            {t.goToPharmacy}
          </Link>
        </div>

        {ownerPharmacy.images.length > 1 ? (
          <div className="owner-gallery">
            {ownerPharmacy.images.map((src, index) => (
              <div key={`${index}-${src.slice(0, 20)}`} className="owner-gallery-item">
                <Image
                  src={src}
                  alt={`${localizeText(ownerPharmacy.name, language)} ${index + 1}`}
                  fill
                  className="card-image"
                  unoptimized={src.startsWith("data:")}
                />
              </div>
            ))}
          </div>
        ) : null}

        <MapFrame
          lat={ownerPharmacy.location.lat}
          lng={ownerPharmacy.location.lng}
          linkLabel={t.openMap}
          title={`${localizeText(ownerPharmacy.name, language)} - ${t.openMap}`}
        />
      </section>
    </div>
  );
}
