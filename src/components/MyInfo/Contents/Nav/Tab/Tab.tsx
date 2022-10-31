import { useEffect, useState } from "react";
import { palette } from "../../../../../styles/palette";
import * as S from "./style";

const Tab = () => {
  const [selectedCategory, setSelectedCategory] = useState([
    true,
    false,
    false,
  ]);


  return (
    <S.SideTabBarWrap>

      <S.TabBarCategoryWrap>
        <S.TabBarCategoryText>내 정보</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>

      <S.TabBarCategoryWrap>
        <S.TabBarCategoryText>상 벌점 상세</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>

      <S.TabBarCategoryWrap>
        <S.TabBarCategoryText>신청 내역 확인</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
    </S.SideTabBarWrap>
  );
};

export default Tab;
