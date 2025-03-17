import * as S from "./style";

import useMyGradeInfo from "hooks/Profile/useMyGradeInfo";
import { useRecoilValue } from "recoil";
import { profileInfo } from "stores/profile";

const Profile = () => {
  const tempProfileInfo = useRecoilValue(profileInfo);
  useMyGradeInfo();

  const { profileImage, name, student } = tempProfileInfo;

  return (
    <S.ProfileWrap>
      <S.ProfileImgWrap>
        <S.ProfileImg src={profileImage ? profileImage : ""} />
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
