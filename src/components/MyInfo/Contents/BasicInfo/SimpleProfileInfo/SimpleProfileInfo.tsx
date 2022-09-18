import * as S from "./style";
import default_profile from "../../../../../images/default_profile.png";

const SimpleProfileInfo = () => {
  return (
    <>
      <S.ProfileInfoWrap>
        <S.ProfileInfoImg src={default_profile} />
        <S.ProfileInfoName>기준 학생</S.ProfileInfoName>
      </S.ProfileInfoWrap>
    </>
  );
};

export default SimpleProfileInfo;
