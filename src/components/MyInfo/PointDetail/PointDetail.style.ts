import styled from "styled-components";


export const MyInfoWrap = styled.div`
  width: 1251px;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f9fbfc;
`;

export const MyInfoContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
  padding: 50px 60px 0 60px;
`;

export const MainProfileText = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const DormitoryBtn = styled.div<{ isColor: boolean }>`
  border-radius: 50px;
  height: 30px;
  
    
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 1rem;
  cursor: pointer;
`;

export const SchoolBtn = styled.div<{ isColor: boolean }>`
  border-radius: 50px;
  height: 30px;
  
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 1rem;
  cursor: pointer;
`;

export const MyInfoModifyBtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const PointDetailContainer = styled.div`
  width: 95%;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 1px 1px 10px 0 rgb(72 75 108 / 8%);
`;
