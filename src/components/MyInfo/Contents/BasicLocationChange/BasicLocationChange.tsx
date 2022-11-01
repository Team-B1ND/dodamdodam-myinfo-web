import DayOfTheWeekSelect from "./DayOfTheWeekSelect/DayOfTheWeekSelect";
import MyClassroomSelect from "./MyClassroomSelectBox/MyClassroomSelectBox";
import * as S from "./style";
import pencil_image from "../../../../images/pencil_3d.png";
import ComponentTitle from "../../../common/ComponentTitle/ComponentTitle";

const BasicLocationChange = () => {
  return (
    <S.BasicLocationChangeWrap>
      <ComponentTitle>
        <S.PencilImg src={pencil_image} />
        <S.BasicLocationChangeTitleText>
          기본 위치 수정
        </S.BasicLocationChangeTitleText>
        <S.ApplyButton>수정</S.ApplyButton>
      </ComponentTitle>
      <S.BasicLocationMainWrap>
        <S.MainRow>
          <S.Row>
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
          </S.Row>
          {/* <S.BasicClassroomApplyButton>수정</S.BasicClassroomApplyButton> */}
        </S.MainRow>
      </S.BasicLocationMainWrap>
    </S.BasicLocationChangeWrap>
  );
};

export default BasicLocationChange;
