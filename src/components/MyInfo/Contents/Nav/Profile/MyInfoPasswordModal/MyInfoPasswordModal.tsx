import { useRecoilState } from "recoil";
import usePasswordChange from "../../../../../../hooks/profile/usePasswrodChange";
import { PasswordModifyModalState } from "../../../../../../store/modal";
import {
  MyInfoPasswordModalCloseButton,
  MyInfoPasswordModalCloseIcon,
  MyInfoPasswordModalContainer,
  MyInfoPasswordModalInput,
  MyInfoPasswordModalInputTitle,
  MyInfoPasswordModalInputWrap,
  MyInfoPasswordModalMiddleWrap,
  MyInfoPasswordModalOverlay,
  MyInfoPasswordModalSubmitButton,
  MyInfoPasswordModalTopDescription,
  MyInfoPasswordModalTopTitle,
  MyInfoPasswordModalTopWrap,
} from "./style";
import { MdOutlineClose } from "react-icons/md";

const MyInfoPasswordModal = () => {
  const [isOpenPasswordModifyModal, setIsOpenPasswordModifyModal] =
    useRecoilState(PasswordModifyModalState);

  const { pwData, onChangePassword, onSubmitPassword } = usePasswordChange();

  return (
    <>
      <MyInfoPasswordModalOverlay
        onClick={() => setIsOpenPasswordModifyModal(false)}
      />
      <MyInfoPasswordModalContainer>
        <MyInfoPasswordModalCloseButton
          onClick={() => setIsOpenPasswordModifyModal(false)}
        >
          <MyInfoPasswordModalCloseIcon>
            <MdOutlineClose />
          </MyInfoPasswordModalCloseIcon>
        </MyInfoPasswordModalCloseButton>
        <MyInfoPasswordModalTopWrap>
          <MyInfoPasswordModalTopTitle>
            비밀번호 변경
          </MyInfoPasswordModalTopTitle>
          <MyInfoPasswordModalTopDescription>
            새롭게 비밀번호를 설정할 수 있습니다.
          </MyInfoPasswordModalTopDescription>
        </MyInfoPasswordModalTopWrap>
        <MyInfoPasswordModalMiddleWrap>
          <MyInfoPasswordModalInputWrap>
            <MyInfoPasswordModalInputTitle>
              현재 비밀번호
            </MyInfoPasswordModalInputTitle>
            <MyInfoPasswordModalInput
              placeholder="현재 비밀번호를 적어주세요"
              value={pwData.pw}
              onChange={onChangePassword}
              name={"pw"}
              type="password"
            />
          </MyInfoPasswordModalInputWrap>
          <MyInfoPasswordModalInputWrap>
            <MyInfoPasswordModalInputTitle>
              새로운 비밀번호
            </MyInfoPasswordModalInputTitle>
            <MyInfoPasswordModalInput
              placeholder="새로운 비밀번호를 적어주세요"
              value={pwData.newPw}
              onChange={onChangePassword}
              name={"newPw"}
              type="password"
            />
          </MyInfoPasswordModalInputWrap>
        </MyInfoPasswordModalMiddleWrap>
        <MyInfoPasswordModalSubmitButton onClick={onSubmitPassword}>
          변경
        </MyInfoPasswordModalSubmitButton>
      </MyInfoPasswordModalContainer>
    </>
  );
};

export default MyInfoPasswordModal;
