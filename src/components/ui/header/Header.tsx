import { AiOutlineBell } from "react-icons/ai";
import IconButton from "../common/IconButton";
import ProfileIcon from "./ProfileIcon";
import { useContext } from "react";
import AppContext from "../../../context/global/AppContext";

function Header({ className }: { className?: string }) {
  const { user } = useContext(AppContext);

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
            <h4 className="dark:text-white ">{user?.name}</h4>
            <p className="dark:text-white">
              {user?.role == 1 && "Super admin"}
              {user?.role == 2 && "Formador"}
              {user?.role == 3 && "Mentor"}
              {user?.role == 3 || (user?.role == null && "Coder")}
            </p>
          </div>
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
