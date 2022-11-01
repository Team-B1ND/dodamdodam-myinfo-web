import DayOfTheWeekSelect from "./DayOfTheWeekSelect/DayOfTheWeekSelect";
import MyClassroomSelect from "./MyClassroomSelectBox/MyClassroomSelectBox";
import * as S from "./style";
import pencil_image from "../../../../images/pencil_3d.png";
import ComponentTitle from "../../../common/ComponentTitle/ComponentTitle";
import { useRecoilState } from "recoil";
import { basicLocationFor } from "../../../../store/basicLocation";
import useTimeTables from "../../../../hooks/basicLocation/useTimeTables";
import { useEffect } from "react";

const BasicLocationChange = () => {
  const [period, setPeriod] = useRecoilState(basicLocationFor);

  const { timeTablesByWeekday, timeTablesByWeekend } = useTimeTables();

  useEffect(() => {
    console.log(timeTablesByWeekday);
    console.log(timeTablesByWeekend);
  }, [timeTablesByWeekday, timeTablesByWeekend]);

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
            {period !== "weekend" ? (
              <S.BasicLocationChangeContentsWrap>
                <S.BasicClassroomSelectLineWrap>
                  <MyClassroomSelect classTime={timeTablesByWeekday[0].name} />
                  <MyClassroomSelect classTime={timeTablesByWeekday[1].name} />
                </S.BasicClassroomSelectLineWrap>
                <S.BasicClassroomSelectLineWrap>
                  <MyClassroomSelect classTime={timeTablesByWeekday[2].name} />
                  <MyClassroomSelect classTime={timeTablesByWeekday[3].name} />
                </S.BasicClassroomSelectLineWrap>
              </S.BasicLocationChangeContentsWrap>
            ) : (
              <S.BasicLocationChangeContentsWrap>
                <S.BasicClassroomSelectLineWrap>
                  <MyClassroomSelect classTime={timeTablesByWeekend[0].name} />
                  <MyClassroomSelect classTime={timeTablesByWeekend[1].name} />
                </S.BasicClassroomSelectLineWrap>
                <S.BasicClassroomSelectLineWrap>
                  <MyClassroomSelect classTime={timeTablesByWeekend[2].name} />
                  <MyClassroomSelect classTime={timeTablesByWeekend[3].name} />
                </S.BasicClassroomSelectLineWrap>
              </S.BasicLocationChangeContentsWrap>
            )}
          </S.Row>
          {/* <S.BasicClassroomApplyButton>수정</S.BasicClassroomApplyButton> */}
        </S.MainRow>
      </S.BasicLocationMainWrap>
    </S.BasicLocationChangeWrap>
  );
};

export default BasicLocationChange;
