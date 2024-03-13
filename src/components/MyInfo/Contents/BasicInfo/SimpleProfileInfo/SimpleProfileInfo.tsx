import * as S from "./style";
import default_profile from "../../../../../images/default_profile.png";
import { useRecoilValue } from "recoil";
import { profileInfo } from "../../../../../store/profile";

const SimpleProfileInfo = () => {
  const profileInfoData = useRecoilValue(profileInfo);

  const { profileImage, name } = profileInfoData;

  return (
    <>
      <S.ProfileInfoWrap>
        <S.ProfileInfoImg src={profileImage ? profileImage : default_profile} />
        <S.ProfileInfoName>{name} 학생</S.ProfileInfoName>
      </S.ProfileInfoWrap>
    </>
  );
};

export default SimpleProfileInfo;
