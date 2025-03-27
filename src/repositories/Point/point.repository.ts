import { customAxios } from "libs/Axios/customAxioss";
import {
  MyPointResponse,
  PointReasonResponse,
} from "types/MyPoint/myPoint.type";
import { getMyPointParam } from "./point.param";

class PointRepository {
  public async getMyPoint(
    type: getMyPointParam
  ): Promise<MyPointResponse> {
    const { data } = await customAxios.get(`point/my/score=${type}`);
    return data;
  }

  public async getPointReason(
    type: getMyPointParam
  ): Promise<PointReasonResponse> {
    const { data } = await customAxios.get(`/point/my?type=${type}`);
    return data;
  }
}

export default new PointRepository();
