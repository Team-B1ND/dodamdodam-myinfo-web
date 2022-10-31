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

// export const PointDetailContainer = styled.div``;

// export const PointDetailContainer = styled.div``;

// export const PointDetailContainer = styled.div``;

// export const PointDetailContainer = styled.div``;

// export const PointDetailContainer = styled.div``;
// export const PointDetailContainer = styled.div``;
// export const PointDetailContainer = styled.div``;
// export const PointDetailContainer = styled.div``;
