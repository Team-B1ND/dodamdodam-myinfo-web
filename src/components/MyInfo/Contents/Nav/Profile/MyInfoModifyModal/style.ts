import styled from "styled-components";
import { palette } from "../../../../../../styles/palette";

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
  border-bottom: 1px solid ${palette.gray[500]};
`;

export const MyInfoModifyTopWrap = styled.div``;

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
`;

export const ModalPictureChangeTitleText = styled.span`
  font-size: 1rem;
  padding: 5px 0;
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
`;

export const PictureBecomeBasicImageBtn = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`;

// export const PictureImageModifyImageWrap = styled.div`
//   position: relative;
// `;

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
