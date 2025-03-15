import styled from "styled-components";

import { ColorType } from ".";

export const PassDetailContainer = styled.div`
  width: 95%;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;

  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
`;

export const OutgoingBtn = styled.div<{ isColor: ColorType }>`
  border-radius: 50px;
  height: 30px;

  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 1rem;
  cursor: pointer;
`;

export const OutSleepingBtn = styled.div<{ isColor: ColorType }>`
  border-radius: 50px;
  height: 30px;

  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 1rem;
  cursor: pointer;
`;
