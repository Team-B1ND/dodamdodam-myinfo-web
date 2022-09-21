import MyClassroomSelect from "./MyClassroomSelectBox/MyClassroomSelectBox";
import * as S from "./style";
const BasicLocationChange = () => {
  return (
    <>
      <S.BasicLocationChangeTitleWrap>
        <S.BasicLocationChangeTitle>기본 위치 수정</S.BasicLocationChangeTitle>
      </S.BasicLocationChangeTitleWrap>
      <S.BasicLocationMainWrap>
        <S.DayOfTheWeekSelectWrap></S.DayOfTheWeekSelectWrap>
        <S.BasicLocationChangeContentsWrap>
          <S.BasicClassroomSelectLineWrap>
            <MyClassroomSelect classTime={"8교시"} />
            <MyClassroomSelect classTime={"9교시"} />
          </S.BasicClassroomSelectLineWrap>
          <S.BasicClassroomSelectLineWrap>
            <MyClassroomSelect classTime={"10교시"} />
            <MyClassroomSelect classTime={"11교시"} />
          </S.BasicClassroomSelectLineWrap>
        </S.BasicLocationChangeContentsWrap>
      </S.BasicLocationMainWrap>
    </>
  );
};

export default BasicLocationChange;
