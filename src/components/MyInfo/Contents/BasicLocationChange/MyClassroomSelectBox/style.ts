import styled from "styled-components";
import { palette } from "../../../../../styles/palette";

export const EachClassroomBoxWrap = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;

export const BasicClassroomSelect = styled.select`
  width: 100%;
  height: 35px;
  padding: 0px 10px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  outline: none;

  &:focus {
    border: 2px solid ${palette.main};
  }
`;

export const BasicClassroomSelectText = styled.h1`
  width: 100%;
  font-size: 16px;
  margin-bottom: 5px;
`;
