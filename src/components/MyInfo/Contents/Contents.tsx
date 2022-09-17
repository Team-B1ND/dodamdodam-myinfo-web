import BasicInfo from "./BasicInfo/BasicInfo";
import MainProfile from "./MainProfile/MainProfile";
import MyPoint from "./MyPoint/MyPoint";
import Nav from "./Nav/Nav";
import { MyInfoContentsWrap, MyInfoWrap } from "./style";

const Contents = () => {
  return (
    <MyInfoWrap>
      <Nav />
      <MyInfoContentsWrap>
        <BasicInfo />
        <MainProfile />
        <MyPoint />
      </MyInfoContentsWrap>
    </MyInfoWrap>
  );
};

export default Contents;
