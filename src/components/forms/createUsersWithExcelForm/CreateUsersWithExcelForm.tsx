import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as XLSX from "xlsx";
import Button from "../../ui/common/Button";
import { userService } from "../../../services/userServices/user.services";
import swal from "sweetalert";

function CreateUsersWithExcelForm({ className }: { className: string }) {
  const { register, handleSubmit } = useForm();

  const [exelUsers, setExelUsers] = useState();
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target!.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        console.log(jsonData);
        setExelUsers(jsonData);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const onSubmit = () => {
    const columnHeaders = exelUsers[0];

    const nameIndex = columnHeaders.indexOf("Nombre");
    const emailIndex = columnHeaders.indexOf("correo");

    const usersArray = exelUsers.slice(1).map((row) => ({
      name: row[nameIndex],
      email: row[emailIndex],
      password: "password",
    }));
    registerUsers(usersArray);
    console.log(usersArray);
  };

  const registerUsers = async (newUsers: []) => {
    try {
      newUsers.forEach(async (user) => {
        try {
          const { data } = await userService.register(user);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      });
      swal({
        title: "¡YEEAH!",
        text: "Todos los usuarios se añadieron con éxito",
        icon: "success",
      });
    } catch (error) {
      swal({
        text: "Error",
        icon: "error",
      });
    }
  };

  return (
    <div className={`p-4 ${className}`}>
      <h2 className="my-4 text-xl font-bold text-gray-900 dark:text-white">
        Añadir estudiantes
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="gap-4 flex flex-col">
        <p className="italic text-sm">
          Usaremos las columnas correo, nombre y edad para crear los usuarios y
          contraseñas (Los usuarios podrán cambiar su contraseña cuando lo
          deseen).<br></br>
          <br></br> Los usuarios automáticamente recibirán sus credenciales por
          correo.
        </p>
        <label className="block text-sm dark:text-white font-medium">
          Seleccionar exel de estudiantes:
        </label>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        ></input>
        <Button>Añadir coders</Button>
      </form>
    </div>
  );
}

export default CreateUsersWithExcelForm;
