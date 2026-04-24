"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUploader } from "@/components/image-uploader";
import { LocationPicker } from "@/components/location-picker";
import { useAppContext } from "@/context/app-context";
import { isValidCoordinates } from "@/lib/format";

export default function OwnerCreatePharmacyPage() {
  const { ownerPharmacy, createOwnerPharmacy, language, t } = useAppContext();
  const router = useRouter();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [rating, setRating] = useState("4.5");
  const [hasDelivery, setHasDelivery] = useState(false);
  const [is24x7, setIs24x7] = useState(false);
  const [openTime, setOpenTime] = useState("08:00");
  const [closeTime, setCloseTime] = useState("22:00");
  const [location, setLocation] = useState({ lat: 41.3111, lng: 69.2797 });
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!isValidCoordinates(location.lat, location.lng)) {
      setError(t.invalidCoordinates);
      return;
    }

    if (!/^[\d+\-() ]{7,20}$/.test(phone.trim())) {
      setError(t.invalidPhone);
      return;
    }

    const parsedRating = Number.parseFloat(rating);
    if (!Number.isFinite(parsedRating) || parsedRating < 0 || parsedRating > 5) {
      setError(t.invalidRating);
      return;
    }

    createOwnerPharmacy({
      name,
      address,
      district,
      description,
      phone,
      rating: parsedRating,
      hasDelivery,
      is24x7,
      openTime,
      closeTime,
      lat: location.lat,
      lng: location.lng,
      images,
    });

    router.push("/owner/dashboard");
  };

  if (ownerPharmacy) {
    return (
      <section className="hero">
        <p className="hero-caption">{t.ownerPharmacy}</p>
        <h1>{t.ownerPharmacy}</h1>
        <p>{t.ownerPharmacyExists}</p>
        <div className="detail-actions">
          <Link href="/owner/dashboard" className="primary-button">
            {t.ownerDashboard}
          </Link>
          <Link href="/owner/pharmacy/edit" className="secondary-button">
            {t.ownerUpdate}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="details-panel owner-form-panel">
      <div className="details-main">
        <h1>{t.pharmacyFormTitleCreate}</h1>
        <form className="owner-form" onSubmit={onSubmit}>
          <div className="form-row">
            <label className="form-field">
              <span>{t.pharmacyName}</span>
              <input className="input" value={name} onChange={(event) => setName(event.target.value)} required />
            </label>

            <label className="form-field">
              <span>{t.districtField}</span>
              <input
                className="input"
                value={district}
                onChange={(event) => setDistrict(event.target.value)}
                required
              />
            </label>
          </div>

          <label className="form-field">
            <span>{t.pharmacyAddress}</span>
            <input className="input" value={address} onChange={(event) => setAddress(event.target.value)} required />
          </label>

          <label className="form-field">
            <span>{t.pharmacyDescription}</span>
            <textarea
              className="input form-textarea"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </label>

          <div className="form-row">
            <label className="form-field">
              <span>{t.pharmacyPhone}</span>
              <input className="input" value={phone} onChange={(event) => setPhone(event.target.value)} required />
            </label>

            <label className="form-field">
              <span>{t.ratingField}</span>
              <input
                className="input"
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label className="checkbox-field">
              <input
                type="checkbox"
                checked={hasDelivery}
                onChange={(event) => setHasDelivery(event.target.checked)}
              />
              <span>{t.hasDeliveryField}</span>
            </label>

            <label className="checkbox-field">
              <input type="checkbox" checked={is24x7} onChange={(event) => setIs24x7(event.target.checked)} />
              <span>{t.is24x7Field}</span>
            </label>
          </div>

          {!is24x7 ? (
            <div className="form-row">
              <label className="form-field">
                <span>{t.openTime}</span>
                <input
                  className="input"
                  type="time"
                  value={openTime}
                  onChange={(event) => setOpenTime(event.target.value)}
                  required
                />
              </label>

              <label className="form-field">
                <span>{t.closeTime}</span>
                <input
                  className="input"
                  type="time"
                  value={closeTime}
                  onChange={(event) => setCloseTime(event.target.value)}
                  required
                />
              </label>
            </div>
          ) : null}

          <LocationPicker
            language={language}
            lat={location.lat}
            lng={location.lng}
            onChange={setLocation}
            title={t.chooseLocation}
            helpText={t.mapHelp}
            selectedText={t.selectedPoint}
            selectedAddressText={t.selectedAddress}
            useCurrentLocationText={t.useCurrentLocation}
            geolocationNotSupportedText={t.geolocationNotSupported}
            geolocationDeniedText={t.geolocationDenied}
            geolocationLoadingText={t.geolocationLoading}
            geolocationFailedText={t.geolocationFailed}
          />

          <ImageUploader
            images={images}
            onChange={setImages}
            label={t.pharmacyImages}
            helpText={t.maxFiveImages}
            removeText={t.remove}
            selectedFileCountText={t.selectedFileCount}
          />

          {error ? <p className="field-error">{error}</p> : null}

          <div className="detail-actions owner-actions">
            <button type="submit" className="primary-button">
              {t.createPharmacy}
            </button>
            <Link href="/" className="secondary-button">
              {t.backHome}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
