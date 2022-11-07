import { useRecoilState } from "recoil";
import {
  locationChangeModalState,
  PasswordModifyModalState,
} from "../../../../store/modal";
import * as S from "./style";

const MyInfoModify = () => {
  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);

  const [isOpenPasswordModifyModal, setIsOpenPasswordModifyModal] =
    useRecoilState(PasswordModifyModalState);
  return (
    <S.MyInfoModifyWrap>
      <S.MyInfoModifyBtnWrap>
        <S.MyInfoModifyBtn
          onClick={() => {
            setIsLocationChangeModalState(true);
          }}
        >
          수정
        </S.MyInfoModifyBtn>
        <S.MyInfoModifyBtn onClick={() => setIsOpenPasswordModifyModal(true)}>
          비밀번호 변경
        </S.MyInfoModifyBtn>
      </S.MyInfoModifyBtnWrap>
    </S.MyInfoModifyWrap>
  );
};

export default MyInfoModify;
