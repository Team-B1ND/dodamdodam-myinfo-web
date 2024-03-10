import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import config from "../../config/config.json";
import { customAxiosErrorInterceptor } from "./interceptor";
import token from "../token/token";

export const customAxios = axios.create({
  baseURL: config.DODAM_SERVER_V6,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const testAxios = axios.create({
  baseURL: config.DODAM_TEST_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.response.use(
  (res) => res,
  customAxiosErrorInterceptor
);

testAxios.interceptors.response.use((res) => res, customAxiosErrorInterceptor);
