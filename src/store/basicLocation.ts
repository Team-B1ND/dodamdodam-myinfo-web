import { atom } from "recoil";
import { defaultStudyRoomArray } from "../types/basicLocation/basicLocation.type";

export const basicLocationFor = atom<string>({
  key: "basicLocationFor",
  default: "oneday",
});

export const basicLocatioinRoomAtom = atom<defaultStudyRoomArray[]>({
  key: "basicLocatioinRoomAtom",
  default: [
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
    { placeId: 0, timeTableId: 0 },
  ],
});
