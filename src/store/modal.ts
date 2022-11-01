import { atom } from "recoil";

export const locationChangeModalState = atom<boolean>({
  key: "locationChangeModalState",
  default: false,
});

export const MyInfoModifyModalState = atom<boolean>({
  key: "MyInfoModifyModalState",
  default: false,
});

export const EmailModifyModalState = atom<boolean>({
  key: "EmailModifyModalState",
  default: false,
});

export const PhoneModifyModalState = atom<boolean>({
  key: "PhoneModifyModalState",
  default: false,
});
