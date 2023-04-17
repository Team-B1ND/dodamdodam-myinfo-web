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
          key={tab.link}
          isSelect={tab.link === pathname}
          onClick={() => {
            navigator(tab.link);
          }}
        >
          {tab.title}
        </S.TabBarCategoryWrap>
      ))}
    </S.SideTabBarWrap>
  );
};

export default Tab;
