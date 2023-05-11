import { AiOutlineBell } from "react-icons/ai";
import IconButton from "../common/IconButton";
import ProfileIcon from "./ProfileIcon";

function Header({ className }: { className?: string }) {
  return (
    <div className={`flex w-full justify-between h-12 + ${className}`}>
      <div className="w-full  flex justify-between items-center">
        <h1 className=" hidden md:hidden lg:block dark:text-white">
          Brief Review
        </h1>
        <IconButton>
          <AiOutlineBell />
        </IconButton>
        <div className="flex flex-row gap-4">
          <div className="flex-col text-right hidden md:block lg:block">
            <h4 className="dark:text-white ">Nombre de usuario</h4>
            <p className="dark:text-white">Rol de usuario</p>
          </div>
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
