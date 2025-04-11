import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const ModalContent = styled.div`
    min-width: 400px;
    height: min-content;
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 16px;
    ${DodamShape.Large};
    background-color: ${({theme}) => theme.backgroundNormal};
`