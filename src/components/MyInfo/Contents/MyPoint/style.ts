import styled, { css, StyledInterface } from "styled-components";
import { palette } from "../../../../styles/palette";

export const MyPointWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 155px;
  border-radius: 20px;
  background-color: ${palette.white};
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  margin-top: 20px;
`;

export const MyPointTopAreaWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 310px;
  height: 25px;
  padding: 10px 20px;
  border-radius: 20px 20px 0 0;
`;

export const MyPointTextWrap = styled.span`
  display: flex;
  width: 260px;
  height: 25px;
  font-size: 1.1rem;
  align-items: center;
  color: ${palette.black};
`;

export const MyPointContentsWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 310px;
  height: 128px;
  padding: 0 20px;
`;

export const MyPointContentsGraphWrap = styled.div`
  display: flex;
  width: 205px;
  height: 105px;
  flex-direction: column;
`;

export const MyPointContentsDetailWrap = styled.div`
  display: flex;
  width: 105px;
  height: 105px;
  flex-direction: column;
`;

// <MyPointContentsGraphWrap>

export const MyWholePointWrap = styled.div`
  margin-top: 15px;
  height: 84px;
`;

export const MyEachPointWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30%;
  margin-top: 7px;
`;

export const MyEachPointGraphWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

export const MyEachPointGraph = styled.div<{
  meritPoint: number;
  backgroundColor: string;
}>`
  width: ${({ meritPoint }) =>
    meritPoint === 0 ? 1 : meritPoint <= 25 ? (meritPoint / 25) * 100 : 100}%;
  height: 15px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const MyPointText = styled.span`
  width: 17.5%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

// </MyPointContentsGraphWrap>

// <MyPointContentsDetailWrap>
export const MyPointGuideInfoWrap = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: cnter;
  margin-top: 15px;
`;

export const MyPointGuideCircle = styled.div<{ circleColor: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  /* background-color: rgb(249 126 109); */
  background-color: ${({ circleColor }) => circleColor};
  /* margin-left: 10px;
  margin-top: 2px; */
  margin: 1.5px 2px 0 10px;
`;

export const MyPointGuideInfoText = styled.span`
  width: auto;
  text-align: center;
  font-size: 13px;
`;

export const MyPointToggleWrap = styled.div``;

export const MyPointToggleButton = styled.button<{
  textColor: string;
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};

  border-radius: 10px;
  border: 2px solid rgb(0 103 188);
  width: 55px;
  height: 25px;
  text-align: center;
  margin: 15px 0 0 45px;

  &:hover {
    cursor: pointer;
  }
`;

// </MyPointContentsDetailWrap>
