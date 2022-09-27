import axios from "axios";

class PointRepository {
  public async getMyPoint() {
    const { data } = await axios.get(
      "http://dodam.b1nd.com//api/point/my/score"
    );
    return data;
  }
}

export default new PointRepository();
