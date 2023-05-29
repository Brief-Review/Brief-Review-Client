import { createContext, useState, ReactNode } from "react";
import { User } from "../../models/auth/User.model";

type AppContextType = {};

const AppContext = createContext<AppContextType | any>(undefined);

type HomeProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: HomeProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const contextData: AppContextType = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
export default AppContext;
