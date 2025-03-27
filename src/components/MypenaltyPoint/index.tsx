
import { useGetMyPointQuery } from "queries/Point/point.query";
import * as S from "./style";
import { Suspense, useState } from "react";
import { PointType } from "types/MyPoint/myPoint.type";
import { DodamErrorBoundary } from "@b1nd/dds-web";
import PointList from "./PointList";

const MypenaltyPoint = () => {

    const [activeTab, setActiveTab] = useState<PointType>("DORMITORY");
    
    
    const { data, isLoading } = useGetMyPointQuery({ type: activeTab });
    const pointData = data?.data ?? { bonus: 0, minus: 0 };

    

    const handleTabClick = (tab: PointType) => {
        setActiveTab(tab);
    };
   

  
    

    
    return(
        <S.MypenaltyPointBox>
            <S.PointHeader>
                <S.BoxTitle>
                    상벌점 조회
                </S.BoxTitle>
                <S.TabContainer>
                    <S.Rtab 
                        active={activeTab === "DORMITORY"}
                        onClick={() => handleTabClick("DORMITORY")}
                    >
                        기숙사
                    </S.Rtab>
                    <S.Stab 
                        active={activeTab === "SCHOOL"}
                        onClick={() => handleTabClick("SCHOOL")}
                    >
                        학교
                    </S.Stab>
                </S.TabContainer>
            </S.PointHeader>
            <S.PointInfo>
                <S.PointRow>
                {isLoading ? "로딩중..." : (
                    <>
                    <S.PointColumn type="상점">
                        <span>상점</span>
                        <span >{pointData.bonus!}점</span>
                    </S.PointColumn>
                    <S.PointColumn type="벌점">
                        <span>벌점</span>
                        <span>{pointData.minus!}점</span>
                    </S.PointColumn>
                    </>
                    )}
                </S.PointRow>
                
                <S.HistoryContainer>
                   <DodamErrorBoundary text="에러발생" showButton={true}>
                        <Suspense fallback={<>로딩중...</>}>
                            <PointList activeTab={activeTab}/>
                        </Suspense>
                   </DodamErrorBoundary>
                </S.HistoryContainer>
            </S.PointInfo>
        </S.MypenaltyPointBox>
    );
};

export default MypenaltyPoint;