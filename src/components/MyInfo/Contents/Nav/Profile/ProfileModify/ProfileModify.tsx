import React, { ChangeEvent, useEffect, useState } from "react";
import { useOutsideClick } from "react-handle-outside-click";
import { useRecoilState } from "recoil";
import { locationChangeModalState } from "../../../../../../store/modal";
import * as S from "./style";
import { BiPlus } from "react-icons/bi";
import useModifyMainProfile from "../../../../../../hooks/mainProfile/useModifyMainProfile";
import useMyGradeInfo from "../../../../../../hooks/profile/useMyGradeInfo";
import fileUpload from "../../../../../../repository/mainProfile/fileUpload";
import DODAM_DEFAULT_PROFILE from "../../../../../../images/default_profile.png";

const ProfileModify = () => {
  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);

  const myGradeInfo = useMyGradeInfo();
  const { member, phone } = myGradeInfo;
  const { email, profileImage } = member;

  const { patchMainProfile } = useModifyMainProfile();

  const [imageSrc, setImageSrc] = useState("");

  const [imgfiles, setImgFiles] = useState([]);

  useEffect(() => {
    setImageSrc(profileImage);
  }, []);

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      console.log(e.target.files);
      if (e.target.files) {
        formData.append("file", e.target.files[0]);
        const { data } = await fileUpload.postFileUpload(formData);
        console.log(data);
        if (data) {
          setImageSrc(data);
        }
      }
    } catch (e) {}
  };

  const updateImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      await patchMainProfile({
        email: email,
        imageUrl: imageSrc,
        phone: phone,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          <S.MyInfoModifyTitleText onClick={() => {}}>
            프로필 수정
          </S.MyInfoModifyTitleText>
          <S.MyInfoModifySubTitleText>
            대표 프로필과 이메일, 전화번호를 수정할 수 있습니다.
          </S.MyInfoModifySubTitleText>
        </S.MyInfoModifyModalTitleWrap>
        <S.ModalPictureChangeWrap>
          <S.ModalPictureChangeTitleText>
            프로필 사진
          </S.ModalPictureChangeTitleText>
          <S.ModalPictureWrap>
            {imgfiles && (
              <S.ModalPictureImg
                src={
                  imageSrc === "defa/ult.jpg" ? imageSrc : DODAM_DEFAULT_PROFILE
                  // DODAM_DEFAULT_PROFILE
                }
              />
            )}
            <input type="file" name="files" onChange={uploadImage} />
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
