import { createContext, useState, ReactNode } from "react";
import { User } from "../../models/auth/User.model";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type AppContextType = {};

const AppContext = createContext<AppContextType | any>(undefined);

type HomeProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: HomeProviderProps) => {
  const [user, setUser] = useLocalStorage('user','');
  const [token, setToken] = useLocalStorage('token','');
  
  const contextData: AppContextType = {
    user,
    setUser,
    token,
    setToken,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
export default AppContext;
