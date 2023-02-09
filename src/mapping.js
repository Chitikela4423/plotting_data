import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map = ({ points }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const markerLayer = L.layerGroup().addTo(map);

      points.forEach(point => {
        L.marker([point.latitude, point.longitude]).addTo(markerLayer);
      });
    }
  }, [points]);

  return <div ref={mapRef} style={{ height: '400px' }} />;
};

export default Map;
