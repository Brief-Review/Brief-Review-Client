import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export interface graduatingData {
  id?: number;
  name: string;
  category: string;
  duration: string;
  manager: string;
  location: string;
  partners?: string;
}

export const graduatingService =  {
   index : () => {
    return axios.get(baseUrl + "/graduatings");
  },

   create : (data: graduatingData) => {
    return axios.post(baseUrl + "/graduatings", data);
  },

   update : (data: graduatingData, id: number) => {
    return axios.put(baseUrl + "/graduatings/" + id, data);
  },

   destroy : (id: number) => {
    return axios.delete(baseUrl + "/graduatings/" + id);
  },
};
