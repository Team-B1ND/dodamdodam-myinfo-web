import { customAxios } from "../../lib/axios/customAxios";

class BusApplyRepository {
  public async postBusApply(data: string): Promise<void> {
    await customAxios.post("/bus/apply/{busId}");
  }
}

export default new BusApplyRepository();
