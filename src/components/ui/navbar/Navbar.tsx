import {
  AiOutlineDeploymentUnit,
  AiOutlineHome,
  AiOutlineTool,
  AiOutlineMessage,
} from "react-icons/ai";
import IconButton from "../common/IconButton";

function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={`w-full flex flex-row py-2 items-center justify-evenly shadow-md rounded-full bg-white dark:bg-neutral-900 lg:flex-col lg:w-16 lg:h-full ${className}`}
    >
      <IconButton className="rounded-full shadow-none hover:shadow-md transition-all">
        <AiOutlineHome />
      </IconButton>
      <IconButton className="rounded-full shadow-none hover:shadow-md transition-all">
        <AiOutlineMessage />
      </IconButton>
      <IconButton className="rounded-full shadow-none hover:shadow-md transition-all">
        <AiOutlineDeploymentUnit />
      </IconButton>
      <IconButton className="rounded-full shadow-none hover:shadow-md transition-all">
        <AiOutlineTool />
      </IconButton>
    </nav>
  );
}

export default Navbar;
