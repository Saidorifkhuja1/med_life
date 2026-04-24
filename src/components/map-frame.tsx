type MapFrameProps = {
  lat: number;
  lng: number;
  linkLabel: string;
};

const delta = 0.01;

export function MapFrame({ lat, lng, linkLabel }: MapFrameProps) {
  const left = lng - delta;
  const right = lng + delta;
  const top = lat + delta;
  const bottom = lat - delta;

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lng}`;
  const mapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`;

  return (
    <div className="map-frame-wrap">
      <iframe
        className="map-frame"
        src={mapSrc}
        loading="lazy"
        title="pharmacy-map"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="map-link">
        {linkLabel}
      </a>
    </div>
  );
}
