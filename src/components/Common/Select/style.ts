import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const SelectContainer = styled.div`
  width: min-content;
  height: 40px;

  display: flex;
  align-items: center;
  padding: 0px 12px;
  position: relative;
  column-gap: 15px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.fillNormal};
  ${DodamShape.Small}
  > p {
    ${DodamTypography.Body1.Medium}
    white-space: nowrap;
    color: ${({ theme }) => theme.labelNormal};
  }
`

export const SelectIcon = styled.div<{ close: "true" | "false" }>`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.labelNormal};
  transition: all 0.3s ease;

  ${({ close }) =>
    close === "false" &&
      "transform: rotate(180deg)"
    }
`

export const SelectItemWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 44px;
  left: 0px;

  overflow: hidden;
  background-color: ${({ theme }) => theme.fillNormal};
  ${DodamShape.ExtraSmall}
  box-sizing: border-box;
  z-index: 999;
`

export const SelectItem = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 10px;
  ${DodamTypography.Caption1.Medium}
  color: ${({ theme }) => theme.labelNormal };

  :hover {
    filter: brightness(90%);
  }
`