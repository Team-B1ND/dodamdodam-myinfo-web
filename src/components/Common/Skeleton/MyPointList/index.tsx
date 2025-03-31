import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const MyPointListFallbackLoader = () => {
  return (
    <Container>
      {Array.from({ length: 3 }).map((_, idx) => (
        <ItemBox key={idx} >
            <ItemFrist/>
            <ItemSecond />
        </ItemBox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 12px;
`

const ItemFrist = styled.div`
  width: 25%;
  height: 20px;
  ${skeletonAnimtaion}
  ${DodamShape.ExtraSmall};
`;
const ItemSecond = styled.div`
  width: 30%;
  height: 25px;
  ${skeletonAnimtaion}
  ${DodamShape.ExtraSmall};
`

export default MyPointListFallbackLoader;