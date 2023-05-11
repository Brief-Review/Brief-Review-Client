export interface FilterButtonProps {
    showFilterOptions: boolean;
    toggleFilterOptions: () => void;
    programmingLanguages: string[];
    selectedFilters: string[];
    handleFilterToggle: (language: string) => void;
  }