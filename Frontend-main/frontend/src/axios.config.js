import axios from "axios";

export const baseURL = process.env.API_URL;
axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 300000,
  withCredentials: true,
});
