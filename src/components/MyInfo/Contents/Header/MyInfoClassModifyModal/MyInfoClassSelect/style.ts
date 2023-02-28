import styled from "styled-components";
import { palette } from "../../../../../../styles/palette";

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Label = styled.span`
  color: black;
  font-size: 18px;
`;

export const SelectContainer = styled.select`
  width: 110px;
  height: 45px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  outline: none;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :focus {
    border: 2px solid ${palette.main};
  }
`;
