import { customAxios } from "../../lib/axios/customAxios";
import {
  MyAppliedBusResponse,
  TodayBusesResponse,
} from "../../types/busApply/busApply.type";
import {
  deleteBusApplyParam,
  patchBusApplyParam,
  postBusApplyParam,
} from "./busApply.param";

class BusApplyRepository {
  public async getTodayBuses(): Promise<TodayBusesResponse> {
    const { data } = await customAxios.get("/bus");
    return data;
  }

  public async getMyAppliedBus(): Promise<MyAppliedBusResponse> {
    const { data } = await customAxios.get("/bus/apply");
    return data;
  }

  public async postBusApply({ idx }: postBusApplyParam): Promise<void> {
    await customAxios.post(`/bus/apply?busId=${idx}`);
  }

  public async patchBusApply({
    idx,
    originIdx,
  }: patchBusApplyParam): Promise<void> {
    await customAxios.patch(
      `/bus/apply?busId=${idx}&originalBusId=${originIdx}`
    );
  }
}

export default new BusApplyRepository();
