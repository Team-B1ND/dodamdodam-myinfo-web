import { atom } from "recoil";

export const tabbarCategoryState = atom({
  key: "tabbarCategoryState",
  default: [true, false, false],
});
