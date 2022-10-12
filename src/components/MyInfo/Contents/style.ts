import styled from "styled-components";

export const MyInfoWrap = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f9fbfc;
`;

export const MyInfoContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
  height: 100vh;
  padding: 0 60px;
  background-color: #f9fbfc;
`;

export const MyInfoContentsTopWrap = styled.div`
  width: 780px;
  height: 30vh;
`;

export const MyInfoContentsMiddleWrap = styled.div`
  width: 780px;
  height: 180px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const MyInfoContentsBottomWrap = styled.div`
  width: 700px;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
`;
