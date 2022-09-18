import * as S from "./style";
import defaultProfileImg from "../../../../../images/default_profile.png";

const Profile = () => {
  return (
    <S.ProfileWrap>
      <S.ProfileImgWrap>
        <S.ProfileImg src={defaultProfileImg} />
        <S.ProfileNameText>기준</S.ProfileNameText>
        <S.ProfileBasicInfoText>2학년 3반 4번</S.ProfileBasicInfoText>
      </S.ProfileImgWrap>
    </S.ProfileWrap>
  );
};

export default Profile;
