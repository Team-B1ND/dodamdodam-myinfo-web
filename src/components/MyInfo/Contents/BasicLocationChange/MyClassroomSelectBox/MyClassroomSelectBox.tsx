import { useEffect, useState } from "react";
import useClassroom from "../../../../../hooks/classroom/useClassroom";
import { defaultStudyRooms } from "../../../../../types/basicLocation/basicLocation.type";
import * as S from "./style";

interface classTime {
  classTime: string;
}

const MyClassroomSelectBox = ({ classTime }: classTime) => {
  const { classroomList } = useClassroom();
  const [basicLocaionRoom, setBasicLocationRoom] = useState<
    defaultStudyRooms[]
  >([
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
  ]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const basicLocaionRoomHandler = (e: any) => {
    const myClassroom = e.target.value;
    const myClassroomInfo = classroomList.filter(
      (classroom) => classroom.name === myClassroom
    );
    console.log(myClassroomInfo);
    const classroomId = myClassroomInfo[0].id;
    // const applyClassroomIdx = Number(classTime.split("교시")[0]) - 8;
    if (classTime === "8교시") {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0], placeId: classroomId },
        { ...basicLocaionRoom[1] },
        { ...basicLocaionRoom[2] },
        { ...basicLocaionRoom[3] },
      ]);
    } else if (classTime === "9교시") {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0] },
        { ...basicLocaionRoom[1], placeId: classroomId },
        { ...basicLocaionRoom[2] },
        { ...basicLocaionRoom[3] },
      ]);
    } else if (classTime === "10교시") {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0] },
        { ...basicLocaionRoom[1] },
        { ...basicLocaionRoom[2], placeId: classroomId },
        { ...basicLocaionRoom[3] },
      ]);
    } else if (classTime === "11교시") {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0] },
        { ...basicLocaionRoom[1] },
        { ...basicLocaionRoom[2] },
        { ...basicLocaionRoom[3], placeId: classroomId },
      ]);
    }
  };

  useEffect(() => {
    console.log(basicLocaionRoom);
  }, [basicLocaionRoom]);

  return (
    <S.EachClassroomBoxWrap>
      <S.BasicClassroomSelectTextWrap>
        <S.ClassTimeText>{classTime}</S.ClassTimeText>
      </S.BasicClassroomSelectTextWrap>
      <S.BasicClassroomSelect
        name={classTime}
        defaultValue="none"
        onChange={basicLocaionRoomHandler}
      >
        <option value="none">선택해주세요</option>
        {classroomList.map((classroom) => {
          return (
            <option key={classroom.id} value={classroom.name}>
              {classroom.name}
            </option>
          );
        })}
      </S.BasicClassroomSelect>
    </S.EachClassroomBoxWrap>
  );
};

export default MyClassroomSelectBox;
