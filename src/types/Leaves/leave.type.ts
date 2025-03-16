import { Response } from "../util/response.type";

export interface Leave {
  reason: string;
  startAt: string;
  endAt: string;
}

export interface AppliedLeave extends Leave {
  arrivedDate: null | string;
  checkedDate: null | string;
  id: number;
  status: "ALLOWED" | "PENDING" | "DENIED";
  studenr: {
    id: number;
  };
  teacher: {
    id: number;
  };
}

export interface ApplyLeave {
  reason: string;
  startTimeDate: string;
  startTimeHour: string;
  startTimeMinute: string;
  endTimeDate: string;
  endTimeHour: string;
  endTimeMinute: string;
  idx: number;
}

export interface MyLeavesResponse extends Response {
  data: AppliedLeave[];
}
