import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "constants/Tokens/token.constant";
import { InternalAxiosRequestConfig } from "axios";
import token from "../Tokens/token";

const requestHandler = (config: InternalAxiosRequestConfig) => {
  if (
    token.getToken(REFRESH_TOKEN_KEY) === undefined
  ) {
    alert(token.getToken(REFRESH_TOKEN_KEY))
    window.location.href = "https://dodam.b1nd.com/sign";
  } else {
    config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`
    }

  return config;
};

export default requestHandler;
