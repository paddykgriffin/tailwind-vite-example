"use client";

import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 53.35430243152764, // Latitude of the center of the map (San Francisco)
  lng: -6.335699037137711, // Longitude of the center of the map
};

const MapComponent = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    map.setCenter(center);
    map.setZoom(12);
    setMap(map);
  }, []);

  useEffect(() => {
    if (
      map &&
      window.google &&
      window.google.maps &&
      window.google.maps.Marker
    ) {
      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "This is a custom marker!",
      });

      return () => {
        marker.setMap(null); // Clean up the marker on unmount
      };
    }
  }, [map]);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      // Make sure the 'marker' library is loaded
      version="beta" // Ensure you're using the version that supports AdvancedMarkerElement
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
      >
        {/* The AdvancedMarkerElement is now being added in useEffect */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
