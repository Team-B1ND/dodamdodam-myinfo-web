import styled from "styled-components";

export const SideTabBarWrap = styled.div`
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
`;

export const TabBarCategoryWrap = styled.div<{
  underBarColor: string;
  fontWeight: string;
}>`
  width: auto;
  height: 30px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  border-bottom: 2px solid ${({ underBarColor }) => underBarColor};
  font-weight: ${({ fontWeight }) => fontWeight};

  &:hover {
    cursor: pointer;
  }
`;

export const TabBarCategoryDecoration = styled.div<{ backgroundColor: string }>`
  width: 10px;
  height: 35px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
`;

export const TabBarCategoryText = styled.span`
  font-size: 1.2rem;
  margin-left: 7.5px;
`;
