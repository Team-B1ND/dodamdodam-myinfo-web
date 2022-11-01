import { customAxios } from "../../lib/axios/customAxios";
import {
  MyAppliedBusResponse,
  TodayBusesResponse,
} from "../../types/busApply/busApply.type";
import { deleteBusApplyParam, postBusApplyParam } from "./busApply.param";

class BusApplyRepository {
  public async getTodayBuses(): Promise<TodayBusesResponse> {
    const { data } = await customAxios.get("/bus");
    return data;
  }

  public async getMyAppliedBus(): Promise<MyAppliedBusResponse> {
    const { data } = await customAxios.get("/bus/apply");
    return data;
  }

  public async postBusApply({
    idx,
    originIdx = "",
  }: postBusApplyParam): Promise<void> {
    await customAxios.post(`/bus/apply?busId=${idx}&originBusId=${originIdx}`);
  }

  public async deleteBusApply({ idx }: deleteBusApplyParam) {
    await customAxios.delete(`/bus/apply/${idx}`);
  }
}

export default new BusApplyRepository();
