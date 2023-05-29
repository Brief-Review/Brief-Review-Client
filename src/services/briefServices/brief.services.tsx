import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

interface briefData {
  id?: number;
  title: string;
  description: string;
  repo_github: string;
  feedback: string;
  graduation_id?: string;
  partners?: string;
}

export const indexBriefs = () => {
  return axios.get(baseUrl + "/briefings");
};

export const createBrief = (data: briefData) => {
  return axios.post(baseUrl + "/briefings", data);
};

export const updateBrief = (data: briefData, id: number) => {
  return axios.post(baseUrl + "/briefings/" + id, data);
};

export const deleteBrief = (id: number) => {
  return axios.get(baseUrl + "/briefings/" + id);
};
