import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { REQUEST_TOKEN_KEY } from "../../constants/token/token.constant";
import config from "../../config/config.json";
import token from "../token/token";
import cookie from "../cookie/cookie";

export const customAxios = axios.create({
  baseURL: config.DODAM_SERVER_V3,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie("access-token")}`,
  },
});
