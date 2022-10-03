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
      <S.TabBarCategoryWrap>
        <S.TabBarCategoryDecoration
          backgroundColor={categoryColor[0]}
          onClick={() => setSelectedCategory([true, false, false])}
        />
        <S.TabBarCategoryText>내 정보</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
      <S.TabBarCategoryWrap>
        <S.TabBarCategoryDecoration
          backgroundColor={categoryColor[1]}
          onClick={() => setSelectedCategory([false, true, false])}
        />
        <S.TabBarCategoryText>상 벌점 상세</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
      <S.TabBarCategoryWrap>
        <S.TabBarCategoryDecoration
          backgroundColor={categoryColor[2]}
          onClick={() => setSelectedCategory([false, false, true])}
        />
        <S.TabBarCategoryText>내 정보</S.TabBarCategoryText>
      </S.TabBarCategoryWrap>
    </S.SideTabBarWrap>
  );
};

export default Tab;
