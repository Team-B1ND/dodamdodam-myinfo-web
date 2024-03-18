import { customAxios } from "../../lib/axios/customAxios";
import { myProfileResponse } from "../../types/profile/profile.type";
import { patchMyPasswordParam, patchStudentInfoParam } from "./profile.param";

class ProfileRepository {
  public async getMyProfileInfo(): Promise<myProfileResponse> {
    const { data } = await customAxios.get("/member/my");
    return data;
  }

  public async patchMyPassword({
    password,
  }: patchMyPasswordParam): Promise<void> {
    await customAxios.patch("/member/password", { password });
  }

  public async patchStudentInfo({
    grade,
    room,
    number,
  }: patchStudentInfoParam): Promise<void> {
    await customAxios.patch("/member/student/info", {
      grade,
      room,
      number,
    });
  }
}

export default new ProfileRepository();
