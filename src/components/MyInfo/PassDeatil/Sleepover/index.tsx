import React from "react";
import { useGetMyOutSleep } from "../../../../query/leave/leave.query";
import {
  LeaveTable,
  LeaveData,
  LeaveHeaderTitle,
  LeaveHeaderWrap,
} from "./style";
const Sleepover = () => {
  const { data } = useGetMyOutSleep();
  return (
    <>
      <LeaveTable>
        <LeaveHeaderWrap>
          <LeaveHeaderTitle>외박 사유</LeaveHeaderTitle>
          <LeaveHeaderTitle>출발 시간</LeaveHeaderTitle>
          <LeaveHeaderTitle>도착 시간</LeaveHeaderTitle>
          <LeaveHeaderTitle>승인 여부</LeaveHeaderTitle>
        </LeaveHeaderWrap>

        {data?.data.map((data) => {
          return (
            <>
              <LeaveHeaderWrap>
                <LeaveData>{data.reason}</LeaveData>
                <LeaveData>{data.startOutDate}</LeaveData>
                <LeaveData>{data.endOutDate}</LeaveData>
                <LeaveData>
                  {data.status === "PENDING" ? "대기중" : "승인됨"}
                </LeaveData>
              </LeaveHeaderWrap>
            </>
          );
        })}
      </LeaveTable>
    </>
  );
};

export default Sleepover;
