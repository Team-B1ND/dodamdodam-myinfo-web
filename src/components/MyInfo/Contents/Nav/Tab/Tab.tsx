import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { palette } from "../../../../../styles/palette";
import { NAV_TAB_ITEMS } from "../../../../../constants/nav/nav.constant";

const Tab = () => {
  const { pathname } = useLocation();
  const navigator = useNavigate();

  return (
    <S.SideTabBarWrap>
      {NAV_TAB_ITEMS.map((tab) => (
        <S.TabBarCategoryWrap
          isSelect={tab.link === pathname}
          onClick={() => {
            navigator(tab.link);
          }}
        >
          {tab.title}
        </S.TabBarCategoryWrap>
      ))}

      {/* <S.TabBarCategoryWrap >
        <S.TabBarCategoryText>신청 내역 확인</S.TabBarCategoryText>
      </S.TabBarCategoryWrap> */}
    </S.SideTabBarWrap>
  );
};

export default Tab;
