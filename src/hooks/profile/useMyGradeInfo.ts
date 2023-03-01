import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import profileRepository from "../../repository/profile/profile.repository";
import { profileInfo } from "../../store/profile";
import { myProfile } from "../../types/profile/profile.type";

const useMyGradeInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [, setTempProfileInfo] = useRecoilState(profileInfo);

  const getMyGrade = async () => {
    try {
      setIsLoading(true);
      const { data } = await profileRepository.getMyProfileInfo();
      setTempProfileInfo(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMyGrade();
  }, []);

  return { isLoading };
};

export default useMyGradeInfo;
