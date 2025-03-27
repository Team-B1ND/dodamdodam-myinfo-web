import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const GoingOutInquiryBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 450px;
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

export const OutingItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: ${({theme})=>theme.backgroundNormal};
    border-radius: 8px;
    padding: 12px;
`

export const OutingHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StatusLabel = styled.div`
    ${DodamTypography.Label.Medium};
    color: #fff;
    background-color: ${({theme})=>theme.lineNormal};
    padding: 4px 12px;
    border-radius: 100px;
`

export const DeleteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OutingContent = styled.div`
    color: ${({theme})=>theme.labelNormal};
    ${DodamTypography.Body1.Medium};
    line-height: 1.4;
`

export const OutingTime = styled.div`
    display: flex;
    justify-content: space-between;
    
    span {
        ${DodamTypography.Body1.Medium};
        color: ${({theme})=>theme.labelNormal};
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;