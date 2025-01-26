export interface ServiceResultProps {
  latitude: string;
  longitude: string;
  name_1: string;
  name_2: string;
  street_1: string;
  zip: string;
  phone: string;
  website: string;
  city: string;
}

export default function ServiceResult(service: ServiceResultProps) {
  return (
    <div>
      {service.name_1} <br />
      {service.name_2} <br />
      {service.street_1} <br />
      {service.zip} <br />
      {service.phone} <br />
      {service.website} <br />
    </div>
  );
}
