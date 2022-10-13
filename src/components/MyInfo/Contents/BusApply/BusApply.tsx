import * as S from "./style";
import busImage from "../../../../images/bus_3d.png";
import BusOption from "./BusOption/BusOption";

const BusApply = () => {
  return (
    <S.BusApplyWrap>
      <S.BusApplyTopWrap>
        <S.BusImg src={busImage} />
        <S.BusApplyTextWrap>귀가 버스 신청</S.BusApplyTextWrap>
        <S.BusDateTextWrap>2022.10.21.</S.BusDateTextWrap>
      </S.BusApplyTopWrap>
      <S.BusApplyMainWrap>
        <BusOption id="1" station="동대구역" time="13:30"></BusOption>
        <BusOption id="2" station="동대구역" time="13:30"></BusOption>
        <BusOption id="3" station="대곡역" time="13:30"></BusOption>
        <BusOption id="4" station="용산역" time="13:30"></BusOption>
        <BusOption id="5" station="미탑승" time="13:30"></BusOption>
      </S.BusApplyMainWrap>
    </S.BusApplyWrap>
  );
};

export default BusApply;
