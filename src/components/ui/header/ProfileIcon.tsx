import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { toggleDarkMode } from "../../../utilities/darkMode";
function ProfileIcon() {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className="h-12 aspect-square bg-neutral-500 rounded cursor-pointer relative select-none flex items-center justify-center text-white font-bold"
        onClick={() => setOpenPopup(!openPopup)}
      >
        A
      </div>
      <div
        className={`absolute top-0 right-0 translate-y-16 w-80 min-h-8 rounded p-4 shadow-md bg-white cursor-default transition-all hover:scale-105 flex flex-col z-10 select-none ${
          openPopup ? "block" : "hidden"
        }`}
      >
        <span className="w-full hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
          Username
        </span>
        <span
          className="w-full flex justify-between hover:bg-gray-100 rounded-sm p-2 cursor-pointer "
          onClick={() => toggleDarkMode()}
        >
          <p>Darkmode</p>
          <span className=" rounded-full h-6 w-12 px-1 bg-primary bg-opacity-30 shadow-md flex items-center ">
            <div className="rounded-full h-[80%] py-2 bg-neutral-600 shadow-md aspect-square dark:right-0 transition-all dark:translate-x-5"></div>
          </span>
        </span>
        <span className="w-full flex justify-between hover:bg-gray-100 rounded-sm p-2 cursor-pointer items-center">
          <p>Logout</p>
          <AiOutlineLogout className="text-primary h-6 w-12 " />
        </span>
      </div>
    </div>
  );
}

export default ProfileIcon;
