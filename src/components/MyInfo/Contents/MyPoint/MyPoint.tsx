import {
  MyPointContentsGraphWrap,
  MyPointContentsDetailWrap,
  MyPointContentsWrap,
  MyPointTextWrap,
  MyPointWrap,
  MyMeritPointWrap,
  MyMeritPointText,
  MyMeritPointGraph,
  MyDemeritPointWrap,
  MyDemeritPointText,
  MyDemeritPointGraph,
  MyMeritPointGraphWrap,
  MyDemeritPointGraphWrap,
  MyPointGuideInfoWrap,
  MyPointToggleWrap,
  MyPointToggleButton,
  MyPointGuideInfoMeritCircle,
  MyPointGuideInfoMeritText,
  MyPointGuideInfoDemeritCircle,
  MyPointGuideInfoDemeritText,
} from "./style";

const MyPoint = () => {
  return (
    <MyPointWrap>
      <MyPointTextWrap>상벌점 조회</MyPointTextWrap>
      <MyPointContentsWrap>
        <MyPointContentsGraphWrap>
          <MyMeritPointWrap>
            <MyMeritPointText>10점</MyMeritPointText>
            <MyMeritPointGraphWrap>
              <MyMeritPointGraph />
            </MyMeritPointGraphWrap>
          </MyMeritPointWrap>
          <MyDemeritPointWrap>
            <MyDemeritPointText>3점</MyDemeritPointText>
            <MyDemeritPointGraphWrap>
              <MyDemeritPointGraph />
            </MyDemeritPointGraphWrap>
          </MyDemeritPointWrap>
        </MyPointContentsGraphWrap>
        <MyPointContentsDetailWrap>
          <MyPointGuideInfoWrap>
            <MyPointGuideInfoMeritCircle />
            <MyPointGuideInfoMeritText>상점</MyPointGuideInfoMeritText>
            <MyPointGuideInfoDemeritCircle />
            <MyPointGuideInfoDemeritText>벌점</MyPointGuideInfoDemeritText>
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
