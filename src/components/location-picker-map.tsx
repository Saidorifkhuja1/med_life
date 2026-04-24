"use client";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { LeafletMouseEvent } from "leaflet";
import {
  CircleMarker,
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

type LocationPickerMapProps = {
  lat: number;
  lng: number;
  onChange: (next: { lat: number; lng: number }) => void;
};

function MapClickHandler({
  lat,
  lng,
  onChange,
}: {
  lat: number;
  lng: number;
  onChange: (next: { lat: number; lng: number }) => void;
}) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], map.getZoom(), { animate: false });
  }, [lat, lng, map]);

  useMapEvents({
    click(event: LeafletMouseEvent) {
      onChange({ lat: event.latlng.lat, lng: event.latlng.lng });
    },
  });

  return null;
}

export function LocationPickerMap({ lat, lng, onChange }: LocationPickerMapProps) {
  return (
    <MapContainer center={[lat, lng]} zoom={13} className="location-map" scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker center={[lat, lng]} radius={12} pathOptions={{ color: "#14b89e", weight: 3 }} />
      <CircleMarker
        center={[lat, lng]}
        radius={5}
        pathOptions={{ color: "#ffffff", fillColor: "#0e9f8a", fillOpacity: 1, weight: 2 }}
      />
      <MapClickHandler lat={lat} lng={lng} onChange={onChange} />
    </MapContainer>
  );
}
