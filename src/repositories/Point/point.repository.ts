import { customAxios } from "libs/Axios/customAxioss";
import {
  MyPointResponse,
  PointReasonResponse,
  PointType,
} from "types/MyPoint/myPoint.type";


class PointRepository {
  public async getMyPoint(
    type: PointType
  ): Promise<MyPointResponse> {
    
    const { data } = await customAxios.get(`/point/score/my?type=${type}`);
    return data;
  }

  public async getPointReason(
    type: PointType
  ): Promise<PointReasonResponse> {
    const { data } = await customAxios.get(`/point/my?type=${type}`);
    return data;
  }
}

export default new PointRepository();
