import { useState } from "react";
import { useRecoilState } from "recoil";
import { locationChangeModalState } from "../../../store/modal";
import BasicInfo from "./BasicInfo/BasicInfo";
import BasicLocationChange from "./BasicLocationChange/BasicLocationChange";
import BusApply from "./BusApply/BusApply";
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
        <Nav />
        <S.MyInfoContentsWrap>
          <BasicInfo />
          <S.MyInfoContentsTopWrap>
            <MainProfile />
          </S.MyInfoContentsTopWrap>
          <S.MyInfoContentsMiddleWrap>
            <BasicLocationChange />
          </S.MyInfoContentsMiddleWrap>
          <S.MyInfoContentsBottomWrap>
            <BusApply />
          </S.MyInfoContentsBottomWrap>
        </S.MyInfoContentsWrap>
      </S.MyInfoWrap>
    </>
  );
};

export default Contents;
