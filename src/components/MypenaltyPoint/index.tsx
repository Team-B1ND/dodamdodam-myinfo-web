import { DodamTypography } from "@b1nd/dds-web";
import * as S from "./style";
import { useState } from "react";

const MypenaltyPoint = () => {
    type TabType = "residence" | "school";
    const [activeTab, setActiveTab] = useState<TabType>("residence");
    
    const handleTabClick = (tab: TabType) => {
        setActiveTab(tab);
    };
    
    const residenceData = {
        merit: 5,
        demerit: 0,
        history: [
            {
                title: "기숙사 생활을 위한 봉사활동 5점",
                teacher: "안영서",
                date: "2024-11-06",
                points: 5
            }
        ]
    };
    
    const schoolData = {
        merit: 3,
        demerit: 1,
        history: [
            {
                title: "학교 청소 봉사활동 3점",
                teacher: "김선생",
                date: "2024-11-05",
                points: 3
            },
            {
                title: "지각 벌점",
                teacher: "박선생",
                date: "2024-11-02",
                points: -1
            },
            {
                title: "학교 청소 봉사활동 3점",
                teacher: "김선생",
                date: "2024-11-05",
                points: 3
            },
            {
                title: "지각 벌점",
                teacher: "박선생",
                date: "2024-11-02",
                points: -1
            }
        ]
    };
    
    const activeData = activeTab === "residence" ? residenceData : schoolData;
    
    return(
        <S.MypenaltyPointBox>
            <S.PointHeader>
                <S.BoxTitle>
                    상벌점 조회
                </S.BoxTitle>
                <S.TabContainer>
                    <S.Rtab 
                        active={activeTab === "residence"}
                        onClick={() => handleTabClick("residence")}
                    >
                        기숙사
                    </S.Rtab>
                    <S.Stab 
                        active={activeTab === "school"}
                        onClick={() => handleTabClick("school")}
                    >
                        학교
                    </S.Stab>
                </S.TabContainer>
            </S.PointHeader>
            <S.PointInfo>
                <S.PointRow>
                    <S.PointColumn>
                        <S.PointLabel>상점</S.PointLabel>
                        <S.PointValue positive={true}>{activeData.merit}점</S.PointValue>
                    </S.PointColumn>
                    <S.PointColumn>
                        <S.PointLabel>벌점</S.PointLabel>
                        <S.PointValue negative={true}>{activeData.demerit}점</S.PointValue>
                    </S.PointColumn>
                </S.PointRow>
                
                <S.HistoryContainer>
                    {activeData.history.length > 0 ? (
                        activeData.history.map((item, index) => (
                            <S.PointHistoryItem key={index}>
                                <S.HistoryTitle>{item.title}</S.HistoryTitle>
                                <S.HistoryDetails>
                                    <span>{item.teacher} · {item.date}</span>
                                    <S.Points negative={item.points < 0}>
                                        {item.points > 0 ? item.points : item.points}점
                                    </S.Points>
                                </S.HistoryDetails>
                            </S.PointHistoryItem>
                        ))
                    ) : (
                        <S.EmptyState>
                            {activeTab === "residence" ? "기숙사" : "학교"} 상벌점 내역이 없습니다.
                        </S.EmptyState>
                    )}
                </S.HistoryContainer>
            </S.PointInfo>
        </S.MypenaltyPointBox>
    );
};

export default MypenaltyPoint;