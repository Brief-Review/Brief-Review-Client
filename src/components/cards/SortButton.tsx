import React, { useRef, useEffect } from "react";
import { SortButtonProps } from "../../models/commons/SortButton.model";

const SortButton: React.FC<SortButtonProps> = ({
  showSortOptions,
  toggleSortOptions,
  sortBy,
  handleSortBy,
}) => {
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        toggleSortOptions();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSortOptions]);

  return (
    <div className="relative inline-block">
      <button
        className="text-black bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm text-center inline-flex items-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-white"
        onClick={toggleSortOptions}
      >
        Ordenar por fecha
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {showSortOptions && (
        <div
          ref={optionsRef}
          className="origin-top-right absolute top-full right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
        >
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-options-menu"
          >
            <button
              className={`block px-4 py-2 text-sm text-gray-700 dark:bg-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-900 hover:rounded-t-lg focus:rounded-t-lg w-full text-left dark:text-white ${
                sortBy === "newest" ? "bg-gray-300 rounded-t-lg" : ""
              }`}
              onClick={() => handleSortBy("newest")}
              role="menuitem"
            >
              Más nuevo
            </button>
            <button
              className={`block px-4 py-2 text-sm text-gray-700 dark:bg-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-900 hover:rounded-b-lg focus:rounded-b-lg w-full text-left dark:text-white ${
                sortBy === "oldest"
                  ? "bg-gray-300 dark:focus:bg-neutral-800 rounded-b-lg"
                  : ""
              }`}
              onClick={() => handleSortBy("oldest")}
              role="menuitem"
            >
              Más antiguo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortButton;
