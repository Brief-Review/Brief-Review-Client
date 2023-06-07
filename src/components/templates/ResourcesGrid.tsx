import React, { ReactNode, useState, useMemo, useContext } from "react";
import { ResourcesCardProps } from "../../models/commons/ResourcesCard.model";
import FilterButton from "../cards/FilterButton";
import SortButton from "../cards/SortButton";
import ResourcesSearchBar from "../ui/common/ResourcesSearchBar";
import { getTags, getTitle } from "../../utilities/utils";
import { useModal } from "../../hooks/useModal";
import AppContext from "../../context/global/AppContext";
import BasicModal from "../modals/basicModal/BasicModal";
import FormResource from "../forms/formResource/FormResource";

const ResourcesGrid = ({
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
  const [searchQuery, setSearchQuery] = useState("");

  //Crud Modal
  const { user } = useContext(AppContext);
  const [isOpen, open, close] = useModal(false);

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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredChildren = useMemo(() => {
    const filterChildren = (children: React.ReactNode): React.ReactNode[] => {
      return React.Children.toArray(children).filter((child) => {
        const childTags = getTags(child);
        const matchesFilters = selectedFilters.every((filter) =>
          childTags.includes(filter)
        );
        const matchesSearch = childTags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return matchesFilters || (matchesSearch && searchQuery !== "");
      });
    };

    return filterChildren(children);
  }, [children, selectedFilters, searchQuery]);

  const searchedChildren = useMemo(() => {
    if (!searchQuery) {
      return filteredChildren;
    }

    const searchChildren = (children: React.ReactNode[]): React.ReactNode[] => {
      return children.filter((child) => {
        const childTags = getTags(child);
        return (
          getTitle(child).toLowerCase().includes(searchQuery.toLowerCase()) ||
          childTags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      });
    };

    return searchChildren(filteredChildren);
  }, [filteredChildren, searchQuery]);

  const filteredAndSearchedChildren = useMemo(() => {
    const filterAndSearchChildren = (
      children: React.ReactNode[]
    ): React.ReactNode[] => {
      return children.filter((child) => {
        const childTags = getTags(child);
        const matchesFilters = selectedFilters.every((filter) =>
          childTags.includes(filter)
        );
        return matchesFilters;
      });
    };

    return filterAndSearchChildren(searchedChildren);
  }, [searchedChildren, selectedFilters]);

  const sortedFilteredAndSearchedChildren = useMemo(() => {
    const sortChildren = (children: React.ReactNode[]): React.ReactNode[] => {
      const getDate = (node: React.ReactNode): string =>
        (node as React.ReactElement<ResourcesCardProps>)?.props?.date || "";

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

    return sortChildren(filteredAndSearchedChildren);
  }, [filteredAndSearchedChildren, sortBy]);

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
      <h2 className="dark:text-white">Recursos</h2>
      <ResourcesSearchBar className="mt-5 mb-5" onSearch={handleSearch} />
      <div className="text-right flex justify-end gap-2 mb-5">
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

      {user ? (
        <div className="flex justify-end">
          <button
            onClick={open}
            type="button"
            className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-3 py-2 mb-2 inline-flex items-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            <svg
              height="25px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="25px"
            >
              <rect fill="none" height="50" width="50" />
              <line
                fill="#ffffff"
                stroke="#ffffff"
                strokeMiterlimit="10"
                strokeWidth="4"
                x1="9"
                x2="41"
                y1="25"
                y2="25"
              />
              <line
                fill="none"
                stroke="#ffffff"
                strokeMiterlimit="10"
                strokeWidth="4"
                x1="25"
                x2="25"
                y1="9"
                y2="41"
              />
            </svg>
            <span>Agregar recurso</span>
          </button>
          <BasicModal isOpen={isOpen} closeModal={close}>
            <FormResource />
          </BasicModal>
        </div>
      ) : (
        <></>
      )}
      <div
        id="CardsGrid"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {sortedFilteredAndSearchedChildren.length === 0 ? (
          <p>No se encontró</p>
        ) : (
          sortedFilteredAndSearchedChildren.map((child, index) => (
            <div key={index}>{child}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResourcesGrid;
