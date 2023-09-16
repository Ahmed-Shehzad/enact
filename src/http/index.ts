import axios, { AxiosInstance } from "axios";
import { IIdentifier } from "./common/utils";

export class BaseService<T extends IIdentifier> {
  private http: AxiosInstance;

  constructor(private path: string = "") {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const apiURL = `${baseURL}/api/${path}`;

    this.http = axios.create({
      baseURL: `${apiURL}`,
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  findAll() {
    return this.http.get<Array<T>>(this.path);
  }

  findById(id: number | string) {
    return this.http.get<T>(`${this.path}/${id}`);
  }

  create(data: Omit<T, "id">) {
    return this.http.post<T>(this.path, data);
  }

  update(data: T) {
    return this.http.put<T>(`${this.path}/${data.id}`, data);
  }

  delete(id: number | string) {
    return this.http.delete<T>(`${this.path}/${id}`);
  }
}

export default BaseService;
