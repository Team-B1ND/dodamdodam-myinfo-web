import MyProfile from "components/Myprofile";
import MypenaltyPoint from "components/MypenaltyPoint";
import ApplicationBus from "components/ApplicationBus";
import GoingOutInquiry from "components/GoingOutInquiry";
import * as S from "./style";

const MyinfoPage = () => {
    return(
        <S.MyinfoMain>
            <S.LeftColumn>
                <S.ProfileContainer>
                    <MyProfile/>
                </S.ProfileContainer>
                <S.BusContainer>
                    <ApplicationBus/>
                </S.BusContainer>
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