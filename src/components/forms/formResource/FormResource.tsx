import React from "react";
import Button from "../../ui/common/Button";

function FormResource({ className }: { className?: string }) {
  return (
    <div className={`py-8 px-4 border shadow-md ${className}`}>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Añadir recurso
      </h2>
      <form action="#">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
              Link del recurso
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Link del recurso"
              required
            ></input>
          </div>

          <Button className="w-full col-span-full">Subir recurso</Button>
        </div>
      </form>
    </div>
  );
}

export default FormResource;
