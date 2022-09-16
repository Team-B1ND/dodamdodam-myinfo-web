import styled from "styled-components";

export const MyPointWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 25%;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 10px 20px;
`;

export const MyPointTextWrap = styled.p`
  display: flex;
  width: 100%;
  height: 20%;
  /* background-color: red; */
  font-size: 18px;
`;

export const MyPointContentsWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const MyPointContentsGraph = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
`;

export const MyPointContentsDetail = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
`;
