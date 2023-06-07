import Button from "../../ui/common/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { assetsService } from "../../../services/assetsServices/asset.service";
import swal from "sweetalert";

function FormResource({
  className,
  submitForm,
}: {
  className?: string;
  submitForm?: () => void;
}) {
  const { register, handleSubmit, reset } = useForm();
  const [tags, setTags] = useState<string[]>([]);

  const createAsset = async (formData: any) => {
    const { title, link, tags, image } = formData;

    const assetData = {
      title: title,
      link: link,
      image: image,
      tags: tags.split(",").map((tag: string) => tag.trim()),
    };

    try {
      const { data } = await assetsService.create(assetData);
      if (submitForm) submitForm();
      swal({
        icon: "success",
        text: "Nuevo recurso creado con éxito.",
        buttons: ["Ok"],
      });
      console.log(data);
      reset();
    } catch (error) {
      swal({
        icon: "error",
        text: "Todo maaaal",
      });
      console.error(error);
    }
  };

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tagsValue = event.target.value;
    const tagsArray = tagsValue.split(",").map((tag) => tag.trim());
    setTags(tagsArray);
  };

  return (
    <div className={`py-8 px-4 border shadow-md ${className}`}>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Añadir recurso
      </h2>
      <form onSubmit={handleSubmit(createAsset)}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Título del brief:
            </label>
            <input
              {...register("title")}
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
              {...register("link")}
              type="text"
              className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Link del recurso"
              required
            ></input>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Subir foto
            </label>
            <input
              {...register("image")}
              className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              type="text"
            ></input>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tags (separated by commas):
            </label>
            <input
              {...register("tags")}
              type="text"
              className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Add tags..."
              onChange={handleTagsChange}
              value={tags.join(", ")}
            ></input>
          </div>

          <Button className="w-full col-span-full">Subir recurso</Button>
        </div>
      </form>
    </div>
  );
}

export default FormResource;
