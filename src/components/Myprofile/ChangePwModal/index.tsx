import { DodamFilledButton, DodamModal, DodamTextField } from "@b1nd/dds-web"
import { ModalContent } from "./style"
import usePasswordChange from "hooks/Profile/usePasswrodChange";

interface ModalProps {
    isOpen:boolean;    
    handleSet:()=>void;
}


const ChangePwModal = ({isOpen,handleSet}:ModalProps) => {
    const {onChangePassword,pwData,onSubmitPassword,clearField}=usePasswordChange();
    
    return(
        <DodamModal isOpen={isOpen} background={true} close={handleSet} >
            <ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>

                <DodamTextField 
                id="pw" 
                name="pw" 
                type="password"
                value={pwData.pw} 
                label="현재 비밀번호" 
                onChange={onChangePassword}
                onRemoveClick={()=>clearField}
                />

                <DodamTextField 
                id="newPw" 
                name="newPw" 
                type="password"
                value={pwData.newPw} 
                label="새로운 비밀번호" 
                onChange={onChangePassword}
                onRemoveClick={()=>clearField}
                />

                <DodamFilledButton 
                text="완료"
                textTheme="staticWhite"
                size="Large"
                onClick={onSubmitPassword}
                />
                
            </ModalContent>
        </DodamModal>
    )   
}

export default ChangePwModal;