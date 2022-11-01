import * as S from "./Dormitory.style";
import { useState } from "react";
import usePointReason from "../../../../hooks/myPoint/usePointReason";

const Dormitory = () => {

  const [isPoint, setIsPoint] = useState<boolean>(false);
  const { getPointDetail } = usePointReason();

  return (
    <S.DormitoryPointContainer>

      <S.PointHeaderContainer>
        <S.RewardPoints onClick={() => {
          setIsPoint(false);
          getPointDetail();
        }} isColor={isPoint} >상점</S.RewardPoints>
        <S.BadPoints onClick={() => setIsPoint(true)} isColor={isPoint}>벌점</S.BadPoints>
      </S.PointHeaderContainer>

      <S.PointReasonDetailWrap>
        <S.ReasonDetail style={{ width: "25%" }}>1점</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "50%" }}>기숙사 생활을 위한 봉사활동</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "20%" }}>2022-09-21</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "10%" }}>윤성원</S.ReasonDetail>
      </S.PointReasonDetailWrap>
      <S.PointReasonDetailWrap>
        <S.ReasonDetail style={{ width: "25%" }}>1점</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "50%" }}>기숙사 생활을 위한 봉사활동</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "20%" }}>2022-09-21</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "10%" }}>윤성원</S.ReasonDetail>
      </S.PointReasonDetailWrap>
      <S.PointReasonDetailWrap>
        <S.ReasonDetail style={{ width: "25%" }}>1점</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "50%" }}>기숙사 생활을 위한 봉사활동</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "20%" }}>2022-09-21</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "10%" }}>윤성원</S.ReasonDetail>
      </S.PointReasonDetailWrap>
      <S.PointReasonDetailWrap>
        <S.ReasonDetail style={{ width: "25%" }}>1점</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "50%" }}>기숙사 생활을 위한 봉사활동</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "20%" }}>2022-09-21</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "10%" }}>윤성원</S.ReasonDetail>
      </S.PointReasonDetailWrap>
      <S.PointReasonDetailWrap>
        <S.ReasonDetail style={{ width: "25%" }}>1점</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "50%" }}>기숙사 생활을 위한 봉사활동</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "20%" }}>2022-09-21</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "10%" }}>윤성원</S.ReasonDetail>
      </S.PointReasonDetailWrap>
      <S.PointReasonDetailWrap>
        <S.ReasonDetail style={{ width: "25%" }}>1점</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "50%" }}>기숙사 생활을 위한 봉사활동</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "20%" }}>2022-09-21</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "10%" }}>윤성원</S.ReasonDetail>
      </S.PointReasonDetailWrap>
      <S.PointReasonDetailWrap>
        <S.ReasonDetail style={{ width: "25%" }}>1점</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "50%" }}>기숙사 생활을 위한 봉사활동</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "20%" }}>2022-09-21</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "10%" }}>윤성원</S.ReasonDetail>
      </S.PointReasonDetailWrap>
      <S.PointReasonDetailWrap>
        <S.ReasonDetail style={{ width: "25%" }}>1점</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "50%" }}>기숙사 생활을 위한 봉사활동</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "20%" }}>2022-09-21</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "10%" }}>윤성원</S.ReasonDetail>
      </S.PointReasonDetailWrap>
      <S.PointReasonDetailWrap>
        <S.ReasonDetail style={{ width: "25%" }}>1점</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "50%" }}>기숙사 생활을 위한 봉사활동</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "20%" }}>2022-09-21</S.ReasonDetail>
        <S.Divide />
        <S.ReasonDetail style={{ width: "10%" }}>윤성원</S.ReasonDetail>
      </S.PointReasonDetailWrap>

    </S.DormitoryPointContainer>
  );
};

export default Dormitory;
