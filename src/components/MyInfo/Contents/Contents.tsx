import BasicInfo from "./BasicInfo/BasicInfo";
import BasicLocationChange from "./BasicLocationChange/BasicLocationChange";
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
        <S.MyInfoContentsMiddleWrap>
          <MyPoint />
        </S.MyInfoContentsMiddleWrap>
        <S.MyInfoContentsBottomWrap>
          <BasicLocationChange />
        </S.MyInfoContentsBottomWrap>
      </S.MyInfoContentsWrap>
    </S.MyInfoWrap>
  );
};

export default Contents;
