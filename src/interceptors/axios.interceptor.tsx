import axios from "axios";
import { useEffect, useContext } from "react";
import AppContext from "../context/global/AppContext";

export const AxiosInterceptor = () => {
  const { token } = useContext(AppContext);

  useEffect(() => {
    const interceptor = axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, [token]);

  return null; // Opcionalmente, puedes devolver algún contenido si lo necesitas
};

