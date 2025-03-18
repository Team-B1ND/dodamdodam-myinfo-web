import styled from "styled-components";


export const MyinfoMain = styled.div`
    display: flex;
    height: 100vh;
    padding: 58px 0px 58px 32px ;
    @media (max-width: 1068px) {
      padding: 28px 0px 58px 32px ;
      }
    @media (max-width: 797px) {
      width: 100%;
      padding: 28px 28px 58px 32px ;
      overflow-y: scroll;
    }
    &::-webkit-scrollbar {
    display: none;
  }
`

export const MyinfoProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  `