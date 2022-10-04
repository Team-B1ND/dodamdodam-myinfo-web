import { useState } from "react";
import { useRecoilState } from "recoil";
import { locationChangeModalState } from "../../../store/locationChangeModalState";
import BasicInfo from "./BasicInfo/BasicInfo";
import BasicLocationChange from "./BasicLocationChange/BasicLocationChange";
import MainProfile from "./MainProfile/MainProfile";
import MyPoint from "./MyPoint/MyPoint";
import Nav from "./Nav/Nav";
import ProfileModify from "./Nav/Profile/ProfileModify/ProfileModify";
import * as S from "./style";

const Contents = () => {
  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);
  return (
    <>
      {isLocationChangeModalState && <ProfileModify />}
      <S.MyInfoWrap>
        {/* <S.MyInfoNavWrap> */}
        <Nav />
        {/* </S.MyInfoNavWrap> */}

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
    </>
  );
};

export default Contents;
