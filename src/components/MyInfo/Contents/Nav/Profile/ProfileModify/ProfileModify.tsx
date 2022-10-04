import React from "react";
import { useOutsideClick } from "react-handle-outside-click";
import { useRecoilState } from "recoil";
import { locationChangeModalState } from "../../../../../../store/locationChangeModalState";
import * as S from "./style";

const ProfileModify = () => {
  const [isLocationChangeModalState, setIsLocationChangeModalState] =
    useRecoilState(locationChangeModalState);

  const ref = React.useRef<HTMLDivElement>(null);

  const handleOutsideClick = () => {
    console.log("hello");
  };

  useOutsideClick(ref, handleOutsideClick);

  return (
    <S.ProfileModifyModalBackground
      ref={ref}
      onClick={() => setIsLocationChangeModalState(false)}
    >
      <S.ProfileModifyModalWrap></S.ProfileModifyModalWrap>
    </S.ProfileModifyModalBackground>
  );
};

export default ProfileModify;
