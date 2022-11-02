import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";

const Tab = () => {
  const { pathname } = useLocation();
  const navigator = useNavigate();

  return (
    <S.SideTabBarWrap>
      <S.TabBarCategoryWrap
        linkName={"/"}
        pathName={pathname}
        onClick={() => {
          navigator("/");
        }}
      >
        내 정보
      </S.TabBarCategoryWrap>

      <S.TabBarCategoryWrap
        linkName={"/mypointdetail"}
        pathName={pathname}
        onClick={() => {
          navigator("/mypointdetail");
        }}
      >
        상 벌점 상세
      </S.TabBarCategoryWrap>

      {/* <S.TabBarCategoryWrap >
        <S.TabBarCategoryText>신청 내역 확인</S.TabBarCategoryText>
      </S.TabBarCategoryWrap> */}
    </S.SideTabBarWrap>
  );
};

export default Tab;
