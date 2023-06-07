import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export interface assetData {
  id?: number;
  title: string;
  link: string;
  tags: string[];
}

export const assetsService = {
  index: () => {
    return axios.get(baseUrl + "/assets");
  },

  create: (data: assetData) => {
    return axios.post(baseUrl + "/assets", data);
  },

  update: (data: assetData, id: number) => {
    return axios.post(baseUrl + "/assets/" + id, data);
  },

  delete: (id: number) => {
    return axios.get(baseUrl + "/assets/" + id);
  },
};
