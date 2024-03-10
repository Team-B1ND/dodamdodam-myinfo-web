import axios from "axios";
import { TokenRefreshResponse } from "../../types/token/token.type";
import { postTokenRefreshParam } from "./auth.param";
import config from "../../config/config.json";

class AuthRepository {
  public async postTokenRefresh({
    refreshToken,
  }: postTokenRefreshParam): Promise<TokenRefreshResponse> {
    const { data } = await axios.post(
      `${config.DODAM_TEST_SERVER}}/auth/reissue`,
      refreshToken
    );
    return data;
  }
}

export default new AuthRepository();
