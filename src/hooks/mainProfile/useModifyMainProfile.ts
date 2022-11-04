import mainProfileRepository from "../../repository/mainProfile/mainProfile.repository";
import { mainProfile } from "../../types/mainProfile/mainProfile.type";

const useModifyMainProfile = () => {
  const patchMainProfile = async (member: mainProfile) => {
    try {
      const response = await mainProfileRepository.patchMainProfile(member);
    } catch (error) {}
  };
  return { patchMainProfile };
};

export default useModifyMainProfile;
