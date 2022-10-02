import axios from "axios";
import { customAxios } from "../../lib/axios/customAxios";
import { myPointResponse } from "../../types/myPointScore/myPointScore.type";

class PointRepository {
  public async getMyPoint(): Promise<myPointResponse> {
    const { data } = await customAxios.get(`/point/my/score`);
    return data;
  }
}

export default new PointRepository();
