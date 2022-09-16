import { ProfileInfoImg, ProfileInfoName, ProfileInfoWrap } from "./style";
import default_profile from "../../../../../images/default_profile.png";

const SimpleProfileInfo = () => {
  return (
    <>
      <ProfileInfoWrap>
        <ProfileInfoImg src={default_profile} />
        <ProfileInfoName>기준 학생</ProfileInfoName>
      </ProfileInfoWrap>
    </>
  );
};

export default SimpleProfileInfo;
