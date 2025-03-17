import mainProfileRepository from "repositories/MainProfile/mainProfile.repository";
import { mainProfile } from "types/MainProfile/mainProfiles.type";

const useModifyMainProfile = () => {
  const patchMainProfile = async (memberInfo: mainProfile) => {
    try {
      await mainProfileRepository.patchMainProfile(memberInfo);
    } catch (error) {}
  };
  return { patchMainProfile };
};

export default useModifyMainProfile;
