import styled, { css } from "styled-components";
import { palette } from "../../../../../styles/palette";

export const DayOfTheWeekSelectContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DayOfTheWeekSelectTitle = styled.h1`
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;

export const DayOfTheWeekSelectWrap = styled.div<{ close: boolean }>`
  width: 136px;
  height: 35px;
  padding-left: 10px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  color: black;

  ${({ close }) =>
    !close &&
    css`
      border: 2px solid ${palette.main};
    `}
`;

export const DayOfTheWeekSelectIcon = styled.div<{ close: boolean }>`
  width: 15px;
  font-size: 15px;
  color: #e0e0e0;

  ${({ close }) =>
    !close &&
    css`
      transition: all 0.3s ease;
      transform: rotate(180deg);
    `}
`;

export const DayOfTheWeekSelectOptionWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  left: 0px;
  overflow: hidden;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const DayOfTheWeekSelectOption = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  padding: 0px 10px;

  :hover {
    filter: brightness(90%);
  }
`;
