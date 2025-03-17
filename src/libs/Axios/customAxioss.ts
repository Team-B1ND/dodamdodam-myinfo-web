import axios, { AxiosRequestConfig } from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "constants/Tokens/token.constant";
import token from "../Tokens/token";
import errorResponseHandler from "./errorResponseHandlers";
import requestHandler from "./requestHandler";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const customAxios = createAxiosInstance({
  baseURL: config.DODAM_SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`!,
  },
});

export const customAxiosSetAccessToken = (token: string) => {
  customAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};

customAxios.interceptors.request.use(requestHandler , (res) => res);

customAxios.interceptors.response.use((res) => res, errorResponseHandler);
