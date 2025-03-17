import { useRecoilState } from "recoil";
import {
  MyInfoModifyModalState,
  PasswordModifyModalState,
} from "stores/modal";
import * as S from "./style";

const Header = () => {
  const [, setIsOpenMyInfoModifyModal] = useRecoilState(
    MyInfoModifyModalState
  );

  const [, setIsOpenPasswordModifyModal] =
    useRecoilState(PasswordModifyModalState);
  return (
    <S.MyInfoModifyWrap>
      <S.MyInfoModifyBtnWrap>
        <S.MyInfoModifyBtn
          onClick={() => {
            setIsOpenMyInfoModifyModal(true);
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

export default Header;
