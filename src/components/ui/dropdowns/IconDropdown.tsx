import IconButton from "../common/IconButton";

interface DropdownProps {
  id?:number;
  isOpen: boolean;
  options: { optionName: string; handleOption: (id:number) => void }[];
  toggleDropdown: () => void;
  children: React.ReactNode;
}

export function IconDropdown({
  id,
  children,
  isOpen,
  toggleDropdown,
  options,
}: DropdownProps) {
  return (
    <div className="relative">
      <IconButton onClick={toggleDropdown} className="">
        {/*this component need a react-icon from react-icons */}
        {children}
      </IconButton>
      <ul
        className={`absolute z-20 min-w-[16rem] shadow-md rounded p-4 flex flex-col right-0 translate-y-2 bg-white dark:bg-neutral-800 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {options.map((option, index) => {
          return (
            <button
              onClick={() => {
                toggleDropdown();
                option.handleOption(id);
              }}
              key={index}
              className="w-full cursor-pointer p-2 hover:bg-gray-200 text-left dark:hover:bg-neutral-700"
            >
              {option.optionName}
            </button>
          );
        })}
      </ul>
    </div>
  );
}
