import { DefaultTheme } from "styled-components";
import { palette } from "./palette";

export const lightTheme: DefaultTheme = {
  ...palette,
  contrast: "#000000",
  backgroundColor: "#ffffff",
};

export const darkTheme: DefaultTheme = {
  ...palette,
  contrast: "#ffffff",
  backgroundColor: "#30343f",
};
