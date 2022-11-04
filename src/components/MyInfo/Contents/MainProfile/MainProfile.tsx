import * as S from "./style";
import defaultProfileImg from "../../../../images/default_profile.png";
import useMyGradeInfo from "../../../../hooks/profile/useMyGradeInfo";
import { useRecoilState } from "recoil";
import happy_face from "../../../../images/grinning_face_with_smiling_eyes_3d.png";
import { locationChangeModalState } from "../../../../store/modal";
import USER_IMG from "../../../../images/user.svg";
import SMS_IMG from "../../../../images/sms.svg";
import CALL_IMG from "../../../../images/call.svg";
import MainProfileHr from "./MainProfileHr/MainProfileHr";
import ComponentTitle from "../../../common/ComponentTitle/ComponentTitle";
import { profileInfo } from "../../../../store/profile";

const MainProfile = () => {
  const [tempProfileInfo, setTempProfileInfo] = useRecoilState(profileInfo);
  const { classroom, member, number, phone } = tempProfileInfo;
  const { profileImage, email, name } = member;
  const { grade, room } = classroom;

  const [LocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);

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
                src={profileImage ? profileImage : defaultProfileImg}
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
          </S.MainProfileUserEachInfoWrap>
          <MainProfileHr />
          <S.MainProfileUserEachInfoWrap>
            <S.MainProfileEachTitle>
              <S.MainProfileTitleImg src={SMS_IMG} />
            </S.MainProfileEachTitle>
            <S.MainProfileEachExplain>{email}</S.MainProfileEachExplain>
            <S.MyInfoModifyBtn
              onClick={() => setIsLocationChangeModalState(true)}
            >
              수정
            </S.MyInfoModifyBtn>
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
            <S.MyInfoModifyBtn
              onClick={() => setIsLocationChangeModalState(true)}
            >
              수정
            </S.MyInfoModifyBtn>
          </S.MainProfileUserEachInfoWrap>
        </S.MainProfileMiddleWrap>
      </S.MainProfileMainWrap>
    </S.MainProfileWrap>
  );
};

export default MainProfile;
