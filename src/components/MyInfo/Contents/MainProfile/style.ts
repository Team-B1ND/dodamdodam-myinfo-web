import styled from "styled-components";

export const MainProfileWrap = styled.div`
  width: 780px;
  height: 30vh;
  /* border: 1px solid #03c75a; */
  /* border: 1px solid #e3e9ed; */
  /* box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  border-radius: 20px; */
  /* background-color: #ffffff; */
`;

export const MainProfileTextWrap = styled.div`
  width: 780px;
  height: auto;
  /* border-radius: 20px 20px 0 0;
  background-image: linear-gradient(98deg, #03c75a, #49c6dd); */
  padding: 10px 0;
  margin: none;
  display: flex;
  align-items: center;
  /* margin-bottom: 20px; */
`;

export const HappyFaceImg = styled.img`
  width: 23px;
  height: 23px;
  display: flex;
`;

export const MainProfileText = styled.span`
  width: 700px;
  height: 25px;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #000000;
  margin-left: 10px;
`;

export const MainProfileMainWrap = styled.div`
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  border-radius: 20px;
  border: 1px solid #80db9f;
  padding: 20px 0;
  background-color: #ffffff;
`;

export const MainProfileMiddleWrap = styled.div`
  height: 170px;
  display: flex;
  flex-direction: row;
  padding: 0 25px;
`;

export const MainProfileImgWrap = styled.div`
  width: 120px;
  min-width: 120px;
  max-width: 120px;
  height: 120px;
  min-height: 120px;
  max-height: 120px;
  display: flex;
  margin: 10px 0 0 30px;
  border-radius: 50%;
  overflow: hidden;
`;

export const MainProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainProfileUserInfoWrap = styled.div`
  width: 490px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
`;

export const MainProfileUserEachInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`;

export const MainProfileInfoTextExplain = styled.span`
  width: 122.5px;
  font-size: 1.05rem;
  font-weight: bold;
`;

export const MainProfileInfoText = styled.span`
  width: 343px;
  font-size: 1.05rem;
`;

export const MainProfileButtonWrap = styled.div`
  padding: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const UpdateProfileInfoBtn = styled.button`
  text-align: center;
  align-items: center;
  border: solid 1px rgba(212, 216, 229, 0.5);
  background-color: rgba(212, 216, 229, 0.25);
  width: 100px;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const UpdatePassWordBtn = styled.button`
  text-align: center;
  align-items: center;
  border: solid 1px rgba(212, 216, 229, 0.5);
  background-color: rgba(212, 216, 229, 0.25);
  width: 100px;
  padding: 8px;
`;
