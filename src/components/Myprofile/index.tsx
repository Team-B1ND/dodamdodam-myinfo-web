import { Avatar } from "@b1nd/dds-web";
import * as S from "./style";

const MyProfile = () => {
    return(
        <S.MyProfileBox>
            <S.ProfileText>
                내프로필
            </S.ProfileText>
            <S.Profile>
                <Avatar size="xxl"/>
                <span>이해준</span>
                <span>3학년1반14번</span>
                <S.introductionBox>
                    010-5744-3817
                </S.introductionBox>
            </S.Profile>
        </S.MyProfileBox>
    )
}

export default MyProfile;