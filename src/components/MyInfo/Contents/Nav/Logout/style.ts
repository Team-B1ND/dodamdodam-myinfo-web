import styled from "styled-components";
import { palette } from "../../../../../styles/palette";

export const LogoutWrap = styled.div`
  position: absolute;
  bottom: 130px;
  width: 130px;
  text-align: center;
  padding: 15px 0;
  background-color: ${palette.main};
  color: ${palette.white};
  border-radius: 20px;
  /* margin-top: 30px;
  width: calc(100% - 60px - 100px);
  display: flex; */
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
`;
