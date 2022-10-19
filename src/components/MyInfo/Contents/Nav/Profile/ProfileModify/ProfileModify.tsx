import React, { useState } from "react";
import { useOutsideClick } from "react-handle-outside-click";
import { useRecoilState } from "recoil";
import { locationChangeModalState } from "../../../../../../store/modal";
import * as S from "./style";
import { BiPlus } from "react-icons/bi";

const ProfileModify = () => {
  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);

  //   const [imageSrc, setImageSrc] = useState("");

  //   const [imgfiles, setImgFiles] = useState([]);

  //   const formData = new FormData();

  //   formData.append("file");

  // const encodeFileToBase64 = (fileBlob: Blob) => {
  //   const reader = new FileReader();

  //   reader.readAsDataURL(fileBlob);

  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       setImageSrc(reader.result);

  //       resolve();
  //     };
  //   });
  // };

  return (
    <S.ProfileModifyModalBackground
      onClick={() => setIsLocationChangeModalState(false)}
    >
      <S.ProfileModifyModalWrap
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <BiPlus
          className="exitIcon"
          style={{
            fontSize: "30px",
            transform: "rotate(45deg)",
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
          onClick={() => {
            setIsLocationChangeModalState(false);
          }}
        />
        <S.MyInfoModifyModalTitleWrap>
          <S.MyInfoModifyTitleText>프로필 수정</S.MyInfoModifyTitleText>
          <S.MyInfoModifySubTitleText>
            대표 프로필과 이메일, 전화번호를 수정할 수 있습니다.
          </S.MyInfoModifySubTitleText>
        </S.MyInfoModifyModalTitleWrap>
        <S.ModalPictureChangeWrap>
          <S.ModalPictureChangeTitleText>
            프로필 사진
          </S.ModalPictureChangeTitleText>
          <S.ModalPictureWrap>
            <S.ModalPictureImg />
            <input type="file" name="files" />
          </S.ModalPictureWrap>
          <S.PictureBecomeBasicImageBtn>
            기본 프로필
          </S.PictureBecomeBasicImageBtn>
        </S.ModalPictureChangeWrap>
      </S.ProfileModifyModalWrap>
    </S.ProfileModifyModalBackground>
  );
};

export default ProfileModify;
