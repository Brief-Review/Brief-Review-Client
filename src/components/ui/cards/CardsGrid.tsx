import React, { ReactNode, useState, useMemo } from "react";
import { CardProps } from "../../../models/commons/Card.model";
import FilterButton from "./FilterButton";
import SortButton from "./SortButton";

const CardsGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [sortBy, setSortBy] = useState<"oldest" | "newest">("newest");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSortBy = (sortOption: "oldest" | "newest") => {
    setSortBy(sortOption);
    setShowSortOptions(false);
  };

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const handleFilterToggle = (language: string) => {
    if (selectedFilters.includes(language)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== language)
      );
    } else {
      setSelectedFilters([...selectedFilters, language]);
    }
  };

  const filteredChildren = useMemo(() => {
    const filterChildren = (children: React.ReactNode): React.ReactNode[] => {
      const getTags = (node: React.ReactNode): string[] =>
        (node as React.ReactElement<CardProps>)?.props?.tags || [];

      return React.Children.toArray(children).filter((child) =>
        selectedFilters.every((filter) => getTags(child).includes(filter))
      );
    };

    return filterChildren(children);
  }, [children, selectedFilters]);

  const sortedChildren = useMemo(() => {
    const sortChildren = (children: React.ReactNode[]): React.ReactNode[] => {
      const getDate = (node: React.ReactNode): string =>
        (node as React.ReactElement<CardProps>)?.props?.date || "";

      return [...children].sort((a, b) => {
        if (sortBy === "newest") {
          return (
            new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime()
          );
        } else {
          return (
            new Date(getDate(a)).getTime() - new Date(getDate(b)).getTime()
          );
        }
      });
    };

    return sortChildren(filteredChildren);
  }, [filteredChildren, sortBy]);

  const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "React",
    "CSS",
  ];

  return (
    <div className={`cards-grid-container ${className}`}>
      <div className="text-right flex justify-end gap-2 p-4">
        <FilterButton
          showFilterOptions={showFilterOptions}
          toggleFilterOptions={toggleFilterOptions}
          programmingLanguages={programmingLanguages}
          selectedFilters={selectedFilters}
          handleFilterToggle={handleFilterToggle}
        />
        <SortButton
          showSortOptions={showSortOptions}
          toggleSortOptions={toggleSortOptions}
          sortBy={sortBy}
          handleSortBy={handleSortBy}
        />
      </div>
      <div
        id="CardsGrid"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {sortedChildren.length === 0 ? (
          <p>No se encontró</p>
        ) : (
          sortedChildren.map((child, index) => <div key={index}>{child}</div>)
        )}
      </div>
    </div>
  );
};

export default CardsGrid;
