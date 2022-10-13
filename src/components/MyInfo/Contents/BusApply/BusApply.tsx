import * as S from "./style";
import busImage from "../../../../images/bus_3d.png";

const BusApply = () => {
  return (
    <S.BusApplyWrap>
      <S.BusApplyTopWrap>
        <S.BusImg src={busImage} />
        <S.BusApplyTextWrap>귀가 버스 신청</S.BusApplyTextWrap>
        <S.BusDateTextWrap>2022.10.21.</S.BusDateTextWrap>
      </S.BusApplyTopWrap>
      <S.BusApplyMiddleWrap></S.BusApplyMiddleWrap>
    </S.BusApplyWrap>
  );
};

export default BusApply;
