// import { DodamLogoImg, TitleText, TitleWrap } from "./style";
import * as S from "./style";
import dodam_logo from "../../../../../images/dodamdodam_logo.svg";

const Title = () => {
  return (
    <S.TitleWrap>
      <S.DodamLogoImg src={dodam_logo} />
      <S.TitleText>내 정보</S.TitleText>
    </S.TitleWrap>
  );
};

export default Title;
