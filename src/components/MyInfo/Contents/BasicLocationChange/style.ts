import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const BasicLocationChangeWrap = styled.div`
  width: 780px;
  /* height: 217px; */
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
`;

export const PencilImg = styled.img`
  width: 23px;
  height: 23px;
  display: flex;
`;

export const BasicLocationChangeTitleText = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${palette.black};
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const BasicLocationMainWrap = styled.div`
  width: 730px;
  /* height: 157px; */
  display: flex;
  flex-direction: row;
  padding: 25px;
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  border-radius: 20px;
  background-color: ${palette.white};
`;

export const DayOfTheWeekSelectWrap = styled.div`
  width: 326px;
  height: 120px;
  /* background-color: red; */
`;

export const BasicLocationChangeContentsWrap = styled.div`
  width: 404px;
  height: 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BasicClassroomSelectLineWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 60px;
`;

export const BasicClassroomApplyButton = styled.div`
  font-size: 1rem;
  color: ${palette.white};
  background-color: ${palette.main};
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 10px 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
`;

export const MainRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ApplyButton = styled.div`
  padding: 7px 13px;
  color: ${palette.gray[400]};
  background-color: ${palette.gray[200]};
  border-radius: 50px;
  margin-left: 575px;
  &:hover {
    cursor: pointer;
  }
`;
