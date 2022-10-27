import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useOutsideClick } from "react-handle-outside-click";
import { useRecoilState } from "recoil";
import { locationChangeModalState } from "../../../../../../store/modal";
import * as S from "./style";
import { BiPlus } from "react-icons/bi";
import useModifyMainProfile from "../../../../../../hooks/mainProfile/useModifyMainProfile";
import useMyGradeInfo from "../../../../../../hooks/profile/useMyGradeInfo";
import fileUpload from "../../../../../../repository/mainProfile/fileUpload";
import DODAM_DEFAULT_PROFILE from "../../../../../../images/default_profile.png";
import CAMERA_IMAGE from "../../../../../../images/camera.svg";

const MyInfoModifyModal = () => {
  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);

  const { myGradeInfo, isLoading } = useMyGradeInfo();
  const { member, phone } = myGradeInfo;
  const { email, profileImage } = member;

  const { patchMainProfile } = useModifyMainProfile();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  // const [tempImgSrc, setTempImgSrc] = useState<string | null>(null); // 보기 전용

  useEffect(() => {
    // setTempImgSrc(profileImage);
    setImageSrc(profileImage);
  }, [profileImage]);

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      console.log(e.target.files);
      if (e.target.files) {
        formData.append("file", e.target.files[0]);
        const { data } = await fileUpload.postFileUpload(formData);
        console.log(data);
        if (data) {
          // setTempImgSrc(data);
          setImageSrc(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const uploadDefaultImage = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", DODAM_DEFAULT_PROFILE);
  //     const { data } = await fileUpload.postFileUpload(formData);
  //     console.log(data);
  //     if (data === null) {
  //       setImageSrc("default.jpg");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const updateInfo = async (e: ChangeEvent<HTMLInputElement>) => {
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

  // useRef를 이용해 input태그에 접근한다.
  // const imageInput = useRef<>();

  // 버튼클릭시 input태그에 클릭이벤트를 걸어준다.
  function onCickImageUpload() {
    // imageInput.current.click();
  }

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
            <div>
              {isLoading ? (
                <>로딩중..</>
              ) : (
                <S.ModalPictureImg
                  src={
                    imageSrc === null || imageSrc === ""
                      ? DODAM_DEFAULT_PROFILE
                      : imageSrc
                    // tempImgSrc === null || tempImgSrc === ""
                    //   ? DODAM_DEFAULT_PROFILE
                    //   : tempImgSrc
                  }
                />
              )}
            </div>

            <S.PictureImageModifyLabel htmlFor="file_upload">
              <div className="btnStart">
                <img src={CAMERA_IMAGE} alt="btnStart" />
              </div>
            </S.PictureImageModifyLabel>
            <input
              style={{ display: "none" }}
              type="file"
              id="file_upload"
              accept="image/jpg, image/png, image/jpeg"
              onChange={uploadImage}
            />
            {/* <button onClick={onCickImageUpload}>이미지업로드</button> */}
          </S.ModalPictureWrap>

          <S.PictureBecomeBasicImageBtn
            onClick={() => {
              setImageSrc("");
              // setTempImgSrc("");
            }}
          >
            기본 프로필로 변경
          </S.PictureBecomeBasicImageBtn>
        </S.ModalPictureChangeWrap>
        <S.EmailModifyWrap>
          <S.ModifyBox>
            <S.ModifyBoxTitleText>이메일</S.ModifyBoxTitleText>
          </S.ModifyBox>
        </S.EmailModifyWrap>
        <S.PhoneNumberModifyWrap>
          <S.ModifyBox>
            <S.ModifyBoxTitleText>전화번호</S.ModifyBoxTitleText>
          </S.ModifyBox>
        </S.PhoneNumberModifyWrap>
      </S.ProfileModifyModalWrap>
    </S.ProfileModifyModalBackground>
  );
};

export default MyInfoModifyModal;
