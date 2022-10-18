import { useState } from "react";
import { palette } from "../../../../../styles/palette";
import { lightTheme } from "../../../../../styles/theme";
import * as S from "./style";

interface propsText {
  id: string;
  station: string;
  time: string;
}

const BusOption = ({ id, station, time }: propsText) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <S.BusOptionWrap
      backgroundColor={isClicked ? palette.main : palette.white}
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
    >
      {id !== "5" && (
        <S.BusOptionStationText
          textColor={isClicked ? palette.white : palette.black}
          fontSize="1.2rem"
        >
          {id}
          {id !== "5" ? "호차" : null}
        </S.BusOptionStationText>
      )}
      <S.BusOptionStationText
        textColor={isClicked ? palette.white : palette.black}
        fontSize="1.4rem"
      >
        {station}
      </S.BusOptionStationText>
      <S.BusOptionStationText
        textColor={isClicked ? palette.white : palette.gray[300]}
        fontSize="1rem"
      >
        ({time})
      </S.BusOptionStationText>
    </S.BusOptionWrap>
  );
};

export default BusOption;
