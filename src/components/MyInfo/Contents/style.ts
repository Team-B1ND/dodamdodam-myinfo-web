import styled from "styled-components";

export const MyInfoWrap = styled.div`
  width: 1351px;
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
  overflow: auto;
  /* gap: 20px; */
`;

export const MyInfoMainContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MyInfoContentsTopWrap = styled.div`
  width: 780px;
  /* height: 257px; */
`;

export const MyInfoContentsMiddleWrap = styled.div`
  width: 780px;
  height: 217px;
  display: flex;
  flex-direction: row;
`;

export const MyInfoContentsBottomWrap = styled.div`
  width: 780px;
  height: 200px;
  background-color: none;
`;
