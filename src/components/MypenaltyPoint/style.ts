import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const MypenaltyPointBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    ${DodamShape.Large};
    background-color: ${({theme})=>theme.backgroundNormal};
    gap: 16px;
    padding: 16px 22px;
`

export const BoxTitle = styled.span`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    ${DodamTypography.Headline.Bold};
    color: ${({theme})=>theme.labelNormal};
`

export const PointHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const TabContainer = styled.div`
    display: flex;
    gap: 8px;
`

export const Stab = styled.button<{active?: boolean}>`
    padding: 6px 12px;
    border-radius: 100px;
    width: 59px;
    height: 32px;
    border: none;
    ${DodamTypography.Caption1.Bold};
    background-color: ${({active}) => active ? "#0083F0" : "#2A2B2C"};
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
`

export const Rtab = styled.button<{active?: boolean}>`
    padding: 6px 12px;
    border-radius: 100px;
    width: 59px;
    height: 32px;
    border: none;
    ${DodamTypography.Caption1.Bold};
    background-color: ${({active}) => active ? "#0083F0" : "#2A2B2C"};
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
`

export const Points = styled.div<{negative?: boolean}>`
    color: ${({negative}) => negative ? "#FF4242" : "#0083F0"};
    ${DodamTypography.Body1.Bold};
`

export const PointInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    flex: 1;
    overflow: hidden;
`

export const PointRow = styled.div`
    display: flex;
    width: 100%;
    min-height: 50px;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 24px;
    padding: 0 30%;
`

export const EmptyState = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    ${DodamTypography.Body1.Medium};
    color: ${({theme})=>theme.labelAlternative};
    text-align: center;
`;

export const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    flex: 1;
    height: 150px;
    overflow-x: hidden;
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
`;

export const PointColumn = styled.div<{type:string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    span{
        text-align: center;
    }
    span:nth-child(1){
        ${DodamTypography.Body1.Medium};
        color:${({theme})=>theme.labelAssistive};
    }
    span:nth-child(2){
        ${DodamTypography.Body1.Medium};
        color:${({theme, type})=>type === "상점"? theme.primaryNormal : theme.statusNegative};
    }

`


export const Point = styled.span<{
    negative:boolean
    positive?: boolean;
    }>`
    ${DodamTypography.Heading1.Bold};
    color: ${({positive, negative, theme}) => 
        positive ? theme.statusPositive : 
        negative ? theme.statusNegative : 
        theme.labelAlternative};
`

