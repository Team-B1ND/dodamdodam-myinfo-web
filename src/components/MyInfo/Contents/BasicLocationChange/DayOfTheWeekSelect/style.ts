import styled from "styled-components";

export const DayOfTheWeekSelectWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const DayOfTheWeekLabelWrap = styled.div`
  width: 60px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`;

export const DayofTheWeekSelectCategoryLabel = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
  }
`;

export const DayOfTheWeekSelectCategoryInput = styled.input`
  margin-top: 1.5px;
  margin-left: 0;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
  }
`;

export const CategoryText = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

export const CategoryExplainWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 236px;
  margin-left: 30px;
  align-items: flex-start;
  gap: 15px;
`;

export const CategoryExplainText = styled.span`
  width: 100%;
  display: flex;
  font-size: 11.5px;
  /* padding-left: 5px; */
`;

export const WhenDateContentsSelect = styled.select`
  width: 80%;
  height: 25px;
  padding-left: 10px;
  /* margin-left: 10px; */
`;
