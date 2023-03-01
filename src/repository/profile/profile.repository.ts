import { customAxios } from "../../lib/axios/customAxios";
import { myProfileResponse } from "../../types/profile/profile.type";
import { patchMyPasswordParam, patchStudentInfoParam } from "./profile.param";

class ProfileRepository {
  public async getMyProfileInfo(): Promise<myProfileResponse> {
    const { data } = await customAxios.get("/members/my");
    return data;
  }

  public async patchMyPassword({
    newPw,
    pw,
  }: patchMyPasswordParam): Promise<void> {
    await customAxios.patch("/members/pw", { newPw, pw });
  }

  public async patchStudentInfo({
    grade,
    room,
    number,
  }: patchStudentInfoParam): Promise<void> {
    await customAxios.patch("/members/student/studentInfo", {
      grade,
      room,
      number,
    });
  }
}

export default new ProfileRepository();
