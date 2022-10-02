import { customAxios } from "../../lib/axios/customAxios";
import { myPointResponse } from "../../types/myPoint/myPoint.type";

class PointRepository {
  public async getMyPoint(): Promise<myPointResponse> {
    const { data } = await customAxios.get(`/point/my/score`);
    return data;
  }
}

export default new PointRepository();
