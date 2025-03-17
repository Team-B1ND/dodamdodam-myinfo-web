import { customAxios } from "libs/Axios/customAxioss";
import {
  BusesResponse,
  MyAppliedBusResponse,
} from "types/BusApply/busApply.type";
import { BusApplyParam } from "./busApply.params";

class BusApplyRepository {
  public async getTodayBuses(): Promise<BusesResponse> {
    const { data } = await customAxios.get("/bus");
    return data;
  }

  public async getMyAppliedBus(): Promise<MyAppliedBusResponse> {
    const { data } = await customAxios.get("/bus/apply");
    return data;
  }

  public async postBusApply({ idx }: BusApplyParam): Promise<void> {
    await customAxios.post(`/bus/apply/${idx}`);
  }

  public async patchBusApply({ idx }: BusApplyParam): Promise<void> {
    await customAxios.patch(`/bus/apply/status/${idx}`);
  }
  
  public async deleteBusApply({ idx }: BusApplyParam): Promise<void>{
    await customAxios.delete(`/bus/apply/${idx}`)
  }
}

export default new BusApplyRepository();
