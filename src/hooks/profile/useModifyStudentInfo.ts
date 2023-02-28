import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import ProfileRepository from "../../repository/profile/profile.repository";
import { profileInfo } from "../../store/profile";

const useModifyStudentInfo = () => {
  const [profileInfoData, setProfileInfoData] = useRecoilState(profileInfo);

  const [studentInfo, setStudentInfo] = useState({
    grade: profileInfoData.classroom?.grade || 0,
    room: profileInfoData.classroom?.room || 0,
    number: profileInfoData.number,
  });

  const [tempStudentInfo, setTempStudentInfo] = useState({
    grade: profileInfoData.classroom?.grade || 0,
    room: profileInfoData.classroom?.room || 0,
    number: profileInfoData.number,
  });

  useEffect(() => {
    console.log(studentInfo);
  }, [studentInfo]);

  const onChangeStudentInfo = (
    e: ChangeEvent<HTMLSelectElement>,
    scope: "grade" | "room" | "number"
  ) => {
    const { value } = e.target;

    switch (scope) {
      case "grade":
        setStudentInfo((prev) => ({ ...prev, grade: Number(value) }));
        break;

      case "room":
        setStudentInfo((prev) => ({ ...prev, room: Number(value) }));
        break;

      case "number":
        setStudentInfo((prev) => ({ ...prev, number: Number(value) }));
        break;

      default:
        setStudentInfo((prev) => ({ ...prev, grade: Number(value) }));
        break;
    }
  };

  const onModifyStudentInfo = async () => {
    if (
      Object.entries(studentInfo).toString() ===
      Object.entries(tempStudentInfo).toString()
    ) {
      window.alert("정보를 변경해주세요");
    }

    try {
      await ProfileRepository.patchStudentInfo({
        grade: studentInfo.grade,
        room: studentInfo.room,
        number: studentInfo.number,
      });

      window.alert("학반 수정 성공");

      setProfileInfoData((prev) => ({
        ...prev,
        number: studentInfo.number,
        classroom: {
          grade: studentInfo.grade,
          room: studentInfo.room,
          placeId: prev.classroom!.placeId,
          id: prev.classroom!.id,
        },
      }));

      setTempStudentInfo({ ...studentInfo });
    } catch (error) {
      window.alert("학반 수정 실패");
    }

    return;
  };

  return { onChangeStudentInfo, onModifyStudentInfo };
};

export default useModifyStudentInfo;
