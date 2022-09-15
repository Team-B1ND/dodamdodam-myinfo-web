import Contents from "./MyInfo/Contents/Contents";
import Nav from "./MyInfo/Nav/Nav";

import { Body, MyInfoWrap } from "./style";

const MyInfo = () => {
  return (
    <Body>
      <MyInfoWrap>
        <Nav />
        <Contents />
      </MyInfoWrap>
    </Body>
  );
};

export default MyInfo;
