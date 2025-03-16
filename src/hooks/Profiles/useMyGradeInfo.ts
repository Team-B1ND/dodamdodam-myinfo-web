import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import profileRepository from "repositories/profile/profile.repository";
import { profileInfo } from "stores/profile";

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
