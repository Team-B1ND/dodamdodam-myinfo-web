import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { REQUEST_TOKEN_KEY } from "../../constants/token/token.constant";
import config from "../../config/config.json";
import cookie from "../cookie/cookie";
import { customAxiosErrorInterceptor } from "./interceptor";

export const customAxios = axios.create({
  baseURL: config.DODAM_SERVER_V6,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie("access-token")}`,
  },
});

customAxios.interceptors.response.use(
  (res) => res,
  customAxiosErrorInterceptor
);
