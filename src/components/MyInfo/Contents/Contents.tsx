import BasicInfo from "./BasicInfo/BasicInfo";
// import MainProfile from "./MainProfile/MainProfile";
import MyPoint from "./MyPoint/MyPoint";
import { MyInfoContentsWrap } from "./style";

const Contents = () => {
  return (
    <MyInfoContentsWrap>
      <BasicInfo />
      {/* <MainProfile /> */}
      <MyPoint />
    </MyInfoContentsWrap>
  );
};

export default Contents;
