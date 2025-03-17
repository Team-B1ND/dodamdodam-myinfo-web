import { customAxios } from "libs/Axios/customAxioss";
import {
  ClassroomRepository,
  getClassroomParam,
  getClassroomResponse,
} from "./ClassroomRepository";

class ClassroomRepositoryImpl implements ClassroomRepository {
  public async getClassroom({
    id,
  }: getClassroomParam): Promise<getClassroomResponse> {
    const { data } = await customAxios.get(`/classroom/${id}`);
    return data;
  }
}

export default new ClassroomRepositoryImpl();
