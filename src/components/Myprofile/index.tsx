import { Avatar, DodamFilledButton } from "@b1nd/dds-web";
import * as S from "./style";

const MyProfile = () => {
    return(
        <S.MyProfileBox>
            <S.BoxTitle>
                내프로필
            </S.BoxTitle>
            <S.Profile>
                <Avatar size="xxl"/>
                <span>이해준</span>
                <span>3학년1반14번</span>
                <S.introductionBox>
                    <span>010-5744-3817</span>
                </S.introductionBox>
                <S.introductionBox>
                    <span>lerb5253@dgsw.hs.kr</span>
                </S.introductionBox>
                <S.ButtonContainer>
                    <DodamFilledButton
                        size={"Large"}
                        text="비밀번호 변경"
                        textTheme="staticWhite"
                        typography={["Body2", "Bold"]}
                        customStyle={{minWidth:"45px", height:"45px"}}
                    />
                    <DodamFilledButton
                        size={"Large"}
                        text="프로필 수정"
                        textTheme="staticWhite"
                        typography={["Body2", "Bold"]}
                        customStyle={{minWidth:"45px", height:"45px"}}
                    />
                </S.ButtonContainer>
            </S.Profile>
        </S.MyProfileBox>
    )
}

export default MyProfile;