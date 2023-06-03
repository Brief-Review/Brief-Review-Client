import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "../../components/ui/common/Button";
import LoginPicture from "../../assets/Loginpicture";
import { AiOutlineGoogle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import logo from "../../assets/br-logo.png";
import swal from 'sweetalert';
import AppContext from "../../context/global/AppContext";
import { registerUser } from "../../services/userServices/user.services";

function Register() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const { setToken } = useContext(AppContext);

  const onSubmit = async (dataForm: any) => {
    try {
      const { data } = await registerUser(dataForm);
      setToken(data.access_token);
      swal({
        text:"Te has registrado con éxito",
        icon: "success",
      });

      navigate("/home");
    } catch (error) {
      swal({
        text:"Error",
        icon: "error",
      });
    }
  };

  return (
    <div className="w-full h-screen px-[5%] py-8 grid grid-cols-12 ">
      <div className="hidden shadow-lg rounded bg-neutral-800 md:col-span-6 md:p-8 md:flex md:flex-col gap-12 md:justify-center">
        <span className="ml-8 flex  flex-col gap-2">
          <p className="text-white  text-2xl font-light">
            Bienvenid@ a <b className="font-semibold">Brief Review</b>
          </p>
          <h2 className=" text-3xl text-white font-extrabold ">Registrate</h2>
        </span>
        <div className="w-[80%] aspect-square mx-auto">
          <LoginPicture />
        </div>
      </div>
      <div className="shadow-md col-span-12 items-center p-4 md:col-span-6 md:p-20">
        {/* FORMULARIO */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col items-center justify-center gap-4">
          <span className="  aspect-square rounded shadow-md bg-neutral-700 w-24">
            <img src={logo} alt="logo-brief-review" className="w-full h-full" />
          </span>
          <button className="border px-4 py-2 flex justify-center w-full hover:scale-105 transition-all active:scale-100">
            <span className="flex flex-row items-center gap-2 text-primary">
              <AiOutlineGoogle />
              Registrate con Google
            </span>
          </button>
          <hr />
          <label htmlFor="" className="text-left w-full text-gray-500 ">
            Nombre
            <input
              type="name"
              className="border w-full py-1 px-4 my-1"
              placeholder="Tu nombre"
              {...register("name")}
            />
          </label>
          <label htmlFor="" className="text-left w-full text-gray-500 ">
            E-mail
            <input
              type="email"
              required
              className="border w-full py-1 px-4 my-1"
              placeholder="Tu e-mail"
              {...register("email")}
            />
          </label>
          <label htmlFor="" className="text-left w-full text-gray-500 ">
            Contraseña
            <input
              type="password"
              required
              className="border w-full py-1 px-4 my-1"
              placeholder="Tu contraseña"
              {...register("password")}
            />
          </label>
          
          <Button className="w-full">Registrarse</Button>
          <span className="w-full text-center">
            <Link to="/login" className="text-primary ">
              ¿Ya tienes una cuenta?
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
