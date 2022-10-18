import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const MyInfoNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background-color: ${palette.white};
  padding: 0 15px;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 5px 1px 8px 0 rgb(0 0 0 / 6%);
  z-index: 2;
  align-items: center;
`;
