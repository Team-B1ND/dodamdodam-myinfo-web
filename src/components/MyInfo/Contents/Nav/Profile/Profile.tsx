import * as S from "./style";
import defaultProfileImg from "../../../../../images/default_profile.png";
import useMyGradeInfo from "../../../../../hooks/profile/useMyGradeInfo";

const Profile = () => {
  const { grade, room, number, name, profileImage } = useMyGradeInfo();
  console.log(profileImage);
  return (
    <S.ProfileWrap>
      <S.ProfileImgWrap>
        <S.ProfileImg src={profileImage ? profileImage : defaultProfileImg} />
        {/* <S.ProfileImg src={defaultProfileImg} /> */}

        <S.ProfileNameText>{name}</S.ProfileNameText>
        <S.ProfileBasicInfoText>
          {grade}학년 {room}반 {number}번
        </S.ProfileBasicInfoText>
      </S.ProfileImgWrap>
    </S.ProfileWrap>
  );
};

export default Profile;
