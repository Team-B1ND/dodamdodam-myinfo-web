import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util"
import { DodamShape, DodamTypography, SchoolBus } from "@b1nd/dds-web"
import styled from "styled-components"

const BusDataFallback = () => {
  return (
    <BusFallbackContainer>
      <header>
        <SchoolBus size={30} />
        귀가 버스 정보
      </header>
      <main></main>
    </BusFallbackContainer>
  )
}


export default BusDataFallback

const BusFallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 130px;
  flex-grow: 1;
  align-items: start;
    
  /* @media (max-width: 768px) {
    min-height: auto;
  } */

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};
  gap: 12px;
  padding: 24px;

  > header {
    display: flex;
    gap: 8px;
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Headline.Bold}
    align-items: center;
  }

  > main {
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.fillNormal};
    ${skeletonAnimtaion};
    ${DodamShape.Large}
  }
`