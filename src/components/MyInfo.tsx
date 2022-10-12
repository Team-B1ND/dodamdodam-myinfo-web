import Contents from "./MyInfo/Contents/Contents";
import { Body } from "./style";
import * as S from "./style";

const MyInfo = () => {
  return (
    <Body>
      <S.MyInfoLeftWrap />
      <S.MyInfoRightWrap />
      <Contents />
    </Body>
  );
};

export default MyInfo;
