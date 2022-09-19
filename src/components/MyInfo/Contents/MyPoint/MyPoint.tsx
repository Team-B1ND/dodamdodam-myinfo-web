import * as S from "./style";
import { FcInspection } from "react-icons/fc";

const MyPoint = () => {
  return (
    <S.MyPointWrap>
      <S.MyPointTopAreaWrap>
        <FcInspection fontSize={"25px"} style={{ marginRight: "5px" }} />
        <S.MyPointTextWrap>상벌점 조회</S.MyPointTextWrap>
      </S.MyPointTopAreaWrap>
      <S.MyPointContentsWrap>
        <S.MyPointContentsGraphWrap>
          <S.MyWholePointWrap>
            <S.MyEachPointWrap>
              <S.MyPointText>10점</S.MyPointText>
              <S.MyEachPointGraphWrap>
                <S.MyEachPointGraph
                  meritPoint={10}
                  backgroundColor={"rgb(0 103 188)"}
                />
              </S.MyEachPointGraphWrap>
            </S.MyEachPointWrap>
            <S.MyEachPointWrap>
              <S.MyPointText>3점</S.MyPointText>
              <S.MyEachPointGraphWrap>
                <S.MyEachPointGraph
                  meritPoint={3}
                  backgroundColor={"rgb(249 126 109)"}
                />
              </S.MyEachPointGraphWrap>
            </S.MyEachPointWrap>
          </S.MyWholePointWrap>
        </S.MyPointContentsGraphWrap>
        <S.MyPointContentsDetailWrap>
          <S.MyPointGuideInfoWrap>
            <S.MyPointGuideCircle circleColor={"rgb(0 103 188)"} />
            <S.MyPointGuideInfoText>상점</S.MyPointGuideInfoText>
            <S.MyPointGuideCircle circleColor={"rgb(249 126 109)"} />
            <S.MyPointGuideInfoText>벌점</S.MyPointGuideInfoText>
          </S.MyPointGuideInfoWrap>
          <S.MyPointToggleWrap>
            <S.MyPointToggleButton>기숙사</S.MyPointToggleButton>
          </S.MyPointToggleWrap>
        </S.MyPointContentsDetailWrap>
      </S.MyPointContentsWrap>
    </S.MyPointWrap>
  );
};

export default MyPoint;
