import { customAxios } from "libs/Axios/customAxioss";
import { MyPassesResponse } from "types/Pass/pass.type";

class PassRepository {
  public async getMyOutGoing(): Promise<MyPassesResponse> {
    const { data } = await customAxios.get("/out-going/my");
    return data;
  }
  public async deleteOutGoing(id:number): Promise<void> {
    const { data } = await customAxios.delete(`/out-going/${id}`)
    return data;
  }

}

export default new PassRepository();
