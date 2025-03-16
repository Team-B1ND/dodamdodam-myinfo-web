import { customAxios } from "libs/axios/customAxios";
import { mainProfile } from "types/mainProfile/mainProfile.type";

class MainProfileRepository {
  public async patchMainProfile(member: mainProfile): Promise<void> {
    await customAxios.patch("/member/info", member);
  }
}

export default new MainProfileRepository();
