import styled from "styled-components";

export const MyInfoContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100vh;
  padding: 0 20px;
  background-color: #f9fbfc;
`;

export const MyInfoNavWrap = styled.div`
  display: flex;
  width: 35%;
  height: 100vh;
  /* border-right: 2px red solid; */
  margin-right: 10px;
  box-shadow: 5px 1px 8px 0 rgb(0 0 0 / 6%);
`;

export const MyInfoWrap = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f9fbfc;
`;

export const MyInfoContentsMiddleWrap = styled.div`
  width: 100%;
  height: 200px;
`;

export const MyInfoContentsBottomWrap = styled.div`
  width: 700px;
  height: 250px;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
`;
