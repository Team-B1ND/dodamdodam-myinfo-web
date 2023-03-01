import styled from "styled-components";
import { palette } from "../../../../../styles/palette";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
`;

export const Container = styled.div`
  width: 584px;
  height: 336px;
  background-color: ${palette.white};
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 5;
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  .exitIcon {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
`;

export const BottomButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

export const SubmitButton = styled.button`
  display: flex;
  padding: 7px 13px;
  border-radius: 50px;
  background-color: ${palette.main};
  font-size: 1rem;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;
  border: 0px;
  color: white;
`;

export const CancelButton = styled.button`
  display: flex;
  padding: 7px 13px;
  border-radius: 50px;
  background-color: ${palette.gray[300]};
  font-size: 1rem;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;
  border: 0px;
`;
