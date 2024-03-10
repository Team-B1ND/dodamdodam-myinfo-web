import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import authRepository from "../../repository/auth/auth.repository";
import token from "../token/token";
import { customAxios } from "./customAxios";

export const customAxiosErrorInterceptor = async (config: AxiosError) => {
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);
  const refreshToken = token.getToken(REFRESH_TOKEN_KEY);

  if (accessToken && refreshToken && config.response?.status === 401) {
    try {
      const { data } = await authRepository.postTokenRefresh({ refreshToken });

      token.setToken(ACCESS_TOKEN_KEY, data);
      customAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = data;
    } catch (error) {
      window.alert("세션만료");
      token.clearToken();
      window.location.href = "https://dodam.b1nd.com/sign";
    }
  }
};
