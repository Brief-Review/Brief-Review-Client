import { createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

// == Types ==
type AdminContextType = {
  openFormCreatePromotion: boolean;
  openFormEditPromotion: boolean;
  setOpenFormCreatePromotion: (value: boolean) => void;
  setOpenFormEditPromotion: (value: boolean) => void;
  currentGraduating:object,
  setCurrentGraduating:(value:number) => void;
};

type AdminProviderProps = {
  children: ReactNode;
};
// == End Types ==

const AdminContext = createContext<AdminContextType | any>(undefined);

export const AdminContextProvider = ({ children }: AdminProviderProps) => {
  const [currentGraduating, setCurrentGraduating] = useLocalStorage("current_graduating",undefined)
  const [openFormCreatePromotion, setOpenFormCreatePromotion] = useState(false);
  const [openFormEditPromotion, setOpenFormEditPromotion] = useState(false);

  const contextData: AdminContextType = {
    openFormCreatePromotion,
    openFormEditPromotion,
    setOpenFormCreatePromotion,
    setOpenFormEditPromotion,
    currentGraduating,
    setCurrentGraduating
  };

  return (
    <AdminContext.Provider value={contextData}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContext;
