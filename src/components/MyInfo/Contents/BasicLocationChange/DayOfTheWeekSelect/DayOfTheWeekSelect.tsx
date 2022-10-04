import { useEffect, useState } from "react";
import * as S from "./style";

const DayOfTheWeekSelect = () => {
  const [category, setCategory] = useState<string>("날짜");
  const [date, setDate] = useState<string>("월요일");

  const radioOnchangeValueHandler = (e: any) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const dateOnchangeValueHandler = (e: any) => {
    // console.log(e.target.value);
    setDate(e.target.value);
  };

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <S.DayOfTheWeekSelectWrap>
        <S.DayOfTheWeekLabelWrap>
          <S.DayofTheWeekSelectCategoryLabel>
            <S.DayOfTheWeekSelectCategoryInput
              type="radio"
              id="oneDay"
              name="period"
              value="날짜"
              onChange={radioOnchangeValueHandler}
              defaultChecked
            />
            <S.CategoryText htmlFor="oneDay">날짜</S.CategoryText>
          </S.DayofTheWeekSelectCategoryLabel>
          <S.DayofTheWeekSelectCategoryLabel>
            <S.DayOfTheWeekSelectCategoryInput
              type="radio"
              id="week"
              name="period"
              value="평일"
              onChange={radioOnchangeValueHandler}
            />
            <S.CategoryText htmlFor="week">평일</S.CategoryText>
          </S.DayofTheWeekSelectCategoryLabel>
          <S.DayofTheWeekSelectCategoryLabel>
            <S.DayOfTheWeekSelectCategoryInput
              type="radio"
              id="weekend"
              name="period"
              value="주말"
              onChange={radioOnchangeValueHandler}
            />
            <S.CategoryText htmlFor="weekend">주말</S.CategoryText>
          </S.DayofTheWeekSelectCategoryLabel>
        </S.DayOfTheWeekLabelWrap>
        {category === "날짜" ? (
          <>
            <S.CategoryExplainText>
              변경하고 싶은 날짜를 선택해주세요.
            </S.CategoryExplainText>
            <S.WhenDateContentsInput onChange={dateOnchangeValueHandler}>
              <option value={"월요일"}>월요일</option>
              <option value={"화요일"}>화요일</option>
              <option value={"수요일"}>수요일</option>
              <option value={"목요일"}>목요일</option>
              <option value={"금요일"}>금요일</option>
              <option value={"토요일"}>토요일</option>
              <option value={"일요일"}>일요일</option>
            </S.WhenDateContentsInput>
          </>
        ) : category === "평일" ? (
          <S.CategoryExplainText>
            평일 5일의 기본위치를 한 번에 변경할 수 있습니다.
          </S.CategoryExplainText>
        ) : (
          <S.CategoryExplainText>
            주말 이틀의 기본위치를 한 번에 변경할 수 있습니다.
          </S.CategoryExplainText>
        )}
      </S.DayOfTheWeekSelectWrap>
    </>
  );
};

export default DayOfTheWeekSelect;
