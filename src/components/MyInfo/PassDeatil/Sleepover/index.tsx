import { OutingThead } from "../Outing/style";
import SleepoverItem from "./SleepoverItem";
import { LeaveTable, LeaveHeaderTitle, LeaveHeaderWrap } from "./style";

const Sleepover = () => {
  return (
    <>
      <LeaveTable>
        <OutingThead>
          <LeaveHeaderWrap>
            <LeaveHeaderTitle>외박 사유</LeaveHeaderTitle>
            <LeaveHeaderTitle>출발 시간</LeaveHeaderTitle>
            <LeaveHeaderTitle>도착 시간</LeaveHeaderTitle>
            <LeaveHeaderTitle>승인 여부</LeaveHeaderTitle>
          </LeaveHeaderWrap>
        </OutingThead>
        <SleepoverItem />
      </LeaveTable>
    </>
  );
};

export default Sleepover;
