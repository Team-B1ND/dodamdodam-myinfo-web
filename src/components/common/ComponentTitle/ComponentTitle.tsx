import * as S from "./style";
import { ReactNode } from "react";

interface GlobalLayoutProps {
  children: ReactNode;
}

const ComponentTitle = ({ children }: GlobalLayoutProps) => {
  return <S.TitleWrap>{children}</S.TitleWrap>;
};

export default ComponentTitle;
