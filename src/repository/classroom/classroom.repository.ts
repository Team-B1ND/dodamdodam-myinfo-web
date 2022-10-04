import { customAxios } from "../../lib/axios/customAxios";
import { classroomListResponse } from "../../types/classroom/classroom.type";

class ClassroomRepository {
  public async getClassroom(): Promise<classroomListResponse> {
    const { data } = await customAxios.get(`/place`);
    return data;
  }
}

export default new ClassroomRepository();
