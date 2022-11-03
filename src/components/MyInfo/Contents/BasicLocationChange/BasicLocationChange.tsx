import DayOfTheWeekSelect from "./DayOfTheWeekSelect/DayOfTheWeekSelect";
import MyClassroomSelect from "./MyClassroomSelectBox/MyClassroomSelectBox";
import * as S from "./style";
import pencil_image from "../../../../images/pencil_3d.png";
import ComponentTitle from "../../../common/ComponentTitle/ComponentTitle";
import useDefaultStudyRoom from "../../../../hooks/basicLocation/useDefaultStudyRoom";

const BasicLocationChange = () => {
  const {
    onChangeDefaultType,
    timeTable,
    onChangePlace,
    applyPlaces,
    onSubmitDefaultStudyRoom,
    isChange,
  } = useDefaultStudyRoom();

  return (
    <S.BasicLocationChangeWrap>
      <ComponentTitle>
        <S.PencilImg src={pencil_image} />
        <S.BasicLocationChangeTitleText>
          기본 위치 수정
        </S.BasicLocationChangeTitleText>
        <S.ApplyButton isDisable={!isChange} onClick={onSubmitDefaultStudyRoom}>
          수정
        </S.ApplyButton>
      </ComponentTitle>
      <S.BasicLocationMainWrap>
        <S.MainRow>
          <DayOfTheWeekSelect onChangeDefaultType={onChangeDefaultType} />
          <S.BasicLocationChangeContentsWrap>
            {timeTable.length === 4 && (
              <>
                {timeTable.map((item, idx) => (
                  <MyClassroomSelect
                    applyPlaces={applyPlaces[idx]}
                    key={item.id}
                    idx={idx}
                    timeTable={item}
                    onChangePlace={onChangePlace}
                  />
                ))}
              </>
            )}
          </S.BasicLocationChangeContentsWrap>
        </S.MainRow>
      </S.BasicLocationMainWrap>
    </S.BasicLocationChangeWrap>
  );
};

export default BasicLocationChange;
