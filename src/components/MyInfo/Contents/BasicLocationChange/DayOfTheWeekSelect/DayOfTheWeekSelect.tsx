import { ChangeEvent, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { BASIC_LOCATION_DAY_SELECT_ITEMS } from "../../../../../constants/basicLocation/basicLocation.constant";
import { basicLocationRoomDayAtom } from "../../../../../store/basicLocation";
import { basicLocationDay } from "../../../../../types/basicLocation/basicLocation.type";
import dataTransform from "../../../../../types/util/transform/dataTransform";
import * as S from "./style";
import { VscTriangleDown } from "react-icons/vsc";

interface Props {
  onChangeDefaultType: (day: basicLocationDay) => void;
}

const DayOfTheWeekSelect = ({ onChangeDefaultType }: Props) => {
  const [close, setClose] = useState(true);
  const currentType = useRecoilValue(basicLocationRoomDayAtom);

  return (
    <>
      <S.DayOfTheWeekSelectContainer>
        <S.DayOfTheWeekSelectTitle>요일 선택</S.DayOfTheWeekSelectTitle>
        <S.DayOfTheWeekSelectWrap
          close={close}
          onClick={() => setClose((prev) => !prev)}
        >
          {dataTransform.dayTransform(currentType)}
          <S.DayOfTheWeekSelectIcon close={close}>
            <VscTriangleDown />
          </S.DayOfTheWeekSelectIcon>

          {!close && (
            <S.DayOfTheWeekSelectOptionWrap>
              {BASIC_LOCATION_DAY_SELECT_ITEMS.map((item) => (
                <S.DayOfTheWeekSelectOption
                  onClick={() =>
                    onChangeDefaultType(item.type as basicLocationDay)
                  }
                >
                  {item.title}
                </S.DayOfTheWeekSelectOption>
              ))}
            </S.DayOfTheWeekSelectOptionWrap>
          )}
        </S.DayOfTheWeekSelectWrap>
      </S.DayOfTheWeekSelectContainer>
    </>
  );
};

export default DayOfTheWeekSelect;
