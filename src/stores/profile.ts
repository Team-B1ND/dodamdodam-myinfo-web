import { atom } from "recoil";
import { Profile } from "../types/profile/profile.type";

export const profileInfo = atom<Profile>({
  key: "profileInfo",
  default: {
    id: "",
    name: "",
    email: "",
    role: "STUDENT",
    status: "ACTIVE",
    profileImage: null, //nullable
    phone: "",
    student: {
      id: 0,
      name: "",
      grade: 0,
      room: 0,
      number: 0,
    },
    teacher: {
      id: 0,
      tel: "",
      position: "",
    },
    createdAt: "",
    modifiedAt: "",
  },
});

export const profileModifyed = atom<boolean>({
  key: "profileModifyed",
  default: false,
});
