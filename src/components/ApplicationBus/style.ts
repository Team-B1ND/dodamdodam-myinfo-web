import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ApplicationBusBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.backgroundNormal};
  gap: 16px;
  padding: 20px 24px 24px 24px;
  color: ${({ theme }) => theme.labelNormal};
`;

export const BusHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BoxTitle = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  ${DodamTypography.Headline.Bold};
`;

export const BusItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  > section {
    display: flex;
    flex-direction: column;
    ${DodamTypography.Heading1.Bold}
    > span {
      ${DodamTypography.Label.Medium}
      color: ${({ theme }) => theme.labelAlternative};
    }
  }

  > div {
    display: flex;
    gap: 8px;
  }
`;

export const BusContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
`;

export const NoticeBusText = styled.div`
  ${DodamTypography.Body1.Bold};
  color: ${({ theme }) => theme.labelNormal};
`;
