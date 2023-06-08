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
  const [input, setInput] = useState("");
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const createAsset = async (formData: any) => {
    const { title, link, image } = formData;

    const assetData = {
      title: title,
      link: link,
      image: image,
      tags: [...tags, ...formData.tags],
    };

    try {
      const { data } = await assetsService.create(assetData);
      if (submitForm) submitForm();
      swal({
        icon: "success",
        text: "Nuevo recurso creado con éxito.",
        buttons: ["Ok"],
      });
      reset();
      setTags([]);
    } catch (error) {
      swal({
        icon: "error",
        text: "Todo maaaal",
      });
      console.log("el input es" + input);
      console.error(error);
    }
  };

  const onChange = (e: any) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = (e: any) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (
      (key === "," || key === " ") &&
      trimmedInput.length &&
      !tags.includes(trimmedInput)
    ) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag: any = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index: number) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
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
              Tags
            </label>
            <div className="container flex flex-wrap w-100 max-w-100 rounded-md">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="tag text-white flex items-center gap-2 m-2 mr-3 p-2 pr-2 border border-orange-500 rounded-md bg-orange-500 whitespace-nowrap"
                >
                  {tag}
                  <button onClick={() => deleteTag(index)}>x</button>
                </div>
              ))}
            </div>
            <input
              {...register("tags")}
              type="text"
              className="w-100 max-w-100 border-none rounded-md p-4 pl-4 bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Añade etiquetas"
              value={input}
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              onChange={onChange}
            ></input>
          </div>

          <Button className="w-full col-span-full">Subir recurso</Button>
        </div>
      </form>
    </div>
  );
}

export default FormResource;
