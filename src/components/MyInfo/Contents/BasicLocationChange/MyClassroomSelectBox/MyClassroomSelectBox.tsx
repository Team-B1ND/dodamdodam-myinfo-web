import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useDefaultStudyRoom from "../../../../../hooks/basicLocation/useDefaultStudyRoom";
import useClassroom from "../../../../../hooks/classroom/useClassroom";
import { basicLocatioinRoomAtom } from "../../../../../store/basicLocation";
import {
  applyDefaultRoom,
  studyRoomTimeTable,
} from "../../../../../types/basicLocation/basicLocation.type";
import * as S from "./style";

interface classTime {
  idx: number;
  timeTable: studyRoomTimeTable;
  onChangePlace: (e: ChangeEvent<HTMLSelectElement>) => void;
  applyPlaces: applyDefaultRoom;
}

const MyClassroomSelect = ({
  idx,
  timeTable,
  onChangePlace,
  applyPlaces,
}: classTime) => {
  const { classroomList } = useClassroom();
  const [basicLocaionRoom, setBasicLocationRoom] = useRecoilState(
    basicLocatioinRoomAtom
  );

  // const { timeTablesByWeekday, timeTablesByWeekend } = useTimeTables();

  const [selectedRoom, setSelectedRoom] = useState<string>("선택해주세요");

  return (
    <S.EachClassroomBoxWrap>
      <S.BasicClassroomSelectTextWrap>
        <S.ClassTimeText>{timeTable.name}</S.ClassTimeText>
      </S.BasicClassroomSelectTextWrap>
      <S.BasicClassroomSelect
        onChange={onChangePlace}
        name={String(timeTable.id)}
        id={String(idx)}
      >
        <option value="0">선택해주세요</option>
        {classroomList?.map((classroom) => {
          return (
            <option
              key={classroom?.id}
              value={String(classroom?.id)}
              selected={applyPlaces?.placeId === classroom?.id}
            >
              {classroom.name}
            </option>
          );
        })}
      </S.BasicClassroomSelect>
    </S.EachClassroomBoxWrap>
  );
};

export default MyClassroomSelect;
