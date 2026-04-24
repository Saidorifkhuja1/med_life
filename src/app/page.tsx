"use client";

import { useMemo, useState } from "react";
import { FilterIcon } from "@/components/icons";
import { PharmacyCard } from "@/components/pharmacy-card";
import { useAppContext } from "@/context/app-context";
import { isPharmacyOpenNow, localizeText } from "@/lib/format";
import { Pharmacy } from "@/types";

type SortMode = "rating" | "name" | "newest";

export default function HomePage() {
  const {
    language,
    t,
    pharmacyQuery,
    medicineQuery,
    pharmaciesData,
    medicinesData,
    getMedicinesByPharmacy,
  } = useAppContext();

  const [openNowOnly, setOpenNowOnly] = useState(false);
  const [only24x7, setOnly24x7] = useState(false);
  const [hasDeliveryOnly, setHasDeliveryOnly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [minRating, setMinRating] = useState("0");
  const [districtFilter, setDistrictFilter] = useState("");
  const [selectedMedicineId, setSelectedMedicineId] = useState("");
  const [sortBy, setSortBy] = useState<SortMode>("rating");

  const districtOptions = useMemo(() => {
    return Array.from(
      new Set(pharmaciesData.map((item) => localizeText(item.district, language).trim()).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b));
  }, [language, pharmaciesData]);

  const medicineOptions = useMemo(() => {
    return medicinesData
      .map((item) => ({
        id: item.id,
        name: localizeText(item.name, language),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [language, medicinesData]);

  const filteredPharmacies = useMemo(() => {
    const textTerm = pharmacyQuery.trim().toLowerCase();
    const medicineTerm = medicineQuery.trim().toLowerCase();
    const minRatingValue = Number.parseFloat(minRating);

    const matchesSearch = (pharmacy: Pharmacy) => {
      const pharmacyMedicines = getMedicinesByPharmacy(pharmacy.id);
      const medicineMatched = pharmacyMedicines.some((medicine) => {
        const medicineName = localizeText(medicine.name, language).toLowerCase();
        return medicineName.includes(textTerm) || medicineName.includes(medicineTerm);
      });

      if (!textTerm && !medicineTerm) {
        return true;
      }

      const fields = [
        localizeText(pharmacy.name, language),
        localizeText(pharmacy.address, language),
        localizeText(pharmacy.district, language),
        localizeText(pharmacy.description, language),
      ]
        .join(" ")
        .toLowerCase();

      return (
        fields.includes(textTerm) ||
        fields.includes(medicineTerm) ||
        medicineMatched
      );
    };

    const matchesFilters = (pharmacy: Pharmacy) => {
      const pharmacyMedicines = getMedicinesByPharmacy(pharmacy.id);

      if (openNowOnly && !isPharmacyOpenNow(pharmacy)) {
        return false;
      }

      if (only24x7 && !pharmacy.workingHours.is24x7) {
        return false;
      }

      if (hasDeliveryOnly && !pharmacy.hasDelivery) {
        return false;
      }

      if (districtFilter && localizeText(pharmacy.district, language) !== districtFilter) {
        return false;
      }

      if (Number.isFinite(minRatingValue) && pharmacy.rating < minRatingValue) {
        return false;
      }

      if (selectedMedicineId && !pharmacyMedicines.some((medicine) => medicine.id === selectedMedicineId)) {
        return false;
      }

      if (availableOnly && !pharmacyMedicines.some((medicine) => medicine.isAvailable)) {
        return false;
      }

      return true;
    };

    return pharmaciesData
      .filter((pharmacy) => matchesSearch(pharmacy) && matchesFilters(pharmacy))
      .sort((a, b) => {
        if (sortBy === "name") {
          return localizeText(a.name, language).localeCompare(localizeText(b.name, language));
        }
        if (sortBy === "newest") {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        return b.rating - a.rating;
      });
  }, [
    availableOnly,
    districtFilter,
    getMedicinesByPharmacy,
    hasDeliveryOnly,
    language,
    medicineQuery,
    minRating,
    only24x7,
    openNowOnly,
    pharmaciesData,
    pharmacyQuery,
    selectedMedicineId,
    sortBy,
  ]);

  const openNowCount = useMemo(
    () => pharmaciesData.filter((item) => isPharmacyOpenNow(item)).length,
    [pharmaciesData],
  );

  const resetFilters = () => {
    setOpenNowOnly(false);
    setOnly24x7(false);
    setHasDeliveryOnly(false);
    setAvailableOnly(false);
    setMinRating("0");
    setDistrictFilter("");
    setSelectedMedicineId("");
    setSortBy("rating");
  };

  return (
    <div className="page-wrap">
      <section className="hero">
        <p className="hero-caption">{t.projectName}</p>
        <h1>{t.pharmaciesTitle}</h1>
        <p>{t.pharmaciesSubtitle}</p>

        <div className="stats-grid">
          <article className="stat-card">
            <p className="stat-value">{pharmaciesData.length}</p>
            <p className="stat-label">{t.totalPharmacies}</p>
          </article>
          <article className="stat-card">
            <p className="stat-value">{medicinesData.length}</p>
            <p className="stat-label">{t.totalMedicines}</p>
          </article>
          <article className="stat-card">
            <p className="stat-value">{filteredPharmacies.length}</p>
            <p className="stat-label">{t.visibleResults}</p>
          </article>
          <article className="stat-card">
            <p className="stat-value">{openNowCount}</p>
            <p className="stat-label">{t.openPharmaciesNow}</p>
          </article>
        </div>
      </section>

      <section className="filter-panel">
        <h2 className="filter-title with-icon">
          <FilterIcon className="button-icon" />
          {t.filtersTitle}
        </h2>

        <div className="filter-grid">
          <label className="checkbox-field checkbox-card">
            <input type="checkbox" checked={openNowOnly} onChange={(event) => setOpenNowOnly(event.target.checked)} />
            <span className="checkbox-mark" aria-hidden="true" />
            <span className="checkbox-copy">
              <strong>{t.openNow}</strong>
              <small>{t.openPharmaciesNow}</small>
            </span>
          </label>
          <label className="checkbox-field checkbox-card">
            <input type="checkbox" checked={only24x7} onChange={(event) => setOnly24x7(event.target.checked)} />
            <span className="checkbox-mark" aria-hidden="true" />
            <span className="checkbox-copy">
              <strong>{t.only24x7}</strong>
              <small>{t.workingHours}</small>
            </span>
          </label>
          <label className="checkbox-field checkbox-card">
            <input
              type="checkbox"
              checked={hasDeliveryOnly}
              onChange={(event) => setHasDeliveryOnly(event.target.checked)}
            />
            <span className="checkbox-mark" aria-hidden="true" />
            <span className="checkbox-copy">
              <strong>{t.hasDelivery}</strong>
              <small>{t.delivery}</small>
            </span>
          </label>
          <label className="checkbox-field checkbox-card">
            <input type="checkbox" checked={availableOnly} onChange={(event) => setAvailableOnly(event.target.checked)} />
            <span className="checkbox-mark" aria-hidden="true" />
            <span className="checkbox-copy">
              <strong>{t.availabilityOnly}</strong>
              <small>{t.availableMedicines}</small>
            </span>
          </label>

          <label className="form-field">
            <span>{t.minRating}</span>
            <select className="input" value={minRating} onChange={(event) => setMinRating(event.target.value)}>
              <option value="0">0+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="4.5">4.5+</option>
            </select>
          </label>

          <label className="form-field">
            <span>{t.district}</span>
            <select
              className="input"
              value={districtFilter}
              onChange={(event) => setDistrictFilter(event.target.value)}
            >
              <option value="">{t.allDistricts}</option>
              {districtOptions.map((districtOption) => (
                <option key={districtOption} value={districtOption}>
                  {districtOption}
                </option>
              ))}
            </select>
          </label>

          <label className="form-field">
            <span>{t.hasSelectedMedicine}</span>
            <select
              className="input"
              value={selectedMedicineId}
              onChange={(event) => setSelectedMedicineId(event.target.value)}
            >
              <option value="">{t.allMedicinesOption}</option>
              {medicineOptions.map((medicineOption) => (
                <option key={medicineOption.id} value={medicineOption.id}>
                  {medicineOption.name}
                </option>
              ))}
            </select>
          </label>

          <label className="form-field">
            <span>{t.sortBy}</span>
            <select className="input" value={sortBy} onChange={(event) => setSortBy(event.target.value as SortMode)}>
              <option value="rating">{t.sortRating}</option>
              <option value="name">{t.sortName}</option>
              <option value="newest">{t.sortNewest}</option>
            </select>
          </label>
        </div>

        <button type="button" className="secondary-button" onClick={resetFilters}>
          {t.resetFilters}
        </button>
      </section>

      {filteredPharmacies.length > 0 ? (
        <section className="card-grid" aria-label={t.totalPharmacies}>
          {filteredPharmacies.map((pharmacy, index) => (
            <PharmacyCard
              key={pharmacy.id}
              pharmacy={pharmacy}
              medicineCount={getMedicinesByPharmacy(pharmacy.id).length}
              imageLoading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>{t.noPharmacyFoundTitle}</h2>
          <p>{t.noPharmacyFoundText}</p>
          <button type="button" className="secondary-button" onClick={resetFilters}>
            {t.resetFilters}
          </button>
        </section>
      )}
    </div>
  );
}
