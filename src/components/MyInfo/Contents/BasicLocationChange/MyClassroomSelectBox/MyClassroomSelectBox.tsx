import { ChangeEvent } from "react";
import useClassroom from "../../../../../hooks/classroom/useClassroom";
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

  return (
    <S.EachClassroomBoxWrap>
      <S.BasicClassroomSelectText>{timeTable.name}</S.BasicClassroomSelectText>
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
