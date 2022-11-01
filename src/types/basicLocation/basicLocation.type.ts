export interface defaultStudyRooms {
  placeId: number;
  timeTableId: number;
}

export interface studyroomByOneday {
  day: string;
  defaultStudyRooms: defaultStudyRooms[];
}

// export interface studyroomInfo {
//   location: {
//     checkedTeacherIdx: number;
//     date: string;
//     idx: number;
//     isChecked: number;
//     placeIdx: number;
//     studendIdx: number;
//     timeTableIdx: number;
//   };
// }

// export interface studyroomInfoResponse extends Response {
//   data: studyroomInfo[];
//   message: string;
//   status: number;
// }

export interface studyRoomTimeTable {
  endTime: string;
  id: number;
  name: string;
  startTime: string;
  type: string;
}

export interface studyRoomTimeTableListResponse extends Response {
  data: studyRoomTimeTable[];
  message: string;
  status: number;
}
