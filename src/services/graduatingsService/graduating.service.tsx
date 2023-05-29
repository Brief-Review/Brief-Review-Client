import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

interface graduatingData {
  id?: number;
  name: string;
  category: string;
  duration: string;
  manager: string;
  location: string;
  partners?: string;
}

export const graduatings = () => {
  return axios.get(baseUrl + "/graduatins");
};

export const createGraduating = (data: graduatingData) => {
  return axios.post(baseUrl + "/graduatings", data);
};

export const updateGraduating = (data: graduatingData, id: number) => {
  return axios.post(baseUrl + "/graduatings/" + id, data);
};

export const deleteGraduating = (id: number) => {
  return axios.get(baseUrl + "/graduatings/" + id);
};
