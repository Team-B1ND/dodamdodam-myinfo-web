import styled from "styled-components";

export const BusOptionWrap = styled.div<{ backgroundColor: string }>`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  display: flex;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex-direction: column;
  gap: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const BusOptionStationText = styled.span<{ textColor: string }>`
  width: 100%;
  font-size: 1.4rem;
  display: flex;
  text-align: center;
  justify-content: center;
  color: ${({ textColor }) => textColor};
`;
