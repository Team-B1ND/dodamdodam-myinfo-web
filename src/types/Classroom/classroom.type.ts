import { Place } from "../Place/place.type";

export interface Classroom extends Place {
  grade: number;
  room: number;
}
