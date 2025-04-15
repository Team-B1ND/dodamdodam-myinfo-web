import { useGetMyPointReasonQuery } from "queries/Point/point.query";
import * as S from "./style";
import { PointType } from "types/MyPoint/myPoint.type";

interface PointListProps {
    activeTab: PointType; 
  }
  

const PointList = ({ activeTab }: PointListProps) =>{
    const {data} = useGetMyPointReasonQuery(activeTab);

    return(
        <>
         {
                        data?.data.map((item, index) => (
                            <S.PointHistoryItem key={index}>
                                <S.HistoryTitle>{item.reason.reason}</S.HistoryTitle>
                                <S.HistoryDetails>
                                    <span>{item.teacher.name} · {item.issueAt}</span>
                                    <S.Point negative={item.reason.score < 0}>
                                        {item.reason.score}점
                                    </S.Point>
                                </S.HistoryDetails>
                            </S.PointHistoryItem>
                        ))
                    // ) 
                    // : (
                    //     <S.EmptyState>
                    //         {activeTab === "residence" ? "기숙사" : "학교"} 상벌점 내역이 없습니다.
                    //     </S.EmptyState>
                    // )
            }
        </>
    )
}

export default PointList;