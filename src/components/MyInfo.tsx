import { Body, MyInfoContentsWrap, MyInfoNavWrap, MyInfoWrap } from "./style";

const MyInfo = () => {
  return (
    <Body>
      <MyInfoWrap>
        <MyInfoNavWrap></MyInfoNavWrap>
        <MyInfoContentsWrap></MyInfoContentsWrap>
      </MyInfoWrap>
    </Body>
  );
};

export default MyInfo;
