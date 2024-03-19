import { customAxios } from "../../lib/axios/customAxios";
import { MyLeavesResponse } from "../../types/leave/leave.type";

class LeaveRepository {
  public async getMyOutSleeping(): Promise<MyLeavesResponse> {
    const { data } = await customAxios.get("/out-sleeping/my");
    return data;
  }
}

export default new LeaveRepository();
