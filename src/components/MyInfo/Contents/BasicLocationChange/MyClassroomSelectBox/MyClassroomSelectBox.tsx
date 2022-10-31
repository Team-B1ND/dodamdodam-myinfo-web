import { useState } from "react";
import useClassroom from "../../../../../hooks/classroom/useClassroom";
import * as S from "./style";

interface classTime {
  classTime: string;
}

const MyClassroomSelectBox = ({ classTime }: classTime) => {
  const { classroomList } = useClassroom();
  const [basicLocaionRoom, setBasicLocaionRoom] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const basicLocaionRoomHandler = (e: any) => {
    console.log(e.target.value);
    if (classTime === "8교시") {
    }
  };

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
        {classroomList.map((classroom, idx) => {
          return (
            <option key={classroom.id} value={`${classroom.name}`}>
              {classroom.name}
            </option>
          );
        })}
      </S.BasicClassroomSelect>
    </S.EachClassroomBoxWrap>
  );
};

export default MyClassroomSelectBox;
