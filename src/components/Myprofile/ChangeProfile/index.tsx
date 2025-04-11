import {
    Avatar,
    DodamFilledButton,
    DodamModal,
    DodamTextField,
    Plus,
  } from "@b1nd/dds-web";
  import { useState, ChangeEvent } from "react";
  import { ModalContent } from "../ChangePwModal/style";
  import { ChangeProfileImg, ChangeProfileTitle, FlexBox } from "./style";
  import { Profile } from "types/Profile/profile.type";
  import styled from "styled-components";
  
  interface ModalProps {
    isOpen: boolean;
    handleSet: () => void;
    user: Profile;
  }
  
  const ChangeProfile = ({ isOpen, handleSet, user }: ModalProps) => {
    
    if (!user) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = useState({
      name: user.name ?? "",
      phone: user.phone ?? "",
      email: user.email ?? "",
      grade: user.student?.grade?.toString() ?? "",
      room: user.student?.room?.toString() ?? "",
      number: user.student?.number?.toString() ?? "",
    });
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  
    return (
      <DodamModal isOpen={isOpen} background={true} close={handleSet}>
        <ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>

          <ChangeProfileTitle>프로필 수정</ChangeProfileTitle>
  
          <ChangeProfileImg>
            {user.profileImage ? (
              <img src={user.profileImage} alt="" />
            ) : (
              <Avatar size="xxl" color="staticWhite" />
            )}
            <p>
              <Plus color="staticWhite" size={16} />
            </p>
            <span>기본 프로필로 변경 </span>
          </ChangeProfileImg>
  
          <DodamTextField
            id="name"
            name="name"
            type="text"
            value={formData.name}
            label="이름"
            onChange={onChange}
            
          />
          <DodamTextField
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            label="전화번호"
            onChange={onChange}
            
          />
          <DodamTextField
            id="email"
            name="email"
            type="text"
            value={formData.email}
            label="이메일"
            onChange={onChange}
            
          />
  
          <FlexBox>
            <DodamTextField
              id="grade"
              name="grade"
              type="text"
              value={formData.grade}
              label="학년"
              onChange={onChange}
              
            />
            <DodamTextField
              id="room"
              name="room"
              type="text"
              value={formData.room}
              label="반"
              onChange={onChange}
              
            />
            <DodamTextField
              id="number"
              name="number"
              type="text"
              value={formData.number}
              label="번호"
              onChange={onChange}
              
            />
          </FlexBox>
          <DodamFilledButton size="Large" text="완료" textTheme="staticWhite"/>
        </ModalContent>
      </DodamModal>
    );
  };
  
  export default ChangeProfile;
  

  