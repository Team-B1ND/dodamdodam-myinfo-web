import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { BasicInfoNavbarWrap, BasicInfoWrap } from "./style";

const BasicInfo = () => {
  return (
    <>
      <BasicInfoNavbarWrap>
        <ProfileInfo />
      </BasicInfoNavbarWrap>
      <BasicInfoWrap></BasicInfoWrap>
    </>
  );
};

export default BasicInfo;
