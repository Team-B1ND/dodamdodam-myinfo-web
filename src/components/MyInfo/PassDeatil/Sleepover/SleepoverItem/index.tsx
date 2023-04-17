import { useGetMyOutSleep } from "../../../../../query/leave/leave.query";
import { OutingTbody } from "../../Outing/style";
import { LeaveData, LeaveHeaderWrap } from "../style";

const SleepoverItem = () => {
  const { data } = useGetMyOutSleep();

  return (
    <>
      <OutingTbody>
        {data?.data.map((data) => {
          return (
            <>
              <LeaveHeaderWrap key={data.id}>
                <LeaveData>{data.reason}</LeaveData>
                <LeaveData>{data.startOutDate}</LeaveData>
                <LeaveData>{data.endOutDate}</LeaveData>
                <LeaveData>
                  {data.status === "PENDING"
                    ? "대기중"
                    : data.status === "ALLOWED"
                    ? "승인됨"
                    : "거절됨"}
                </LeaveData>
              </LeaveHeaderWrap>
            </>
          );
        })}
      </OutingTbody>
    </>
  );
};

export default SleepoverItem;
