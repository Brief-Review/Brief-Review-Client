import { useContext, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { toggleDarkMode } from "../../../utilities/darkMode";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AppContext from "../../../context/global/AppContext";
function ProfileIcon() {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const navigate = useNavigate();
  const {user,setUser,setToken} = useContext(AppContext);

  const logout = () => {
    swal({
      title: "¿Estás seguro de cerrar tu sesión actual?",
      icon: "warning",
      buttons :{
        cancel: {
          text: "Cancelar",
          value: false,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Si",
          value: true,
          visible: true,
          className: "",
          closeModal: true
        }
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Tu sesión ha sido cerrada con éxito.", {
          icon: "success",
        });
        setToken(null);
        setUser(null);
        navigate("/login")
      }
    });
  };

  return (
    <div className="relative">
      <div
        className="h-12 aspect-square bg-neutral-500 rounded cursor-pointer relative select-none flex items-center justify-center text-white font-bold "
        onClick={() => setOpenPopup(!openPopup)}
      >
        {user?.name[0]?.toUpperCase()}
      </div>
      <div
        className={`absolute top-0 right-0 translate-y-16 w-80 min-h-8 rounded p-4 shadow-md bg-white cursor-default transition-all hover:scale-105 flex flex-col z-10 select-none dark:bg-neutral-800 dark:text-white ${
          openPopup ? "block" : "hidden"
        }`}
      >
        <span className="w-full hover:bg-gray-100 rounded-sm p-2 cursor-pointer dark:hover:bg-neutral-700">
          Username
        </span>
        <span
          className="w-full flex justify-between hover:bg-gray-100 rounded-sm p-2 cursor-pointer dark:hover:bg-neutral-700 "
          onClick={() => toggleDarkMode()}
        >
          <p>Darkmode</p>
          
          <span className=" rounded-full h-6 w-12 px-1 bg-primary bg-opacity-30 shadow-md flex items-center  dark:bg-neutral-500">
            <div className="rounded-full h-[80%] py-2 bg-neutral-600 shadow-md aspect-square dark:right-0 transition-all dark:translate-x-5 dark:bg-primary"></div>
          </span>
        </span>
        <span className="w-full flex justify-between hover:bg-gray-100 rounded-sm p-2 cursor-pointer items-center dark:hover:bg-neutral-700">
          <p>Logout</p>
          <AiOutlineLogout
            className="text-primary h-6 w-12 "
            onClick={() => logout()}
          />
        </span>
      </div>
    </div>
  );
}

export default ProfileIcon;
