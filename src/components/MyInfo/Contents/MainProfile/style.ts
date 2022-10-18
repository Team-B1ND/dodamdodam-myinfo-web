import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const MainProfileWrap = styled.div`
  width: 780px;
  height: 257px;
`;

export const MainProfileTopWrap = styled.div`
  width: 780px;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const HappyFaceImg = styled.img`
  width: 23px;
  height: 23px;
  display: flex;
`;

export const MainProfileText = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${palette.black};
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const MainProfileMainWrap = styled.div`
  height: 170px;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  border-radius: 20px;
  border: 1px solid ${palette.main};
  padding: 20px;
  background-color: ${palette.white};
`;

export const MainProfileMiddleWrap = styled.div`
  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  gap: 50px;
`;

export const MainProfileButtonWrap = styled.div`
  height: 45px;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-left: 525px;
`;

export const MainProfileImgWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const MainProfileImg = styled.img`
  width: 130px;
  min-width: 130px;
  max-width: 130px;
  height: 130px;
  min-height: 130px;
  max-height: 130px;
  border-radius: 50%;
  overflow: hidden;
`;

export const MainProfileUserInfoWrap = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainProfileUserEachInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* margin: 15px 0; */
`;

export const MainProfileInfoTextExplain = styled.span`
  width: 122.5px;
  font-size: 1.05rem;
  font-weight: bold;
`;

export const MainProfileInfoText = styled.span`
  width: 250px;
  font-size: 1.05rem;
`;

export const UpdateBtn = styled.button`
  text-align: center;
  align-items: center;
  border: solid 1px rgba(212, 216, 229, 0.5);
  background-color: rgba(212, 216, 229, 0.25);
  &:hover {
    cursor: pointer;
  }
`;
