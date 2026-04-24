"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { MapFrame } from "@/components/map-frame";
import { MedicineCard } from "@/components/medicine-card";
import { NotFoundView } from "@/components/not-found-view";
import { useAppContext } from "@/context/app-context";
import {
  buildOpenStreetMapUrl,
  formatRating,
  formatWorkingHours,
  getSingleParam,
  isPharmacyOpenNow,
  localizeText,
  normalizePhoneForTel,
} from "@/lib/format";
import { ClockIcon, MapPinIcon, PhoneIcon, StarIcon, TruckIcon } from "@/components/icons";

export default function PharmacyDetailsPage() {
  const { id } = useParams<{ id: string | string[] }>();
  const {
    language,
    t,
    pharmaciesData,
    getPharmacyById,
    getMedicinesByPharmacy,
  } = useAppContext();
  const pharmacyId = getSingleParam(id);
  const pharmacy = getPharmacyById(pharmacyId);
  const [medicineSearch, setMedicineSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  const pharmacyMedicines = useMemo(
    () => (pharmacy ? getMedicinesByPharmacy(pharmacy.id) : []),
    [getMedicinesByPharmacy, pharmacy],
  );

  const categories = useMemo(() => {
    return Array.from(
      new Set(pharmacyMedicines.map((item) => localizeText(item.category, language))),
    ).sort((a, b) => a.localeCompare(b));
  }, [language, pharmacyMedicines]);

  const visibleMedicines = useMemo(() => {
    const search = medicineSearch.trim().toLowerCase();
    return pharmacyMedicines.filter((medicine) => {
      if (search) {
        const name = localizeText(medicine.name, language).toLowerCase();
        const description = localizeText(medicine.description, language).toLowerCase();
        if (!name.includes(search) && !description.includes(search)) {
          return false;
        }
      }

      if (categoryFilter && localizeText(medicine.category, language) !== categoryFilter) {
        return false;
      }

      if (availableOnly && !medicine.isAvailable) {
        return false;
      }

      return true;
    });
  }, [availableOnly, categoryFilter, language, medicineSearch, pharmacyMedicines]);

  const similarPharmacies = useMemo(() => {
    if (!pharmacy) {
      return [];
    }
    const district = localizeText(pharmacy.district, language);
    return pharmaciesData
      .filter((item) => item.id !== pharmacy.id)
      .filter((item) => localizeText(item.district, language) === district)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
  }, [language, pharmaciesData, pharmacy]);

  if (!pharmacy) {
    return <NotFoundView t={t} />;
  }

  const isOpen = isPharmacyOpenNow(pharmacy);
  const phoneHref = normalizePhoneForTel(pharmacy.phone);

  return (
    <div className="details-layout">
      <section className="details-panel">
        <div className="card-image-wrap hero-image-wrap">
          <Image
            src={pharmacy.image}
            alt={localizeText(pharmacy.name, language)}
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="card-image"
            unoptimized={pharmacy.image.startsWith("data:")}
          />
        </div>

        {pharmacy.images.length > 1 ? (
          <div className="gallery-grid">
            {pharmacy.images.slice(1, 5).map((image, index) => (
              <div key={`${image.slice(0, 30)}-${index}`} className="gallery-item">
                <Image
                  src={image}
                  alt={`${localizeText(pharmacy.name, language)}-${index + 2}`}
                  fill
                  className="card-image"
                  unoptimized={image.startsWith("data:")}
                />
              </div>
            ))}
          </div>
        ) : null}

        <div className="details-main">
          <h1>{localizeText(pharmacy.name, language)}</h1>
          <div className="details-meta">
            <p className="details-line">
              <strong>{t.location}:</strong> {localizeText(pharmacy.address, language)}
            </p>
            <p className="details-line">
              <strong>{t.district}:</strong> {localizeText(pharmacy.district, language)}
            </p>
            <p className="details-line">
              <strong>{t.description}:</strong> {localizeText(pharmacy.description, language)}
            </p>
          </div>

          <div className="badge-row">
            <span className="badge">
              <StarIcon className="badge-icon" />
              {formatRating(pharmacy.rating, language)}
            </span>
            <span className="badge">
              <ClockIcon className="badge-icon" />
              {formatWorkingHours(pharmacy.workingHours)}
            </span>
            <span className={`badge ${isOpen ? "badge-success" : "badge-danger"}`}>
              {isOpen ? t.openNowLabel : t.closedNowLabel}
            </span>
            <span className="badge">
              <TruckIcon className="badge-icon" />
              {pharmacy.hasDelivery ? t.deliveryYes : t.deliveryNo}
            </span>
          </div>
        </div>

        <div className="detail-actions">
          <Link href="/" className="secondary-button">
            {t.back}
          </Link>
          {phoneHref ? (
            <a href={`tel:${phoneHref}`} className="secondary-button with-icon">
              <PhoneIcon className="button-icon" />
              {t.call}
            </a>
          ) : null}
          <a
            href={buildOpenStreetMapUrl(pharmacy.location.lat, pharmacy.location.lng)}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button with-icon"
          >
            <MapPinIcon className="button-icon" />
            {t.openMap}
          </a>
        </div>

        <MapFrame
          lat={pharmacy.location.lat}
          lng={pharmacy.location.lng}
          linkLabel={t.openMap}
          title={`${localizeText(pharmacy.name, language)} - ${t.openMap}`}
        />
      </section>

      <section className="filter-panel">
        <h2>{t.medicineSearchInPharmacy}</h2>
        <div className="filter-grid">
          <label className="form-field">
            <span>{t.searchMedicine}</span>
            <input
              className="input"
              value={medicineSearch}
              onChange={(event) => setMedicineSearch(event.target.value)}
              placeholder={t.searchMedicine}
            />
          </label>

          <label className="form-field">
            <span>{t.medicineCategory}</span>
            <select
              className="input"
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
            >
              <option value="">{t.allCategories}</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="checkbox-field">
            <input
              type="checkbox"
              checked={availableOnly}
              onChange={(event) => setAvailableOnly(event.target.checked)}
            />
            <span>{t.availabilityOnly}</span>
          </label>
        </div>
      </section>

      <section>
        <h2 className="section-title">{t.availableMedicines}</h2>
        {visibleMedicines.length > 0 ? (
          <div className="card-grid">
            {visibleMedicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>{t.noOwnerMedicineTitle}</h3>
            <p>{t.noOwnerMedicineText}</p>
          </div>
        )}
      </section>

      <section>
        <h2 className="section-title">{t.similarPharmacies}</h2>
        {similarPharmacies.length > 0 ? (
          <div className="related-list">
            {similarPharmacies.map((item) => (
              <Link key={item.id} href={`/pharmacies/${item.id}`} className="related-item">
                <p className="owner-list-title">{localizeText(item.name, language)}</p>
                <p className="owner-list-text">{localizeText(item.address, language)}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>{t.noSimilarPharmacies}</p>
          </div>
        )}
      </section>
    </div>
  );
}
