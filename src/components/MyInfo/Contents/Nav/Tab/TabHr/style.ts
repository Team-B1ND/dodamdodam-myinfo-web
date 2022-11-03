import styled from "styled-components";
import { palette } from "../../../../../../styles/palette";

export const HrWrap = styled.div`
  width: calc(100% - 30px);
  height: 5px;
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${palette.gray[400]};
`;
