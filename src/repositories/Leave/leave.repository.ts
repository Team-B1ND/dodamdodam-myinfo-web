import { customAxios } from "libs/Axios/customAxioss";
import { MyLeavesResponse } from "types/Leave/leave.type";

class LeaveRepository {
  public async getMyOutSleeping(): Promise<MyLeavesResponse> {
    const { data } = await customAxios.get("/out-sleeping/my");
    return data;
  }  
  public async deleteOutSleeping(id:number): Promise<void> {
    const { data } = await customAxios.delete(`/out-sleeping/${id}`)
    return data;
  }
}

export default new LeaveRepository();
