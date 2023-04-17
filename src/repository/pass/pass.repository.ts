import { customAxios } from "../../lib/axios/customAxios";
import { MyPassesResponse } from "../../types/pass/pass.type";

class PassRepository {
  public async getMyOutGoing(): Promise<MyPassesResponse> {
    const { data } = await customAxios.get("/out/outgoing/my");
    return data;
  }
}

export default new PassRepository();
