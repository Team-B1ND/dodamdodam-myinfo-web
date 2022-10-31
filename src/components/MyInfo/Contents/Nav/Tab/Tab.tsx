import * as S from "./style";
import { useLocation, Link } from 'react-router-dom';

const Tab = () => {

  const { pathname } = useLocation();

  return (
    <S.SideTabBarWrap>

      <S.TabBarCategoryWrap linkName={"/"} pathName={pathname} >
        <Link className="Link" to={"/"}>내 정보</Link>
      </S.TabBarCategoryWrap>

      <S.TabBarCategoryWrap linkName={"/mypointdetail"} pathName={pathname}>
        <Link className="Link" to={"mypointdetail"}>상 벌점 상세</Link>
      </S.TabBarCategoryWrap>

      {/* <S.TabBarCategoryWrap >
        <S.TabBarCategoryText>신청 내역 확인</S.TabBarCategoryText>
      </S.TabBarCategoryWrap> */}
    </S.SideTabBarWrap>
  );
};

export default Tab;
