import { DodamTypography } from "@b1nd/dds-web"
import { styled } from "styled-components"

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

export const StatusLabel = styled.div<{$allowed:boolean}>`
    ${DodamTypography.Label.Medium};
    color: #fff;
    background-color: ${({theme, $allowed})=>$allowed ? theme.primaryNormal :theme.lineNormal};
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

export const OutingNull = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({theme})=>theme.labelNormal};
    ${DodamTypography.Body1.Medium};
`