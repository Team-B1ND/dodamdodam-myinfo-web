import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import profileRepository from "../../repository/profile/profile.repository";
import { profileInfo } from "../../store/profile";
import { myProfile } from "../../types/profile/profile.type";

const useMyGradeInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [myGradeInfo, setMyGradeInfo] = useState<myProfile>({
    classroom: {
      grade: 0,
      id: 0,
      placeId: 0,
      room: 0,
    },
    id: 0,
    member: {
      email: "",
      id: "",
      joinDate: "",
      name: "",
      profileImage: null,
      role: "STUDENT",
      status: "ACTIVE",
    },
    number: 0,
    phone: "",
  });
  const [tempProfileInfo, setTempProfileInfo] = useRecoilState(profileInfo);

  const getMyGrade = async () => {
    try {
      setIsLoading(true);
      const { data } = await profileRepository.getMyProfileInfo();
      setMyGradeInfo(data);
      setTempProfileInfo(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMyGrade();
  }, []);

  return { myGradeInfo, isLoading };
};

export default useMyGradeInfo;
