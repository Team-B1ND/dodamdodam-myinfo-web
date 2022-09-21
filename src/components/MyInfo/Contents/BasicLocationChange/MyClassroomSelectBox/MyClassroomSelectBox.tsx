import * as S from "./style";

interface classTime {
  classTime: string;
}

const MyClassroomSelectBox = ({ classTime }: classTime) => {
  return (
    <S.EachClassroomBoxWrap>
      <S.BasicClassroomSelectTextWrap>
        <S.ClassTimeText>{classTime}</S.ClassTimeText>
      </S.BasicClassroomSelectTextWrap>
      <S.BasicClassroomSelect name="myClassroom" defaultValue="none">
        <option value="none">선택해주세요</option>
        <option>고르던가1</option>
        <option>고르던가2</option>
        <option>고르던가3</option>
        <option>고르던가4</option>
        <option>고르던가5</option>
      </S.BasicClassroomSelect>
    </S.EachClassroomBoxWrap>
  );
};

export default MyClassroomSelectBox;
