"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAppContext } from "@/context/app-context";
import { getSingleParam, localizeText } from "@/lib/format";
import { Medicine } from "@/types";

const DEFAULT_CATEGORIES = [
  "Pain Relief",
  "Antibiotic",
  "Vitamins",
  "Allergy",
  "Gastro",
  "Cardio",
  "Diabetes",
  "Cold and Flu",
];

export default function OwnerMedicineDetailsPage() {
  const { id } = useParams<{ id: string | string[] }>();
  const { ownerPharmacy, getOwnerMedicineById, t } = useAppContext();

  const medicineId = getSingleParam(id);
  const medicine = getOwnerMedicineById(medicineId);

  if (!ownerPharmacy) {
    return (
      <section className="hero">
        <p className="hero-caption">{t.ownerMedicines}</p>
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

  if (!medicine) {
    return (
      <section className="empty-state">
        <h2>{t.notFoundTitle}</h2>
        <p>{t.notFoundText}</p>
        <Link href="/owner/medicines" className="secondary-button">
          {t.ownerMedicines}
        </Link>
      </section>
    );
  }

  return <OwnerMedicineEditForm medicine={medicine} medicineId={medicineId} />;
}

function OwnerMedicineEditForm({
  medicine,
  medicineId,
}: {
  medicine: Medicine;
  medicineId: string;
}) {
  const { language, t, pharmaciesData, updateOwnerMedicine } = useAppContext();
  const router = useRouter();
  const [pharmacyId, setPharmacyId] = useState(medicine.pharmacyId);
  const [name, setName] = useState(localizeText(medicine.name, language));
  const [description, setDescription] = useState(localizeText(medicine.description, language));
  const [category, setCategory] = useState(localizeText(medicine.category, language));
  const [price, setPrice] = useState(String(medicine.price));
  const [oldPrice, setOldPrice] = useState(medicine.oldPrice ? String(medicine.oldPrice) : "");
  const [discountPercent, setDiscountPercent] = useState(String(medicine.discountPercent || ""));
  const [isAvailable, setIsAvailable] = useState(medicine.isAvailable);
  const [stockCount, setStockCount] = useState(String(medicine.stockCount));
  const [manufacturer, setManufacturer] = useState(localizeText(medicine.manufacturer, language));
  const [dosage, setDosage] = useState(localizeText(medicine.dosage, language));
  const [expiryDate, setExpiryDate] = useState(medicine.expiryDate);
  const [prescriptionRequired, setPrescriptionRequired] = useState(medicine.prescriptionRequired);
  const [tags, setTags] = useState(medicine.tags.join(", "));
  const [image, setImage] = useState(medicine.image || "");
  const [error, setError] = useState("");

  const pharmacyOptions = useMemo(
    () =>
      pharmaciesData.map((pharmacy) => ({
        id: pharmacy.id,
        label: localizeText(pharmacy.name, language),
      })),
    [language, pharmaciesData],
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const parsedPrice = Number.parseFloat(price);
    const parsedStock = Number.parseInt(stockCount, 10);
    const parsedOldPrice = oldPrice ? Number.parseFloat(oldPrice) : null;
    const parsedDiscount = discountPercent ? Number.parseFloat(discountPercent) : 0;

    if (!Number.isFinite(parsedPrice) || parsedPrice < 0) {
      setError(t.invalidPrice);
      return;
    }

    if (!Number.isFinite(parsedStock) || parsedStock < 0) {
      setError(t.invalidStock);
      return;
    }

    if (parsedOldPrice !== null && (!Number.isFinite(parsedOldPrice) || parsedOldPrice <= parsedPrice)) {
      setError(t.invalidOldPrice);
      return;
    }

    if (!Number.isFinite(parsedDiscount) || parsedDiscount < 0 || parsedDiscount > 95) {
      setError(t.invalidDiscount);
      return;
    }

    updateOwnerMedicine(medicineId, {
      pharmacyId,
      name,
      description,
      category,
      price: parsedPrice,
      oldPrice: parsedOldPrice,
      discountPercent: parsedDiscount,
      isAvailable,
      stockCount: parsedStock,
      manufacturer,
      dosage,
      expiryDate,
      prescriptionRequired,
      tags: tags
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      image,
    });

    router.push("/owner/medicines");
  };

  return (
    <section className="details-panel owner-form-panel">
      <div className="details-main">
        <h1>{t.medicineFormTitleUpdate}</h1>
        <form className="owner-form" onSubmit={onSubmit}>
          <div className="form-row">
            <label className="form-field">
              <span>{t.selectPharmacy}</span>
              <select className="input" value={pharmacyId} onChange={(event) => setPharmacyId(event.target.value)}>
                {pharmacyOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-field">
              <span>{t.medicineName}</span>
              <input className="input" value={name} onChange={(event) => setName(event.target.value)} required />
            </label>
          </div>

          <label className="form-field">
            <span>{t.medicineDescription}</span>
            <textarea
              className="input form-textarea"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </label>

          <div className="form-row">
            <label className="form-field">
              <span>{t.categoryField}</span>
              <input
                className="input"
                list="medicine-categories"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                required
              />
              <datalist id="medicine-categories">
                {DEFAULT_CATEGORIES.map((item) => (
                  <option key={item} value={item} />
                ))}
              </datalist>
            </label>
            <label className="form-field">
              <span>{t.manufacturerField}</span>
              <input
                className="input"
                value={manufacturer}
                onChange={(event) => setManufacturer(event.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>{t.price}</span>
              <input
                className="input"
                type="number"
                min="0"
                step="100"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </label>
            <label className="form-field">
              <span>{t.oldPriceField}</span>
              <input
                className="input"
                type="number"
                min="0"
                step="100"
                value={oldPrice}
                onChange={(event) => setOldPrice(event.target.value)}
              />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>{t.discountField}</span>
              <input
                className="input"
                type="number"
                min="0"
                max="95"
                value={discountPercent}
                onChange={(event) => setDiscountPercent(event.target.value)}
              />
            </label>
            <label className="form-field">
              <span>{t.stockCountField}</span>
              <input
                className="input"
                type="number"
                min="0"
                step="1"
                value={stockCount}
                onChange={(event) => setStockCount(event.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>{t.dosageField}</span>
              <input className="input" value={dosage} onChange={(event) => setDosage(event.target.value)} required />
            </label>
            <label className="form-field">
              <span>{t.expiryField}</span>
              <input
                className="input"
                type="date"
                value={expiryDate}
                onChange={(event) => setExpiryDate(event.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label className="checkbox-field">
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={(event) => setIsAvailable(event.target.checked)}
              />
              <span>{t.availabilityField}</span>
            </label>
            <label className="checkbox-field">
              <input
                type="checkbox"
                checked={prescriptionRequired}
                onChange={(event) => setPrescriptionRequired(event.target.checked)}
              />
              <span>{t.prescriptionField}</span>
            </label>
          </div>

          <label className="form-field">
            <span>{t.tagsField}</span>
            <input className="input" value={tags} onChange={(event) => setTags(event.target.value)} />
          </label>

          <label className="form-field">
            <span>{t.imageUrl}</span>
            <input className="input" value={image} onChange={(event) => setImage(event.target.value)} />
          </label>

          {error ? <p className="field-error">{error}</p> : <p className="owner-list-text">{t.discountCalculated}</p>}

          <div className="detail-actions owner-actions">
            <button type="submit" className="primary-button">
              {t.updateMedicine}
            </button>
            <Link href="/owner/medicines" className="secondary-button">
              {t.ownerMedicines}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
