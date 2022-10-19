import mainProfileRepository from "../../repository/mainProfile/mainProfile.repository";
import { mainProfile } from "../../types/mainProfile/mainProfile.type";

const useModifyMainProfile = (member: mainProfile) => {
  const patchMainProfile = async (member: mainProfile) => {
    try {
      const response = await mainProfileRepository.patchMainProfile(member);
    } catch (error) {
      console.log(error);
    }
  };
  return {};
};

export default useModifyMainProfile;
