import styled from "styled-components";

export const DayOfTheWeekSelectWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DayOfTheWeekLabelWrap = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const DayofTheWeekSelectCategoryLabel = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: left;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const DayOfTheWeekSelectCategoryInput = styled.input`
  margin-top: -1px;
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

export const CategoryExplainText = styled.span`
  width: 100%;
  display: flex;
  font-size: 11.5px;
  margin: 5px 0 10px 0;
  /* padding-left: 5px; */
`;

export const WhenDateContentsInput = styled.select`
  width: 80%;
  height: 25px;
  padding-left: 10px;
  /* margin-left: 10px; */
`;
