import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export interface userCredentials {
  name?: string;
  email: string;
  password: string;
}

export const indexUsers = () => {
  return axios.get(baseUrl + "/users");
};

export const login = (data: userCredentials) => {
  return axios.post(baseUrl + "/auth/login", data);
};

export const registerUser = (data: userCredentials) => {
  return axios.post(baseUrl + "/auth/register", data);
};

export const getUser = () => {
  return axios.get(baseUrl + "/user")
}

export const logout = () => {
  return axios.get(baseUrl + "/auth/logout");
};

export const deleteUser = (user: number) => {
  return axios.get(baseUrl + "/users/" + user);
};
