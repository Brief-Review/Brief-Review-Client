import { useForm } from "react-hook-form";
import { promotion } from "../../../models/promotion/Promotion.model";
import Button from "../../ui/common/Button";
import { graduatingService } from "../../../services/graduatingsService/graduating.service";
import swal from "sweetalert";

function FormPromotion({
  className,
  submitForm,
}: {
  className?: string;
  submitForm?: () => void;
}) {
  const { register, handleSubmit, reset } = useForm();

  const createPromotion = async (formData: any) => {
    const { data } = await graduatingService.create(formData);
    if (submitForm) submitForm();
    swal({
      icon: "success",
      text: "Nueva promoción creada con éxito.",
      buttons: ["Ok"],
    });
    reset();
  };

  return (
    <div className={`py-8 px-4 border shadow-md bg-white ${className}`}>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Crear nueva promoción
      </h2>
      <form onSubmit={handleSubmit(createPromotion)}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre
            </label>
            <input
              type="text"
              {...register("name")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Nombre"
              required
            ></input>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Categoría
            </label>
            <input
              type="text"
              {...register("category")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Categoría"
              required
            ></input>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              duración
            </label>
            <input
              type="number"
              {...register("duration")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Duración"
              required
            ></input>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ubicación
            </label>
            <input
              type="string"
              {...register("location")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Duración"
              required
            ></input>
            {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Categoria
            </label>

            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              {...register("category")}
            >
              <option>Fullstack</option>
              <option value="TV">Front-end</option>
              <option value="PC">Inteligencia artificial</option>
            </select> */}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Manager?
            </label>
            <input
              type="string"
              {...register("manager")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Manager..."
              required
            ></input>
          </div>
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Partners
            </label>
            <input
              type="string"
              {...register("partners")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Partners"
              required
            ></input>
          </div>
          <Button className="w-full col-span-full">Crear promoción</Button>
        </div>
      </form>
    </div>
  );
}

export default FormPromotion;
