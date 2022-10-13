import * as S from "./style";
import default_profile from "../../../../../images/default_profile.png";
import useMyGradeInfo from "../../../../../hooks/profile/useMyGradeInfo";

const SimpleProfileInfo = () => {
  const myGradeInfo = useMyGradeInfo();

  const { profileImage } = myGradeInfo.member;

  return (
    <>
      <S.ProfileInfoWrap>
        <S.ProfileInfoImg src={profileImage ? profileImage : default_profile} />
        <S.ProfileInfoName>기준 학생</S.ProfileInfoName>
      </S.ProfileInfoWrap>
    </>
  );
};

export default SimpleProfileInfo;
