import React from "react";
import { MyPassesResponse } from "../../../../types/pass/pass.type";
import { useGetMyOutGoingQuery } from "../../../../query/pass/pass.query";
import {
  OutingData,
  OutingHeaderTitle,
  OutingHeaderWrap,
  OutingTable,
} from "./style";

const Outing = () => {
  const { data } = useGetMyOutGoingQuery();
  return (
    <>
      <OutingTable>
        <OutingHeaderWrap>
          <OutingHeaderTitle>외출 사유</OutingHeaderTitle>
          <OutingHeaderTitle>출발 시간</OutingHeaderTitle>
          <OutingHeaderTitle>도착 시간</OutingHeaderTitle>
          <OutingHeaderTitle>승인 여부</OutingHeaderTitle>
        </OutingHeaderWrap>
        {data?.data.map((data) => {
          return (
            <>
              <OutingHeaderWrap>
                <OutingData>{data.reason}</OutingData>
                <OutingData>{data.startOutDate}</OutingData>
                <OutingData>{data.endOutDate}</OutingData>
                <OutingData>
                  {data.status === "PENDING" ? "대기중" : "승인됨"}
                </OutingData>
              </OutingHeaderWrap>
            </>
          );
        })}
      </OutingTable>
    </>
  );
};

export default Outing;
