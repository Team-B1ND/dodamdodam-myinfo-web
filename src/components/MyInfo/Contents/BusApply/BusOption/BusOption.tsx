import { useState } from "react";
import * as S from "./style";

interface propsText {
  id: string;
  station: string;
  time: string;
}

const BusOption = ({ id, station, time }: propsText) => {
  const [color, setColor] = useState(["#ffffff", "#000000"]);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <S.BusOptionWrap
      backgroundColor={isClicked ? "#03c75a" : "#ffffff"}
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
    >
      <S.BusOptionStationText textColor={isClicked ? "#ffffff" : "#000000"}>
        {id}
      </S.BusOptionStationText>
      <S.BusOptionStationText textColor={isClicked ? "#ffffff" : "#000000"}>
        {station}
      </S.BusOptionStationText>
      <S.BusOptionStationText textColor={isClicked ? "#ffffff" : "#000000"}>
        ({time})
      </S.BusOptionStationText>
    </S.BusOptionWrap>
  );
};

export default BusOption;
