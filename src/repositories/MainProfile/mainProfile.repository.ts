import { customAxios } from "libs/Axios/customAxioss";
import { mainProfile } from "types/MainProfile/mainProfiles.type";

class MainProfileRepository {
  public async patchMainProfile(member: mainProfile): Promise<void> {
    await customAxios.patch("/member/info", member);
  }
}

export default new MainProfileRepository();
