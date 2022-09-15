import { DodamLogoImg, TitleText, TitleWrap } from "./style";
import dodam_logo from "../../../../images/dodamdodam_logo.svg";

const Title = () => {
  return (
    <TitleWrap>
      <DodamLogoImg src={dodam_logo} />
      <TitleText>내 정보</TitleText>
    </TitleWrap>
  );
};

export default Title;
