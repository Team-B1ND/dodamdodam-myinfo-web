import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const MyPassListFallbackLoader = () => {
  return (
    <Container>
      {Array.from({ length: 2 }).map((_, idx) => (
        <ItemBox key={idx} >
            <ItemStatusLabel/>
            <ItemFrist/>
            <ItemSecond>
                <p></p>
                <p></p>
            </ItemSecond>
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 25px;
  p{
    width: 30%;
    ${skeletonAnimtaion}
    ${DodamShape.ExtraSmall};
  }
  
`
const ItemStatusLabel = styled.div`
    display: flex;
    width: 60px;
    height: 25px;
    ${skeletonAnimtaion}
    ${DodamShape.Large};
`

export default MyPassListFallbackLoader;