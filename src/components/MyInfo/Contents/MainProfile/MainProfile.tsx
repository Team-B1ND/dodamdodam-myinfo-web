import * as S from "./style";
import default_profile_img from "../../../../images/default_profile.png";
import useMyGradeInfo from "../../../../hooks/profile/useMyGradeInfo";
import { useRecoilState } from "recoil";
import happy_face from "../../../../images/grinning_face_with_smiling_eyes_3d.png";
import {
  EmailModifyModalState,
  locationChangeModalState,
  MyInfoModifyModalState,
  PhoneModifyModalState,
} from "../../../../store/modal";
import USER_IMG from "../../../../images/user.svg";
import SMS_IMG from "../../../../images/sms.svg";
import CALL_IMG from "../../../../images/call.svg";
import MainProfileHr from "./MainProfileHr/MainProfileHr";
import ComponentTitle from "../../../common/ComponentTitle/ComponentTitle";

const MainProfile = () => {
  // const { grade, room, number, name, email, phone } = useMyGradeInfo();
  // const { profileImage } = useMyGradeInfo();
  const { myGradeInfo } = useMyGradeInfo();
  const { classroom, member, number, phone } = myGradeInfo;
  const { profileImage } = member;
  const { grade, room } = classroom;
  const { email, name } = member;

  const [LocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);
  const [isMyInfoModifyModalState, setIsMyInfoModifyModalState] =
    useRecoilState(MyInfoModifyModalState);
  const [isEmailModifyModalState, setIsEmailModifyModalState] = useRecoilState(
    EmailModifyModalState
  );
  const [isPhoneModifyModalState, setIsPhoneModifyModalState] = useRecoilState(
    PhoneModifyModalState
  );

  return (
    <S.MainProfileWrap>
      <ComponentTitle>
        <S.HappyFaceImg src={happy_face} />
        <S.MainProfileText>내 프로필</S.MainProfileText>
      </ComponentTitle>
      <S.MainProfileMainWrap>
        <S.MainProfileMiddleWrap>
          <S.MainProfileMyInfoWrap>
            <S.MainProfileImgWrap>
              <S.MainProfileImg
                src={profileImage === null ? default_profile_img : profileImage}
              />
            </S.MainProfileImgWrap>
            <S.MainProfileInfoBasicWrap>
              <S.MainProfileNameText>{name}</S.MainProfileNameText>
              <S.MainProfileGenerationText>기수</S.MainProfileGenerationText>
            </S.MainProfileInfoBasicWrap>
          </S.MainProfileMyInfoWrap>
          <MainProfileHr />
          <S.MainProfileUserEachInfoWrap>
            <S.MainProfileEachTitle>
              <S.MainProfileTitleImg src={USER_IMG} />
            </S.MainProfileEachTitle>
            <S.MainProfileEachExplain>
              {grade}
              {room}
              {number < 10 ? "0" + number : number}
              {name}
            </S.MainProfileEachExplain>
            {/* <S.MyInfoModifyBtn>수정</S.MyInfoModifyBtn> */}
          </S.MainProfileUserEachInfoWrap>
          <MainProfileHr />
          <S.MainProfileUserEachInfoWrap>
            <S.MainProfileEachTitle>
              <S.MainProfileTitleImg src={SMS_IMG} />
            </S.MainProfileEachTitle>
            <S.MainProfileEachExplain>{email}</S.MainProfileEachExplain>
            <S.MyInfoModifyBtn>수정</S.MyInfoModifyBtn>
          </S.MainProfileUserEachInfoWrap>
          <MainProfileHr />
          <S.MainProfileUserEachInfoWrap>
            <S.MainProfileEachTitle>
              <S.MainProfileTitleImg src={CALL_IMG} />
            </S.MainProfileEachTitle>
            <S.MainProfileEachExplain>
              {phone.substring(0, 3)}-{phone.substring(3, 7)}-
              {phone.substring(7, 11)}
            </S.MainProfileEachExplain>
            <S.MyInfoModifyBtn>수정</S.MyInfoModifyBtn>
          </S.MainProfileUserEachInfoWrap>
        </S.MainProfileMiddleWrap>
      </S.MainProfileMainWrap>
    </S.MainProfileWrap>
  );
};

export default MainProfile;
