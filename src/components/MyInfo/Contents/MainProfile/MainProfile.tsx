import * as S from "./style";
import default_profile_img from "../../../../images/default_profile.png";

const MainProfile = () => {
  return (
    <S.MainProfileWrap>
      <S.MainProfileTextWrap>
        <S.MainProfileText>내 프로필</S.MainProfileText>
      </S.MainProfileTextWrap>
      <S.MainProfileMiddleWrap>
        <S.MainProfileImgWrap>
          <S.MainProfileImg src={default_profile_img} />
        </S.MainProfileImgWrap>

        <S.MainProfileUserInfoWrap>
          <S.MainProfileUserEachInfoWrap>
            <S.MainProfileInfoTextExplain>
              학번이름
            </S.MainProfileInfoTextExplain>
            <S.MainProfileInfoText>2304기준</S.MainProfileInfoText>
          </S.MainProfileUserEachInfoWrap>
          <S.MainProfileUserEachInfoWrap>
            <S.MainProfileInfoTextExplain>이메일</S.MainProfileInfoTextExplain>
            <S.MainProfileInfoText>june0623@dgsw.hs.kr</S.MainProfileInfoText>
          </S.MainProfileUserEachInfoWrap>
          <S.MainProfileUserEachInfoWrap>
            <S.MainProfileInfoTextExplain>
              전화번호
            </S.MainProfileInfoTextExplain>
            <S.MainProfileInfoText>010-9424-9415</S.MainProfileInfoText>
          </S.MainProfileUserEachInfoWrap>
        </S.MainProfileUserInfoWrap>
      </S.MainProfileMiddleWrap>
      <S.MainProfileButtonWrap>
        <S.UpdateProfileInfoBtn>수정</S.UpdateProfileInfoBtn>
        <S.UpdatePassWordBtn>비밀번호 변경</S.UpdatePassWordBtn>
      </S.MainProfileButtonWrap>
    </S.MainProfileWrap>
  );
};

export default MainProfile;
