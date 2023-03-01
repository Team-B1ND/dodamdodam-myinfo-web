import styled from "styled-components";
import { palette } from "../../../../../styles/palette";

export const ProfileModifyModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileModifyModalWrap = styled.div`
  width: 880px;
  height: 680px;
  background-color: ${palette.white};
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 4;
  padding: 30px;
  align-items: center;

  .exitIcon {
    cursor: pointer;
  }
`;

export const MyInfoModifyModalTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 100px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-bottom: 1px solid ${palette.gray[400]};
`;

export const MyInfoModifyTitleText = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;

export const MyInfoModifySubTitleText = styled.span`
  font-size: 1rem;
`;

export const ModalPictureChangeWrap = styled.div`
  display: flex;
  width: 700px;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${palette.gray[400]};
`;

export const ModalPictureChangeTitleText = styled.span`
  font-size: 1.2rem;
  padding: 10px 0;
`;

export const ModalPictureWrap = styled.div`
  display: flex;
  height: 130px;
  justify-content: center;
  position: relative;
`;

export const ModalPictureImg = styled.img`
  display: flex;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PictureBecomeBasicImageBtn = styled.div`
  display: flex;
  font-size: 1rem;
  height: 30px;
  padding: 0 10px;
  border-radius: 10px;
  align-items: center;
  background-color: ${palette.gray[200]};
  &:hover {
    cursor: pointer;
  }
  margin: 10px 0;
`;

export const PictureImageModifyLabel = styled.label`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 65%;
  left: 65%;
  border-radius: 50%;
  background-color: ${palette.gray[300]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PictureImageModifyButtonImg = styled.img`
  display: flex;
`;

export const ModifyBoxWrap = styled.div`
  display: flex;
  width: 700px;
  flex-direction: column;
  align-items: center;
`;

export const ModifyBox = styled.div`
  padding: 5px 0;
  width: 690px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 10px 10px;
  border-bottom: 1px solid ${palette.gray[300]};
  gap: 10px;
`;

export const ModifyBoxInContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModifyBoxTitleText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ModifyBoxContentText = styled.span`
  font-size: 1.2rem;
`;

export const ModifyBoxContentInput = styled.input`
  font-size: 1.2rem;
  width: 100%;
  outline: none;
  border: none;
`;

export const EachModifyEventButton = styled.div`
  display: flex;
  padding: 7px 13px;
  border-radius: 50px;
  background-color: ${palette.gray[300]};
  font-size: 1rem;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;
`;

export const ModifyEventButton = styled.div`
  display: flex;
  padding: 10px 15px;
  border-radius: 50px;
  background-color: ${palette.main};
  color: ${palette.white};
  font-size: 1.1rem;
  width: min-content;
  white-space: nowrap;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
  }
`;
