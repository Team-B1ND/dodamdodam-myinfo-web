import { Classroom } from "../../types/classroom/classroom.type";
import { Response } from "../../types/util/response.type";

export interface ClassroomRepository {
  getClassroom({ id }: getClassroomParam): Promise<getClassroomResponse>;
}

export interface getClassroomParam {
  id: number;
}

export interface getClassroomResponse extends Response {
  data: Classroom;
}
