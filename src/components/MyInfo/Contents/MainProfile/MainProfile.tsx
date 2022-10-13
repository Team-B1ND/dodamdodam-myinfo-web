import * as S from "./style";
import default_profile_img from "../../../../images/default_profile.png";
import useMyGradeInfo from "../../../../hooks/profile/useMyGradeInfo";
import { useRecoilState } from "recoil";
import { locationChangeModalState } from "../../../../store/locationChangeModalState";
import happy_face from "../../../../images/grinning_face_with_smiling_eyes_3d.png";

const MainProfile = () => {
  // const { grade, room, number, name, email, phone } = useMyGradeInfo();
  // const { profileImage } = useMyGradeInfo();
  const myGradeInfo = useMyGradeInfo();
  const { classroom, member, number, phone } = myGradeInfo;
  const { profileImage } = member;
  const { grade, room } = classroom;
  const { email, name } = member;

  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);
  return (
    <S.MainProfileWrap>
      <S.MainProfileTextWrap>
        <S.HappyFaceImg src={happy_face} />
        <S.MainProfileText>내 프로필</S.MainProfileText>
      </S.MainProfileTextWrap>
      <S.MainProfileMainWrap>
        <S.MainProfileMiddleWrap>
          <S.MainProfileImgWrap>
            <S.MainProfileImg
              src={profileImage ? profileImage : default_profile_img}
            />
          </S.MainProfileImgWrap>

          <S.MainProfileUserInfoWrap>
            <S.MainProfileUserEachInfoWrap>
              <S.MainProfileInfoTextExplain>
                학번이름
              </S.MainProfileInfoTextExplain>
              <S.MainProfileInfoText>
                {grade}
                {room}
                {number}
                {name}
              </S.MainProfileInfoText>
            </S.MainProfileUserEachInfoWrap>
            <S.MainProfileUserEachInfoWrap>
              <S.MainProfileInfoTextExplain>
                이메일
              </S.MainProfileInfoTextExplain>
              <S.MainProfileInfoText>{email}</S.MainProfileInfoText>
            </S.MainProfileUserEachInfoWrap>
            <S.MainProfileUserEachInfoWrap>
              <S.MainProfileInfoTextExplain>
                전화번호
              </S.MainProfileInfoTextExplain>
              <S.MainProfileInfoText>{phone}</S.MainProfileInfoText>
            </S.MainProfileUserEachInfoWrap>
          </S.MainProfileUserInfoWrap>
        </S.MainProfileMiddleWrap>
        <S.MainProfileButtonWrap>
          <S.UpdateProfileInfoBtn
            onClick={() => {
              setIsLocationChangeModalState(true);
            }}
          >
            수정
          </S.UpdateProfileInfoBtn>
          <S.UpdatePassWordBtn>비밀번호 변경</S.UpdatePassWordBtn>
        </S.MainProfileButtonWrap>
      </S.MainProfileMainWrap>
    </S.MainProfileWrap>
  );
};

export default MainProfile;
