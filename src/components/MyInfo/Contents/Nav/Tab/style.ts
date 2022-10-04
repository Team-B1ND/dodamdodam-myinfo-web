import styled from "styled-components";

export const SideTabBarWrap = styled.div`
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TabBarCategoryWrap = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-right: 50px;

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
  font-size: 1rem;
  margin-left: 7.5px;
`;
