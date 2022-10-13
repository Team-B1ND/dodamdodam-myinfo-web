import { useEffect, useState } from "react";
import * as S from "./style";

const Tab = () => {
  const [selectedCategory, setSelectedCategory] = useState([
    true,
    false,
    false,
  ]);
  const colorList = ["#ffffff", "#000000"];
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
  const font = ["none", "bold"];
  const [fontWeight, setFontWeight] = useState([font[1], font[0], font[0]]);
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
        underBarColor={categoryColor[0]}
        fontWeight={categoryColor[0] === "#000000" ? "bold" : "none"}
      >
        <S.TabBarCategoryText>내 정보</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
      <S.TabBarCategoryWrap
        onClick={() => setSelectedCategory([false, true, false])}
        underBarColor={categoryColor[1]}
        fontWeight={categoryColor[1] === "#000000" ? "bold" : "none"}
      >
        <S.TabBarCategoryText>상 벌점 상세</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
      <S.TabBarCategoryWrap
        onClick={() => setSelectedCategory([false, false, true])}
        underBarColor={categoryColor[2]}
        fontWeight={categoryColor[2] === "#000000" ? "bold" : "none"}
      >
        <S.TabBarCategoryText>신청 내역 확인</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
    </S.SideTabBarWrap>
  );
};

export default Tab;
