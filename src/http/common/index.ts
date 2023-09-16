import axios, {
  AxiosHeaders,
  AxiosInstance,
  HeadersDefaults,
  RawAxiosRequestHeaders,
} from "axios";

const http = (
  baseURL: string,
  headers: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>,
): AxiosInstance =>
  axios.create({
    baseURL: baseURL,
    headers: headers,
  });

export default http;
