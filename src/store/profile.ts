import { atom } from "recoil";
import { myProfile } from "../types/profile/profile.type";

export const profileInfo = atom<myProfile>({
  key: "profileInfo",
  default: {
    classroom: {
      grade: 0,
      id: 0,
      placeId: 0,
      room: 0,
    },
    id: 0,
    member: {
      email: "",
      id: "",
      joinDate: "2022-11-03 23:11:48",
      name: "",
      profileImage: null,
      role: "STUDENT",
      status: "ACTIVE",
    },
    number: 0,
    phone: "",
  },
});

export const profileModifyed = atom<boolean>({
  key: "profileModifyed",
  default: false,
});
