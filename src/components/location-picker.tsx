"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { isValidCoordinates } from "@/lib/format";
import { Language } from "@/types";
import { LocationTargetIcon } from "@/components/icons";

type LocationPickerProps = {
  language: Language;
  lat: number;
  lng: number;
  onChange: (next: { lat: number; lng: number }) => void;
  title: string;
  helpText: string;
  selectedText: string;
  selectedAddressText: string;
  useCurrentLocationText: string;
  geolocationNotSupportedText: string;
  geolocationDeniedText: string;
  geolocationLoadingText: string;
  geolocationFailedText: string;
};

type ClientMapProps = {
  lat: number;
  lng: number;
  onChange: (next: { lat: number; lng: number }) => void;
};

const ClientMap = dynamic<ClientMapProps>(
  () => import("@/components/location-picker-map").then((mod) => mod.LocationPickerMap),
  {
    ssr: false,
  },
);

export function LocationPicker({
  language,
  lat,
  lng,
  onChange,
  title,
  helpText,
  selectedText,
  selectedAddressText,
  useCurrentLocationText,
  geolocationNotSupportedText,
  geolocationDeniedText,
  geolocationLoadingText,
  geolocationFailedText,
}: LocationPickerProps) {
  const [isLocating, setIsLocating] = useState(false);
  const [geoError, setGeoError] = useState("");
  const [resolvedAddress, setResolvedAddress] = useState("");
  const hasValidCoords = isValidCoordinates(lat, lng);

  const formattedCoords = useMemo(() => `${lat.toFixed(6)}, ${lng.toFixed(6)}`, [lat, lng]);

  useEffect(() => {
    if (!hasValidCoords) {
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => {
      void fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
        {
          signal: controller.signal,
          headers: {
            "Accept-Language": language,
          },
        },
      )
        .then((response) => (response.ok ? response.json() : null))
        .then((payload: { display_name?: string } | null) => {
          if (payload?.display_name) {
            setResolvedAddress(payload.display_name);
          }
        })
        .catch(() => {
          setResolvedAddress("");
        });
    }, 200);

    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [hasValidCoords, language, lat, lng]);

  const onUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setGeoError(geolocationNotSupportedText);
      return;
    }

    setGeoError("");
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLocating(false);
        onChange({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        setIsLocating(false);
        if (error.code === error.PERMISSION_DENIED) {
          setGeoError(geolocationDeniedText);
          return;
        }
        setGeoError(geolocationFailedText);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      },
    );
  };

  return (
    <section className="form-map-wrap" aria-label={title}>
      <div className="form-map-head">
        <h3>{title}</h3>
        <p>{helpText}</p>
        <p className="map-selected">
          {selectedText}: {formattedCoords}
        </p>
        <p className="map-selected map-address">
          {selectedAddressText}: {hasValidCoords ? resolvedAddress || "-" : "-"}
        </p>
      </div>

      <button
        type="button"
        className="secondary-button location-button"
        onClick={onUseCurrentLocation}
        disabled={isLocating}
      >
        <LocationTargetIcon className="button-icon" />
        {isLocating ? geolocationLoadingText : useCurrentLocationText}
      </button>

      {geoError ? <p className="field-error">{geoError}</p> : null}

      <ClientMap lat={lat} lng={lng} onChange={onChange} />
    </section>
  );
}
