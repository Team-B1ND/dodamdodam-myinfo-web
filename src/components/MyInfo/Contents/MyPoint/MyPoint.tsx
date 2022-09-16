import {
  MyPointContentsDetail,
  MyPointContentsGraph,
  MyPointContentsWrap,
  MyPointTextWrap,
  MyPointWrap,
} from "./style";

const MyPoint = () => {
  return (
    <MyPointWrap>
      <MyPointTextWrap>상벌점 조회</MyPointTextWrap>
      <MyPointContentsWrap>
        <MyPointContentsGraph></MyPointContentsGraph>
        <MyPointContentsDetail></MyPointContentsDetail>
      </MyPointContentsWrap>
    </MyPointWrap>
  );
};

export default MyPoint;
