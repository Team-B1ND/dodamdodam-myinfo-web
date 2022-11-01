import { ChangeEvent, useEffect, useState } from "react";
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

  const [emailInfo, setEmailInfo] = useState<string>("");
  const [phoneInfo, setPhoneInfo] = useState<string>("");

  const [tempPhoneInfo, setTempPhoneInfo] = useState<string>("");

  const { patchMainProfile } = useModifyMainProfile();

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const [isModifying, setIsModifying] = useState<boolean>(false);

  useEffect(() => {
    setEmailInfo(email);
    setTempPhoneInfo(
      `${phone.substring(0, 3)}-${phone.substring(3, 7)}-${phone.substring(
        7,
        11
      )}`
    );
  }, [email, phone]);

  useEffect(() => {
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
          console.log("url 받음");
          setImageSrc(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const autoHypenPhone = (str: string) => {
    str = str.replace(/[^0-9]/g, "");
    let tmp = "";
    if (str.length < 4) {
      return str;
    } else if (str.length < 7) {
      tmp += str.substr(0, 3);
      tmp += "-";
      tmp += str.substr(3);
      return tmp;
    } else if (str.length < 11) {
      tmp += str.substr(0, 3);
      tmp += "-";
      tmp += str.substr(3, 3);
      tmp += "-";
      tmp += str.substr(6);
      return tmp;
    } else {
      tmp += str.substr(0, 3);
      tmp += "-";
      tmp += str.substr(3, 4);
      tmp += "-";
      tmp += str.substr(7);
      return tmp;
    }
    return str;
  };

  useEffect(() => {
    setPhoneInfo(
      tempPhoneInfo.split("-")[0] +
        tempPhoneInfo.split("-")[1] +
        tempPhoneInfo.split("-")[2]
    );
  }, [tempPhoneInfo]);

  const emailInfoHandler = (e: any) => {
    console.log(e.target.value);
    setEmailInfo(e.target.value);
  };

  const phoneInfoHandler = (e: any) => {
    console.log(e.target.value);
    console.log(autoHypenPhone(e.target.value));
    setTempPhoneInfo(autoHypenPhone(e.target.value));
  };

  const updateInfo = async () => {
    try {
      console.log(phoneInfo);
      console.log("수정 시작");
      await patchMainProfile({
        email: emailInfo,
        imageUrl: imageSrc,
        phone: phoneInfo,
      });
      console.log(phoneInfo);
      console.log("수정 끝");
      console.log(phoneInfo);
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
        {!isModifying ? (
          <S.ModifyBoxWrap>
            <S.ModifyBox>
              <S.ModifyBoxTitleText>이메일</S.ModifyBoxTitleText>
              <S.ModifyBoxContentText>{emailInfo}</S.ModifyBoxContentText>
            </S.ModifyBox>
            <S.ModifyBox>
              <S.ModifyBoxTitleText>전화번호</S.ModifyBoxTitleText>
              <S.ModifyBoxContentText>{tempPhoneInfo}</S.ModifyBoxContentText>
            </S.ModifyBox>
            <S.ModifyEventButton
              onClick={() => setIsModifying((prev) => !prev)}
            >
              수정
            </S.ModifyEventButton>
          </S.ModifyBoxWrap>
        ) : (
          <S.ModifyBoxWrap>
            <S.ModifyBox>
              <S.ModifyBoxTitleText>이메일</S.ModifyBoxTitleText>
              <S.ModifyBoxContentInput
                value={emailInfo}
                onChange={emailInfoHandler}
              />
            </S.ModifyBox>
            <S.ModifyBox>
              <S.ModifyBoxTitleText>전화번호</S.ModifyBoxTitleText>
              <S.ModifyBoxContentInput
                value={tempPhoneInfo}
                onChange={phoneInfoHandler}
                maxLength={13}
              />
            </S.ModifyBox>
            <S.ModifyEventButton
              onClick={() => {
                updateInfo();
                setIsLocationChangeModalState((prev) => !prev);
              }}
            >
              완료
            </S.ModifyEventButton>
          </S.ModifyBoxWrap>
        )}
      </S.ProfileModifyModalWrap>
    </S.ProfileModifyModalBackground>
  );
};

export default MyInfoModifyModal;
