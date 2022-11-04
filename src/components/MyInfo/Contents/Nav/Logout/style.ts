import styled from "styled-components";
import { palette } from "../../../../../styles/palette";

export const LogoutWrap = styled.div`
  margin-top: 30px;
  padding: 15px 0;
  background-color: ${palette.gray[400]};
  color: ${palette.white};
  border-radius: 20px;
  width: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
