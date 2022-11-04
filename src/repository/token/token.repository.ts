import axios from "axios";
import { TokenRefreshResponse } from "../../types/token/token.type";
import { postTokenRefreshParam } from "./token.param";
import config from "../../config/config.json";

class TokenRepository {
  public async postTokenRefresh({
    refreshToken,
  }: postTokenRefreshParam): Promise<TokenRefreshResponse> {
    const { data } = await axios.post(
      `${config.DODAM_SERVER_V6}}/token/refresh`,
      refreshToken
    );

    return data;
  }
}

export default new TokenRepository();
