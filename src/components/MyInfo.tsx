import BasicInfo from "./MyInfo/Contents/BasicInfo/BasicInfo";
import Profile from "./MyInfo/Nav/Profile/Profile";
import Title from "./MyInfo/Nav/Title/Title";
import { Body, MyInfoContentsWrap, MyInfoNavWrap, MyInfoWrap } from "./style";

const MyInfo = () => {
  return (
    <Body>
      <MyInfoWrap>
        <MyInfoNavWrap>
          <Title />
          <Profile />
        </MyInfoNavWrap>
        <MyInfoContentsWrap>
          <BasicInfo />
        </MyInfoContentsWrap>
      </MyInfoWrap>
    </Body>
  );
};

export default MyInfo;
