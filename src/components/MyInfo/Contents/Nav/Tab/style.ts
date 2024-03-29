import styled from "styled-components";

export const SideTabBarWrap = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 25px;
  margin: 50px 0;
`;

export const TabBarCategoryWrap = styled.div<{ isSelect: boolean }>`
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px solid ${({ isSelect }) => (isSelect ? "#333" : "#fff")};
  font-size: 22px;
  text-decoration: none;
  color: #333;
  font-weight: ${({ isSelect }) => (isSelect ? "bold" : "none")};
`;
