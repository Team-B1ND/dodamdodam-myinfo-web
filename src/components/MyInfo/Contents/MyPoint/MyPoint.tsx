import * as S from "./style";
import { FcInspection } from "react-icons/fc";
import { useEffect, useState } from "react";
import useMyPointScore from "../../../../hooks/myPoint/useMyPointScore";
import { palette } from "../../../../styles/palette";

const MyPoint = () => {
  const [pointInfoState, setPointInfoState] = useState("기숙사");

  const { myPoint } = useMyPointScore();

  return (
    <S.MyPointWrap>
      <S.MyPointTopAreaWrap>
        <FcInspection style={{ marginRight: "5px", fontSize: "25px" }} />
        <S.MyPointTextWrap>상벌점 조회</S.MyPointTextWrap>
      </S.MyPointTopAreaWrap>
      <S.MyPointContentsWrap>
        <S.MyPointContentsGraphWrap>
          {myPoint && pointInfoState === "기숙사" && (
            <S.MyWholePointWrap>
              <S.MyEachPointWrap>
                <S.MyPointText>{myPoint.domBonus}점</S.MyPointText>
                <S.MyEachPointGraphWrap>
                  <S.MyEachPointGraph
                    meritPoint={myPoint.domBonus}
                    backgroundColor={"rgb(0 103 188)"}
                  />
                </S.MyEachPointGraphWrap>
              </S.MyEachPointWrap>
              <S.MyEachPointWrap>
                <S.MyPointText>{myPoint.domMinus}점</S.MyPointText>
                <S.MyEachPointGraphWrap>
                  <S.MyEachPointGraph
                    meritPoint={myPoint.domMinus}
                    backgroundColor={"rgb(249 126 109)"}
                  />
                </S.MyEachPointGraphWrap>
              </S.MyEachPointWrap>
            </S.MyWholePointWrap>
          )}
          {myPoint && pointInfoState === "학교" && (
            <S.MyWholePointWrap>
              <S.MyEachPointWrap>
                <S.MyPointText>{myPoint.schBonus}점</S.MyPointText>
                <S.MyEachPointGraphWrap>
                  <S.MyEachPointGraph
                    meritPoint={myPoint.schBonus}
                    backgroundColor={"rgb(0 103 188)"}
                  />
                </S.MyEachPointGraphWrap>
              </S.MyEachPointWrap>
              <S.MyEachPointWrap>
                <S.MyPointText>{myPoint.schMinus}점</S.MyPointText>
                <S.MyEachPointGraphWrap>
                  <S.MyEachPointGraph
                    meritPoint={myPoint.schMinus}
                    backgroundColor={"rgb(249 126 109)"}
                  />
                </S.MyEachPointGraphWrap>
              </S.MyEachPointWrap>
            </S.MyWholePointWrap>
          )}
        </S.MyPointContentsGraphWrap>
        <S.MyPointContentsDetailWrap>
          <S.MyPointGuideInfoWrap>
            <S.MyPointGuideCircle circleColor={"rgb(0 103 188)"} />
            <S.MyPointGuideInfoText>상점</S.MyPointGuideInfoText>
            <S.MyPointGuideCircle circleColor={"rgb(249 126 109)"} />
            <S.MyPointGuideInfoText>벌점</S.MyPointGuideInfoText>
          </S.MyPointGuideInfoWrap>
          <S.MyPointToggleWrap>
            {pointInfoState === "기숙사" && (
              <S.MyPointToggleButton
                textColor={"rgb(0 103 188)"}
                backgroundColor={palette.white}
                onClick={() => setPointInfoState("학교")}
              >
                기숙사
              </S.MyPointToggleButton>
            )}
            {pointInfoState === "학교" && (
              <S.MyPointToggleButton
                textColor={palette.white}
                backgroundColor={"rgb(0 103 188)"}
                onClick={() => setPointInfoState("기숙사")}
              >
                학교
              </S.MyPointToggleButton>
            )}
          </S.MyPointToggleWrap>
        </S.MyPointContentsDetailWrap>
      </S.MyPointContentsWrap>
    </S.MyPointWrap>
  );
};

export default MyPoint;
