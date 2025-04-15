import { customAxios } from "libs/Axios/customAxioss";
import { fileUpload } from "types/FileUpload/fileUpload.type";

class FileUpload {
  public async postFileUpload(formData: FormData | ""): Promise<fileUpload> {
    const { data } = await customAxios.post("/upload", formData || null);
    return data;
  }
}
export default new FileUpload();
