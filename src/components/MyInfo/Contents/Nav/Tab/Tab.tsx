import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { palette } from "../../../../../styles/palette";
import { NAV_TAB_ITEMS } from "../../../../../constants/nav/nav.constant";
import useMyPointScore from "../../../../../hooks/myPoint/useMyPointScore";

const Tab = () => {
  const { pathname } = useLocation();
  const navigator = useNavigate();

  const { myPoint } = useMyPointScore();

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
          {tab.isPoint ? (
            <S.TabBarPointDetailText>
              상점 : {myPoint.domBonus}점, 벌점 : {myPoint.domMinus}점
            </S.TabBarPointDetailText>
          ) : null}
        </S.TabBarCategoryWrap>
      ))}
    </S.SideTabBarWrap>
  );
};

export default Tab;
