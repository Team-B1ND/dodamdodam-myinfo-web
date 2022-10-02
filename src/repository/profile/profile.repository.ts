import { customAxios } from "../../lib/axios/customAxios";
import { myProfileResponse } from "../../types/profile/profile.type";

class ProfileRepository {
  public async getMyProfileInfo(): Promise<myProfileResponse> {
    const { data } = await customAxios.get("/members/my");
    return data;
  }
}

export default new ProfileRepository();
