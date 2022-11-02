import { useRecoilState } from "recoil";
import {
  EmailModifyModalState,
  locationChangeModalState,
  MyInfoModifyModalState,
  PasswordModifyModalState,
  PhoneModifyModalState,
} from "../../../store/modal";
import BasicLocationChange from "./BasicLocationChange/BasicLocationChange";
import BusApply from "./BusApply/BusApply";
import MainProfile from "./MainProfile/MainProfile";
import MyInfoModify from "./MyInfoModify/MyInfoModify";
import Nav from "./Nav/Nav";
import ProfileModifyModal from "./Nav/Profile/MyInfoModifyModal/MyInfoModifyModal";
import MyInfoPasswordModal from "./Nav/Profile/MyInfoPasswordModal/MyInfoPasswordModal";
import * as S from "./style";

const Contents = () => {
  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);
  const [isOpenPasswordModifyModal, setIsOpenPasswordModifyModal] =
    useRecoilState(PasswordModifyModalState);

  // const [isMyInfoModifyModalState, setIsMyInfoModifyModalState] =
  //   useRecoilState(MyInfoModifyModalState);
  // const [isEmailModifyModalState, setIsEmailModifyModalState] = useRecoilState(
  //   EmailModifyModalState
  // );
  // const [isPhoneModifyModalState, setIsPhoneModifyModalState] = useRecoilState(
  //   PhoneModifyModalState
  // );
  return (
    <>
      {isLocationChangeModalState && <ProfileModifyModal />}
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
