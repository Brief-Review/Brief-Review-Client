import React from "react";
import Button from "../../ui/common/Button";

function FormBrief({ className }: { className?: string }) {
  return (
    <>
      <div className={`py-8 px-4 border shadow-md h-full ${className}`}>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Crear Brief
        </h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 ">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Título del brief:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Título del brief..."
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Descripción
              </label>
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Descripción"
              ></textarea>
            </div>
            <h3 className=" text-xl font-medium text-gray-900 dark:text-white col-span-full">
              Añadir recursos adicionales
            </h3>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Título
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Título"
                required
              ></input>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Link
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="https://..."
                required
              ></input>
            </div>
            <Button className="w-full col-span-full">Crear Brief</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormBrief;
