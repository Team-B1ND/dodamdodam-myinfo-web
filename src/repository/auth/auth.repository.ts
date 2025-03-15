import axios from "axios";
import { NewAccessTokenResponse, TokenRefreshResponse } from "../../types/token/token.type";
import { postTokenRefreshParam } from "./auth.param";
import config from "../../config/config.json";

class AuthRepository {
  public async postTokenRefresh({
    refreshToken,
  }: postTokenRefreshParam): Promise<TokenRefreshResponse> {
    const { data } = await axios.post(
      `${config.DODAM_SERVER}}/auth/reissue`,
      refreshToken
    );
    return data;
  }
  public async refreshAccessToken(refreshToken: {
    refreshToken: string;
  }): Promise<NewAccessTokenResponse> {
    const { data } = await axios.post<NewAccessTokenResponse>(
      `${config.DODAM_SERVER}/auth/reissue`,
      refreshToken
    );
    return data;
  }
}

export default new AuthRepository();
