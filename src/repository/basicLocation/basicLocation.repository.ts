import { customAxios } from "../../lib/axios/customAxios";
import {
  defaultStudyRoomResponse,
  studyroomByOneday,
  studyRoomTimeTableListResponse,
} from "../../types/basicLocation/basicLocation.type";
import {
  getMyDefaultStudyRoomByDayParam,
  getMyDefaultStudyRoomByTypeParam,
  getStudyRoomTimeTableByType,
  postMyDefaultStudyRoomByDayParam,
} from "./basicLocation.param";

class BasicLocationRepository {
  public async getStudyRoomTimeTableByType({
    type,
  }: getStudyRoomTimeTableByType): Promise<studyRoomTimeTableListResponse> {
    const { data } = await customAxios.get(`/time/tables/type?type=${type}`);
    return data;
  }

  public async getMyDefaultStudyRoomBy({
    type,
  }: getMyDefaultStudyRoomByTypeParam): Promise<defaultStudyRoomResponse> {
    const { data } = await customAxios.get(
      `/study-room/default/type?type=${type}`
    );
    return data;
  }

  public async getMyDefaultStudyRoomByDay({
    day,
  }: getMyDefaultStudyRoomByDayParam): Promise<defaultStudyRoomResponse> {
    const { data } = await customAxios.get(
      `/study-room/default/type?day=${day}`
    );
    return data;
  }

  public async postMyDefaultStudyRoomByDay({
    day,
    defaultStudyRooms,
  }: postMyDefaultStudyRoomByDayParam): Promise<void> {
    await customAxios.post("/study-room/default", { day, defaultStudyRooms });
  }
}

export default new BasicLocationRepository();
