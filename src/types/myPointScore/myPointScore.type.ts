import { Response } from "../util/response.type";

export interface myPointScore extends Response {
  data: {
    domBonus: 0;
    domMinus: 0;
    schBonus: 0;
    schMinus: 0;
    student: {
      id: 0;
    };
  };
}
