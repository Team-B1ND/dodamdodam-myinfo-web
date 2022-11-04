import Router from "../Router/Router";
import styled from "styled-components";
import { useEffect } from "react";
import token from "../lib/token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../constants/token/token.constant";

function App() {
  useEffect(() => {
    if (
      !token.getToken(ACCESS_TOKEN_KEY) ||
      !token.getToken(REFRESH_TOKEN_KEY)
    ) {
      window.location.href = "http://dodam.b1nd.com/sign";
    }
  }, []);

  return (
    <Body>
      <Router />
    </Body>
  );
}

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MyInfoLeftWrap = styled.div`
  width: 40%;
  height: 100vh;
  position: absolute;
  left: 0;
  z-index: -1;
`;

export const MyInfoRightWrap = styled.div`
  width: 60%;
  height: 100vh;
  background-color: #f9fbfc;
  position: absolute;
  right: 0;
  z-index: -1;
`;

export default App;
