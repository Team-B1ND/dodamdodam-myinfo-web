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
  point: {
    log: [
      {
        idx: number;
        reason: string;
        score: number;
        studentIdx: number;
        target: number;
        teacherIdx: number;
        type: number;
      }
    ];
  };
}

export interface PointReasonResponse extends Response {
  data: PointReason[];
}
