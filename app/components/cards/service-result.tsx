import { PhoneIcon, LinkIcon } from "@heroicons/react/20/solid";

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
      <div>
        <hr className="mt-4 mb-2" />
        <div className="text-lg font-bold">{service.name_1}</div>
        {service.name_1 !== service.name_2 && (
          <div className="text-base font-bold text-gray-600">
            {service.name_2}
          </div>
        )}
        <address className="not-italic mb-2">
          <div>{service.street_1}</div>
          <div>
            {service.zip} {service.city}
          </div>
        </address>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={`tel:${service.phone}`}
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <PhoneIcon
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
                {service.phone}
              </a>
            </div>

            <div className="-ml-px flex w-0 flex-1">
              {service.website ? (
                <a
                  href={`tel:${service.website}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <LinkIcon
                    aria-hidden="true"
                    className="size-5 text-gray-400"
                  />
                  {new URL(service.website).hostname}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
