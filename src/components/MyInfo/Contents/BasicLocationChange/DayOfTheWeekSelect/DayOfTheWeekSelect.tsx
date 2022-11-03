import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { basicLocationRoomDayAtom } from "../../../../../store/basicLocation";
import * as S from "./style";

interface Props {
  onChangeDefaultType: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const DayOfTheWeekSelect = ({ onChangeDefaultType }: Props) => {
  const [category, setCategory] = useState<string>("날짜");
  const [date, setDate] = useState<string>("월요일");

  return (
    <>
      <S.DayOfTheWeekSelectWrap>
        <S.DayOfTheWeekLabelWrap></S.DayOfTheWeekLabelWrap>
        <S.CategoryExplainWrap>
          <>
            <S.CategoryExplainText>
              변경하고 싶은 날짜를 선택해주세요.
            </S.CategoryExplainText>
            <S.WhenDateContentsSelect onChange={onChangeDefaultType}>
              <option value={"MONDAY"}>월요일</option>
              <option value={"TUESDAY"}>화요일</option>
              <option value={"WEDNESDAY"}>수요일</option>
              <option value={"THURSDAY"}>목요일</option>
              <option value={"FRIDAY"}>금요일</option>
              <option value={"SATURDAY"}>토요일</option>
              <option value={"SUNDAY"}>일요일</option>
            </S.WhenDateContentsSelect>
          </>
        </S.CategoryExplainWrap>
      </S.DayOfTheWeekSelectWrap>
    </>
  );
};

export default DayOfTheWeekSelect;
