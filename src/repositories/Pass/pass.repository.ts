import { customAxios } from "libs/Axios/customAxioss";
import { MyPassesResponse } from "types/Pass/pass.type";

class PassRepository {
  public async getMyOutGoing(): Promise<MyPassesResponse> {
    const { data } = await customAxios.get("/out-going/my");
    return data;
  }
}

export default new PassRepository();
