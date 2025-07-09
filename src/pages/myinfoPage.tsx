import MyProfile from "components/Myprofile";
import MypenaltyPoint from "components/MypenaltyPoint";
import ApplicationBus from "components/ApplicationBus";
import GoingOutInquiry from "components/GoingOutInquiry";
import * as S from "./style";
import { Suspense } from "react";
import { DodamErrorBoundary } from "@b1nd/dds-web";
import BusDataFallback from "components/Common/Skeleton/BusData";

const MyinfoPage = () => {
    return(
        <S.MyinfoMain>
            <S.LeftColumn>
                <S.ProfileContainer>
                    <MyProfile/>
                </S.ProfileContainer>
                <DodamErrorBoundary text="데이터 로딩 실패" showButton>
                    <Suspense fallback={<BusDataFallback/>}>
                        <S.BusContainer>
                            <ApplicationBus/>
                        </S.BusContainer>
                    </Suspense>
                </DodamErrorBoundary>
            </S.LeftColumn>
            <S.RightColumn>
                <S.PointsContainer>
                    <MypenaltyPoint/>
                </S.PointsContainer>
                <S.OutingContainer>
                    <GoingOutInquiry/>
                </S.OutingContainer>
            </S.RightColumn>
        </S.MyinfoMain>
    )
}

export default MyinfoPage;