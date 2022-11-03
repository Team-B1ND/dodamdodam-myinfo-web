import {
  applyDefaultRoom,
  basicLocationDay,
  basicLocationType,
} from "../../types/basicLocation/basicLocation.type";

export interface getStudyRoomTimeTableByType {
  type: "WEEKEND" | "WEEKDAY";
}
export interface getMyDefaultStudyRoomByTypeParam {
  type: basicLocationType;
}

export interface getMyDefaultStudyRoomByDayParam {
  day: basicLocationDay;
}

export interface postMyDefaultStudyRoomByDayParam {
  day: string;
  defaultStudyRooms: applyDefaultRoom[];
}
