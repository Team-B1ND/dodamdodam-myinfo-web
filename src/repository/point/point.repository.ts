import { customAxios } from "../../lib/axios/customAxios";
import {
  myPointResponse,
  PointReasonResponse,
} from "../../types/myPoint/myPoint.type";

class PointRepository {
  public async getMyPoint(): Promise<myPointResponse> {
    const { data } = await customAxios.get(`point/my/score`);
    return data;
  }

  public async getPointReason(): Promise<PointReasonResponse> {
    const date = new Date().toLocaleDateString().split(".")[0];
    const { data } = await customAxios.get(`point/my/year?year=${date}`);
    return data;
  }
}

export default new PointRepository();
