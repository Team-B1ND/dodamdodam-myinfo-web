import { useGetMyOutGoingQuery } from "../../../../../query/pass/pass.query";
import { OutingHeaderWrap, OutingData, OutingTbody } from "../style";

const OutingItem = () => {
  const { data } = useGetMyOutGoingQuery();

  return (
    <>
      <OutingTbody>
        {data?.data.map((data) => {
          return (
            <>
              <OutingHeaderWrap key={data.id}>
                <OutingData>{data.reason}</OutingData>
                <OutingData>
                  {data.startAt.slice(0, 10)}
                  &nbsp;
                  {data.startAt.slice(11, 19)}
                </OutingData>
                <OutingData>
                  {data.endAt.slice(0, 10)}
                  &nbsp;
                  {data.endAt.slice(11, 19)}
                </OutingData>
                <OutingData>
                  {data.status === "PENDING"
                    ? "대기중"
                    : data.status === "DENIED"
                    ? "거절됨"
                    : "승인됨"}
                </OutingData>
              </OutingHeaderWrap>
            </>
          );
        })}
      </OutingTbody>
    </>
  );
};

export default OutingItem;
