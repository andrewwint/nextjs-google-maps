"use client";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import GoogleMapComponent from "./components/google-map";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface Service {
  latitude: string;
  longitude: string;
  name_1: string;
  name_2: string;
  city: string;
}

const center = [
  {
    lat: 40.75061,
    lng: -73.945233,
  },
  {
    lat: 40.835269103,
    lng: -73.9402930483999,
  },
];

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const { data, error, isLoading } = useSWR<Service[]>(
    "https://data.cityofnewyork.us/resource/8nqg-ia7v.json",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cities = Array.from(
    new Set(data?.map((service) => service.city) || [])
  );
  const filteredServices = selectedCity
    ? data?.filter((service) => service.city === selectedCity)
    : data;

  console.log(filteredServices);

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
                    <li key={uuidv4()}>{service.name_2}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <GoogleMapComponent locations={center} />
          </div>
        </div>
      </main>
    </>
  );
}
