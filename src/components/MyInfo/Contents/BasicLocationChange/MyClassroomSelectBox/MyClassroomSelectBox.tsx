import { ChangeEvent } from "react";
import usePlace from "../../../../../hooks/place/usePlace";
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
  const { placeList } = usePlace();

  return (
    <S.EachClassroomBoxWrap>
      <S.BasicClassroomSelectText>{timeTable.name}</S.BasicClassroomSelectText>
      <S.BasicClassroomSelect
        onChange={onChangePlace}
        name={String(timeTable.id)}
        id={String(idx)}
      >
        <option value="0">선택해주세요</option>
        {placeList?.map((place) => {
          return (
            <option
              key={place?.id}
              value={String(place?.id)}
              selected={applyPlaces?.placeId === place?.id}
            >
              {place.name}
            </option>
          );
        })}
      </S.BasicClassroomSelect>
    </S.EachClassroomBoxWrap>
  );
};

export default MyClassroomSelect;
