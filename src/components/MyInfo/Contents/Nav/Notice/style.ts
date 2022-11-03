import styled from "styled-components";
import { palette } from "../../../../../styles/palette";

export const NoticeWrap = styled.div`
  border-radius: 8px;
  box-shadow: 2px 4px 12px 0 rgb(118 145 148 / 8%);
  border: solid 0.5px rgba(3, 199, 90, 0.3);
  background-color: rgba(3, 199, 90, 0.08);
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  margin-top: 50px;
`;

export const NoticeText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette.main};
  font-size: 1.05rem;
`;
