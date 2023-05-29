export interface SortButtonProps {
  showSortOptions: boolean;
  toggleSortOptions: () => void;
  sortBy: "oldest" | "newest";
  handleSortBy: (sortOption: "oldest" | "newest") => void;
}
