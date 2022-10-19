import styled from "styled-components";
import { pathToFileURL } from "url";
import { palette } from "../../../../../styles/palette";

export const MainProfileHrWrap = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  align-items: center;
`;

export const MainProfileHrBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${palette.gray[200]};
`;
