import mainProfileRepository from "../../repository/mainProfile/mainProfile.repository";
import { mainProfile } from "../../types/mainProfile/mainProfile.type";

const useModifyMainProfile = () => {
  const patchMainProfile = async (memberInfo: mainProfile) => {
    try {
      await mainProfileRepository.patchMainProfile(memberInfo);
    } catch (error) {}
  };
  return { patchMainProfile };
};

export default useModifyMainProfile;
