import BasicInfo from "./BasicInfo/BasicInfo";
import MainProfile from "./MainProfile/MainProfile";
import MyPoint from "./MyPoint/MyPoint";
import Nav from "./Nav/Nav";
import * as S from "./style";

const Contents = () => {
  return (
    <S.MyInfoWrap>
      <Nav />
      <S.MyInfoContentsWrap>
        <BasicInfo />
        <MainProfile />
        <MyPoint />
      </S.MyInfoContentsWrap>
    </S.MyInfoWrap>
  );
};

export default Contents;
