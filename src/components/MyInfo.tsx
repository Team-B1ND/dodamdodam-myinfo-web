import { Body } from "./style";
import * as S from "./style";
import Router from "./Router";

const MyInfo = () => {
  return (
    <Body>
      <S.MyInfoLeftWrap />
      <S.MyInfoRightWrap />
      <Router />
    </Body>
  );
};

export default MyInfo;
