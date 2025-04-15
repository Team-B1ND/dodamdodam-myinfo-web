import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ChangeProfileModal = styled.div`
    
`

export const ChangeProfileTitle = styled.span`
    color: ${({theme})=>theme.labelNormal};
    ${DodamTypography.Heading2.Medium};
    text-align: center;
`
export const ChangeProfileImg = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    label{
        cursor: pointer;
        position: absolute;
        top: 60%;
        right: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        ${DodamShape.ExtraLarge}
        background-color: ${({theme})=>theme.primaryNormal};
    }
    span{
        cursor: pointer;
        ${DodamTypography.Caption1.Bold};
        color: ${({theme})=>theme.labelAssistive};
    }
    img{
        border-radius: 100%;
        width: 128px;
        height: 128px;
    }
`

export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    & > * {
      flex: 1;
    }
`