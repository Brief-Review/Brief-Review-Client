import {
  AiOutlineDeploymentUnit,
  AiOutlineHome,
  AiOutlineTool,
  AiOutlineMessage,
} from "react-icons/ai";
import IconButton from "../common/IconButton";
import { useNavigate } from "react-router-dom";

function Navbar({ className }: { className?: string }) {
  const navigate = useNavigate();
  return (
    <nav
      className={`w-full flex flex-row py-2 items-center justify-evenly shadow-md rounded-full bg-white dark:bg-neutral-900 lg:flex-col lg:w-16 lg:h-full ${className}`}
    >
      <IconButton
        className="rounded-full shadow-none hover:shadow-md transition-all"
        onClick={() => navigate("/home")}
      >
        <AiOutlineHome />
      </IconButton>
      <IconButton
        className="rounded-full shadow-none hover:shadow-md transition-all "
        onClick={() => navigate("/messages/1")}
      >
        <AiOutlineMessage />
      </IconButton>
      <IconButton
        className="rounded-full shadow-none hover:shadow-md transition-all"
        onClick={() => navigate("/brief/1")}
      >
        <AiOutlineDeploymentUnit />
      </IconButton>
      <IconButton
        className="rounded-full shadow-none hover:shadow-md transition-all"
        onClick={() => navigate("/resources")}
      >
        <AiOutlineTool />
      </IconButton>
    </nav>
  );
}

export default Navbar;
