import { useRecoilState } from "recoil";
import {
  EmailModifyModalState,
  locationChangeModalState,
  MyInfoModifyModalState,
  PhoneModifyModalState,
} from "../../../store/modal";
import BasicLocationChange from "./BasicLocationChange/BasicLocationChange";
import BusApply from "./BusApply/BusApply";
import MainProfile from "./MainProfile/MainProfile";
import MyInfoModify from "./MyInfoModify/MyInfoModify";
import Nav from "./Nav/Nav";
import ProfileModifyModal from "./Nav/Profile/MyInfoModifyModal/MyInfoModifyModal";
import * as S from "./style";

const Contents = () => {
  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);
  const [isMyInfoModifyModalState, setIsMyInfoModifyModalState] =
    useRecoilState(MyInfoModifyModalState);
  const [isEmailModifyModalState, setIsEmailModifyModalState] = useRecoilState(
    EmailModifyModalState
  );
  const [isPhoneModifyModalState, setIsPhoneModifyModalState] = useRecoilState(
    PhoneModifyModalState
  );
  return (
    <>
      {isLocationChangeModalState && <ProfileModifyModal />}
      <S.MyInfoWrap>
        <Nav />
        <S.MyInfoContentsWrap>
          {/* <BasicInfo /> */}
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
