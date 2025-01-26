import { Disclosure, DisclosureButton } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-24 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex shrink-0 items-center">
              <img
                src="https://cdn.prod.website-files.com/63af45253593731bba3388ec/644d7e6343b5560955358908_ProjectHealthyMinds_Logos_New_Black_Stacked.png"
                width="93"
                sizes="(max-width: 767px) 92.98828125px, (max-width: 991px) 12vw, (max-width: 1439px) 8vw, 92.98828125px"
                srcSet="https://cdn.prod.website-files.com/63af45253593731bba3388ec/644d7e6343b5560955358908_ProjectHealthyMinds_Logos_New_Black_Stacked-p-500.png 500w, https://cdn.prod.website-files.com/63af45253593731bba3388ec/644d7e6343b5560955358908_ProjectHealthyMinds_Logos_New_Black_Stacked-p-800.png 800w, https://cdn.prod.website-files.com/63af45253593731bba3388ec/644d7e6343b5560955358908_ProjectHealthyMinds_Logos_New_Black_Stacked-p-1080.png 1080w, https://cdn.prod.website-files.com/63af45253593731bba3388ec/644d7e6343b5560955358908_ProjectHealthyMinds_Logos_New_Black_Stacked-p-1600.png 1600w, https://cdn.prod.website-files.com/63af45253593731bba3388ec/644d7e6343b5560955358908_ProjectHealthyMinds_Logos_New_Black_Stacked.png 2084w"
                alt=""
                className="logo-image"
              />
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Find Support
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Research
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Donate
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Events
              </a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="grid w-full max-w-lg grid-cols-1 lg:max-w-xs">
              <input
                name="search"
                type="search"
                placeholder="Search"
                className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
