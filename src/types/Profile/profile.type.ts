import { Response } from "../util/response.type";

// export interface myProfile {
//   classroom: {
//     grade: number;
//     id: number;
//     placeId: number;
//     room: number;
//   } | null;
//   id: number;
//   member: {
//     email: string;
//     id: string;
//     joinDate: string;
//     name: string;
//     profileImage: string | null;
//     role: "ADMIN" | "STUDENT";
//     status: "ACTIVE" | "DEACTIVATED";
//   };
//   number: number;
//   phone: string;
// }

export interface Member {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "STUDENT";
  status: "ACTIVE" | "DEACTIVATED";
  profileImage: string | null;
  phone: string;
  createdAt: string;
  modifiedAt: string;
}

export interface Student {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
}

export interface Teacher {
  id: number;
  tel: string;
  position: string;
}

export interface Profile extends Member {
  student: Student | null;
  teacher: Teacher | null;
}

export interface myProfileResponse extends Response {
  data: Profile;
  message: string;
  status: number;
}
