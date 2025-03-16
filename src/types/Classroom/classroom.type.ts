import { Place } from "../place/place.type";

export interface Classroom extends Place {
  grade: number;
  room: number;
}
