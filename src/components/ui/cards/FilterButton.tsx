import React, { useRef, useEffect } from "react";

interface FilterButtonProps {
  showFilterOptions: boolean;
  toggleFilterOptions: () => void;
  programmingLanguages: string[];
  selectedFilters: string[];
  handleFilterToggle: (language: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  showFilterOptions,
  toggleFilterOptions,
  programmingLanguages,
  selectedFilters,
  handleFilterToggle,
}) => {
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleFilterCheckboxChange = (language: string) => {
    handleFilterToggle(language);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        toggleFilterOptions();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleFilterOptions]);

  return (
    <button
      className="text-black bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      onClick={toggleFilterOptions}
    >
      Filtrar por categoria
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
      {showFilterOptions && (
        <div
          ref={optionsRef}
          className="origin-top-right absolute right-44 top-10 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="p-4">
            <h3 className="font-semibold mb-2">Filter Options</h3>
            <ul>
              {programmingLanguages.map((language) => (
                <li key={language} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(language)}
                      onChange={() => handleFilterCheckboxChange(language)}
                      onClick={(event) => event.stopPropagation()}
                      className="mr-2 rounded-full"
                    />
                    {language}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </button>
  );
};

export default FilterButton;
