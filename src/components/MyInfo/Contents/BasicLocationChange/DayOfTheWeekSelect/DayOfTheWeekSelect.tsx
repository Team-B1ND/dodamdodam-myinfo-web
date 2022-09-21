import * as S from "./style";

const DayOfTheWeekSelect = () => {
  return (
    <S.DayOfTheWeekSelectWrap>
      <S.DayOfTheWeekLabelWrap>
        <S.DayofTheWeekSelectCategoryLabel>
          <S.DayOfTheWeekSelectCategoryInput type="radio" name="period" />
          <S.DayOfTheWeekLabelText>날짜</S.DayOfTheWeekLabelText>
        </S.DayofTheWeekSelectCategoryLabel>
        <S.DayofTheWeekSelectCategoryLabel>
          <S.DayOfTheWeekSelectCategoryInput type="radio" name="period" />
          <S.DayOfTheWeekLabelText>평일</S.DayOfTheWeekLabelText>
        </S.DayofTheWeekSelectCategoryLabel>
        <S.DayofTheWeekSelectCategoryLabel>
          <S.DayOfTheWeekSelectCategoryInput type="radio" name="period" />
          <S.DayOfTheWeekLabelText>주말</S.DayOfTheWeekLabelText>
        </S.DayofTheWeekSelectCategoryLabel>
      </S.DayOfTheWeekLabelWrap>
    </S.DayOfTheWeekSelectWrap>
  );
};

export default DayOfTheWeekSelect;
