import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <B1ndToastContainer style={{ width: "auto", minWidth: "300px" }} />
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
