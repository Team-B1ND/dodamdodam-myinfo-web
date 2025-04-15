import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";


export const MyProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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

export const Profile = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    span:nth-child(2){
        color: ${({theme})=>theme.labelNeutral};
        ${DodamTypography.Headline.Bold};
    }
    span:nth-child(3){
        color: ${({theme})=>theme.labelAlternative};
        ${DodamTypography.Label.Medium};
    }
`
export const ProfileImg = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 100%;
`

export const introductionBox = styled.div`
    display: flex;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid ${({theme})=>theme.lineNormal};
    span{
        ${DodamTypography.Headline.Medium};
        color: ${({theme})=>theme.labelNeutral};
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    justify-content: center;
    
    & > button {
        flex: 1;
    }
`