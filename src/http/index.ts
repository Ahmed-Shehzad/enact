import { LOCAL_HOST } from "@constants";
import { AxiosInstance } from "axios";
import http from "./common";
import { IIdentifier } from "./common/utils";

export class BaseService<T extends IIdentifier> {
  private httpRequest: AxiosInstance;
  private path: string = "";

  constructor() {
    this.httpRequest = http(`${LOCAL_HOST}`, {
      "Content-type": "application/json",
    });
  }
  setBaseURL(baseURL: string) {
    this.path = baseURL;
    this.httpRequest = http(`${baseURL}`, {
      "Content-type": "application/json",
    });
  }

  findAll() {
    return this.httpRequest.get<Array<T>>(this.path);
  }

  findById(id: number | string) {
    return this.httpRequest.get<T>(`${this.path}/${id}`);
  }

  create(data: Omit<T, "id">) {
    return this.httpRequest.post<T>(this.path, data);
  }

  update(data: T) {
    return this.httpRequest.put<T>(`${this.path}/${data.id}`, data);
  }

  delete(id: number | string) {
    return this.httpRequest.delete<T>(`${this.path}/${id}`);
  }
}

export default BaseService;
