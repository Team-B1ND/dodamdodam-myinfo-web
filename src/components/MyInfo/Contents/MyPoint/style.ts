import styled from "styled-components";

export const MyPointWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 13%;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 10px 20px;
  margin-top: 20px;
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
`;

export const MyPointIconImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const MyPointTextWrap = styled.span`
  display: flex;
  width: 100%;
  height: 20%;
  font-size: 18px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 10px;
`;

export const MyPointContentsWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  /* margin-top: 10px; */
`;

export const MyPointContentsGraphWrap = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  flex-direction: column;
`;

export const MyPointContentsDetailWrap = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  flex-direction: column;
`;

// <MyPointContentsGraphWrap>

export const MyWholePointWrap = styled.div`
  margin-top: 15px;
  height: 80%;
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
  width: ${({ meritPoint }) => (meritPoint / 25) * 100}%; // 25점이 100% 입니다
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

export const MyPointToggleButton = styled.button`
  background-color: #ffffff;
  border-radius: 10px;
  color: rgb(0 103 188);
  border: 2px solid rgb(0 103 188);
  width: auto;
  height: 25px;
  text-align: center;
  margin: 15px 0 0 45px;
`;

// </MyPointContentsDetailWrap>
