import styled from "styled-components";


export const DormitoryPointContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PointHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
`;

export const RewardPoints = styled.div<{ isColor: boolean }>`
  padding: 0 100px;
  padding-bottom: 17px;
  cursor: pointer;
  
`;

export const BadPoints = styled.div<{ isColor: boolean }>`
  padding: 0 100px;
  padding-bottom: 17px;
  cursor: pointer;
  
`;

export const PointReasonDetailWrap = styled.div`
  display: flex;
  justify-content: center;
  
  border-top: 0px;
`;

export const ReasonDetail = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Divide = styled.div`
  margin: 8px 0;
  
`;

export const PointReasonDataNullMent = styled.div`
  margin: 20px 0 10px 0;
  text-align: center;
`;
