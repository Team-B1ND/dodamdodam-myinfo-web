import { customAxios } from "../../lib/axios/customAxios";
import {
  myPointResponse,
  PointReasonResponse,
} from "../../types/myPoint/myPoint.type";

class PointRepository {
  public async getMyPoint(): Promise<myPointResponse> {
    const { data } = await customAxios.get(`/point/my/score`);
    return data;
  }

  public async getPointReason(): Promise<PointReasonResponse> {
    const { data } = await customAxios.get("point/my/year");
    console.log(data);
    return data;
  }
}

export default new PointRepository();
