import * as S from "./style";
import defaultProfileImg from "../../../../../images/default_profile.png";
import useMyGradeInfo from "../../../../../hooks/profile/useMyGradeInfo";
import { useRecoilValue } from "recoil";
import { profileInfo } from "../../../../../store/profile";

const Profile = () => {
  const tempProfileInfo = useRecoilValue(profileInfo);
  useMyGradeInfo();

  const { profileImage, name, student } = tempProfileInfo;

  return (
    <S.ProfileWrap>
      <S.ProfileImgWrap>
        <S.ProfileImg src={profileImage ? profileImage : defaultProfileImg} />
        <S.ProfileNameText>{name}</S.ProfileNameText>
        <S.ProfileBasicInfoText>
          {student?.grade || 0}학년 {student?.room || 0}반{" "}
          {student?.number || 0}번
        </S.ProfileBasicInfoText>
      </S.ProfileImgWrap>
    </S.ProfileWrap>
  );
};

export default Profile;
