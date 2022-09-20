import styled from "styled-components";

export const MainProfileWrap = styled.div`
  width: 93%;
  height: 30%;
  /* border: 1px solid #03c75a; */
  border: 1px solid #e3e9ed;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  border-radius: 20px;
  background-color: #ffffff;
  padding: 25px;
`;

export const MainProfileText = styled.span`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  font-size: 25px;
  font-weight: bold;
`;

export const MainProfileMiddleWrap = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: row;
`;

export const MainProfileImgWrap = styled.div`
  width: 120px;
  min-width: 120px;
  max-width: 120px;
  height: 120px;
  min-height: 120px;
  max-height: 120px;
  display: flex;
  margin-left: 10px;
  margin: 10px 0 0 10px;
  border-radius: 50%;
  overflow: hidden;
`;

export const MainProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainProfileUserInfoWrap = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

export const MainProfileUserEachInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`;

export const MainProfileInfoTextExplain = styled.span`
  width: 25%;
  font-size: 20px;
  font-weight: bold;
`;

export const MainProfileInfoText = styled.span`
  width: 70%;
  font-size: 20px;
`;

export const MainProfileButtonWrap = styled.div`
  width: 100%;
  height: 25%;
  padding: 0;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const UpdateProfileInfoBtn = styled.button`
  text-align: center;
  align-items: center;
  border: solid 1px rgba(212, 216, 229, 0.5);
  background-color: rgba(212, 216, 229, 0.25);
  width: 100px;
  height: 50%;
`;

export const UpdatePassWordBtn = styled.button`
  text-align: center;
  align-items: center;
  border: solid 1px rgba(212, 216, 229, 0.5);
  background-color: rgba(212, 216, 229, 0.25);
  width: 100px;
  height: 50%;
  margin-left: 25px;
`;
