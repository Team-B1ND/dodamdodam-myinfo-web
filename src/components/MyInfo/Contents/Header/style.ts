import styled from "styled-components";


export const MyInfoModifyWrap = styled.div`
  width: 780px;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;

export const MyInfoModifyBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const MyInfoModifyBtn = styled.div`
  border-radius: 50px;
  height: 30px;
  
  
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
