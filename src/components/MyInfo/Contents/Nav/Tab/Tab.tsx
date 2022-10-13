import { useEffect, useState } from "react";
import * as S from "./style";

const Tab = () => {
  const [selectedCategory, setSelectedCategory] = useState([
    true,
    false,
    false,
  ]);
  const colorList = ["#929294", "#89d592"];
  const [categoryColor, setCategoryColor] = useState([
    colorList[1],
    colorList[0],
    colorList[0],
  ]);
  const colorListArray = [
    [colorList[1], colorList[0], colorList[0]],
    [colorList[0], colorList[1], colorList[0]],
    [colorList[0], colorList[0], colorList[1]],
  ];
  useEffect(() => {
    selectedCategory.filter((category, index) => {
      if (category) {
        setCategoryColor(colorListArray[index]);
      }
    });
  }, [selectedCategory]);
  return (
    <S.SideTabBarWrap>
      <S.TabBarCategoryWrap
        onClick={() => setSelectedCategory([true, false, false])}
      >
        <S.TabBarCategoryDecoration backgroundColor={categoryColor[0]} />
        <S.TabBarCategoryText>내 정보</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
      <S.TabBarCategoryWrap
        onClick={() => setSelectedCategory([false, true, false])}
      >
        <S.TabBarCategoryDecoration backgroundColor={categoryColor[1]} />
        <S.TabBarCategoryText>상 벌점 상세</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
      <S.TabBarCategoryWrap
        onClick={() => setSelectedCategory([false, false, true])}
      >
        <S.TabBarCategoryDecoration backgroundColor={categoryColor[2]} />
        <S.TabBarCategoryText>신청 내역 확인</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
    </S.SideTabBarWrap>
  );
};

export default Tab;
