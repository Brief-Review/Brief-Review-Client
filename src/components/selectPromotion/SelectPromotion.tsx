import { useContext, useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineRetweet,
} from "react-icons/ai";
import { useModal } from "../../hooks/useModal";
import BasicModal from "../modals/basicModal/BasicModal";
import FormPromotion from "../forms/formPromotion/FormPromotion";
import { graduatingService } from "../../services/graduatingsService/graduating.service";
import Button from "../ui/common/Button";
import AdminContext from "../../views/adminDashboard/ContextAdminDashboard";
import swal from "sweetalert";
import IconButton from "../ui/common/IconButton";
import { graduatingModel } from "../../models/graduating/graduating";

type selectPromotionProps = {
  className?: string;
};

function SelectPromotion({ className }: selectPromotionProps) {
  const [graduatings, setGraduatings] = useState<graduatingModel[]>([]);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [isOpenFormGraduating, openFormGraduating, closeFormGraduating] =useModal(false);
  const [isOpenEditFormGraduating, openEditFormGraduating, closeEditFormGraduating] =useModal(false);
  const { currentGraduating, setCurrentGraduating } = useContext(AdminContext);

  const getGraduatings = async () => {
    const { data } = await graduatingService.index();
    const graduatings = data?.data?.data;

    setGraduatings(graduatings);
    if (currentGraduating === undefined) setCurrentGraduating(graduatings[0]);
  };

  const deleteGraduating = async (graduating: graduatingModel) => {
    swal({
      title: "Eliminar promoción",
      text: `Estas por eliminar la promoción: ${graduating?.name}, esta acción es irreversible.`,
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          closeModal: true,
        },
      },
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        swal("Eliminado con éxito.", {
          icon: "success",
        });
        const { data } = await graduatingService.destroy(graduating.id);
        getGraduatings();
      }
    });
  };

  const changeCurrentGraduating = (idGraduating: number) => {
    const newGraduating = graduatings?.find(
      (graduating: graduatingModel) => graduating?.id === idGraduating
    );

    swal({
      title: "Cambiar de promoción",
      text: `Estas cambiando de promoción a: ${newGraduating?.name}`,
      icon: "info",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          closeModal: true,
        },
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Cambiaste de promoción.", {
          icon: "success",
        });
        setCurrentGraduating(newGraduating);
        setOpenOptions(false);
      }
    });
  };

  useEffect(() => {
    getGraduatings();
  }, [isOpenFormGraduating]);

  const submitEdit = () => {
    closeEditFormGraduating(),
    getGraduatings();
  }

  return (
    <div className={` ${className}`}>
      <button className="w-full relative flex justify-between items-center  border shadow-md rounded cursor-pointer transition-all ">
        <span
          className="w-full flex justify-between items-center p-4"
          onClick={() => setOpenOptions(!openOptions)}
        >
          <h2>
            {currentGraduating
              ? currentGraduating?.name
              : "ninguna promoción seleccionada..."}
          </h2>
          <AiOutlineRetweet className="h-6 w-6" />
        </span>
        <div
          className={`w-full  absolute border top-0 translate-y-16  bg-white pointer-events-none overflow-y-scroll overflow-auto shadow-md rounded scrollbar-thin scrollbar-thumb-primary transition-all z-30 ${
            openOptions ? "max-h-60" : "max-h-0"
          }`}
        >
          {graduatings.length > 0 ? (
            graduatings.map((graduating: graduatingModel, index) => {
              return (
                <div
                  key={index}
                  className="w-full px-4 py-2 border hover:bg-neutral-200 pointer-events-auto flex justify-between"
                >
                  <h4>{graduating && graduating?.name}</h4>
                  <span className="flex gap-4 ">
                    <IconButton className="bg-danger pointer-events-auto" onClick={openEditFormGraduating}>
                      <AiOutlineEdit />
                    </IconButton>
                    <IconButton
                      className="bg-danger pointer-events-auto"
                      onClick={() => deleteGraduating(graduating)}
                    >
                      <AiOutlineDelete />
                    </IconButton>
                    <IconButton
                      className="bg-danger pointer-events-auto"
                      onClick={() =>
                        changeCurrentGraduating(graduating && graduating?.id)
                      }
                    >
                      <AiOutlineRetweet />
                    </IconButton>
                  </span>
                  <BasicModal
                    isOpen={isOpenEditFormGraduating}
                    closeModal={closeEditFormGraduating}
                  >
                    <FormPromotion submitForm={submitEdit} promotionData={graduating} edit />
                  </BasicModal>
                </div>
              );
            })
          ) : (
            <button className="w-full px-4 py-2 border hover:bg-neutral-200 pointer-events-auto">
              No hay promociones disponibles...
            </button>
          )}
          <Button
            className="w-full px-4 py-2 border pointer-events-auto text-primary underline underline-offset-4"
            onClick={openFormGraduating}
          >
            Crear nueva promoción
          </Button>
          <BasicModal
            isOpen={isOpenFormGraduating}
            closeModal={closeFormGraduating}
          >
            <FormPromotion submitForm={closeFormGraduating} />
          </BasicModal>
        </div>
      </button>
    </div>
  );
}

export default SelectPromotion;
