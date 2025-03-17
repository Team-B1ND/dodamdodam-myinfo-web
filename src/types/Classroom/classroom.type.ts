import { Place } from "../Place/place.types";

export interface Classroom extends Place {
  grade: number;
  room: number;
}
