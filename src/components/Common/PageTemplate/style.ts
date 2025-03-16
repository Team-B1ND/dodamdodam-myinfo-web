import styled from "styled-components";

export const LayoutContainer = styled.div`
    height: 100vh;
    display: flex;
    user-select: none;
    margin: 0;
    overflow: hidden;
    background-color: ${({theme})=> theme.backgroundNeutral};
`

export const Layout = styled.div`
    width: 100%;
    height: 100%;
`

