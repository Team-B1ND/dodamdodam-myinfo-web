import { BusApplyStatus } from "repositories/BusApply/busApply.params";
import { Response } from "../Utils/response.type";

export interface Bus {
  readonly id: number;
  busName: string;
  description: string;
  peopleLimit: number;
  applyCount: number;
  leaveTime: string;
  timeRequired: string;
}

export interface BusesResponse extends Response {
  data: Bus[];
}

export interface MyAppliedBusResponse extends Response {
  data: {
    id: number;
    name: string;
    seat: number | null;
    boardingType: BusApplyStatus;
  };
}

export interface BusSeatInfo extends Response {
  data: number[];
}