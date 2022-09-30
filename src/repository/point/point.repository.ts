import axios from "axios";
import { customAxios } from "../../lib/axios/customAxios";
import { myPointScore } from "../../types/myPointScore/myPointScore.type";

class PointRepository {
  public async getMyPoint(): Promise<myPointScore> {
    const { data } = await customAxios.get(`/api/point/my/score`);
    return data;
  }
}

export default new PointRepository();
