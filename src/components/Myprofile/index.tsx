import { Avatar, DodamFilledButton } from "@b1nd/dds-web";
import * as S from "./style";
import { useGetProfileQuery } from "queries/Profile/profile.query";

const MyProfile = () => {
    const {data} = useGetProfileQuery();
    
    return(
        <S.MyProfileBox>
            <S.BoxTitle>
                내프로필
            </S.BoxTitle>
            <S.Profile>
                <Avatar size="xxl"/>
                <span>{data?.data!.name}</span>
                <span>{data?.data!.student?.grade}학년 {data?.data!.student?.room}반 {data?.data!.student?.number}번</span>
                <S.introductionBox>
                    <span>{data?.data!.phone.substring(0, 3)}-{data?.data!.phone.substring(3, 7)}-{data?.data!.phone.substring(7, 11)}</span>
                </S.introductionBox>
                <S.introductionBox>
                    <span>{data?.data!.email}</span>
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