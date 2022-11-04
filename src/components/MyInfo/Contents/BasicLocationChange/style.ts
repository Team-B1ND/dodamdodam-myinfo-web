import styled, { css } from "styled-components";
import { palette } from "../../../../styles/palette";

export const BasicLocationChangeWrap = styled.div`
  width: 780px;
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: row;
  padding: 25px;
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  border-radius: 20px;
  background-color: ${palette.white};
`;

export const BasicLocationChangeContentsWrap = styled.div`
  width: 410px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 20px;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ApplyButton = styled.div<{ isDisable: boolean }>`
  padding: 7px 13px;
  border-radius: 50px;
  margin-left: 575px;
  &:hover {
    cursor: pointer;
  }

  ${({ isDisable }) =>
    isDisable
      ? css`
          background-color: ${palette.gray[200]};
          color: ${palette.gray[400]};
        `
      : css`
          background-color: ${palette.main};
          color: white;
        `}
`;
