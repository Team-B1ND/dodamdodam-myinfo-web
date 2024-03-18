import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import ProfileRepository from "../../repository/profile/profile.repository";
import { profileInfo } from "../../store/profile";

const useModifyStudentInfo = () => {
  const [profileInfoData, setProfileInfoData] = useRecoilState(profileInfo);

  const [studentInfo, setStudentInfo] = useState({
    grade: profileInfoData.student?.grade || 0,
    room: profileInfoData.student?.room || 0,
    number: profileInfoData.student?.number || 0,
  });

  const [tempStudentInfo, setTempStudentInfo] = useState({
    grade: profileInfoData.student?.grade || 0,
    room: profileInfoData.student?.room || 0,
    number: profileInfoData.student?.number || 0,
  });

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
      B1ndToast.showInfo("정보를 변경해주세요");
    }

    try {
      await ProfileRepository.patchStudentInfo({
        grade: studentInfo.grade || 0,
        room: studentInfo.room || 0,
        number: studentInfo.number || 0,
      });

      B1ndToast.showSuccess("학반 수정 성공");

      setProfileInfoData((prev) => ({
        ...prev,
        student: {
          id: prev.student!.id,
          name: prev.student!.name,
          number: studentInfo.number || 0,
          grade: studentInfo.grade || 0,
          room: studentInfo.room || 0,
        },
      }));

      setTempStudentInfo({ ...studentInfo });
    } catch (error) {
      B1ndToast.showError("학반 수정 실패");
    }

    return;
  };

  return { onChangeStudentInfo, onModifyStudentInfo };
};

export default useModifyStudentInfo;
