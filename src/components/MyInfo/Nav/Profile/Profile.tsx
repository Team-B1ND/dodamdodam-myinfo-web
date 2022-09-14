import {
  ProfileBasicInfoText,
  ProfileImg,
  ProfileImgWrap,
  ProfileNameText,
  ProfileWrap,
} from "./style";
import defaultProfileImg from "../../../../images/default_profile.png";

const Profile = () => {
  return (
    <ProfileWrap>
      <ProfileImgWrap>
        <ProfileImg src={defaultProfileImg} />
        <ProfileNameText>기준</ProfileNameText>
        <ProfileBasicInfoText>2학년 3반 4번</ProfileBasicInfoText>
      </ProfileImgWrap>
    </ProfileWrap>
  );
};

export default Profile;
