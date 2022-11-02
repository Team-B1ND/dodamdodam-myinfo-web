export interface defaultStudyRoomArray {
  placeId: number;
  timeTableId: number;
}

export interface studyroomByOneday {
  day: string;
  defaultStudyRooms: defaultStudyRoomArray[];
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

export type basicLocationType = "WEEKEND" | "WEEKDAY";

export type basicLocationDay =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

//("study-room/default")
export interface defaultStudyRoom {
  id: number;
  place: {
    id: number;
    name: string;
    type: {
      id: number;
      name: string;
    };
  };
  student: {
    accessLevel: number;
    allowed: number;
    classroomIdx: number;
    email: string;
    grade: number;
    id: string;
    idx: number;
    joinDate: string;
    name: string;
    number: number;
    phone: string;
    placeIdx: number;
    profileImage: string;
    room: number;
  };
  timeTable: {
    endTime: string;
    id: number;
    name: string;
    startTime: string;
    type: string;
  };
}

export interface defaultStudyRoomResponse extends Response {
  data: defaultStudyRoom[];
  message: string;
  status: number;
}
