import { atom } from "recoil";

export const MyInfoModifyModalState = atom<boolean>({
  key: "MyInfoModifyModalState",
  default: false,
});

export const PasswordModifyModalState = atom<boolean>({
  key: "PasswordModifyModalState",
  default: false,
});
