import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const SeatChooseModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraLarge};
  width: 600px;
  height: 680px;
  padding: 24px;
  color: ${({ theme }) => theme.labelNormal};

  > img {
    width: 400px;
    height: 600px;
  }

  > header {
    width: 100%;

    > button {
      outline: none;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`

export const SeatChooseMain = styled.main`
  display: flex;
  gap: 40px;
  justify-content: center;
  > section {
    ${DodamTypography.Title2.Medium}
    display: flex;
    flex-direction: column;
    gap: 8px;

    > p {
      ${DodamTypography.Label.Medium}
      color: ${({ theme }) => theme.labelAlternative};
    }
  }
`