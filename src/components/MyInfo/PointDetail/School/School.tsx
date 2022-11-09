import * as S from "./School.style";
import { useState } from "react";
import usePointReason from "../../../../hooks/myPoint/usePointReason";

const Dormitory = () => {

  const [isPoint, setIsPoint] = useState<boolean>(false);
  const { schoolMinusPointReasonData, schoolBonusPointReasonData } = usePointReason();

  return (
    <S.DormitoryPointContainer>

      <S.PointHeaderContainer>
        <S.RewardPoints onClick={() => {
          setIsPoint(false);
        }} isColor={isPoint} >상점</S.RewardPoints>
        <S.BadPoints onClick={() => setIsPoint(true)} isColor={isPoint}>벌점</S.BadPoints>
      </S.PointHeaderContainer>

      {
        isPoint ?
          schoolMinusPointReasonData.length !== 0 ? schoolMinusPointReasonData.map((item, idx) => {
            return (
              <S.PointReasonDetailWrap key={idx}>
                <S.ReasonDetail style={{ width: "20%" }}>{item.score}점</S.ReasonDetail>
                <S.Divide />
                <S.ReasonDetail style={{ width: "50%" }}>{item.reason}</S.ReasonDetail>
                <S.Divide />
                <S.ReasonDetail style={{ width: "20%" }}>{item.given_date.split(" ")[0]}</S.ReasonDetail>
                <S.Divide />
                <S.ReasonDetail style={{ width: "10%" }}>{item.teacher.member.name}</S.ReasonDetail>
              </S.PointReasonDetailWrap>
            )
          }) :
            <S.PointReasonDataNullMent>벌점이 없습니다.</S.PointReasonDataNullMent>
          :
          schoolBonusPointReasonData.length !== 0 ? schoolBonusPointReasonData.map((item, idx) => {
            return (
              <S.PointReasonDetailWrap key={idx}>
                <S.ReasonDetail style={{ width: "20%" }}>{item.score}점</S.ReasonDetail>
                <S.Divide />
                <S.ReasonDetail style={{ width: "50%" }}>{item.reason}</S.ReasonDetail>
                <S.Divide />
                <S.ReasonDetail style={{ width: "20%" }}>{item.given_date.split(" ")[0]}</S.ReasonDetail>
                <S.Divide />
                <S.ReasonDetail style={{ width: "10%" }}>{item.teacher.member.name}</S.ReasonDetail>
              </S.PointReasonDetailWrap>
            )
          }) :
            <S.PointReasonDataNullMent>상점이 없습니다.</S.PointReasonDataNullMent>
      }

    </S.DormitoryPointContainer>
  );
};

export default Dormitory;
