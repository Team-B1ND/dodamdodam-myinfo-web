import {
  MyPointContentsGraphWrap,
  MyPointContentsDetailWrap,
  MyPointContentsWrap,
  MyPointTextWrap,
  MyPointWrap,
  MyPointGuideInfoWrap,
  MyPointToggleWrap,
  MyPointToggleButton,
  MyEachPointWrap,
  MyEachPointGraphWrap,
  MyEachPointGraph,
  MyPointText,
  MyPointGuideCircle,
  MyPointGuideInfoText,
  MyWholePointWrap,
  MyPointIconImg,
} from "./style";
import { FcInspection } from "react-icons/fc";

const MyPoint = () => {
  return (
    <MyPointWrap>
      <FcInspection fontSize={"25px"} />
      <MyPointTextWrap>상벌점 조회</MyPointTextWrap>
      <MyPointContentsWrap>
        <MyPointContentsGraphWrap>
          <MyWholePointWrap>
            <MyEachPointWrap>
              <MyPointText>10점</MyPointText>
              <MyEachPointGraphWrap>
                <MyEachPointGraph
                  meritPoint={10}
                  backgroundColor={"rgb(0 103 188)"}
                />
              </MyEachPointGraphWrap>
            </MyEachPointWrap>
            <MyEachPointWrap>
              <MyPointText>3점</MyPointText>
              <MyEachPointGraphWrap>
                <MyEachPointGraph
                  meritPoint={3}
                  backgroundColor={"rgb(249 126 109)"}
                />
              </MyEachPointGraphWrap>
            </MyEachPointWrap>
          </MyWholePointWrap>
        </MyPointContentsGraphWrap>
        <MyPointContentsDetailWrap>
          <MyPointGuideInfoWrap>
            <MyPointGuideCircle circleColor={"rgb(0 103 188)"} />
            <MyPointGuideInfoText>상점</MyPointGuideInfoText>
            <MyPointGuideCircle circleColor={"rgb(249 126 109)"} />
            <MyPointGuideInfoText>벌점</MyPointGuideInfoText>
          </MyPointGuideInfoWrap>
          <MyPointToggleWrap>
            <MyPointToggleButton>기숙사</MyPointToggleButton>
          </MyPointToggleWrap>
        </MyPointContentsDetailWrap>
      </MyPointContentsWrap>
    </MyPointWrap>
  );
};

export default MyPoint;
