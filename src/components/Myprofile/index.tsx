import { Avatar, DodamFilledButton } from "@b1nd/dds-web";
import * as S from "./style";
import { useGetProfileQuery } from "queries/Profile/profile.query";
import ChangePwModal from "./ChangePwModal";
import { useProfile } from "hooks/Profile/useProfile";
import ChangeProfile from "./ChangeProfile";

const MyProfile = () => {
    const {data} = useGetProfileQuery();
    const { openModal, setOpenModal, closeModal } = useProfile();
    
    return(
        <>
        
        <S.MyProfileBox>
            <S.BoxTitle>
                내프로필
            </S.BoxTitle>
            <S.Profile>
            {data?.data.profileImage ? (
              <S.ProfileImg src={data?.data.profileImage} alt="" />
            ) : (
              <Avatar size="xxl" color="staticWhite" />
            )}
              
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
                        onClick={()=>setOpenModal((prev) => ({ ...prev, password: true }))}
                    />
                    <DodamFilledButton
                        size={"Large"}
                        text="프로필 수정"
                        textTheme="staticWhite"
                        typography={["Body2", "Bold"]}
                        customStyle={{minWidth:"45px", height:"45px"}}
                        onClick={()=>setOpenModal((prev) => ({ ...prev, profile: true }))}
                    />
                </S.ButtonContainer>
            </S.Profile>
           
        </S.MyProfileBox>
        <ChangeProfile
                isOpen={openModal.profile}
                handleSet={closeModal}
                user={data?.data!}
            />
             <ChangePwModal
                isOpen={openModal.password}
                handleSet={closeModal}
      
            />
        </>
    )
}

export default MyProfile;