import { promotion } from "../../../models/promotion/Promotion.model";
import Button from "../../ui/common/Button";

function FormPromotion({ className }: { className?: string }) {
  return (
    <div className={`py-8 px-4 border shadow-md ${className}`}>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Crear nueva promoción
      </h2>
      <form action="#">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
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
              name="brand"
              id="brand"
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
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Duración"
              required
            ></input>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Categoria
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option>Fullstack</option>
              <option value="TV">Front-end</option>
              <option value="PC">Inteligencia artificial</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Manager?
            </label>
            <input
              type="number"
              name="item-weight"
              id="item-weight"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Manager..."
              required
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ubicación
            </label>
            <textarea
              id="description"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Ubicación"
            ></textarea>
          </div>
          <Button className="w-full col-span-full">Crear promoción</Button>
        </div>
      </form>
    </div>
  );
}

export default FormPromotion;
