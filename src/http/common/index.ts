import axios, { AxiosHeaders, AxiosInstance } from "axios";

const http = (baseURL: string, headers: AxiosHeaders): AxiosInstance =>
  axios.create({
    baseURL: baseURL,
    headers: headers,
  });

export default http;
