import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";



export const PointHistoryItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px; 
    background-color: ${({theme})=>theme.backgroundNormal};
    border-radius: 8px;
    padding: 12px;
`

export const HistoryTitle = styled.div`
    ${DodamTypography.Headline.Bold};
    color: ${({theme})=>theme.labelNormal};
`

export const HistoryDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        ${DodamTypography.Label.Medium};
        color: ${({theme})=>theme.labelAlternative};
    }
`

export const Point = styled.span<{
    negative:boolean
    }>`
    ${DodamTypography.Heading1.Bold};
    color: ${({ negative, theme}) => 
         negative ? theme.statusNegative : theme.statusPositive};
`

