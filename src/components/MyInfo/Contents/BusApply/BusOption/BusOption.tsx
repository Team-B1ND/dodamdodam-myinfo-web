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
      {id !== "5" && (
        <S.BusOptionStationText
          textColor={isClicked ? "#ffffff" : "#000000"}
          fontSize="1.2rem"
        >
          {id}
          {id !== "5" ? "호차" : null}
        </S.BusOptionStationText>
      )}
      <S.BusOptionStationText
        textColor={isClicked ? "#ffffff" : "#000000"}
        fontSize="1.4rem"
      >
        {station}
      </S.BusOptionStationText>
      <S.BusOptionStationText
        textColor={isClicked ? "#ffffff" : "#cfcfcf"}
        fontSize="1rem"
      >
        ({time})
      </S.BusOptionStationText>
    </S.BusOptionWrap>
  );
};

export default BusOption;
