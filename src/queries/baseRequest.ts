import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../configs/app";

export interface IBaseRequest extends AxiosRequestConfig {
  token?: string;
  apiUrl?: string;
  path: string;
  method?: "get" | "post" | "put" | "patch" | "delete";
  body?: { [key: string]: string };
  schema?: any | null;
  reducer?: any | null;
  dispatcher?: any | null;
}

const baseRequest = async ({
  token,
  apiUrl = API_URL,
  path = "/",
  method,
  headers = {},
  body,
  responseType = "json",
  schema = null,
  reducer = null,
}: IBaseRequest) => {
  const modHeaders = token
    ? { ...headers, Authorization: `Bearer ${token}` }
    : headers;
  let { data } = await axios({
    url: `${apiUrl}${path}`,
    method,
    data: body,
    responseType,
    headers: modHeaders,
  });
  if (schema) {
    data = await schema.validate(data);
  }
  if (reducer) {
    data = await reducer(data);
  }
  return data;
};

export default baseRequest;
