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
  linkName: string;
  pathName: string;
}>`
  height: 30px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
  border-bottom: 2px solid
    ${({ linkName, pathName }) => (linkName === pathName ? "#333" : "#fff")};

  .Link {
    font-size: 1.2rem;
    text-decoration: none;
    color: #333;
    font-weight: ${({ linkName, pathName }) =>
      linkName === pathName ? "bold" : "none"};
  }
`;

export const TabBarCategoryDecoration = styled.div<{ backgroundColor: string }>`
  width: 10px;
  height: 35px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
`;
