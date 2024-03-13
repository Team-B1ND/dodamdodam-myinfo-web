import { customAxios, testAxios } from "../../lib/axios/customAxios";
import { fileUpload } from "../../types/fileUpload/fileUpload.type";

class FileUpload {
  public async postFileUpload(formData: FormData): Promise<fileUpload> {
    const { data } = await testAxios.post("/upload", formData);
    return data;
  }
}
export default new FileUpload();
