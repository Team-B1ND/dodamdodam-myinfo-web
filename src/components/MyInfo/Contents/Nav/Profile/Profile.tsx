import * as S from "./style";
import defaultProfileImg from "../../../../../images/default_profile.png";
import useMyGradeInfo from "../../../../../hooks/profile/useMyGradeInfo";
import { useRecoilState } from "recoil";
import { profileInfo } from "../../../../../store/profile";

const Profile = () => {
  const [tempProfileInfo, setTempProfileInfo] = useRecoilState(profileInfo);
  const {} = useMyGradeInfo();
  const { member, classroom, number } = tempProfileInfo;
  const { profileImage, name } = member;
  const { grade, room } = classroom;

  return (
    <S.ProfileWrap>
      <S.ProfileImgWrap>
        <S.ProfileImg src={profileImage ? profileImage : defaultProfileImg} />
        <S.ProfileNameText>{name}</S.ProfileNameText>
        <S.ProfileBasicInfoText>
          {grade}학년 {room}반 {number}번
        </S.ProfileBasicInfoText>
      </S.ProfileImgWrap>
    </S.ProfileWrap>
  );
};

export default Profile;
