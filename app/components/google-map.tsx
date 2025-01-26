"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "75vh",
};

const center = {
  lat: 40.75061,
  lng: -73.945233,
};

interface GoogleMapComponentProps {
  locations: { lat: number; lng: number }[];
  zoom?: number;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  locations,
  zoom = 11,
}) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
