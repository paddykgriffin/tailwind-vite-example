import { useState, useCallback, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

// Container style for the map
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Map center coordinates
const center = {
  lat: 53.35430243152764,
  lng: -6.335699037137711,
};

const libraries: "marker"[] = ["marker"];

const MapComponent = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Callback when the map is loaded
  const onLoad = useCallback((map: google.maps.Map) => {
    map.setCenter(center);
    map.setZoom(12);
    setMap(map);
  }, []);

  useEffect(() => {
    if (
      map &&
      "google" in window &&
      window.google?.maps?.marker?.AdvancedMarkerElement
    ) {
      const { AdvancedMarkerElement } = window.google.maps.marker;

      const marker = new AdvancedMarkerElement({
        position: center,
        map,
        title: "This is a custom marker!",
      });

      return () => {
        // Properly remove the marker from the map
        marker.map = null;
      };
    }
  }, [map]);

  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ""}
      libraries={libraries}
      version="beta"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        options={{
          mapId: "5442f6f6500c40764debb8f2", // ✅ Make sure this is your valid Map ID
        }}
      >
        {/* AdvancedMarkerElement is handled via useEffect */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
