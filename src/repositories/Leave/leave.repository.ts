import { customAxios } from "libs/Axios/customAxioss";
import { MyLeavesResponse } from "types/Leave/leave.type";

class LeaveRepository {
  public async getMyOutSleeping(): Promise<MyLeavesResponse> {
    const { data } = await customAxios.get("/out-sleeping/my");
    return data;
  }
}

export default new LeaveRepository();
