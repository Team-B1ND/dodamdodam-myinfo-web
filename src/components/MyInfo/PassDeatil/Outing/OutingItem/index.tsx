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
                <OutingData>{data.startOutDate}</OutingData>
                <OutingData>{data.endOutDate}</OutingData>
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
