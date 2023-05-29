import axios from "axios";
import { useContext } from "react";
import AppContext from "../context/global/AppContext";

const user = {token:''} // objeto con un usuario

const token = user?.token;

export const AxiosInterceptor = () => {

    axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
}
