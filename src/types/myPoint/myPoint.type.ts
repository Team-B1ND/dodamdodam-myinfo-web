import { Response } from "../util/response.type";

export interface myPointScore {
  domBonus: number;
  domMinus: number;
  schBonus: number;
  schMinus: number;
  student: {
    id: number;
  };
}

export interface myPointResponse extends Response {
  data: myPointScore;
}

export interface PointReason {
  given_date: string;
  id: number;
  place: "DORMITORY" | "SCHOOL";
  reason: string;
  score: number;
  student: {
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
    classroom: {
      grade: number;
      id: number;
      place: {
        id: number;
        name: string;
        type: {
          id: number;
          name: string;
        };
      };
      room: number;
    };
    number: number;
    phone: string;
  };
  teacher: {
    id: number;
    member: {
      email: string;
      id: string;
      joinDate: string;
      name: string;
      profileImage: null;
      role: "ADMIN" | "STUDENT";
      status: "ACTIVE" | "DEACTIVATED";
    };
    tel: string;
    position: string;
    phone: string;
  };
  type: "BONUS" | "MINUS";
}

export interface PointReasonResponse extends Response {
  data: PointReason[];
}
