import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MyInfoWrap = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MyInfoNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100vh;
  background-color: white;
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  box-shadow: 5px 0px 5px 0.5px #c4c4c4;
  padding: 0 15px;
`;

export const MyInfoContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100vh;
  padding: 0 20px;
`;
