import { useState } from "react";
import IconButton from "../ui/common/IconButton";
import { AiTwotoneMessage } from "react-icons/ai";

function ChatsButton() {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <div className="relative">
      <IconButton
        className="text-white bg-transparent rounded-full shadow-none relative"
        onClick={() => setOpenPopup(!openPopup)}
      >
        <AiTwotoneMessage />
      </IconButton>
      <div
        className={`absolute top-0 right-0 translate-y-16 w-80 min-h-8 rounded p-4 shadow-md bg-white cursor-default transition-all hover:scale-105 text-black select-none flex flex-col ${
          openPopup ? "block" : "hidden"
        }`}
      >
        <span className="w-full hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
          Chat1
        </span>
        <span className="w-full hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
          Chat2
        </span>
        <span className="w-full hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
          Chat3
        </span>
      </div>
    </div>
  );
}

export default ChatsButton;
