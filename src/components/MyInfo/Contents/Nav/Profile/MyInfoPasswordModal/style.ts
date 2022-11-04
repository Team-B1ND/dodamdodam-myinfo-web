import styled from "styled-components";
import { palette } from "../../../../../../styles/palette";

export const MyInfoPasswordModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 3;
`;

export const MyInfoPasswordModalContainer = styled.div`
  width: 880px;
  z-index: 4;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  box-sizing: border-box;
`;

export const MyInfoPasswordModalCloseButton = styled.button`
  background: none;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const MyInfoPasswordModalCloseIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyInfoPasswordModalTopWrap = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  border-bottom: 1px solid ${palette.gray[400]};
`;

export const MyInfoPasswordModalTopTitle = styled.h1`
  font-size: 1.7rem;
  line-height: 27px;
  font-weight: bold;
  white-space: nowrap;
`;

export const MyInfoPasswordModalTopDescription = styled.p`
  font-size: 1rem;
  line-height: 16px;
`;

export const MyInfoPasswordModalMiddleWrap = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
`;

export const MyInfoPasswordModalInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  row-gap: 10px;
  border-bottom: 1px solid ${palette.gray[300]};
  box-sizing: border-box;
`;

export const MyInfoPasswordModalInputTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const MyInfoPasswordModalInput = styled.input`
  width: 100%;
  height: 20px;
  font-size: 1.3rem;
  border: 0px;
  background: none;
  color: black;
  outline: none;
  padding: 0px;

  ::placeholder {
    color: ${palette.gray[400]};
  }
`;

export const MyInfoPasswordModalSubmitButton = styled.button`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  color: white;
  background-color: ${palette.main};
  font-size: 1.1rem;
  border: 0px;
  margin: 0px auto;
  line-height: 17px;
  cursor: pointer;
`;
