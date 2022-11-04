import styled, { css } from "styled-components";
import { palette } from "../../../../styles/palette";

export const BusApplyWrap = styled.div`
  width: 780px;
  height: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const BusApplyText = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${palette.black};
  display: flex;
  align-items: center;
  padding-left: 10px;
  white-space: nowrap;
`;

export const BusApplyButton = styled.button<{ isDisable: boolean }>`
  padding: 7px 13px;
  border-radius: 50px;
  border: 0px;
  outline: none;
  font-size: 15px;

  ${({ isDisable }) =>
    isDisable
      ? css`
          background-color: ${palette.gray[200]};
          color: ${palette.gray[400]};
        `
      : css`
          cursor: pointer;
          background-color: ${palette.main};
          color: white;
        `}
`;

export const BusDateText = styled.span`
  text-align: left;
  display: flex;
  align-items: flex-end;
  color: ${palette.black};
  font-size: 1rem;
  margin-left: auto;
  margin-right: 10px;
`;

export const BusImg = styled.img`
  width: 23px;
  height: 23px;
  display: flex;
`;

export const BusApplyMainWrap = styled.div`
  width: 780px;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const BusIsNotFoundWrap = styled.div`
  display: flex;
  justify-content: left;
  gap: 25px;
  align-items: left;
  padding: 25px;
  border-radius: 20px;
  background-color: ${palette.white};
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  width: 100%;
`;

export const BusIsNotFoundTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const BusIsNotFound = styled.h1`
  font-size: 1.4rem;
  color: ${palette.black};
  font-weight: bold;
`;

export const EmphasisSpan = styled.span`
  color: ${palette.main};
`;

export const BusNotFoundIcon = styled.img`
  width: 45px;
  height: 45px;
`;
