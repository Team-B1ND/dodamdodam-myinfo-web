import { atom } from "recoil";

export const locationChangeModalState = atom({
  key: "locationChangeModalState",
  default: false,
});

export const MyInfoModifyModalState = atom({
  key: "MyInfoModifyModalState",
  default: false,
});

export const EmailModifyModalState = atom({
  key: "EmailModifyModalState",
  default: false,
});

export const PhoneModifyModalState = atom({
  key: "PhoneModifyModalState",
  default: false,
});
