import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const GoingOutInquiryBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    ${DodamShape.Large};
    background-color: ${({theme})=>theme.backgroundNormal};
    gap: 16px;
    padding: 20px 24px;
`

export const BoxTitle = styled.span`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    ${DodamTypography.Headline.Bold};
    color: ${({theme})=>theme.labelNormal};
`

export const EmptyState = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px 0;
    ${DodamTypography.Body1.Medium};
    color: ${({theme})=>theme.labelNormal};
    text-align: center;
    background-color: none;
    border-radius: 8px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none !important;
    }
    
    scrollbar-width: none;
    -ms-overflow-style: none;
`


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;