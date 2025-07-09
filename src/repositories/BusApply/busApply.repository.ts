import { customAxios } from "libs/Axios/customAxioss";
import { BusApplyStatus } from "repositories/BusApply/busApply.params";
import {
  MyAppliedBusResponse,
} from "types/BusApply/busApply.type";

class BusApplyRepository {
  public async getMyAppliedBus(): Promise<MyAppliedBusResponse> {
    const { data } = await customAxios.get("/bus/my");
    return data;
  }

  public async toggleBusApplyStatus(param: BusApplyStatus): Promise<void> {
    await customAxios.patch(`/bus/status`, { status: param });
  }

  public async applyBusSeat(seat: number): Promise<void> {
    await customAxios.post(`/bus/board/${seat}}`);
  }

  public async changeBusSeat(seat: number): Promise<void> {
    await customAxios.patch(`/bus/board/${seat}`);
  }

  public async getBusSeatInfo(id: number): Promise<void> {
    const { data } = await customAxios.get(`/bus/${id}`);
    return data
  }
}

export default new BusApplyRepository();
