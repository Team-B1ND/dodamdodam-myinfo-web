import { testAxios } from "../../lib/axios/customAxios";
import {
  BusesResponse,
  MyAppliedBusResponse,
} from "../../types/busApply/busApply.type";
import { BusApplyParam } from "./busApply.param";

class BusApplyRepository {
  public async getTodayBuses(): Promise<BusesResponse> {
    const { data } = await testAxios.get("/bus");
    return data;
  }

  public async getMyAppliedBus(): Promise<MyAppliedBusResponse> {
    const { data } = await testAxios.get("/bus/apply");
    return data;
  }

  public async postBusApply({ idx }: BusApplyParam): Promise<void> {
    await testAxios.post(`/bus/apply/${idx}`);
  }

  public async patchBusApply({ idx }: BusApplyParam): Promise<void> {
    await testAxios.patch(`/bus/apply/${idx}`);
  }
}

export default new BusApplyRepository();
