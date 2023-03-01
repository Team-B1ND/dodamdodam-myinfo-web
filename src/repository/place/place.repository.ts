import { customAxios } from "../../lib/axios/customAxios";
import { placeListResponse } from "../../types/place/place.type";

class PlaceRepository {
  public async getPlace(): Promise<placeListResponse> {
    const { data } = await customAxios.get(`/place`);
    return data;
  }
}

export default new PlaceRepository();
