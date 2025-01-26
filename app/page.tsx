"use client";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import {
  GoogleMapComponent,
  ServiceResultProps,
  ServiceResult,
} from "./components";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const [locations, setLocations] = useState([
    { lat: 40.75061, lng: -73.945233 },
  ]);

  const { data, error, isLoading } = useSWR<ServiceResultProps[]>(
    "https://data.cityofnewyork.us/resource/8nqg-ia7v.json",
    fetcher
  );

  useEffect(() => {
    if (!data) return;

    const filteredData = selectedCity
      ? data.filter((service) => service.city === selectedCity)
      : data;

    const newLocations = filteredData
      .map((service) => {
        const lat = parseFloat(service.latitude);
        const lng = parseFloat(service.longitude);
        return !isNaN(lat) && !isNaN(lng) ? { lat, lng } : null;
      })
      .filter(Boolean);

    setLocations(newLocations as { lat: number; lng: number }[]);
  }, [selectedCity, data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cities = Array.from(
    new Set(data?.map((service) => service.city) || [])
  );
  const filteredServices = selectedCity
    ? data?.filter((service) => service.city === selectedCity)
    : data;

  return (
    <>
      <main className="mt-10 pb-8 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            NYC Mental Health Services
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
          <div className="w-1/3 pr-4">
            <div className="mt-4">
              <select
                onChange={(e) => setSelectedCity(e.target.value)}
                className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="text-gray-600 mt-2">
                Find mental health services in {selectedCity || "all cities"}.
                <ul>
                  {filteredServices?.map((service) => (
                    <li key={uuidv4()}>
                      <ServiceResult {...service} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <GoogleMapComponent locations={locations} />
          </div>
        </div>
      </main>
    </>
  );
}
