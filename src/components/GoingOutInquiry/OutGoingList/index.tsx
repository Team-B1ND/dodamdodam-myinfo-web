import { Trash } from "@b1nd/dds-web";
import * as S from "./style";
import { useGetMyOutGoingQuery } from "queries/Pass/pass.query";
import { useGetMySleepingQuery } from "queries/Leave/leave.query";
import { useOutPass } from "hooks/Out/outPass"; 

type OutGoingListProps = {
  select: boolean;
};

const OutGoingList = ({ select }: OutGoingListProps) => {
  const { data: outingData } = useGetMyOutGoingQuery({
    enabled: select,
  });

  const { data: sleepingData } = useGetMySleepingQuery({
    enabled: !select,
  });

  const { handleDelete } = useOutPass(select);

  const dataList = select ? outingData?.data : sleepingData?.data;

  return (
    <>
      {dataList && dataList.length !== 0 ? (
        dataList.map((item, index) => (
          <S.OutingItem key={index}>
            <S.OutingHeader>
              <S.StatusLabel $allowed={item.status === "ALLOWED"}>
                {item.status === "PENDING"
                  ? "대기중"
                  : item.status === "ALLOWED"
                  ? "수락됨"
                  : ""}
              </S.StatusLabel>
              <S.DeleteButton onClick={() => handleDelete(item.id)}>
                <Trash color="labelNormal" />
              </S.DeleteButton>
            </S.OutingHeader>
            <S.OutingContent>{item.reason}</S.OutingContent>
            <S.OutingTime>
              <span>{select ? "외출" : "외박"} {item.startAt}</span>
              <span>복귀 {item.endAt}</span>
            </S.OutingTime>
          </S.OutingItem>
        ))
      ) : (
        <S.OutingNull>{select ? "외출" : "외박"} 신청 내역이 없습니다.</S.OutingNull>
      )}
    </>
  );
};

export default OutGoingList;
