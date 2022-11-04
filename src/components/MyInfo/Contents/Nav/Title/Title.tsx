import * as S from "./style";
import dodam_logo from "../../../../../images/dodamdodam_logo.svg";

const Title = () => {
  const homeRedirect = () => {
    window.location.href = "http://dodam.b1nd.com/";
  };

  return (
    <S.TitleWrap>
      <S.DodamLogoImg src={dodam_logo} onClick={homeRedirect} />
      <S.TitleText>내 정보</S.TitleText>
    </S.TitleWrap>
  );
};

export default Title;
