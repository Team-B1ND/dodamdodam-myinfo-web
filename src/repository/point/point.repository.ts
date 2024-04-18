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

  public async getPointReason(
    type: "DORMITORY" | "SCHOOL"
  ): Promise<PointReasonResponse> {
    const { data } = await customAxios.get(`/point/my?type=${type}`);
    return data;
  }
}

export default new PointRepository();
