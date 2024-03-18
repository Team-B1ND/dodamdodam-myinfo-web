import { Response } from "../util/response.type";

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
  data: null | Bus;
}
