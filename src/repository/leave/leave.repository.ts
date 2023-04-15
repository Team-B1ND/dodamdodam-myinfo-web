import { customAxios } from "../../lib/axios/customAxios";
import { MyLeavesResponse } from "../../types/leave/sleep.type";

class LeaveRepository {
  public async getMyOutSleeping(): Promise<MyLeavesResponse> {
    const { data } = await customAxios.get("/out/outsleeping/my");
    return data;
  }
}

export default new LeaveRepository();
