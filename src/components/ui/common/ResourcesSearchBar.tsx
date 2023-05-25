const resourcesSearchBar = ({
  className,
  onSearch,
}: {
  className?: string;
  onSearch?: (query: string) => void;
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <>
      <form className={className}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            id="searchInput"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-700 focus:border-cyan-700 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-700 dark:focus:border-cyan-700"
            placeholder="Buscar..."
            required
            onChange={handleSearch}
          ></input>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-cyan-700 hover:bg-cyan-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-700 dark:hover:bg-cyan-700 dark:focus:ring-cyan-700"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default resourcesSearchBar;
