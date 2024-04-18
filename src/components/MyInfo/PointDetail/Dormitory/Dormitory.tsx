import { useGetMyPointReasonQuery } from "../../../../query/point/point.query";
import * as S from "./Dormitory.style";
import { useState } from "react";

interface Props {
  isDormitoryAndSchool: boolean;
}

const Dormitory = ({ isDormitoryAndSchool }: Props) => {
  const [isPoint, setIsPoint] = useState<boolean>(false);

  const { data: dormitoryBonusPointReasonData } = useGetMyPointReasonQuery(
    isDormitoryAndSchool ? "SCHOOL" : "DORMITORY"
  );

  const bonusData = dormitoryBonusPointReasonData?.data.filter(
    (data) => data.reason.scoreType === "BONUS"
  );

  const minusData = dormitoryBonusPointReasonData?.data.filter(
    (data) => data.reason.scoreType === "MINUS"
  );

  return (
    <S.DormitoryPointContainer>
      <S.PointHeaderContainer>
        <S.RewardPoints
          onClick={() => {
            setIsPoint(false);
          }}
          isColor={isPoint}
        >
          상점
        </S.RewardPoints>
        <S.BadPoints onClick={() => setIsPoint(true)} isColor={isPoint}>
          벌점
        </S.BadPoints>
      </S.PointHeaderContainer>
      {!isPoint ? (
        <>
          {bonusData?.map((item, idx) => (
            <S.PointReasonDetailWrap key={idx}>
              <S.ReasonDetail style={{ width: "20%" }}>
                {item.reason.score}점
              </S.ReasonDetail>
              <S.Divide />
              <S.ReasonDetail style={{ width: "50%" }}>
                {item.reason.reason}
              </S.ReasonDetail>
              <S.Divide />
              <S.ReasonDetail style={{ width: "20%" }}>
                {item.issueAt}
              </S.ReasonDetail>
              <S.Divide />
              <S.ReasonDetail style={{ width: "10%" }}>
                {item.teacher.name}
              </S.ReasonDetail>
            </S.PointReasonDetailWrap>
          ))}
        </>
      ) : (
        <>
          {minusData?.map((item, idx) => (
            <S.PointReasonDetailWrap key={idx}>
              <S.ReasonDetail style={{ width: "20%" }}>
                {item.reason.score}점
              </S.ReasonDetail>
              <S.Divide />
              <S.ReasonDetail style={{ width: "50%" }}>
                {item.reason.reason}
              </S.ReasonDetail>
              <S.Divide />
              <S.ReasonDetail style={{ width: "20%" }}>
                {item.issueAt}
              </S.ReasonDetail>
              <S.Divide />
              <S.ReasonDetail style={{ width: "10%" }}>
                {item.teacher.name}
              </S.ReasonDetail>
            </S.PointReasonDetailWrap>
          ))}
        </>
      )}
    </S.DormitoryPointContainer>
  );
};

export default Dormitory;
