import { Response } from "../util/response.type";

export interface myProfile {
  classroom: {
    grade: number;
    id: number;
    placeId: number;
    room: number;
  };
  id: number;
  member: {
    email: string;
    id: string;
    joinDate: string;
    name: string;
    profileImage: string;
    role: "ADMIN" | "STUDENT";
    status: "ACTIVE" | "DEACTIVATED";
  };
  number: number;
  phone: string;
}

export interface myProfileResponse extends Response {
  data: myProfile;
  message: string;
  status: number;
}
