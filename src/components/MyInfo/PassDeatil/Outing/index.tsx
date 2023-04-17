import OutingItem from "./OutingItem";
import {
  OutingHeaderTitle,
  OutingHeaderWrap,
  OutingTable,
  OutingThead,
} from "./style";

const Outing = () => {
  return (
    <>
      <OutingTable>
        <OutingThead>
          <OutingHeaderWrap>
            <OutingHeaderTitle>외출 사유</OutingHeaderTitle>
            <OutingHeaderTitle>출발 시간</OutingHeaderTitle>
            <OutingHeaderTitle>도착 시간</OutingHeaderTitle>
            <OutingHeaderTitle>승인 여부</OutingHeaderTitle>
          </OutingHeaderWrap>
        </OutingThead>
        <OutingItem />
      </OutingTable>
    </>
  );
};

export default Outing;
