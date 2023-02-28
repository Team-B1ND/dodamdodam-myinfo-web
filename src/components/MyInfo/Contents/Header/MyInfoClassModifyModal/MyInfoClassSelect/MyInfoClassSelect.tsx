import { ChangeEvent } from "react";
import * as S from "./style";

interface Props {
  label: string;
  items: number[];
  value: number;
  onChnageSelect: (
    e: ChangeEvent<HTMLSelectElement>,
    scope: "grade" | "room" | "number"
  ) => void;
  scope: "grade" | "room" | "number";
}

const MyInfoClassSelect = ({
  label,
  items,
  value,
  onChnageSelect,
  scope,
}: Props) => {
  return (
    <S.Container>
      <S.SelectContainer
        defaultValue={value}
        onChange={(e) => onChnageSelect(e, scope)}
      >
        {items.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </S.SelectContainer>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};

export default MyInfoClassSelect;
