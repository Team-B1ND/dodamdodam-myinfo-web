import { customAxios } from "../../lib/axios/customAxios";
import {
  defaultStudyRoomResponse,
  studyroomByOneday,
  studyRoomTimeTableListResponse,
} from "../../types/basicLocation/basicLocation.type";

class BasicLocationRepository {
  public async postBasicLocationByOneday(
    studyroomByOneday: studyroomByOneday
  ): Promise<void> {
    await customAxios.post("/study-room/default", studyroomByOneday);
  }

  public async getStudyRoomTimeTableByType(
    type: string
  ): Promise<studyRoomTimeTableListResponse> {
    const { data } = await customAxios.get(`/time/tables/type?type=${type}`);
    return data;
  }

  public async getMyDefaultStudyRoom(): Promise<defaultStudyRoomResponse> {
    const { data } = await customAxios.get("/study-room/my");
    return data;
  }
}

export default new BasicLocationRepository();
