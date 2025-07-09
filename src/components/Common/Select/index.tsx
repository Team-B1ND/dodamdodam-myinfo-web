import { useState } from "react";
import {
  SelectContainer,
  SelectIcon,
  SelectItem,
  SelectItemWrap,
} from "./style";
import { IoIosArrowDown } from "react-icons/io";
import { CSSObject } from "styled-components";

export interface SelectProps {
  items: number[];
  value: number;
  onSelectedItemChange: (type: number) => void;
  zIndex?: number;
  customStyle?: CSSObject;
}

export const Select = ({
  items,
  value,
  zIndex,
  onSelectedItemChange,
  customStyle,
}: SelectProps) => {
  const [close, setClose] = useState<boolean>(true);

  return (
    <SelectContainer
      onClick={() => setClose((prev) => !prev)}
      style={customStyle}
    >
      <p>{value}</p>
      <SelectIcon close={close ? "true" : "false"}>
        <IoIosArrowDown />
      </SelectIcon>
      {!close && (
        <SelectItemWrap style={{ zIndex }}>
          {items.map((item, idx) => (
            <SelectItem key={idx} onClick={() => onSelectedItemChange(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectItemWrap>
      )}
    </SelectContainer>
  );
};
