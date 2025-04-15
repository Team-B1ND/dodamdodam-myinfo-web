import { ReactNode } from "react";
import styled, { CSSObject } from "styled-components";
import ReactDom from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
  const element = document.getElementById("modal") as HTMLElement;
  return ReactDom.createPortal(children, element);
};

interface ModalProps {
    width?: number;
    height?: number;
    zIndex?: number;
    isOpen: boolean;
    close: () => void;
    children: React.ReactNode;
    customStyle?: CSSObject;
  }



const Modal = ({width,
    height,
    zIndex,
    isOpen,
    close,
    children,
    customStyle,}:ModalProps)=>{
        return(
            <Portal>
            {
                isOpen && (
                    
                    <Background onClick={close} customStyle={customStyle}>
                        {children}
                    </Background>
                    
                ) 
            }
            </Portal>
        )
}

export default Modal;



 const Background = styled.div<{ customStyle?: CSSObject }>`
  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  overflow: auto;

  ${({ customStyle }) => customStyle}
`;
