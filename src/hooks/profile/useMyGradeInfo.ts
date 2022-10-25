import { useEffect, useState } from "react";
import profileRepository from "../../repository/profile/profile.repository";
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
      email: "student@dgsw.hs.kr",
      id: "dgsw_student",
      joinDate: "2022-10-02 21:17:48",
      name: "김준호",
      profileImage: null,
      role: "STUDENT",
      status: "ACTIVE",
    },
    number: 0,
    phone: "010-1234-5678",
  });

  // const { classroom, phone, member, number } = myGradeInfo;
  // const { grade, room } = classroom;
  // const { name, email, profileImage } = member;

  const getMyGrade = async () => {
    try {
      setIsLoading(true);
      const { data } = await profileRepository.getMyProfileInfo();
      setMyGradeInfo(data);
      setIsLoading(false);

      //   console.log(myGradeInfo);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getMyGrade();
  }, []);

  return { myGradeInfo, isLoading };
  // return { grade, room, number, name, email, phone, profileImage };
};

export default useMyGradeInfo;
