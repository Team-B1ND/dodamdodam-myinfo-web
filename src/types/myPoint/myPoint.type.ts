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
