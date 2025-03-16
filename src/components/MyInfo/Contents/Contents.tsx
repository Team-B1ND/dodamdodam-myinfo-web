import { useRecoilValue } from "recoil";
import {
  MyInfoModifyModalState,
  PasswordModifyModalState,
} from "stores/modal";
import MainProfile from "./MainProfile/MainProfile";
import MyInfoModify from "./Header/Header";
import Nav from "./Nav/Nav";
import MyInfoPasswordModal from "./Header/MyInfoPasswordModal/MyInfoPasswordModal";
import * as S from "./style";
import MyInfoModifyModal from "./Header/MyInfoModifyModal/MyInfoModifyModal";

const Contents = () => {
  const isOpenMyInfoModifyModal = useRecoilValue(MyInfoModifyModalState);
  const isOpenPasswordModifyModal = useRecoilValue(PasswordModifyModalState);

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
              {/* <BusApply /> */}
            </S.MyInfoContentsMiddleWrap>
          </S.MyInfoMainContentsWrap>
        </S.MyInfoContentsWrap>
      </S.MyInfoWrap>
    </>
  );
};

export default Contents;
