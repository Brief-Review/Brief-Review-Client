import { useEffect, useState } from "react";
import { IconDropdown } from "../../ui/dropdowns/IconDropdown";
import { AiOutlineMore } from "react-icons/ai";
import { userService } from "../../../services/userServices/user.services";
import Button from "../../ui/common/Button";
import { useModal } from "../../../hooks/useModal";
import BasicModal from "../../modals/basicModal/BasicModal";
import CreateUsersWithExcelForm from "../../forms/createUsersWithExcelForm/CreateUsersWithExcelForm";

export function UsersList({ className }: { className: string }) {
  const [userOptionsMenus, setUserOptionsMenus] = useState<boolean[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<null | []>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isOpenUserModal, openUserModal, closeUserModal] = useModal(false);

  const handleUserOptions = (index: number) => {
    const newOptionsMenus = [...userOptionsMenus];
    newOptionsMenus[index] = !newOptionsMenus[index];
    setUserOptionsMenus(newOptionsMenus);
  };

  const getUsers = async (page: number) => {
    const { data } = await userService.index(page, 10);
    let users = data.data.data;
    setUsers(users);
    setTotalPages(data.data.last_page);
  };

  // Modal user create

  // Control pages

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Crud user

  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);
  const dropDownOptions = [
    {
      optionName: "Enviar credenciales",
      handleOption: () => console.log("algo"),
    },
    {
      optionName: "Modificar",
      handleOption: () => console.log("algo"),
    },
    {
      optionName: "Eliminar",
      handleOption: () => console.log("algo"),
    },
  ];
  return (
    <div
      className={
        "p-4 rounded shadow-md flex flex-col gap-2 dark:bg-neutral-900 dark:text-white  " +
        className
      }
    >
      <BasicModal isOpen={isOpenUserModal} closeModal={closeUserModal}>
        <CreateUsersWithExcelForm/>
      </BasicModal>

      <div className="flex justify-between">
        <h2 className="">Lista de Coders:</h2>
        <Button onClick={openUserModal}>Añadir coders</Button>
      </div>
      <div className="grid  gap-2 md:grid-cols-2 lg:grid-cols-3">
        {users ? (
          users.map((user: any, index: number) => (
            <div
              key={user.id}
              className="relative w-full px-4 py-2 shadow-md rounded flex justify-between items-center hover:bg-neutral-200 pointer-events-auto dark:hover:bg-neutral-700"
            >
              {user.name}
              <IconDropdown
                id={user.id}
                isOpen={userOptionsMenus[index]}
                toggleDropdown={() => handleUserOptions(index)}
                options={dropDownOptions}
              >
                <AiOutlineMore />
              </IconDropdown>
            </div>
          ))
        ) : (
          <div className="relative w-full px-4 py-2 border rounded flex justify-between items-center hover:bg-neutral-200 pointer-events-auto">
            Cargando...
          </div>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <Button disabled={currentPage === 1} onClick={previousPage}>
          Anterior
        </Button>
        <Button disabled={currentPage === totalPages} onClick={nextPage}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}
