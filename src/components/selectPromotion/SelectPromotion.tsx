import { useContext, useEffect, useState } from "react";
import { AiOutlineRetweet } from "react-icons/ai";
import { useModal } from "../../hooks/useModal";
import BasicModal from "../modals/basicModal/BasicModal";
import FormPromotion from "../forms/formPromotion/FormPromotion";
import { graduatingService } from "../../services/graduatingsService/graduating.service";
import Button from "../ui/common/Button";
import AdminContext from "../../views/adminDashboard/ContextAdminDashboard";
import swal from "sweetalert";

type selectPromotionProps = {
  className?: string;
};

function SelectPromotion({ className }: selectPromotionProps) {
  const [graduatings, setGraduatings] = useState([]);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [isOpenFormGraduating, openFormGraduating, closeFormGraduating] =
    useModal(false);
  const { currentGraduating, setCurrentGraduating } = useContext(AdminContext);

  const getGraduatings = async () => {
    const { data } = await graduatingService.index();
    setGraduatings(data?.data?.data);
  };

  const changeCurrentGraduating = (idGraduating: number) => {
    const newGraduating = graduatings.find(
      (graduating) => graduating?.id === idGraduating
    );

    swal({
      text: `¿Cambiar de promoción a: ${newGraduating?.name}?`,
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
  }, []);

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
              : "Selecciona una promoción..."}
          </h2>
          <AiOutlineRetweet className="h-6 w-6" />
        </span>
        <div
          className={`w-full  absolute border top-0 translate-y-16  bg-white pointer-events-none overflow-y-scroll overflow-auto shadow-md rounded scrollbar-thin scrollbar-thumb-primary transition-all ${
            openOptions ? "max-h-60" : "max-h-0"
          }`}
        >
          {graduatings.length > 0 ? (
            graduatings.map((graduating, index) => {
              return (
                <button
                  key={index}
                  onClick={() => changeCurrentGraduating(graduating?.id)}
                  className="w-full px-4 py-2 border hover:bg-neutral-200 pointer-events-auto"
                >
                  {graduating?.name}
                </button>
              );
            })
          ) : (
            <button
              // onClick={() => setOpenOptions(!openOptions)}
              className="w-full px-4 py-2 border hover:bg-neutral-200 pointer-events-auto"
            >
              Cargando...
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
