import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  return (
    <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm/6 text-white">
        <a href="#">
          Are you in a crisis? Text HOME to 741741 for free, 24/7 crisis
          counseling from the Crisis Text Line.
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  );
}
