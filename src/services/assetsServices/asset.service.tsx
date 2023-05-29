import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

interface assetData {
  id?: number;
  title: string;
  link: string;
  image: string;
  tags: string;
}

export const indexAssets = () => {
  return axios.get(baseUrl + "/assets");
};

export const createGraduating = (data: assetData) => {
  return axios.post(baseUrl + "/assets", data);
};

export const updateGraduating = (data: assetData, id: number) => {
  return axios.post(baseUrl + "/assets/" + id, data);
};

export const deleteGraduating = (id: number) => {
  return axios.get(baseUrl + "/assets/" + id);
};
