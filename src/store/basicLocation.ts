import { atom } from "recoil";

export const basicLocationFor = atom<string>({
  key: "basicLocationFor",
  default: "oneday",
});
