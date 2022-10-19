import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const MainProfileWrap = styled.div`
  width: 780px;
  /* height: 175px + 40px + 45px + 2px; */
  /* height: 257px; */
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
  /* height: 170px; */
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
  border-radius: 20px;
  border: 1px solid ${palette.main};
  padding: 20px;
  background-color: ${palette.white};
`;

export const MainProfileMiddleWrap = styled.div`
  /* height: 170px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* gap: 5px; */
`;

// export const MainProfileUserInfoWrap = styled.div`
//   width: 400px;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

export const MainProfileMyInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 738px;
  /* padding: 12.5px 0; */
`;

export const MainProfileImgWrap = styled.div`
  display: flex;
  width: 55px;
  height: 55px;
`;

export const MainProfileImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
`;

export const MainProfileInfoBasicWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 663px; */
  width: 600px;
  height: 55px;
  padding-left: 20px;
  gap: 5px;
`;

export const MainProfileNameText = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${palette.black};
`;

export const MainProfileGenerationText = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: ${palette.gray[500]};
  justify-content: flex-start;
`;

export const MainProfileUserEachInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 738px;
`;

export const MainProfileEachTitle = styled.span`
  display: flex;
  width: 38px;
  height: 30px;
  align-items: center;
  justify-content: flex-start;
`;

export const MainProfileTitleImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const MainProfileEachExplain = styled.span`
  display: flex;
  width: 637px;
  align-items: center;
  height: 30px;
  color: ${palette.gray[700]};
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

export const MyInfoModifyBtn = styled.div`
  border-radius: 10px;
  height: 28px;
  border: 1px solid ${palette.gray[200]};
  background-color: ${palette.gray[100]};
  color: ${palette.gray[500]};
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
