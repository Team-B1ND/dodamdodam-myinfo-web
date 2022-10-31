import * as S from "./Dormitory.style";
import { useState } from "react";

const Dormitory = () => {

  const [isPoint, setIsPoint] = useState<boolean>(false);

  return (
    <S.DormitoryPointContainer>

      <S.PointHeaderContainer>
        <S.RewardPoints onClick={() => setIsPoint(false)} isColor={isPoint} >상점</S.RewardPoints>
        <S.BadPoints onClick={() => setIsPoint(true)} isColor={isPoint}>벌점</S.BadPoints>
      </S.PointHeaderContainer>

      <div>
        <div>score</div>
        <div>reason</div>
        <div>date</div>
        <div>th</div>
      </div>

    </S.DormitoryPointContainer>
  );
};

export default Dormitory;
