import styled, { css } from "styled-components";
import { palette } from "../../../../../styles/palette";

export const BusOptionWrap = styled.div<{ isSelect: boolean }>`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }

  ${({ isSelect }) =>
    isSelect
      ? css`
          background-color: ${palette.main};
          color: white;
        `
      : css`
          background-color: white;
          color: black;
        `}
`;

export const BusOptionStationText = styled.span<{ isSelect: boolean }>`
  width: 100%;
  font-size: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;
`;
