import { useRecoilState } from "recoil";
import {
  MyInfoModifyModalState,
  PasswordModifyModalState,
} from "../../../store/modal";
import BasicLocationChange from "./BasicLocationChange/BasicLocationChange";
import BusApply from "./BusApply/BusApply";
import MainProfile from "./MainProfile/MainProfile";
import MyInfoModify from "./Header/Header";
import Nav from "./Nav/Nav";

import MyInfoPasswordModal from "./Header/MyInfoPasswordModal/MyInfoPasswordModal";
import * as S from "./style";
import MyInfoModifyModal from "./Header/MyInfoModifyModal/MyInfoModifyModal";

const Contents = () => {
  const [isOpenMyInfoModifyModal, setIsOpenMyInfoModifyModal] = useRecoilState(
    MyInfoModifyModalState
  );
  const [isOpenPasswordModifyModal, setIsOpenPasswordModifyModal] =
    useRecoilState(PasswordModifyModalState);

  return (
    <>
      {isOpenMyInfoModifyModal && <MyInfoModifyModal />}
      {isOpenPasswordModifyModal && <MyInfoPasswordModal />}
      <S.MyInfoWrap>
        <Nav />
        <S.MyInfoContentsWrap>
          <MyInfoModify />
          <S.MyInfoMainContentsWrap>
            <S.MyInfoContentsTopWrap>
              <MainProfile />
            </S.MyInfoContentsTopWrap>
            <S.MyInfoContentsMiddleWrap>
              <BasicLocationChange />
            </S.MyInfoContentsMiddleWrap>
            <S.MyInfoContentsBottomWrap>
              <BusApply />
            </S.MyInfoContentsBottomWrap>
          </S.MyInfoMainContentsWrap>
        </S.MyInfoContentsWrap>
      </S.MyInfoWrap>
    </>
  );
};

export default Contents;
