import { useRecoilState } from "recoil";
import { locationChangeModalState } from "../../../../store/modal";
import * as S from "./style";

const MyInfoModify = () => {
  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);
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
        <S.MyInfoModifyBtn>비밀번호 번경</S.MyInfoModifyBtn>
      </S.MyInfoModifyBtnWrap>
    </S.MyInfoModifyWrap>
  );
};

export default MyInfoModify;
