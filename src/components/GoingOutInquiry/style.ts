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

export const OutingList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
    overflow-y: auto;
    padding-right: 4px;
    
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: ${({theme}) => theme.backgroundLow};
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.lineNormal};
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: ${({theme}) => theme.labelAlternative};
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;