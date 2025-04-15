import { customAxios } from "libs/Axios/customAxioss";
import { mainProfile, myProfileResponse } from "types/Profile/profile.type";
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

    public async patchMainProfile(member: mainProfile): Promise<void> {
      await customAxios.patch("/member/info", member);
    }
}

export default new ProfileRepository();
