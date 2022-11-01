import { customAxios } from "../../lib/axios/customAxios";
import { studyroomByOneday } from "../../types/basicLocation/basicLocation.type";

class BasicLocationRepository {
  public async postBasicLocationByOneday(
    studyroomByOneday: studyroomByOneday
  ): Promise<void> {
    await customAxios.post("/study-room/default", studyroomByOneday);
  }
}
