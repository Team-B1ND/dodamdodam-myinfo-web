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
  border: 1px solid #c4c4c4;
`;

export const MyPointTextWrap = styled.p`
  display: flex;
  width: 100%;
  height: 20%;
  font-size: 18px;
  border-bottom: 1px solid #c4c4c4;
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
export const MyMeritPointWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30%;
  margin-top: 20px;
  /* background-color: #ffffff; */
`;

export const MyDemeritPointWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30%;

  /* background-color: #ffffff; */
`;

export const MyMeritPointGraphWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

export const MyDemeritPointGraphWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

export const MyMeritPointGraph = styled.div`
  width: 40%; // 25점이 100% 입니다
  height: 15px;
  background-color: rgb(0 103 188);
`;

export const MyDemeritPointGraph = styled.div`
  width: 25%; // 25점이 100% 입니다
  height: 15px;
  background-color: rgb(249 126 109);
`;

export const MyMeritPointText = styled.p`
  width: 17.5%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const MyDemeritPointText = styled.p`
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
  align-items: center;
  margin-top: 15px;
`;

export const MyPointGuideInfoMeritCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(0 103 188);
  margin-left: 10px;
`;

export const MyPointGuideInfoDemeritCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(249 126 109);
  margin-left: 10px;
`;

export const MyPointGuideInfoMeritText = styled.p`
  width: auto;
  text-align: center;
  font-size: 13px;
`;

export const MyPointGuideInfoDemeritText = styled.p`
  width: auto;
  text-align: center;
  font-size: 13px;
`;

export const MyPointToggleWrap = styled.div`
  /* height: 75%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

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
