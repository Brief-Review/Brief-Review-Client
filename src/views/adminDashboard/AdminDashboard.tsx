import { useState, useContext } from "react";
import Header from "../../components/ui/header/Header";
import Navbar from "../../components/ui/navbar/Navbar";
import FormPromotion from "../../components/forms/formPromotion/FormPromotion";
import FormBrief from "../../components/forms/formBrief/FormBrief";
import FormResource from "../../components/forms/formResource/FormResource";
import {AiOutlineSetting } from "react-icons/ai";
import AppContext from "../../context/global/AppContext";
import BasicModal from "../../components/modals/basicModal/BasicModal";
import { useModal } from "../../hooks/useModal";
import AdminContext, { AdminContextProvider } from "./ContextAdminDashboard";
import SelectPromotion from "../../components/selectPromotion/SelectPromotion";
import { UsersList } from "../../components/templates/usersList/UsersList";

function AdminDashboard() {
  const [graduatings, setGraduatings] = useState<[] | null>(null);
  const [openOptions, setOpenOptions] = useState(false);

  const [isOpenFormPromotion, openFormPromotion, closeFormPromotion] =
    useModal(false);

  return (
    <AdminContextProvider>
      <div className="w-full px-[5%] h-screen py-8 grid grid-cols-12 grid-rows-6 gap-4">
        <Header className="col-span-12 row-span-1 place-self-center lg:col-span-11 " />
        <Navbar className="col-span-12 row-span-1 place-self-center row-start-6 max-h-12 lg:max-h-[100%] lg:col-span-1 lg:row-start-1 lg:row-end-7 " />
        <div className="col-span-12 grid-cols-12 row-span-4 row-start-2 row-end-6 lg:row-span-5 lg:row-start-2 overflow-y-scroll scrollbar-thin scrollbar scrollbar-thumb-primary   pb-4 grid gap-4">
          {/* Selector de promociones */}
          <SelectPromotion className="col-span-12"/>
          <UsersList className="col-span-12"/>
          
          <FormPromotion className="col-span-12  md:col-span-6" />
          <FormBrief className="col-span-12  md:col-span-6" />
          <FormResource className="col-span-12  md:col-span-6" />
        </div>
      </div>
    </AdminContextProvider>
  );
}

export default AdminDashboard;
