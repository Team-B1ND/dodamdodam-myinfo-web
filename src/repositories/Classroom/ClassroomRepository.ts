import { Classroom } from "types/Classroom/classroom.type";
import { Response } from "types/Utils/response.types";

export interface ClassroomRepository {
  getClassroom({ id }: getClassroomParam): Promise<getClassroomResponse>;
}

export interface getClassroomParam {
  id: number;
}

export interface getClassroomResponse extends Response {
  data: Classroom;
}
