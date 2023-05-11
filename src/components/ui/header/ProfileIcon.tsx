import { useState } from "react";
function ProfileIcon() {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className="h-12 aspect-square bg-black rounded cursor-pointer relative select-none"
        onClick={() => setOpenPopup(!openPopup)}
      ></div>
      <div
        className={`absolute top-0 right-0 translate-y-16 w-80 min-h-8 rounded p-4 shadow-md bg-white cursor-default transition-all hover:scale-105 flex flex-col ${
          openPopup ? "block" : "hidden"
        }`}
      >
        <span className="w-full hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
          Option
        </span>
        <span className="w-full hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
          Option
        </span>
        <span className="w-full hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
          Option
        </span>
      </div>
    </div>
  );
}

export default ProfileIcon;
