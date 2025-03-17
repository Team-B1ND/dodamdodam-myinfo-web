import { customAxios } from "libs/Axios/customAxioss";
import { placeListResponse } from "types/Place/place.type";

class PlaceRepository {
  public async getPlace(): Promise<placeListResponse> {
    const { data } = await customAxios.get(`/place`);
    return data;
  }
}

export default new PlaceRepository();
