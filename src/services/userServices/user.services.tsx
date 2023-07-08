import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export interface userCredentials {
  name?: string;
  email?: string;
  password?: string;
  graduating?:string;
  role?:number;
  address?:string
}

export const userService = {
  index: (page: number = 1, per_page: number = 10) => {
    return axios.get(baseUrl + `/users?page=${page}&per_page=${per_page}`);
  },
  getUser: () => {
    return axios.get(baseUrl + "/user");
  },
  show: (id: number) => {
    return axios.get(baseUrl + "/users/" + id);
  },
  update:(id:number,data:any)=>{
    return axios.put(baseUrl + "/users/" + id, data)
  },
  login: (data: userCredentials) => {
    return axios.post(baseUrl + "/auth/login", data);
  },
  register: (data: userCredentials) => {
    return axios.post(baseUrl + "/auth/register", data);
  },
  logout: () => {
    return axios.get(baseUrl + "/auth/logout");
  },
  delete: (user: number) => {
    return axios.delete(baseUrl + "/users/" + user);
  },
};
