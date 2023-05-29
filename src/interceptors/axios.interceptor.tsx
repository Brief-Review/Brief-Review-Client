import axios from "axios";

const user = { token: "" }; // objeto con un usuario

const token = user?.token;

export const AxiosInterceptor = () => {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
