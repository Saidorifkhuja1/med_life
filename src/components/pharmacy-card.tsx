"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";
import {
  buildOpenStreetMapUrl,
  formatRating,
  formatWorkingHours,
  isPharmacyOpenNow,
  localizeText,
  normalizePhoneForTel,
} from "@/lib/format";
import { Pharmacy } from "@/types";
import {
  ClockIcon,
  ExternalLinkIcon,
  MapPinIcon,
  PhoneIcon,
  PillIcon,
  StarIcon,
  TruckIcon,
} from "@/components/icons";

type PharmacyCardProps = {
  pharmacy: Pharmacy;
  medicineCount: number;
  imageLoading?: "eager" | "lazy";
};

export function PharmacyCard({
  pharmacy,
  medicineCount,
  imageLoading = "lazy",
}: PharmacyCardProps) {
  const { language, t } = useAppContext();
  const isOpen = isPharmacyOpenNow(pharmacy);
  const workingHours = formatWorkingHours(pharmacy.workingHours);
  const mapLink = buildOpenStreetMapUrl(pharmacy.location.lat, pharmacy.location.lng);
  const phoneHref = normalizePhoneForTel(pharmacy.phone);

  return (
    <article className="card pharmacy-card">
      <div className="card-image-wrap">
        <Image
          src={pharmacy.image}
          alt={localizeText(pharmacy.name, language)}
          fill
          loading={imageLoading}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="card-image"
          unoptimized={pharmacy.image.startsWith("data:")}
        />
        <span className={`state-badge ${isOpen ? "open" : "closed"}`}>
          {isOpen ? t.openNowLabel : t.closedNowLabel}
        </span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{localizeText(pharmacy.name, language)}</h3>
        <p className="card-text card-meta">
          <MapPinIcon className="meta-icon" />
          <span>{localizeText(pharmacy.address, language)}</span>
        </p>

        <div className="badge-row">
          <span className="badge">
            <StarIcon className="badge-icon" />
            {formatRating(pharmacy.rating, language)}
          </span>
          <span className="badge">
            <ClockIcon className="badge-icon" />
            {workingHours}
          </span>
          <span className="badge">
            <PillIcon className="badge-icon" />
            {medicineCount} {t.medicinesCount}
          </span>
          <span className="badge">
            <TruckIcon className="badge-icon" />
            {pharmacy.hasDelivery ? t.deliveryYes : t.deliveryNo}
          </span>
        </div>

        <div className="card-actions">
          <Link href={`/pharmacies/${pharmacy.id}`} className="primary-button">
            {t.viewDetails}
          </Link>
          {phoneHref ? (
            <a href={`tel:${phoneHref}`} className="secondary-button with-icon">
              <PhoneIcon className="button-icon" />
              {t.call}
            </a>
          ) : null}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button with-icon"
          >
            <ExternalLinkIcon className="button-icon" />
            {t.openMap}
          </a>
        </div>
      </div>
    </article>
  );
}
