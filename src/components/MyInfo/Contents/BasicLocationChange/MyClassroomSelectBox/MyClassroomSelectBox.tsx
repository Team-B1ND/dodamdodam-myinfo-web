import useClassroom from "../../../../../hooks/classroom/useClassroom";
import * as S from "./style";

interface classTime {
  classTime: string;
}

const MyClassroomSelectBox = ({ classTime }: classTime) => {
  const { classroomList } = useClassroom();

  return (
    <S.EachClassroomBoxWrap>
      <S.BasicClassroomSelectTextWrap>
        <S.ClassTimeText>{classTime}</S.ClassTimeText>
      </S.BasicClassroomSelectTextWrap>
      <S.BasicClassroomSelect name="myClassroom" defaultValue="none">
        <option value="none">선택해주세요</option>
        {classroomList.map((classroom) => {
          return <option value={`${classroom.name}`}>{classroom.name}</option>;
        })}
      </S.BasicClassroomSelect>
    </S.EachClassroomBoxWrap>
  );
};

export default MyClassroomSelectBox;
