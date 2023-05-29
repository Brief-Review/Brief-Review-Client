import React, { useRef, useEffect } from "react";
import { SortButtonProps } from "../../../models/commons/SortButton.model";

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
    <button
      className="text-black bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
      {showSortOptions && (
        <div
          ref={optionsRef}
          className="origin-top-right absolute top-10 right-4 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-options-menu"
          >
            <button
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left ${
                sortBy === "newest" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSortBy("newest")}
              role="menuitem"
            >
              Más nuevo
            </button>
            <button
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:rounded-b-lg w-full text-left ${
                sortBy === "oldest" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSortBy("oldest")}
              role="menuitem"
            >
              Más antiguo
            </button>
          </div>
        </div>
      )}
    </button>
  );
};

export default SortButton;
