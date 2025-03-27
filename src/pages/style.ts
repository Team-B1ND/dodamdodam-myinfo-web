import styled from "styled-components";

export const MyinfoMain = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding: 58px 32px;
    gap: 24px;
    background-color: ${({theme}) => theme.backgroundNeutral};
    
    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 24px;
    }
    
    @media (max-width: 768px) {
        padding: 16px;
    }
`

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    gap: 24px;
    
    @media (max-width: 1024px) {
        width: 100%;
    }
`

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 14%;
    
    @media (max-width: 1024px) {
        width: 100%;
    }
`

export const ProfileContainer = styled.div`
    width: 100%;
    height: 410px;
    
    @media (max-width: 1200px) {
        height: 400px;
    }
    
    @media (max-width: 768px) {
        height: auto;
    }
`

export const BusContainer = styled.div`
    width: 100%;
    flex-grow: 1;
    min-height: 300px;
    
    @media (max-width: 1200px) {
        min-height: 250px;
    }
    
    @media (max-width: 768px) {
        min-height: auto;
    }
`

export const PointsContainer = styled.div`
    width: 100%;
    height: 230px;
    
    @media (max-width: 1200px) {
        height: 280px;
    }
    
    @media (max-width: 768px) {
        height: auto;
    }
`

export const OutingContainer = styled.div`
    width: 100%;
    flex-grow: 1;
    min-height: 400px;
    
    @media (max-width: 1200px) {
        min-height: 370px;
    }
    
    @media (max-width: 768px) {
        min-height: auto;
    }
`