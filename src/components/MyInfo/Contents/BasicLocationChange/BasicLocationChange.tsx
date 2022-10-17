import DayOfTheWeekSelect from "./DayOfTheWeekSelect/DayOfTheWeekSelect";
import MyClassroomSelect from "./MyClassroomSelectBox/MyClassroomSelectBox";
import * as S from "./style";
import pencil_image from "../../../../images/pencil_3d.png";

const BasicLocationChange = () => {
  return (
    <S.BasicLocationChangeWrap>
      <S.BasicLocationChangeTitleWrap>
        <S.PencilImg src={pencil_image} />
        <S.BasicLocationChangeTitleTextWrap>
          기본 위치 수정
        </S.BasicLocationChangeTitleTextWrap>
      </S.BasicLocationChangeTitleWrap>
      <S.BasicLocationMainWrap>
        <S.DayOfTheWeekSelectWrap>
          <DayOfTheWeekSelect />
        </S.DayOfTheWeekSelectWrap>
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
    </S.BasicLocationChangeWrap>
  );
};

export default BasicLocationChange;
