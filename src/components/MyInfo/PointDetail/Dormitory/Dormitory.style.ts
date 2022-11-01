import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const DormitoryPointContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PointHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${palette.gray[300]};
`;

export const RewardPoints = styled.div<{ isColor: boolean }>`
  padding: 0 100px;
  padding-bottom: 17px;
  cursor: pointer;
  border-bottom: 1px solid
    ${({ isColor }) => (isColor ? `#fff` : `${palette.main};`)};
`;

export const BadPoints = styled.div<{ isColor: boolean }>`
  padding: 0 100px;
  padding-bottom: 17px;
  cursor: pointer;
  border-bottom: 1px solid
    ${({ isColor }) => (!isColor ? `#fff` : `${palette.main};`)};
`;

export const PointReasonDetailWrap = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid ${palette.gray[300]};
  border-top: 0px;
`;

export const ReasonDetail = styled.div`
  margin: 15px 0;
  text-align: center;
`;

export const Divide = styled.div`
  margin: 8px 0;
  border: 1px solid ${palette.gray[300]};
`;

// export const Date = styled.div`
//   width: 20%;
//   text-align: center;
//   border-right: 1px solid ${palette.gray[400]};
// `;

// export const TeacherIdx = styled.div`
//   width: 15%;
//   text-align: center;
// `;

// export const PointDetailContainer = styled.div``;
// export const PointDetailContainer = styled.div``;
// export const PointDetailContainer = styled.div``;
