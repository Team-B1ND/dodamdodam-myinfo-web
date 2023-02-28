import * as S from "./style";
import { BiPlus } from "react-icons/bi";
import { Dispatch, SetStateAction } from "react";
import MyInfoClassSelect from "./MyInfoClassSelect/MyInfoClassSelect";
import MyInfoClassSelectList from "./MyInfoClassModifySelectList/MyInfoClassSelectList";
import useModifyStudentInfo from "../../../../../hooks/profile/useModifyStudentInfo";

interface Props {
  setClassIsModifying: Dispatch<SetStateAction<boolean>>;
}

const MyInfoClassModifyModal = ({ setClassIsModifying }: Props) => {
  const onClose = () => setClassIsModifying(false);

  const { onChangeStudentInfo, onModifyStudentInfo } = useModifyStudentInfo();

  return (
    <>
      <S.Background onClick={onClose} />
      <S.Container>
        <S.Title>학반 수정</S.Title>
        <MyInfoClassSelectList onChnageSelect={onChangeStudentInfo} />
        <S.BottomButtonWrap>
          <S.SubmitButton onClick={onModifyStudentInfo}>수정</S.SubmitButton>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
        </S.BottomButtonWrap>
      </S.Container>
    </>
  );
};

export default MyInfoClassModifyModal;
