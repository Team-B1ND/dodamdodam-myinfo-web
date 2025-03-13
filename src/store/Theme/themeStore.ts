import { atom } from "recoil";
import { ETheme } from "src/enum/Theme/theme.enum";
import { getTheme } from "src/utils/Theme/getTheme";

export const themeModeAtom = atom<ETheme>({
  key: "theme/themeModeAtom",
  default: getTheme(),
});